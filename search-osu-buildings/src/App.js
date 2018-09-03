import React, {Component} from 'react'
import './App.css'
import axios from 'axios'
import jsonData from './components/buildings';
import {SearchBar} from 'react-native-elements'

class App extends Component {
constructor() {
  super()
  this.state = {
    buildings: {test: jsonData.data.buildings},
    searchText: ''
  }
}

componentDidMount() {
  console.log('Success!');
  this.setState({buildings: jsonData});

  //console.log('buildings: ', this.state.buildings);
  console.log('specific name: ', this.state.buildings.test[0].address);
}



  render() {
   //const buildings = this.state.buildings;
   //let buildingsList = '';
    return(
      <div className="button_container">
      <button className='button' 
      >Click Me</button>
      <p></p>
      <SearchBar
      onChangeText= {text => this.setState({searchText: text})}
      placeholder="Search..."
      ></SearchBar>
      </div>
    )
  }
}

export default App