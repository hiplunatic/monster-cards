import { useState, useEffect } from 'react';

import './App.css';
import './components/card-list/card-list.component';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search/search-box.component';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => setMonsters(users)
  );
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilterMonsters(newfilteredMonsters);
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  const onStringChange = (event) => {
    setSearchField(event.target.value);
  }


  console.log(filteredMonsters)


  return (
    <div className="App">
        <h1 className="app-title">Monster Cards</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder='Search Monsters' className='monsters-search-box'/>
        <CardList monsters={filteredMonsters} />
      </div>
  )
}
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then((users) => this.setState(() => {
//         return {monsters: users}
//       }));
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return {searchField };
//     });
//   }

//   render() {

//     const { monsters, searchField} = this.state;
//     const { onSearchChange} = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Cards</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder='Search Monsters' className='monsters-search-box'/>
//         <CardList monsters={filteredMonsters} />
//       </div>
//     ); 
//   }
// }

export default App;
