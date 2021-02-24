// This file is built using react components

import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { signIn } from '../api/auth'
import messages from '../actions/AlertMessages'

// Forms from bootstrap
import Form from 'react-bootstrap/Form'
import styled, { css } from 'styled-components'
// import Home from '../routes/Home'

const SpaceDiv = styled.div`
  margin-bottom: 100px;
`
const ButtonS = styled.button`
    text-align: center;
    border-radius: 5px;
    border: 2px solid;
    background: #1b870d;
    color: #fff;
    padding: 6px 40px;
    margin: 30px 20px 60px;
    justifyContent: "center";
    alignItems: "center";
    :hover {
    background: #e2cbaa;
    color: #2b1f0e;
    cursor: pointer;
}
  ${props =>
    props.cancelB &&
    css`
    background:  #870e10;
    `};
`

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignIn = event => {
    event.preventDefault()

    const { alertMsg, history, setUser } = this.props

    signIn(this.state)
      .then(res => setUser(res.data.user))
      .then((success) => console.log(success))
      .then(() =>
      alertMsg({
        heading: 'Sign In Success',
        message: messages.signInSuccess,
        variant: 'success'
      })
    )

      .then(() => history.push('/books/list'))
      .catch(() => {
        this.setState({ email: '', password: '' })
        // console.log(err);
        alertMsg({
          heading: 'Sign In Failed',
          message: messages.signInFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { email, password } = this.state

    return (
      <div className="row" style={{ width: '100%'}}>
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          {/* using inline style to avoid importing styled components for one single thing */}
          <h3 style={{ margin: '30px' }}>Sign In</h3>
          <Form onSubmit={this.onSignIn}>
            <SpaceDiv>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter email"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  name="password"
                  value={password}
                  type="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <ButtonS
                variant="primary"
                type="submit"
              >
              Sign In
              </ButtonS> {' '}
              <Link to="/">
                <ButtonS cancelB type="submit" variant="primary">Cancel</ButtonS>
              </Link>
            </SpaceDiv>
          </Form>
        </div>
      </div>
    )
  }
}

export default withRouter(SignIn)
