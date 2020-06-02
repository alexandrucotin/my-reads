import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const Category = (props) => {
  const { books, update, name } = props;
  return (
    <div className="category-container">
      <div className="category-header-container">
        <h3 className="category-header-title">{name}</h3>
      </div>
      <div className="row-books">
        {books.map((book) => (
          <Book update={update} key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

Category.propTypes = {
  update: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default Category;
