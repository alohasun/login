import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import RegisterForm from '../containers/register';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <RegisterForm/>
      </div>
    );
  }
}

export default App;
