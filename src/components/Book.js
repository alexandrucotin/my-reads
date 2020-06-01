import React from "react";
import BookOptions from "./BookOptions";

const Book = (props) => {
const{ title, authors, imageLinks } = props.book;
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
      <BookOptions book={props.book} update={props.update} />
    </div>
  );
};

export default Book;
