import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ScrollTo } from "react-scroll-to";
import Navbar from 'react-bootstrap/Navbar'
import logo from '../styles/assets/moose.png';


const HomeWrapper = styled.div `
  margin-right: 220px;
`

const Collapse = styled.div`
    @media screen and (max-width: 420px) {
        display: flex;
        flex-grow: 1;
    }
`

const List = styled.div.attrs({className: 'navbar-nav mr-auto'})
`
    display: 'inline'
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
  width: '200px',
  marginLeft: '50px'

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

const authOptions = (
  <Fragment>
    <Collapse>
      <List>
        <Item>
      <Link to="/books/list" className="navbar-brand" style={{
          homeStyles,
          marginRight: '80px'
        }}>Books List</Link>
        </Item>
      <Item>
      <Link to="/book-create" className="navbar-brand" style={{
          homeStyles,
          marginRight: '80px'
        }}>Create a Book</Link>
      </Item>
      <Item>
      <Link to="/admin-password" className="navbar-brand" style={{
          homeStyles,
          marginRight: '80px'
        }}>Change Password</Link>
      </Item>
      <Item>
    <Link to="/admin-signout" className="navbar-brand" style={{
        homeStyles,
        marginRight: '80px'
      }}>Sign Out</Link>
      </Item>
      </List>
  </Collapse>
  </Fragment>
)

const unauthOpt = (
  <Fragment>
    <Collapse>
      <List>
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
              </Item>
            </List>
              </Collapse>
            </Fragment>
      )



const Links = ({ user }) => (
  <Fragment>
    <Navbar bg="light" variant="light" expand="md">
      <Navbar.Brand href="#">
    <HomeWrapper>
      <img src={logo} style={logoStyles} alt="Website logo"/>
      <h5 style={{ marginLeft: '52px'}}>THE COFFEE MOOSE</h5>
    </HomeWrapper>
  </Navbar.Brand>
    <Collapse>
      <List>
        <Item>
      <Link to='/' className="navbar-brand"
       style={{
        homeStyles,
        marginRight: '80px'
       }}>Home</Link>
      </Item>

    { user ? authOptions : unauthOpt }
  </List>
</Collapse>
</Navbar>
  </Fragment>
)

export default Links;
