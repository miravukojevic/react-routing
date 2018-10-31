import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter } from 'react-router-dom';
import Register from './Register'
import './App.css';

import Login from './Login'
import Home from './Home'
import Admin from './Admin'
import Profile from './Profile'
import EditProfile from './EditProfile'

const NoMatch = () => (
 <div>404</div>
);

class App extends Component {
  state = {
    authenticated: true
  }
  requireAuth = (nextState, replace, next) => {
    if (!this.state.authenticated) {
      replace({
        pathname: "/login",
        state: {nextPathname: nextState.location.pathname}
      });
    }
    next();
  }
  
  render() {
    return (
      <div className="App">
        <div className="router">
          <Switch>
            <Route exact path="/"  onEnter={this.requireAuth} component={Home} />
            <Route exact path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/admin" component={Admin} />
            <Route path="/Register" component={Register} />
            <Route exact path="/profile/edit" component={EditProfile} />
            <Route path="/profile" component={Profile} />
            <Route  component={NoMatch} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
