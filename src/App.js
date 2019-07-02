import React, { Component } from 'react'
import './App.css';

// Class Component gives access to state
class App extends Component {
  constructor() {
    super() // calls the constructor method on component class to give access to this.state

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'asc1'
        },
        {
          name: 'Dracula',
          id: 'asr2'
        },
        {
          name: 'Zombie',
          id: 'as1w'
        },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster =>
            <h1 key={monster.id}> {monster.name} </h1>)
        }
      </div>
    )
  }
}

export default App;
