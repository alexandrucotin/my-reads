import React from "react";
import Book from "./Book";

const Category = (props) => {
  const {books} = props
  return (
    <div className="category-container">
      <div className="category-header-container">
        <h3 className="category-header-title">{props.name}</h3>
      </div>
      <div className="row-books">
        {books.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} />
        ))}
      </div>
    </div>
  );
};

export default Category;
