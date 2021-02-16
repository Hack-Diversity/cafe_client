import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Constants
import * as actions from './actions';
import { routes } from './constants';

// Styles
import { CssBaseline } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

// Static/Stateless
import {
    NavBar,
    PageLayout,
    Welcome
} from './components';

// Pages
import {
    ItemInsert,
    ItemsTable,
    ItemUpdate
} from './pages';

import ViewBooks from './pages/viewbooks';
// import ViewBook from './pages/viewBook';
import Signin from './pages/signin';
import SignOut from './pages/signout';
import Change from './pages/change-pw';
import AuthUser from './api/authUser'


class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })
    render() {
      const { user } = this.state

        const publicViews = (
            <Switch>
                <Route exact path={routes.HOME} component={Welcome} />
                <Route exact path={routes.LOG_IN} render={() => (
                    <Signin setUser={this.setUser} />
                )} />
                <Route exact path={routes.LIBRARY} component={ViewBooks} />

                <AuthUser exact user={user} path={`${routes.LIBRARY}/list`} render={({ match }) => (
                    <ItemsTable match={match} user={user} />
                  )} />

                <AuthUser exact user={user} path={routes.LOG_OUT} render={() => (
                    <SignOut clearUser={this.clearUser} user={user} />
                  )} />

                <AuthUser exact user={user} path={routes.PW_CHANGE} render={() => (
                    <Change user={user} />
                  )} />

                <AuthUser exact user={user} path={routes.ITEM_INSERT} render={({ match }) => (
                  <ItemInsert match={match} user={user} />
                  )} />

                <AuthUser exact user={user} path={routes.ITEM_UPDATE} render={({ match }) => (
                    <ItemUpdate match={match} user={user} />
                  )} />

            </Switch>
        );

        return (
            <Router>
                <CssBaseline />
                <NavBar />
                <div className="app--main">
                    <PageLayout />
                    <div className="view-container">
                        {publicViews}
                    </div>
                </div>
            </Router>
        );
    };
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
