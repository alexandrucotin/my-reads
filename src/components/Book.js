import React from "react";
import BookOptions from "./BookOptions";
import img from "../style/icons/main.jpg"

class Book extends React.Component {
  handleImgThumbnail = (linkIMG) => {
    if (!linkIMG) {
      return img
    } else {
      return linkIMG.thumbnail;
    }
  };
  render() {
    const { title, authors, imageLinks } = this.props.book;
    return (
      <div className="book-container">
        <div className="book">
          <div className="book-img">
            <img className="book-image" src={this.handleImgThumbnail(imageLinks)} alt="" />
          </div>
          <div className="book-description">
            <p className="book-title">{title}</p>
            <p className="book-author">{authors}</p>
          </div>
        </div>
        <BookOptions book={this.props.book} update={this.props.update} />
      </div>
    );
  }
}

export default Book;
