import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Constants
import * as actions from './actions';
import { routes } from './constants';
import DisAlerts from './actions/Alerts'

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

import ViewBooks from './pages/ItemsView';
import ViewOne from './pages/ItemViewOne';
import Signin from './pages/signin';
import SignOut from './pages/signout';
import Change from './pages/change-pw';
import AuthUser from './api/authUser'


class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alertMsgs: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alertMsg = ({ heading, message, variant }) => {
    this.setState({ alertMsgs: [...this.state.alertMsgs, { heading, message, variant }] })
  }

    render() {
      const { alertMsgs, user } = this.state

        const publicViews = (
            <Switch>
                <Route exact path={routes.HOME} component={Welcome} />
                <Route exact path={routes.LOG_IN} render={() => (
                    <Signin alertMsg={this.alertMsg} setUser={this.setUser} />
                )} />
                <Route exact path={routes.LIBRARY} component={ViewBooks} />
                <Route exact path={routes.ITEM_RENT} component={ViewOne} />

                <AuthUser exact user={user} path={`${routes.LIBRARY}/list`} render={({ match }) => (
                    <ItemsTable match={match} user={user} />
                  )} />

                <AuthUser exact user={user} path={routes.LOG_OUT} render={() => (
                    <SignOut alertMsg={this.alertMsg} clearUser={this.clearUser}
                      user={user} />
                  )} />

                <AuthUser exact user={user} path={routes.PW_CHANGE} render={() => (
                    <Change alertMsg={this.alertMsg} user={user} />
                  )} />

                <AuthUser exact user={user} path={routes.ITEM_INSERT} render={({ match }) => (
                  <ItemInsert match={match} user={user} />
                  )} />

                <AuthUser exact user={user} path={routes.ITEM_UPDATE} render={({ match }) => (
                    <ItemUpdate match={match} alertMsg={this.alertMsg} user={user} />
                  )} />

            </Switch>
        );

        return (
          <Fragment>
          {alertMsgs.map((alertMsg, index) => (
          <DisAlerts
            key={index}
            heading={alertMsg.heading}
            variant={alertMsg.variant}
            message={alertMsg.message}
          />
        ))}

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
          </Fragment>
        );
    };
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
