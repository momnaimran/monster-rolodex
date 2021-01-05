import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/cardlist/cardlist.component';
import { SearchBox } from "./components/search/search-box";

class App extends Component{
  constructor(){
      super();
      this.state=
      {
        monsters:
        [],
        searchfield: ''
      };
  }
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(users => this.setState({monsters:users})).catch(error=> console.log('we are screwed'));
  }
  render()
  {
    const {monsters, searchfield}= this.state;
    const filteredMonsters= monsters.filter(monster=> monster.name.toLowerCase().includes(searchfield.toLowerCase()) );
    return (
      <div className="App">
      <h1> Monsters Rolodex </h1>
     <SearchBox placeholder='Search Mosters' 
     eventhandler={e => {this.setState( {searchfield: e.target.value})}}/>
      <CardList  monsters={filteredMonsters}/>
       </div>
  );
  }
}


export default App;
