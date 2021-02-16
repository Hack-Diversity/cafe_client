import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactTable from 'react-table-6';
import * as actions from '../actions';
import { DeleteButton } from '../components/buttons';
import Img from 'react-cool-img'
import defaultImg from './images/noimage.png'

import styled from 'styled-components';

import 'react-table-6/react-table.css';

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`;

const Container = styled.div`
    padding: 50px;
`;

const HomeLinks = styled.div`

`;

class ItemsList extends Component {

    componentDidMount() {
        console.log("ItemsList: props");
        console.log(this.props);
        // if (((this.props.itemData || {}).items || []).length) return;

        this.props.fetchAllItems()
    }

    handleRemoveItem = data => {
        const itemId = data;

        this.props.deleteSingleItem(itemId)
            .then(resp => {
                console.log("handleRemoveItem: resp");
                console.log(resp);
                this.props.fetchAllItems();
            });
    }

    render() {
        const {
            items,
            loaded,
            loading
        } = this.props.itemData || {};
        console.log(items);

        const columns = [
          {
                Header: 'Book Cover:',
                accessor: 'image_m',
                Cell: props => {
                  console.log(props);
                    return (
                      <span data-item-id={props.original.image_url_m}>
                           <Img
                             placeholder={defaultImg}
                             src={props.original.image_url_m}
                             alt="Book Cover"/>
                           </span>
                    )
                }
            },
            {
                Header: 'ISBN',
                accessor: 'isbn',
                filterable: true,
                Cell: props => {
                    return (
                        <span data-name={props.original.isbn}>
                            {props.value}
                        </span>
                    );
                }
            },
            {
                Header: 'Title:',
                accessor: 'title',
                filterable: true,
                Cell: props => {
                    return (
                        <span data-name={props.original.title}>
                            {props.value}
                        </span>
                    );
                }
            },
            {
                Header: 'Author:',
                accessor: 'author',
                filterable: true,
                Cell: props => {
                    return (
                        <span data-name={props.original.author}>
                            {props.value}
                        </span>
                    );
                }
            },
            {
                Header: 'Publication Year',
                accessor: 'publication_year',
                filterable: true,
                Cell: props => {
                    return (
                        <span data-name={props.original.publication_year}>
                            {props.value}
                        </span>
                    );
                }
            },
            {
                Header: 'Publisher',
                accessor: 'publisher',
                filterable: true,
                Cell: props => {
                    return (
                        <span data-name={props.original.publisher}>
                            {props.value}
                        </span>
                    );
                }
            },
            {
                Header: 'Copies',
                accessor: 'copies',
                // filterable: true,
                Cell: props => {
                    return (
                        <span data-name={props.original.copies}>
                            {props.value}
                        </span>
                    );
                }
            },
            {
                Header: 'Copies Available',
                accessor: 'available',
                // filterable: true,
                Cell: props => {
                    return (
                        <span data-name={props.original.available}>
                            {props.value}
                        </span>
                    );
                }
            },
            {
                Header: '',
                accessor: '',
                Cell: props => {
                    return (
                        <Link
                            data-update-id={props.original._id}
                            to={`/book-update/${props.original._id}`}
                        >
                            Update Item
                        </Link>
                    );
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: props => {
                    return (
                        <span data-delete-id={props.original._id}>
                            <DeleteButton
                                id={props.original._id}
                                onDelete={this.handleRemoveItem}
                            />
                        </span>
                    );
                },
            },
        ];

        return (
            <Wrapper>
              <Container>

                <h4>Welcome, {this.props.user.email}</h4>
                <HomeLinks>
                <Link to={'/book-create'}>Create a Book</Link>
                </HomeLinks>
                <HomeLinks>
                <Link to={'/password-change'}>Change Password</Link>
                </HomeLinks>
                <HomeLinks>
                <Link to={'/admin-signout'}>Logout</Link>
              </HomeLinks>
              </Container>
                {(
                    (items || []).length > 0 // defeats the purpose of using `isLoading` prop?
                ) ? (
                        <ReactTable
                            data={items}
                            columns={columns}
                            isLoading={(loaded && loading)}
                            defaultPageSize={10}
                            showPageSizeOptions={true}
                            minRows={10}
                        />
                    ) : (
                        `No items to render... :(`
                    )}
            </Wrapper>
        );
    }

}

const mapStateToProps = state => {
    return {
      ...state
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
