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

  booksCategory = (currentPosition) => {
    const books = this.state.books.filter(
      (book) => book.shelf === currentPosition
    );
    return books;
  };

  updateBook = (book, shelf) => {
    BooksApi.update(book, shelf);
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
