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
    searchedBooks: []
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

  searchBooks = (query) => {
    if (query === "" || query === " ") {
      this.setState(() => ({
        searchedBooks: [],
      }));
    } else {
      BooksApi.search(query, 10).then((books) => {
        if (books) {
          this.setState(() => ({
            searchedBooks: books,
          }));
        } else {
          return "There is no book found";
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
        const updatedBooks = [...this.state.books, book];
        console.log("This is the updatedBooks in update method: ", updatedBooks)
        this.setState(() => ({
          books: updatedBooks
        }));
      });
    }
  };

  render() {
    console.log("This is the state in render method: ", this.state)
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
              addBook={this.addBook}
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
