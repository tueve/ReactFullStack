import React, { Component } from 'react';
import logo from './assets/img/logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          it <code>src/App.js</code> and save to reload.
        </p>
        <button className="btn btn-primary">ABKJH</button>
      </div>
    );
  }
}

export default App;
