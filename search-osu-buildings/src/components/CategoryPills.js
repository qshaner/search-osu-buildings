import React, {Component} from 'react'
import propTypes from 'prop-types'

const categoryColors = {
    parking: '#610061',
    food: '#c6926b',
    medical: '#f4c3d9',
    housing: '#b6ff90',
    wireless: '#6A5ACD',
    library: '#DA70D6',
    computing: '#90b6ff',
    interest: '#d990ff',
    recreation: '#44ffbf',
    lactation: '#e0f2f2'
}

class CategoryPills extends Component {

    constructor() {
        super();
 let pills = [];
/*  if(this.props.categories){
    this.props.categories.foreach((item) => {
//make a pill with the correct color depending on tag present
let name = item.name
if(name!=='Lactation Room'){
pills.push(
<div style={{backgroundColor: categoryColors.name }}>
<p>{item.name}</p>
</div>
) }
else {
    pills.push(
        <div style={{backgroundColor: categoryColors.lactation}}>
<p>Lactation</p>
</div>
    )
} 
    })  
 } */
    } 

    render() {
        return(
                <p> hi</p>
        ) 
    }

}

CategoryPills.propTypes ={
    categories: propTypes.array
}

export default CategoryPills