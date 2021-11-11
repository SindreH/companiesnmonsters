import { Component } from 'react';
//import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://data.brreg.no/enhetsregisteret/api/enheter')
    .then(response => response.json())
    //.then(enheter => console.log(enheter._embedded))
    .then(firma => this.setState({ monsters: firma._embedded.enheter}))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value }, () => console.log(this.state))
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.navn.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Companies R Us</h1>
        <SearchBox 
          placeholder="Search Companies"
          handleChange={this.handleChange}
        />  
        <CardList monsters={filteredMonsters} />
        
      </div>
    )
  }
}

export default App;
