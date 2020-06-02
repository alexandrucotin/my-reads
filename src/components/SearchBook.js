import React, { Component } from "react";
import Book from "./Book";
import SearchInput from "./SearchInput";
import ButtonLink from "./ButtonLink";
import PropTypes from "prop-types";

class SearchBook extends Component {
  render() {
    const { update, booksQuery, searchedBooks, error } = this.props;
    if (error) {
      return (
        <div className="searchpage-container">
          Search your book!
          <SearchInput booksQuery={booksQuery} />
          <div className="row-books">
            <p>Sorry we couldn't find any book with the query you've input!</p>
          </div>
          <ButtonLink path="/" class="backToHome-container" />
        </div>
      );
    } else {
      return (
        <div className="searchpage-container">
          Search your book!
          <SearchInput booksQuery={booksQuery} />
          <div className="row-books">
            {searchedBooks.map((book) => (
              <Book update={update} key={book.id} book={book} />
            ))}
          </div>
          <ButtonLink path="/" class="backToHome-container" />
        </div>
      );
    }
  }
}

SearchBook.propTypes = {
  error: PropTypes.bool.isRequired,
  update: PropTypes.func.isRequired,
  searchedBooks: PropTypes.array.isRequired,
  booksQuery: PropTypes.func.isRequired,
};

export default SearchBook;
