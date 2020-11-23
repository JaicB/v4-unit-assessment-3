import React, { Component } from 'react';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            user: '',
        };
    }
      
    
    render () {
        return (
            <div> 
                <button> search </button>
                <button> clear search </button>
            </div>
        )
    }
}

export default SearchBar