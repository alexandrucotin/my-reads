import React, { Component } from "react";
import Book from "./Book";
import SearchInput from "./SearchInput";

class SearchBook extends Component {
  render() {
    const { update, booksQuery, searchedBooks, addBook } = this.props;
    return (
      <div className="searchpage-container">
        Search your book!
        <SearchInput booksQuery={booksQuery} />
        <div className="row-books">
          {searchedBooks.map((book) => (
            <Book addBook={addBook} update={update} key={book.id} book={book} />
          ))}
        </div>
      </div>
    );
  }
}

export default SearchBook;
