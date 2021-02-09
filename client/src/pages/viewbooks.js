import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Book = props => (
    <div>
        <div>
            <h2>{props.book.title}</h2>
            <img src = {props.book.image_url_l}></img>
        </div>
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
                <h1><b>Available Books</b></h1>
                <div>
                    {this.bookList()}
                </div>
            </div>
        )
    }
}
