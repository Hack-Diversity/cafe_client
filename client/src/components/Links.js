import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { ScrollTo} from "react-scroll-to";

import Logo from './Logo';

const HomeWrapper = styled.div `
  /* margin-right: 20px; */
`

const Collapse = styled.div.attrs({
  //className: 'collapse navbar-collapse',
})
`
    @media screen and (max-width: 420px) {
        display: flex;
        flex-grow: 1;
    }
`;

const List = styled.div.attrs({className: 'navbar-nav mr-auto'})
`
    @media screen and (max-width: 420px) {
        flex-direction: row;
        justify-content: space-between;
        /* justify-content: flex-start; */
        width: 100%;
    }
`;

const Item = styled.div.attrs({
  // className: 'collapse navbar-collapse',
})
`
    @media screen and (max-width: 420px) {
        /* margin-right: 2em; */
    }
`;

const homeStyles = {
  color: 'black'
};

const logoStyles = {
  height: '180px',
  width: '190px',
  marginLeft: '-250px',
  marginRight: '200px'
};

class AboutUs extends Component {
  render() {
    return (
      <ScrollTo>

        {({ scroll }) => (
          <a onClick={() => scroll({ x: 20, y: 900, smooth: true })}>About Us</a>
        )}
      </ScrollTo>
    );
  }
}

class Menu extends Component {
  render() {
    return (
      <ScrollTo>
        {({ scroll }) => (
          <a onClick={() => scroll({ x: 20, y: 2200, smooth: true })}>Menu</a>
        )}
      </ScrollTo>
    );
  }
}

class ContactUs extends Component {
  render() {
    return (
      <ScrollTo>
        {({ scroll }) => (
          <a onClick={() => scroll({ x: 20, y: 3000, smooth: true })}>Contact Us</a>
        )}
      </ScrollTo>
    );
  }
}

class Links extends Component {
  render() {
    return (<React.Fragment>
      <HomeWrapper>
        <Logo logoStyles={
            logoStyles
          }/>
      </HomeWrapper>
      <Collapse>
        <List>
        <Item>
          <Link to="/" className="navbar-brand" style={{
              homeStyles,
              marginRight: '80px'
            }}>
            Home</Link>
        </Item>
        <Item>
          <Link to="/" className="navbar-brand" style={{
              homeStyles,
              marginRight: '80px'
            }}>
        <AboutUs/>
        </Link>
        </Item>
        <Item>
          <Link to="/" className="navbar-brand" style={{
              homeStyles,
              marginRight: '80px'
            }}>
          <Menu />
          </Link>
        </Item >
        <Item >
          <Link to="/" className="navbar-brand" style={{
              homeStyles,
              marginRight: '80px'
            }}>
          <ContactUs />
          </Link>
          </Item >
          <Item>
            <Link to="/books" className="navbar-brand" style={{
                homeStyles,
                marginRight: '80px'
              }}>
              Library</Link>
          </Item>

              <Item >
                <Link to="/admin-signin/"
                  className="navbar-brand"
                  style={{
                    homeStyles,
                    marginRight: '80px'
                  }}> Admin
                </Link>
                </Item></List>
                </Collapse></React.Fragment>
                );
  }
}

export default Links;
