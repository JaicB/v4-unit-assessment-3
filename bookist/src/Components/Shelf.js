import React, { Component } from 'react';

class Shelf extends Component {
    
    render() {
        var mappedTitles = this.props.shelf.map((item) => {
            return <div key={item.id}>
                <title> { item.title } </title>
                <button onClick={this.clearShelf} > clear shelf </button>
            </div>

        }) 

        return mappedTitles
    }
}

export default Shelf