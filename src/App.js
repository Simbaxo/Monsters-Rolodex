import React, { Component } from 'react'
import { CardList } from "./components/card-list/card-list.component";
import './App.css';

// Class Component gives access to state
class App extends Component {
  constructor() {
    super() // calls the constructor method on component class to give access to this.state

    this.state = {
      monsters: []
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
        <CardList name="Andres">
          {
            this.state.monsters.map(monster =>
              <h1 key={monster.id}> {monster.name} </h1>)
          }
        </CardList>
      </div>
    )
  }
}

export default App;
