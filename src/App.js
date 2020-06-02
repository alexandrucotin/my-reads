import React from "react";
import "./style/main.css";
import Header from "./components/Header";
import SearchBook from "./components/SearchBook";
import Home from "./components/Home";
import Footer from "./components/Footer";
import * as BooksApi from "./BooksAPI";
import { Route } from "react-router-dom";

class App extends React.Component {
  state = {
    books: [],
    searchedBooks: [],
    error: false,
  };

  componentDidMount() {
    BooksApi.getAll().then((data) => {
      this.setState(() => ({
        books: data,
      }));
    });
  }

  booksCategory = (currentPosition) => {
    const books = this.state.books.filter(
      (book) => book.shelf === currentPosition
    );
    return books;
  };

  handleError = (state) => {
    this.setState(() => ({
      error: state,
    }));
  };
  searchBooks = (query) => {
    if (query === "" || query === "^\\s+$") {
      this.setState(() => ({
        error: false,
        searchedBooks: [],
      }));
    } else {
      BooksApi.search(query).then((books) => {
        if (!books.error) {
          const { books: currentStateBooks } = this.state;
          const booksIds = currentStateBooks.reduce((result, book) => {
            result[book.id] = book.shelf;
            return result;
          }, {});
          for (let book of books) {
            if (book.id in booksIds) {
              book.shelf = booksIds[book.id];
            }
          }
          this.setState(() => ({
            error: false,
            searchedBooks: books,
          }));
        } else {
          this.setState(() => ({
            error: true,
          }));
          return "error";
        }
      });
    }
  };

  updateBook = (book, shelf) => {
    if (this.state.books.includes(book)) {
      BooksApi.update(book, shelf).then((data) => {
        const updatedBoks = this.state.books.map((book) => {
          if (data[book.shelf].includes(book.id)) {
            return book;
          } else {
            for (let shelf of Object.keys(data)) {
              if (data[shelf].includes(book.id)) {
                book.shelf = shelf;
                return book;
              }
            }
          }
        });
        this.setState(() => ({
          books: updatedBoks,
        }));
      });
    } else {
      BooksApi.update(book, shelf).then(() => {
        book.shelf = shelf;
        const updatedBooks = [...this.state.books, book];
        this.setState(() => ({
          books: updatedBooks,
        }));
      });
    }
  };

  render() {
    return (
      <div className="main-container">
        <Header />
        <Route
          exact
          path="/"
          render={() => (
            <Home update={this.updateBook} category={this.booksCategory} />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBook
              error={this.state.error}
              update={this.updateBook}
              searchedBooks={this.state.searchedBooks}
              booksQuery={this.searchBooks}
            />
          )}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
