import React, { Component } from "react";
import {} from "react-router-dom";
class BookOptions extends Component {
  state = {
    value: this.props.book.shelf || "select value",
  };

  update = () => {
    const { update, book } = this.props;
    update(book, this.state.value);
  };

  handleSelection = (event) => {
    if (window.location.pathname === "/") {
      const selectedShelf = event.target.value;
      this.setState({ value: selectedShelf }, () => {
        this.update();
      });
    } else {
      const selectedShelf = event.target.value;
      this.setState({ value: selectedShelf }, () => {
        this.update();
      });
    }
  };

  render() {
    // console.log(this.state)
    return (
      <div className="bookoptions-container">
        <select
          onChange={this.handleSelection}
          value={this.state.value}
          className="bookoptions-selector"
        >
          <option  value="Move to...">Move to...</option>
          <option value="currentlyReading">Currently reading</option>
          <option value="wantToRead">Want to read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookOptions;
