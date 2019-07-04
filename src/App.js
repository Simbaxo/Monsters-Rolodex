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
    // pulls the value from state objects and sets them as new const value
    const { monsters, searchField } = this.state
    // filter creates a new array
    const filteredMonsters = monsters.filter(monster =>
      // return matches that include each letter
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          // make this a function handleChange()
          onChange={e =>
            this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
