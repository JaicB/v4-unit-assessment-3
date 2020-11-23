import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import data from './data'
import SearchBar from './Components/SearchBar';

class App extends Component {
  constructor (){
    super();
    this.state = {
      books: data,
      shelf: []

    }
    
    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
  }

  addToShelf(title) {
    const newShelf = [...this.state.shelf, title]
    return this.setState({ shelf: newShelf })
  }

  clearShelf() {
     this.setState({ shelf: []})
  }
  
  
  render () {
    return (
      <div>
        <Header />
        <BookList books={this.state.books} addToShelf={this.addToShelf} clearShelf={this.clearShelf}/>
        <Shelf shelf={this.state.shelf} />
        <SearchBar />
      </div>
    );

  }
}

export default App;
