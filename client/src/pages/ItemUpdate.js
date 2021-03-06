import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSingleItem, updateSingleItem } from '../actions';
// import { shared } from '../constants';
import { Link } from 'react-router-dom'

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
    background:  #047adb;
    `};
`

const Title = styled.h1.attrs({
    className: 'h2',

})`
    margin-top: 30px
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

class ItemUpdate extends Component {
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

   handleChangeInputAvailable = async event => {
       const available = event.target.value;
       this.setState({ available });
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
            image_url_s,image_url_m,image_url_l,copies,available,};

        return this.props.updateSingleItem(item)
            .then(resp => {
                console.log("handleUpdateItem: resp");
                console.log(resp);
                if (typeof resp === "object" && (resp.status < 300 && resp.status >= 200)) {
                    window.alert('Item updated successfully');
                    return true;
                } else {
                    throw resp;
                }
            })
            .catch(err => {
                window.alert(`There was an error updating the item... :(`);
                console.error("handleUpdateItem: err");
                console.error(err);
            });
    }

    confirmUpdateItem = event => {
        if (window.confirm(`Are you sure you want to update this item? ${this.state._id}`)) {
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
          image_url_s,
          image_url_m,
          image_url_l,
          copies,
          available
        } = this.state;

        return _id && (
            <Wrapper>

                <Title>Update:</Title>
                <Title2>{ title }</Title2>
                <Label>ISBN: </Label>
                <InputText
                    type="number"
                    defaultValue={isbn}
                    onChange={this.handleChangeInputName}
                />

              <Label>Book Title: </Label>
                <InputText
                    type="text"
                    defaultValue={title}
                    onChange={this.handleChangeInputTitle}
                />

                <Label>Author: </Label>
                <InputText
                    type="text"
                    defaultValue={author}
                    onChange={this.handleChangeInputAuthor}
                />

              <Label>Year Published: </Label>
                <InputText
                    type="number"
                    defaultValue={publication_year}
                    onChange={this.handleChangeInputPublication_year}
                />

                <Label>Publisher: </Label>
                <InputText
                    type="text"
                    defaultValue={publisher}
                    onChange={this.handleChangeInputPublisher}
                />

              <Label>Update Small Image Url: </Label>
                <InputText
                    type="text"
                    defaultValue={image_url_s}
                    onChange={this.handleChangeInputImage_url_s}
                />

              <Label>Update Medium Image Url: </Label>
                <InputText
                    type="text"
                    defaultValue={image_url_m}
                    onChange={this.handleChangeInputImage_url_m}
                />

              <Label>Update Large Image Url: </Label>
                <InputText
                    type="text"
                    defaultValue={image_url_l}
                    onChange={this.handleChangeInputImage_url_l}
                />

              <Label>Book Copies: </Label>
                <InputText
                    type="number"
                    defaultValue={copies}
                    onChange={this.handleChangeInputCopies}
                />

              <Label>Available Copies: </Label>
                <InputText
                    type="number"
                    defaultValue={available}
                    onChange={this.handleChangeInputAvailable}
                />


              <ButtonS onClick={this.confirmUpdateItem}>Update Item</ButtonS>
                <Link to="/books/list">
                <ButtonS cancelB>Go Back</ButtonS>
                </Link>
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

const mapDispatchToProps = dispatch => bindActionCreators({ fetchSingleItem, updateSingleItem }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemUpdate);
