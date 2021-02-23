import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSingleItem, updateSingleItem } from '../actions';
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

class ItemUpdate extends Component {
    constructor(props) {
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
                    this.props.alertMsg({ // remove the props param from the .then()
                    heading: 'Update Book - Success',
                    message: messages.updateBookSuccess,
                    variant: 'success'
                    })
                    return true;
                } else {
                    throw resp;
                }
            })
            .catch(() => {
              this.props.alertMsg({
                heading: 'Update Failed',
                message: messages.updateFailure,
                variant: 'danger'
              })
            })
          }



    confirmUpdateItem = event => {

      if (this.props.alertMsg({ // remove the props param from the .then()
        heading: 'Book Updated Successfully',
        message: messages.updateBookSuccess,
        variant: 'success'
      })) {
            return this.handleUpdateItem(event);

        }
        // this.props.history.push("/books/list")
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
          <div className="row">
            <div className="col-sm-10 col-md-8 mx-auto mt-5">
              {/* using inline style to avoid importing styled components for one single thing */}
              <h3 style={{ margin: '30px'}}>Update This Book</h3>
                <img
                  src={ image_url_m }
                  style={{
                  }}
                  alt="Book Cover"/>
                <Form onSubmit={this.confirmUpdateItem}>

                  <Form.Group>
                    <h5 style={{ margin: '30px' }}>
                      { title }
                    </h5>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      ISBN:
                    </Form.Label>
                    <Form.Control
                      required
                      type='number'
                      defaultValue={isbn}
                      name="isbn"
                      onChange={this.handleChangeInputName}
                      />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>
                      Book Title:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      defaultValue={title}
                      onChange={this.handleChangeInputTitle}

                      />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>
                      Author:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={author}
                      name="author"
                      onChange={this.handleChangeInputAuthor}
                      />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>
                      Year of Publication:
                    </Form.Label>
                    <Form.Control
                      type="number"
                      name="publication_year"
                      defaultValue={publication_year}
                      onChange={this.handleChangeInputPublication_year}
                      />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>
                      Publisher:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="publisher"
                      defaultValue={publisher}
                      onChange={this.handleChangeInputPublisher}
                      />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>
                      Small Image:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="image_url_s"
                      defaultValue={image_url_s}
                      onChange={this.handleChangeInputImage_url_s}
                      />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>
                      Medium Image:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="image_url_m"
                      defaultValue={image_url_m}
                      onChange={this.handleChangeInputImage_url_m}
                      />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>
                      Large Image:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="image_url_l"
                      defaultValue={image_url_l}
                      onChange={this.handleChangeInputImage_url_l}
                      />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>
                      Book Copies:
                    </Form.Label>
                    <Form.Control
                      type="number"
                      name="copies"
                      defaultValue={copies}
                      onChange={this.handleChangeInputCopies}
                      />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>
                      Available Copies:
                    </Form.Label>
                    <Form.Control
                      type="number"
                      name="available"
                      defaultValue={available}
                      onChange={this.handleChangeInputAvailable}
                      />
                  </Form.Group>

                  <Link to="/books/list">
                  <ButtonS variant="primary" type="submit">Update</ButtonS>
                  </Link>
                  <Link to="/books/list">
                  <ButtonS cancelB type="submit" variant="primary">Cancel</ButtonS>
                  </Link>
                </Form>
              </div>
            </div>

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
