import React from "react";
import "./style/main.css";
import Header from "./components/Header";
import Category from "./components/Category";
import AddBook from "./components/AddBook";
import Footer from "./components/Footer";

class App extends React.Component {
  state = {
    books: [
      {
        id: 0,
        title: "First book",
        author: "Me",
        description: "Hello this is the description of the first book",
        category: "Fiction",
        currentPosition: "Currently Reading",
        img: "",
      },
      {
        id: 1,
        title: "Second book",
        author: "Me",
        description: "Hello this is the description of the second book",
        category: "Fiction",
        currentPosition: "Want to Read",
        img: "",
      },
      {
        id: 2,
        title: "Third book",
        author: "Me",
        description: "Hello this is the description of the third book",
        category: "Fiction",
        currentPosition: "Currently Reading",
        img: "",
      },
    ],
  };

  getBooks = (currentPosition) => {
    const books = this.state.books.filter(
      (book) => book.currentPosition === currentPosition
    );
    return books;
  };
  render() {
    return (
      <div className="main-contaier">
        <Header />
        <Category
          books={this.getBooks("Currently Reading")}
          name="Currently Reading"
        />
        <Category
          books={this.getBooks("Want to Read")}
          name="Want to Read"
        />
        <AddBook />
        <Footer />
      </div>
    );
  }
}

export default App;
