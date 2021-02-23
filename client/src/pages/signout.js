import { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signOut } from '../api/auth'
import messages from '../actions/AlertMessages'

class SignOut extends Component {
  componentDidMount () {
    const { alertMsg, history, clearUser, user } = this.props

    signOut(user)
      .finally(() => alertMsg({
        heading: `Signed Out Successfully, Goodbye!`,
        message: messages.signOutSuccess + ' ' + this.props.user.email +'!',
        variant: 'success'
      }))
      .then(() => console.log('success'))
      .finally(() => history.push('/'))
      .finally(() => clearUser())
      .catch(() => {
        alertMsg({
          heading: 'Sign Out Failed',
          message: messages.signOutFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    return ''
  }
}

export default withRouter(SignOut)
