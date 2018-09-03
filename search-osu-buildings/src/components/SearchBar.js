import React, {Component} from 'react'

class SearchBar extends Component {
    state = {
        query: '',
        results: []
    }



    render() {
        return (
           <form method="get">
<input placeholder="Seach..."/>
<input type="submit" value="Go"></input>
           </form> 
        )
    }
}

export default SearchBar