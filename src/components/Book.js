import React from "react";
import BookOptions from "./BookOptions";

const Book = (props) => {
const{ id, title, authors, imageLinks, update} = props;
  return (
    <div className="book-container">
      <div className="book">
        <div className="book-img">
          <img src={imageLinks.thumbnail} alt="" />
        </div>
        <div className="book-description">
          <p className="book-title">{title}</p>
          <p className="book-author">{authors}</p>
        </div>
      </div>
      <BookOptions bookId={id} update={update} />
    </div>
  );
};

export default Book;
