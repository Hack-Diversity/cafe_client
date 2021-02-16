import { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signOut } from '../api/auth'
// import messages from '../AutoDismissAlert/messages'

class SignOut extends Component {
  componentDidMount () {
    const { history, clearUser, user } = this.props

    signOut(user)
      .finally(() => console.log('success'))
      .finally(() => history.push('/'))
      .finally(() => clearUser())
      .catch(() => console.log('error'))
  }

  render () {
    return ''
  }
}

export default withRouter(SignOut)
