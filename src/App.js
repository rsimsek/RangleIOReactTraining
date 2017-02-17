import React, { Component } from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      robots: [],
      searchTerm: "",
      isPending: true,
    }
  }

  onSearchChange = (evt) => {
    //console.log(evt.target.value);
    this.setState({searchTerm: evt.target.value})
  }

  componentDidMount(){
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          this.setState({
            robots : data,
            isPending: false
          });
        })
    }, 3000);
  }

  render() {
    //ES6 feature to access the search term without saying this.state.searchTerm all the time
    const {searchTerm, robots, isPending} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
      <div  className='tc'>
        <h1>RoboDex</h1>
        <SearchBox onSearchChange={this.onSearchChange}/>
        <Scroll>
          {isPending ? <h2 className='tc'>Loading...</h2>:<CardList robots={filteredRobots}/>}
        </Scroll>
      </div>
    );
  }
}

export default App;
