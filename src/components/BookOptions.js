import React, { Component } from "react";
import PropTypes from "prop-types";

class BookOptions extends Component {
  state = {
    value: this.props.book.shelf || "none",
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
    return (
      <div className="bookoptions-container">
        <select
          onChange={this.handleSelection}
          value={this.state.value}
          className="bookoptions-selector"
        >
          <option disabled value="Move to...">
            Move to...
          </option>
          <option value="currentlyReading">Currently reading</option>
          <option value="wantToRead">Want to read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

BookOptions.propTypes = {
  book: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
};

export default BookOptions;
