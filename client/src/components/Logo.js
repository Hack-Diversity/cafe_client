import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import logo from '../styles/assets/moose.png';

const Wrapper = styled.a`
    className: 'navbar-brand'
`

class Logo extends Component {
  render() {
    const {
      logoStyles
    } = this.props;

    return ( < Wrapper href = "https://localtest:8000" >
      <
      img src = {
        logo
      }
      className = "navbar-brand"
      style = {
        logoStyles
      }
      alt = "Moose Cafe Logo" / >
      <
      /Wrapper>
    );
  }
}

Logo.propTypes = {
  linkStyles: PropTypes.object,
  logoStyles: PropTypes.object,
};

export default Logo;
