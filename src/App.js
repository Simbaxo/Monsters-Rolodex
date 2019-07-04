import React, { Component } from 'react'
import { CardList } from "./components/card-list/card-list.component";
import './App.css';

// Class Component gives access to state
class App extends Component {
  constructor(props) {
    super(props) // calls the constructor method on component class to give access to this.state

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  // runs after output has been rendered to the dom
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') //grab data from url
      .then(response => response.json()) // turing data into json
      .then(users => this.setState({ // take data and update state to that data
        monsters: users
      }))
  }

  render() {
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          // make this a function handleChange()
          onChange={e =>
            this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={this.state.monsters} />
      </div>
    )
  }
}

export default App;
