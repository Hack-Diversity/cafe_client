import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSingleItem, updateSingleItemRent } from '../actions';
import { shared } from '../constants';
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import messages from '../actions/AlertMessages'

// import Modal from 'react-bootstrap/Modal'

import styled, { css } from 'styled-components';

const ButtonS = styled.button`
    text-align: center;
    border-radius: 5px;
    border: 2px solid;
    background: #1b870d;
    color: #fff;
    padding: 6px 40px;
    margin: 30px 20px 60px;
    justifyContent: "center";
    alignItems: "center";
    :hover {
    background: #e2cbaa;
    color: #2b1f0e;
    cursor: pointer;
}
  ${props =>
    props.cancelB &&
    css`
    background:  #870e10;
    `}

    ${props =>
      props.rent &&
      css`
      background:  #047adb;
      `}
`

const Container = styled.div.attrs({
    className: 'Container',
})`
    width:100%;

`;

const BookDiv = styled.div.attrs({
    className: 'BookDiv',
})`
    float:left;
    width:400px;
    height:100%;
`;

const InfoDiv = styled.div.attrs({
    className: 'InfoDiv',
})`
    margin-top: 30px;
    margin-bottom: 30px;
    width:1000px;
    height:100%;
    float:left;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color:#EBEBEB
`;

const Info = styled.div`

  padding-top: 50px;
`;

const LeftColumn = styled.div`
    height:100%;
    width:500px;
    float:left;
    margin-left:auto;
    padding-left:200px;
    text-align: left;
`;

const RightColumn = styled.div`
    height:100%;
    width:500px;
    float:left;
    padding-right:200px;
    text-align: right;
`;

const Title = styled.h3`
    margin: 30px 0 0;
    text-align: center;
`;

const Title2 = styled.h5.attrs({
    className: 'h5',

})`
    margin-top: 20px


`;

const Wrapper = styled.div`
    widht: 100%;
    padding: 50px 0;

`;

class ItemViewOne extends Component {
    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this)
        this.state = {
            _id: '',
            isbn: '',
            title: '',
            author: '',
            publication_year: '',
            publisher: '',
            image_url_s: '',
            image_url_m: '',
            image_url_l: '',
            copies: '',
            available: '',
            isEnable: false,
        };
    }

    componentDidMount() {
        this.props.fetchSingleItem(this.props.itemId)
            .then(resp => {
                const { item } = resp.data;
                this.setState({ ...item });
            });
    }

    // handleClick() {
    //   const minNum = 1;
    //   const maxNum = 100;
    //   const randNum = minNum + Math.random() * (maxNum - minNum)
    //   this.setState({ random: this.state.random+randNum})
    // }
    //
    // openModal = () => this.setState({ isOpen: true })
    // closeModal = () => this.setState({ isOpen: false})

   handleChangeRent = async event => {

     this.setState({ available: this.state.available-=1 });
     const available = this.state;
     return this.props.updateSingleItemRent(available)

   }

   handleChangeReturn = async event => {
     const copies = this.state.copies
     const available = this.state.available;

     if(available < copies){

     const available = this.state;
     this.setState({ isEnable: true })
     this.setState({ available: this.state.available+=1 })
     return this.props.updateSingleItemRent(available)
   }
   else {
     this.setState({ isEnable: true })
   }
   }

    handleUpdateItem = event => {
      const {
          _id,
          isbn,
          title,
          author,
          publication_year,
          publisher,
          image_url_s,
          image_url_m,
          image_url_l,
          copies,
          available,
        } = this.state;
        const item = { _id, isbn, title,author,publication_year,publisher,
            image_url_s,image_url_m,image_url_l,copies,available};

        return this.props.updateSingleItemRent(item)
            .then(resp => {
                console.log("handleUpdateItem: resp");
                console.log(resp);
                if (typeof resp === "object" && (resp.status < 300 && resp.status >= 200)) {
                    this.props.alertMsg({ // remove the props param from the .then()
                    heading: 'Sucess',
                    message: messages.rentBookSuccess,
                    variant: 'success'
                    })
                    return true;
            } else {
              throw resp
            }
          })
          .catch(() => {
            this.props.alertMsg({
              heading: 'Error',
              message: messages.rentFailure,
              variant: 'danger'
            })
          })
    }

    confirmUpdateItem = event => {
      if (this.props.alertMsg({ // remove the props param from the .then()
        heading: 'Sucess',
        message: messages.rentBookSuccess,
        variant: 'success'
      })) {
            return this.handleUpdateItem(event);

        }

    }

    render() {
        const {
          _id,
          isbn,
          title,
          author,
          publication_year,
          publisher,
          // image_url_s,
          // image_url_m,
          image_url_l,
          copies,
          available
        } = this.state;

        return _id && (
            <Wrapper>
              <Container>
              <BookDiv>
              <img
                src={ image_url_l }
                style={{
                  float: 'left',
                  marginLeft: '100px'
                }}
                alt="Book Cover"/>
              </BookDiv>
              <Title>
              { title }
            </Title>
              <InfoDiv>

                    <LeftColumn>
                      <Title2>ISBN: </Title2>
                      <Title2>AUTHOR:</Title2>
                      <Title2>PUBLICATION YEAR:</Title2>
                      <Title2>PUBLISHER:</Title2>
                      <Title2>TOTAL COPIES:</Title2>
                      <Title2>AVAILABLE COPIES:</Title2>

                    </LeftColumn>
                    <RightColumn>
                      <Title2>{ isbn }</Title2>
                      <Title2>{ author }</Title2>
                      <Title2>{ publication_year }</Title2>
                      <Title2>{ publisher }</Title2>
                      <Title2>{ copies }</Title2>
                      <Title2>{ available }</Title2>
                    </RightColumn>
                    </InfoDiv>
                    <Info>

                      <ButtonS onClick={this.handleChangeRent} disabled={!this.state.available} enabled={!this.state.isEnabled}>Rent This Book</ButtonS>
                      <ButtonS rent onClick={this.handleChangeReturn} disabled={this.state.isEnabled} enabled={this.state.available}>Return This Book</ButtonS>
                      <Link to="/books/">
                      <ButtonS cancelB type="submit" variant="primary">Go Back</ButtonS>
                      </Link>
                    </Info>


              </Container>
          </Wrapper>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...state,
        itemId: ownProps.match.params.id,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({ fetchSingleItem, updateSingleItemRent }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemViewOne);
