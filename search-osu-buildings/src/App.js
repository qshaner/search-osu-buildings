import React, {Component} from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
constructor() {
  super()
  this.state = {
    buildings: [{
      name: '',
      address: '',
      imageUrl: '',
      categories: [],
      departments: []
        }]
  }
  this.handleClick = this.handleClick.bind(this);
}

handleClick() {
  console.log('Success!');
  axios.get('https://content.osu.edu/v2/buildings')
  .then(response => response.data.data.buildings.map(result => ({
    name: `${result.name}`,
    address: `${result.address}`,
    categories: `${result.categories}`,
    departments: `${result.departments}`,
    image: `${result.imageUrl}`
  }))).then(newData => console.log(newData))
}

  render() {
    return(
      <div className="button_container">
      <button className='button' onClick={this.handleClick}
      >Click Me</button>
      <p>{this.state.buildingName}</p>
      </div>
    )
  }
}

export default App