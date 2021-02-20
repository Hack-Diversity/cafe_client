import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSingleItem, updateSingleItemRent } from '../actions';
import { shared } from '../constants';
import { Redirect } from 'react-router-dom'

import styled from 'styled-components';

const Container = styled.div.attrs({
    className: 'Container',
})`
    margin-left:auto;
    margin-right:auto;
    width:1600px;
    height:100%;
    padding-top:40px;
`;

const BookDiv = styled.div.attrs({
    className: 'BookDiv',
})`
    margin-left:auto;
    margin-right:auto;
    float:left;
    width:400px;
    height:100%;
`;

const InfoDiv = styled.div.attrs({
    className: 'InfoDiv',
})`
    margin-left:auto;
    margin-right:auto;
    width:1000px;
    height:100%;
    float:left;
`;

const Info = styled.div.attrs({
    className: 'Info',
})`
    padding-top:20px;
    font-size:20px;
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
    text-align: left;
`;

const Title = styled.h1`
    margin: 30px 0 40px;
`;

const Title2 = styled.h1.attrs({
    className: 'h5',

})`
    margin-top: 20px


`;

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin-top: 0 30px;
`;

const Label = styled.label`
    margin: 5px;
    max-width: 30%;
`;

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px auto;
    max-width: 30%;
    text-align: center;
`;

// const Fieldset = styled.fieldset.attrs({
//     className: 'form-control',
// })`
//     border-color: transparent;
//     margin: 1em auto 0.5em;
//     max-width: 50%;
//     min-height: 6em;
// `;
//
// const DayInput = styled.input.attrs({
//     className: '',
// })`
//     margin: 5px auto;
//     text-align: center;
// `;

const Button = styled.button.attrs({
    className: 'btn btn-primary',
})`
  margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
    className: 'btn btn-danger',
})`
  margin: 15px 15px 15px 5px;
`;

class ItemViewOne extends Component {
    constructor(props) {
        /**
         * Currently deprecated and now known as the "legacy context":
         * - https://reactjs.org/docs/legacy-context.html
         *
         * TODO: refactor to use new Context API:
         * - https://reactjs.org/docs/context.html
         */
        super(props);
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

    handleChangeInputIsbn = async event => {
        const isbn = event.target.value;
        this.setState({ isbn });
    }

    handleChangeInputTitle = async event => {
      const title = event.target.value;
      this.setState({ title });
    }

    handleChangeInputAuthor = async event => {
        const author = event.target.value;
        this.setState({ author });
    }

    handleChangeInputPublication_year = async event => {
       const publication_year = event.target.value;
       this.setState({ publication_year });
    }

    handleChangeInputPublisher = async event => {
        const publisher = event.target.value;
        this.setState({ publisher });
    }

    handleChangeInputImage_url_m = async event => {
       const image_url_m = event.target.value;
       this.setState({ image_url_m });
   }

   handleChangeInputImage_url_l = async event => {
       const image_url_l = event.target.value;
       this.setState({ image_url_l });
   }

   handleChangeInputCopies = async event => {
       const copies = event.target.value;
       this.setState({ copies });
   }



   handleChangeRent = async event => {

     this.setState({ available: this.state.available-1 });
     const available = this.state;
     return this.props.updateSingleItemRent(available)
   }

   handleChangeReturn = async event => {
     const available = this.state.available;
     // if(available > 0){
     this.setState({ available: this.state.available+1 });
     // this.setState({ isEnable: true })
     return this.props.updateSingleItemRent(available)
   // }
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

            })
            .catch(err => {

                console.error("handleUpdateItem: err");
                console.error(err);
            });
    }

    confirmUpdateItem = event => {
        return this.handleUpdateItem(event);

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
                <Info>


                    <LeftColumn>
                      <Label>ISBN: </Label>
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
                    <BookDiv>
                      <Button onClick={this.handleChangeRent}>Rent This Book</Button>
                      <Button onClick={this.handleChangeReturn}>Return This Book</Button>
                      <CancelButton href={'/books/'}>Cancel</CancelButton>
</BookDiv>
</Info>
</InfoDiv>
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
