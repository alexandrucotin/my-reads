import React from "react";
import BookOptions from "./BookOptions";

const Book = (props) => {
  return (
    <div className="book-container">
      <div className="book">
        <div className="book-img">
          <img src="" alt="" />
        </div>
        <div className="book-description">
          <p className="book-title">{props.title}</p>
          <p className="book-author">{props.author}</p>
        </div>
      </div>
      <BookOptions />
    </div>
  );
};

export default Book;
