import React, {Component} from 'react'
import './App.css'
import axios from 'axios'
import jsonData from './components/buildings';

class App extends Component {
constructor() {
  super()
  this.state = {
    buildings: jsonData.data,
    searchText: ''
  }
}

componentDidMount() {
  console.log('Success!');
  this.setState({buildings: jsonData});

  //console.log('buildings: ', this.state.buildings);
}

getResults() {
//let search = this.state.searchText;
console.log('specific name: ', this.state.buildings.name['']);

//this.state.buildings.test.name["search"];
}


  render() {
    return(
      <div>
      <div className="button_container">
     <form>
       <input type="text" placeholder="Search..." name="search"
       onChange={text => this.setState({searchText: text})}/>
       <button type="submit"className onSubmit={this.getResults()}>GO</button>
     </form>
     {/* <p>How are you searching?</p>
     <form>
     <input type="radio" name="searchParams" value="Name"/> Name
       <input type="radio" name="searchParams" value="Address"/> Address
     </form> */}
     </div>
      </div>
    )
  }
}

export default App