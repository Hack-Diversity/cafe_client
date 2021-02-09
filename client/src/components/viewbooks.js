import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Book = props => (
    <div>
        <h1>{props.book.title}</h1>
        <img src = {props.book.image_url_s}></img>
    </div>
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
            <div>
                {this.bookList()}
            </div>
        )
    }
}
