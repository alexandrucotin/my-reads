import React from "react";
import Book from "./Book";

const Category = (props) => {
  const {books} = props
  console.log("Books in category:", books)
  return (
    <div className="category-container">
      <div className="category-header-container">
        <h3 className="category-header-title">{props.name}</h3>
      </div>
      <div className="row-books">
        {books.map((book) => (
          <Book key={book.id} title={book.title} author={book.title} />
        ))}
      </div>
    </div>
  );
};

export default Category;
