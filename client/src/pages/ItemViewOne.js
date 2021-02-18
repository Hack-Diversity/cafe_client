import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactTable from 'react-table-6';
import { fetchSingleItem } from '../actions';
// import { DeleteButton } from '../components/buttons';
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

class ItemViewOne extends Component {

    // componentDidMount() {
    //     console.log("ItemsList: props");
    //     console.log(this.props);
    //     // if (((this.props.itemData || {}).items || []).length) return;
    //
    //     this.props.fetchSingleItem(this.props.itemId)
    // }
    componentDidMount() {
        this.props.fetchSingleItem(this.props.itemId)
            .then(resp => {
                const { item } = resp.data;
                this.setState({ ...item });
            });
    }


    render() {
        const {
            item,
            loaded,
            loading
        } = this.state|| {};
        console.log(item);

        const columns = [
          {
                Header: 'Book Cover:',
                accessor: 'image_l',
                Cell: props => {
                  console.log(props);
                    return (
                      <span data-item-id={props.original.image_url_l}>
                           <Img
                             placeholder={defaultImg}
                             src={props.original.image_url_l}
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
            

        ];

        return (
            <Wrapper>
              <Container>


              </Container>
                {(
                    (item || []).length > 0 // defeats the purpose of using `isLoading` prop?
                ) ? (
                        <ReactTable
                            data={item}
                            columns={columns}
                            isLoading={(loaded && loading)}

                        />
                    ) : (
                        `No items to render... :(`
                    )}
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

const mapDispatchToProps = dispatch => bindActionCreators({fetchSingleItem}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemViewOne);
