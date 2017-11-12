import React, { Component } from 'react';

import { Switch, BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Nav from './app/js/components/Nav/Nav';
import HomePage from './app/js/containers/HomePage/Home';
import TimeDashBoard from './app/js/containers/TimeDashBoard/TimeDashBoard';
import GitHubDashBoard from './app/js/containers/GitHubDashBoard/GitHubDashBoard';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/timedashboard" component={TimeDashBoard} />
            <Route path="/githubdashboard" component={GitHubDashBoard} />
            <Route path="/" exact component={HomePage} />
            <Route
              render={() => {
                return <p>Not found</p>;
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
