import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useTable } from 'react-table';
import * as actions from '../actions';
import { DeleteButton } from '../components/buttons';
import styled from 'styled-components';

import MaUTable from '@material-ui/core/Table'
import {
    CssBaseline,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core';

const Container = styled.div.attrs({
    className: 'container1',
})`
    margin-left:auto;
    margin-right:auto;
    width:1600px;
    height:100%;
`;

const Container2 = styled.div.attrs({
    classname: 'bookdiv',
})`
    height:500px;
    width:400px;
    float:left;
`;

const BookDiv = styled.div.attrs({
    className: 'container2',
})`
    margin-left:auto;
    margin-right:auto;
    width:300px;
    height:470px;
    padding-top:40px;
    background-color:#EBEBEB;
`;

const Title = styled.div.attrs({
    className: 'title',
})`
    display: flex;
    align-items: center; /* vertical */
    justify-content: center; /* horizontal */
    font-size:20px;
    font-family: Roboto;
    width:300px;
    height:130px;
    text-decoration:none;
`

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;

    @media screen and (max-width: 420px) {
        padding-left: 0.5em;
        padding-right: 0.5em;
    }
`;

const Table = ({ columns, data }) => {
    const {
        getTableProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
      columns,
      data
    });

    return (
        <MaUTable {...getTableProps()}>
            <TableHead>
                {headerGroups.map(headerGroup => (
                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <TableCell {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableHead>
            <TableBody>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <TableRow
                            data-row-item-id={row.values._id}
                            {...row.getRowProps()}
                        >
                            {row.cells.map(cell => {
                                return (
                                    <TableCell {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </TableCell>
                                )
                            })}
                        </TableRow>
                    )
                })}
            </TableBody>
        </MaUTable>
    )
};

class ItemsTable extends Component {

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
                Header: 'Book Cover',
                accessor: 'image_l',
                Cell: props => {
                  console.log(props);
                    return (
                      <Link
                          // <span data-item-id={props.image_url_l}>
                          to={`/book/${props.image_url_l}`} >
                          <img src={props.image_url_l} alt="Book Cover"/>
                      </Link>
                        // <span data-item-id={props.image_url_l}>
                        //     <img src={props.image_url_l} alt="Book Cover"/>
                        // </span>
                    )
                }
            },
            {
                Header: 'Item ID',
                accessor: '_id',
                // filterable: true,
                Cell: props => {
                    console.log(props);
                    return (
                        <span data-item-id={props._id}>
                            {props.value}
                        </span>
                    )
                }
            },
            {
                Header: 'Book Title',
                accessor: 'title',
                // filterable: true,
                Cell: props => {
                    return (
                        <span data-name={props.title}>
                            {props.value}
                        </span>
                    );
                }
            },
            {
                Header: 'Author',
                accessor: 'author',
                // filterable: true,
                Cell: props => {
                    return (
                        <span data-name={props.author}>
                            {props.value}
                        </span>
                    );
                }
            },
            {
                Header: 'ISBN',
                accessor: 'isbn',
                // filterable: true,
                Cell: props => {
                    return (
                        <span data-name={props.isbn}>
                            {props.value}
                        </span>
                    );
                }
            },
            {
                Header: 'Publication Year',
                accessor: 'year',
                // filterable: true,
                Cell: props => {
                    return (
                        <span data-name={props.publication_year}>
                            {props.value}
                        </span>
                    );
                }
            },
            {
                Header: 'Publisher',
                accessor: 'publisher',
                // filterable: true,
                Cell: props => {
                    return (
                        <span data-name={props.publisher}>
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
                        <span data-name={props.copies}>
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
                        <span data-name={props.available}>
                            {props.value}
                        </span>
                    );
                }
            },
            {
                Header: 'Timeframe',
                accessor: 'timeframeNote',
                Cell: props => {
                    const { original } = props.cell.row;
                    return (
                        <span data-timeframe={original.timeframeNote}>
                            {props.value || "-"}
                        </span>
                    );
                },
            },
            {
                Header: 'Update',
                accessor: '_update',
                Cell: props => {
                    return (
                        <Link
                            data-update-id={props._id}
                            to={`/book-update/${props.value}`}
                        >
                            Update Item
                        </Link>
                    );
                },
            },
            {
                Header: 'Delete',
                accessor: '_delete',
                Cell: props => {
                    return (
                        <span data-delete-id={props._id}>
                            <DeleteButton
                                id={props._id}
                                onDelete={this.handleRemoveItem}
                            />
                        </span>
                    );
                },
            },
        ];

        return (
            <Wrapper>
                <BookDiv>
                {(
                    (items || []).length > 0
                ) ? (

                    <Table
                        data={items}
                        columns={columns}
                    />
                ) : (
                    `No items to render... :(`
                )}
              </BookDiv>
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemsTable);
