import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import firebase from 'firebase';
import './App.css';
// Public
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Navbar from '../components/Navbar/Navbar';


// Private
import Dashboard from '../components/Dashboard/Dashboard';
import New from '../components/New/New';
import AllPlanets from '../components/AllPlanets/AllPlanets';
import SavedPlanets from '../components/SavedPlanets/SavedPlanets';
import Edit from '../components/ChildProfile/ChildProfile';

import fbConnection from '../firebaseRequests/connection';
fbConnection();

const PrivateRoute = ({ component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: {from: props.location}}}
          />
        )
      }
    />
  );
};

const PublicRoute = ({ component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/dashboard', state: {from: props.location}}}
          />
        )
      }
    />
  );
};

class App extends Component {
  state= {
    authed: false,
  }
  componentDidMount () {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({authed: true});
      } else {
        this.setState({authed: false});
      }
    });
  }

  componentWillUnmount () {
    this.removeListener();
  }

  getOut = () => {
    this.setState({authed: false});
  }

  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar
              authed={this.state.authed}
              getOut={this.getOut}
            />
            <div className="container">
              <div className="row">
                <Switch>
                  <Route path="/" exact component={Home} />
                  <PublicRoute
                    path="/login"
                    authed={this.state.authed}
                    component={Login}
                  />
                  <PublicRoute
                    path="/register"
                    authed={this.state.authed}
                    component={Register}
                  />
                  <PrivateRoute
                    path="/dashboard"
                    authed={this.state.authed}
                    component={Dashboard}
                  />
                  <PrivateRoute
                    path="/new/child"
                    authed={this.state.authed}
                    component={New}
                  />
                  <PrivateRoute
                    path="/child/childId/edit"
                    authed={this.state.authed}
                    component={Edit}
                  />
                  <PrivateRoute
                    path="/child/:childId/allplanets"
                    authed={this.state.authed}
                    component={AllPlanets}
                  />
                   <PrivateRoute
                    exact path="/child/:childId/savedPlanets"
                    authed={this.state.authed}
                    component={SavedPlanets}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
