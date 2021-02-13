import React, { Component } from 'react';
import axios from 'axios';
import {Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div.attrs({
    className: 'Container',
})`
    margin-left:auto;
    margin-right:auto;
    width:1600px;
    height:100%;
    padding-top:40px;
`;

const BookDiv = styled.div.attrs({
    className: 'BookDiv',
})`
    margin-left:auto;
    margin-right:auto;
    float:left;
    width:600px;
    height:100%;
`;

const InfoDiv = styled.div.attrs({
    className: 'InfoDiv',
})`
    margin-left:auto;
    margin-right:auto;
    width:1000px;
    height:100%;
    float:left;
`;

const Info = styled.div.attrs({
    className: 'Info',
})`
    padding-top:20px;
    font-size:20px;
`;

const LeftColumn = styled.div.attrs({
    className: 'LeftColumn',
})`
    height:100%;
    width:500px;
    float:left;
    margin-left:auto;
    padding-left:200px;
`;

const RightColumn = styled.div.attrs({
    className: 'RightColumn',
})`
    height:100%;
    width:500px;
    float:left;
    padding-right:200px;
`;

export default class ViewBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            isbn: '',
            author: '',
            publication_year: -1,
            publisher: '',
            image_url_l: '',
            copies: -1,
            available: -1
        };
    }

    componentDidMount(){
        axios.get('http://localhost:8000/books/' + this.props.match.params._id)
            .then(response => {
                this.setState({
                    title: response.data.title,
                    isbn: response.data.isbn,
                    author: response.data.author,
                    publication_year: response.data.publication_year,
                    publisher: response.data.publisher,
                    image_url_l: response.data.image_url_l,
                    copies: response.data.copies,
                    available: response.data.available,
                 })
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <Container>
            <BookDiv>
                <img src = {this.state.image_url_l} alt="Book Cover"></img>
            </BookDiv>
            <InfoDiv>
                <h1>{this.state.title}</h1>
            <Info>
                <LeftColumn>
                    <hr></hr>
                    <div class = "label">ISBN:</div>
                    <hr></hr>
                    Author:
                    <hr></hr>
                    Publication Year:
                    <hr></hr>
                    Available Copies:
                    <hr></hr>
                </LeftColumn>
                <RightColumn>
                    <hr></hr>
                    {this.state.isbn}
                    <hr></hr>
                    {this.state.author}
                    <hr></hr>
                    {this.state.publication_year}
                    <hr></hr>
                    {this.state.available} / {this.state.copies}
                    <hr></hr>
                    <br></br>
                </RightColumn>
                <div className="form-group">
                <input type="submit" value="Rent Book" className="btn btn-primary" />
                </div>
            </Info>
            </InfoDiv>
            </Container>
        )
    }
}
