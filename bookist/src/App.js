import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import { data } from './data'

class App extends Component {
  constructor (){
    super();
    this.state = {
      data: []
    }
  }
  
  
  
  
  render () {
    return (
      <div>
        <Header />
        <BookList />
        <Shelf />
      </div>
    );

  }
}

export default App;
