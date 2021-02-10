import React, { Component } from 'react';
import axios from 'axios';
import {Link } from 'react-router-dom';
import styled from 'styled-components';

const Book = props => (
    <Container2>
        <BookDiv>
            <img src = {props.book.image_url_l} style = {{ width: 200, height: 300 }} ></img>
            <Title>{props.book.title}</Title>
        </BookDiv>
    </Container2>
)

export default class ViewBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {books: []};
    }

    componentDidMount(){
        axios.get('http://localhost:4741/books/')
            .then(response => {
                this.setState({ books: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
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
