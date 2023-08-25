import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "linda",
          id: "1"
        },
        {
          name: "Frank",
          id: "2"
        },
        {
          name: "Jacky",
          id: "3"
        },
        {
          name: "Taco",
          id: "4"
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            )
          })
        }
      </div>
    ); 
  }
}

export default App;
