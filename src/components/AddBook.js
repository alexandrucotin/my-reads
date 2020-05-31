import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddBook extends Component {
  render() {
    return (
      <Link to="/search">
        <div className="addbook-container"></div>
      </Link>
    );
  }
}

export default AddBook;
