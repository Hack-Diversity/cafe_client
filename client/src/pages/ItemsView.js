import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactTable from 'react-table-6';
import * as actions from '../actions';
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

const Title = styled.div.attrs({
    className: 'title',
})`
    display: flex;
    align-items: center; /* vertical */
    justify-content: center; /* horizontal */
    font-size: 40px;
    font-family: Roboto;
    text-decoration:none;
`

class ItemsList extends Component {

    componentDidMount() {
        console.log("ItemsList: props");
        console.log(this.props);
        // if (((this.props.itemData || {}).items || []).length) return;

        this.props.fetchAllItems()
    }

    render() {
        const {
            items,
            loaded,
            loading,
            title
        } = this.props.itemData || {};
        console.log(items);

        const filterCaseInsensitive = ({ id, value }, row) =>
        row[id] ? row[id].toLowerCase().includes(value.toLowerCase()) : true

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
                            to={`/book-rent/${props.original._id}`}
                        >
                            View Book
                        </Link>
                    );
                },
            },
        ];

        return (
            <Wrapper>
              <Container>
                <Title>
                  Available Books
                </Title>
                <Title>
                { title }
                </Title>
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
                            defaultFilterMethod={filterCaseInsensitive}
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
