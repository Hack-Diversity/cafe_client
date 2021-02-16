import React, { Component } from 'react';
// import axios from 'axios';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
// import apiUrl from '../api/index'
import * as actions from '../actions';

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

const Book = props => (
    <Container2>
        <BookDiv>

                <img src = {props.image_url_l} style = {{ width: 200, height: 300 }} alt="Book Cover" ></img>

            <Title>

                    {props.title}

            </Title>
        </BookDiv>
    </Container2>
)

export default class ViewBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {books: []};
    }

  componentDidMount() {
    console.log("ItemsList: props");
    console.log(this.props);
    // if (((this.props.itemData || {}).items || []).length) return;

    // this.props.fetchAllItems()
}

    bookList(){
        return this.state.books.map(currentBook => {
            return <Book book = {currentBook} key = {currentBook._id}/>;
        })
    }

    render() {
        return (
            <Container>
                <h1><b>Available Books</b></h1>
                <br></br>
                <div>
                    {this.bookList()}
                </div>
            </Container>
        )
    }
}
