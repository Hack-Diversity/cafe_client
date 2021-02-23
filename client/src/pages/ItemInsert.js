import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {insertSingleItem} from '../actions';
import Form from 'react-bootstrap/Form'
import messages from '../actions/AlertMessages'

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
    `};
`

const Title = styled.h1.attrs({className: 'h1'})
``;

const Wrapper = styled.div.attrs({className: 'form-group'})
`
    margin-top: 0 30px;
`;

const Label = styled.label `
    margin: 5px;
    max-width: 30%;

    @media screen and (max-width: 420px) {
        height: auto;
        max-width: 75%;
    }
`;

const InputText = styled.input.attrs({className: 'form-control'})
`
    margin: 5px auto;
    max-width: 30%;
    text-align: center;

    @media screen and (max-width: 420px) {
        height: auto;
        max-width: 75%;
    }
`;
//
// const Fieldset = styled.fieldset.attrs({className: 'form-control'})
// `
//     background-color: transparent;
//     border-color: transparent;
//     margin: 1em auto 0.5em;
//     max-width: 50%;
//     min-height: 6em;
//
//     @media screen and (max-width: 420px) {
//         height: auto;
//         max-width: 75%;
//     }
// `;
//
// const DayInput = styled.input.attrs({className: ''})
// `
//     margin: 5px 5px 5px auto;
//     text-align: center;
// `;


class ItemInsert extends Component {
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
      isbn: '',
      title: '',
      author: '',
      publication_year: '',
      publisher: '',
      image_url_s: '',
      image_url_m: '',
      image_url_l: '',
      copies: '',
      available: ''
    };
  }

  handleChangeInputIsbn = async event => {
    const isbn = event.target.value;
    this.setState({isbn});
  }

  handleChangeInputTitle = async event => {
    const title = event.target.value;
    this.setState({title});
  }

  handleChangeInputAuthor = async event => {
    const author = event.target.value;
    this.setState({author});
  }

  handleChangeInputPublication_year = async event => {
    const publication_year = event.target.value;
    this.setState({publication_year});
  }

  handleChangeInputPublisher = async event => {
    const publisher = event.target.value;
    this.setState({publisher});
  }

  handleChangeInputImage_url_s = async event => {
    const image_url_s = event.target.value;
    this.setState({image_url_s});
  }

  handleChangeInputImage_url_m = async event => {
    const image_url_m = event.target.value;
    this.setState({image_url_m});
  }

  handleChangeInputImage_url_l = async event => {
    const image_url_l = event.target.value;
    this.setState({image_url_l});
  }

  handleChangeInputCopies = async event => {
    const copies = event.target.value;
    this.setState({copies});
  }

  handleChangeInputAvailable = async event => {
    const available = event.target.value;
    this.setState({available});
  }

  handleInsertItem = event => {
    event.preventDefault();

    const {
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
    const item = {
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
    };

    this.props.insertSingleItem(item).then(resp => {
      console.log("handleInsertItem: resp");
      console.log(resp);
      if (typeof resp === "object" && (resp.status < 300 && resp.status >= 200)) {
        this.props.alertMsg({ // remove the props param from the .then()
        heading: 'Book Created Successfully',
        message: messages.createBookSuccess,
        variant: 'success'
        })
        this.setState({
          isbn: '',
          title: '',
          author: '',
          publication_year: '',
          publisher: '',
          image_url_s: '',
          image_url_m: '',
          image_url_l: '',
          copies: '',
          available: ''
        });
      } else {
        throw resp;
      }
    })
    .catch(() => {
      this.props.alertMsg({
        heading: 'Create Failed',
        message: messages.createFailure,
        variant: 'danger'
      })
    })
  }

  render() {
    const {
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
    //
    // const {
    //   DAYS_OF_WEEK
    // } = shared;

    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          {/* using inline style to avoid importing styled components for one single thing */}
          <h3 style={{ margin: '30px'}}>Create a New Book</h3>

      <Form onSubmit={this.handleInsertItem}>

        <Form.Group>
        <Form.Label>ISBN:</Form.Label>
        <Form.Control
        type="number"
        name="isbn"
        value={isbn}
        onChange={this.handleChangeInputIsbn}
        />
      </Form.Group>

      <Form.Group>
      <Form.Label>Book Title:</Form.Label>
        <Form.Control
        type="text"
        name="title"
        value={title}
        onChange={this.handleChangeInputTitle}
        />
      </Form.Group>

      <Form.Group>
      <Form.Label>Author: </Form.Label>
        <Form.Control
        type="text"
        name="author"
        value={author}
        onChange={this.handleChangeInputAuthor}
      />
    </Form.Group>

    <Form.Group>
     <Form.Label>Year of Publication: </Form.Label>
       <Form.Control
       type="number"
       name="publication_year"
       value={publication_year}
       onChange={this.handleChangeInputPublication_year}
      />
    </Form.Group>

      <Form.Group>
      <Form.Label>Publisher: </Form.Label>
        <Form.Control
        type="text"
        name="publisher"
        value={publisher}
        onChange={this.handleChangeInputPublisher}
      />
    </Form.Group>

  <Form.Group>
    <Form.Label>Small Image Url: </Form.Label>
      <Form.Control
      type="text"
      name="image_url_s"
      value={image_url_s}
      onChange={this.handleChangeInputImage_url_s}
    />
  </Form.Group>

  <Form.Group>
   <Form.Label>Medium Image Url: </Form.Label>
      <Form.Control
      type="text"
      name="image_url_m"
      value={image_url_m}
      onChange={this.handleChangeInputImage_url_m}
    />
  </Form.Group>

  <Form.Group>
   <Form.Label>Large Image Url: </Form.Label>
     <Form.Control
      type="text"
      name="image_url_l"
      value={image_url_l}
      onChange={this.handleChangeInputImage_url_l}
    />
  </Form.Group>

  <Form.Group>
   <Form.Label>Total Copies: </Form.Label>
    <Form.Control
    type="number"
    name="copies"
    value={copies}
    onChange={this.handleChangeInputCopies}
   />
 </Form.Group>

  <Form.Group>
   <Form.Label>Available Copies: </Form.Label>
    <Form.Control
    type="number"
    name="available"
    value={available}
    onChange={this.handleChangeInputAvailable}
   />
 </Form.Group>

 <ButtonS variant="primary" type="submit"> Add Book </ButtonS>

   <Link to="/books/list">
   <ButtonS cancelB type="submit" variant="primary">Cancel</ButtonS>
   </Link>
</Form>
</div>
</div>
   );
   }
}

const mapDispatchToProps = dispatch => bindActionCreators({
insertSingleItem
}, dispatch);

export default connect(null, mapDispatchToProps)(ItemInsert);
