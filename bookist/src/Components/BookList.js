import React, { Component } from 'react';

class BookList extends Component {
  

    render() {
        var mappedBooks = this.props.books.map((item) => {
            return <div key={item.id}> 
                <title> { item.title }</title>
                <div> { item.author } </div>
                <img src={item.img} onClick={() => this.props.addToShelf(item.title)} ></img>
            </div>
        })


        return mappedBooks
    }
}

export default BookList