import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

// Class Component gives access to state
class App extends Component {
  constructor() {
    super() // calls the constructor method on component class to give access to this.state

    this.state = {
      string: 'Hello Andres'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({ string: 'Hello Jalessa' })}>Change Text</button>
        </header>
      </div>
    )
  }
}

export default App;
