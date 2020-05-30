import React from "react";
import "./style/main.css";
import Header from "./components/Header";
import Category from "./components/Category";
import AddBook from "./components/AddBook";
import Footer from "./components/Footer";
import * as BooksApi from "./BooksAPI";

class App extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksApi.getAll().then((data) => {
      this.setState(() => ({
        books: data,
      }));
    });
  }

  // getBookById = (id) => {
  //   const book = this.state.books.filter((book) => book.id ===id)
  //   return book
  // }

  booksCategory = (currentPosition) => {
    const books = this.state.books.filter(
      (book) => book.shelf === currentPosition
    );
    return books;
  };

  updateBook = (book, shelf) => {
    console.log(
      "This is the state at the start of updateBook method:",
      this.state.books
    );
    BooksApi.update(book, shelf).then((data) => {
      console.log(data);
      const updatedBoks = this.state.books.map((book) => {
        if (data[book.shelf].includes(book.id)) {
          return book;
        } else {
          for (let [shelf, booksInShelf] of Object.entries(data)) {
            // check if book is in shelf
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
  };
  render() {
    return (
      <div className="main-contaier">
        <Header />
        <Category
          update={this.updateBook}
          books={this.booksCategory("currentlyReading")}
          name="Currently Reading"
        />
        <Category
          update={this.updateBook}
          books={this.booksCategory("wantToRead")}
          name="Want to Read"
        />
        <Category
          update={this.updateBook}
          books={this.booksCategory("read")}
          name="Read"
        />
        <AddBook />
        <Footer />
      </div>
    );
  }
}

export default App;
