
import React ,{ Component }  from 'react';
import './App.css';
import { Cardlist } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'



class App extends Component {

  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField:''

    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    .then(users=>this.setState({monsters:users}));
  }
  render() {

    const {monsters,searchField}= this.state;
    const filteredMonsters = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));

  
 
    return (
<div className='app'>
 <h1>Monsters Rolodex</h1>
 <SearchBox placeholder='search monsters' handleChange= { e => this.setState ({ searchField : e.target.value})} ></SearchBox>
  <Cardlist  monsters = {filteredMonsters} />
 
</div>
    );
  }
}

export default App;
