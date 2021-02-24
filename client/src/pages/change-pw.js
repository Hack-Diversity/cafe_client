import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { changePassword } from '../api/auth'
import messages from '../actions/AlertMessages'

import Form from 'react-bootstrap/Form'
import styled, { css } from 'styled-components'

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

class ChangePassword extends Component {
  constructor () {
    super()

    this.state = {
      oldPassword: '',
      newPassword: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onChangePassword = event => {
    event.preventDefault()

    const { alertMsg, history, user } = this.props

    changePassword(this.state, user)
      .then(() => alertMsg({
        heading: 'Change Password Success',
        message: messages.changePasswordSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/books/list'))
      .catch(error => {
        this.setState({ oldPassword: '', newPassword: '' })
        alertMsg({
          heading: 'Change Password Failed with error: ' + error.message,
          message: messages.changePasswordFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { oldPassword, newPassword } = this.state

    return (
      <div className="row" style={{ width: '100%'}}>
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3 style={{ margin: '30px'}}>Change Password</h3>
          <Form onSubmit={this.onChangePassword}>
            <SpaceDiv>
              <Form.Group controlId="oldPassword">
                <Form.Label>Old password</Form.Label>
                <Form.Control
                  required
                  name="oldPassword"
                  value={oldPassword}
                  type="password"
                  placeholder="Old Password"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="newPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  required
                  name="newPassword"
                  value={newPassword}
                  type="password"
                  placeholder="New Password"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <ButtonS
                variant="primary"
                type="submit"
              >
                Submit
              </ButtonS> {' '}
              <Link to="/books/list">
                <ButtonS cancelB type="submit" variant="primary">Cancel</ButtonS>
              </Link>
            </SpaceDiv>
          </Form>
        </div>
      </div>
    )
  }
}

export default withRouter(ChangePassword)
