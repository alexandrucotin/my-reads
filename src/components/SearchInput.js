import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchInput extends Component {
  state = {
    value: "",
    timeout: 0,
  };

  handleChange = (event) => {
    const inputValue = event.target.value;
    this.setState(
      {
        value: inputValue,
      },
      () => {
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.props.booksQuery(this.state.value);
        }, 1000);
      }
    );
  };

  render() {
    return (
      <div className="searchinput-container">
        <input
          className="search-form"
          onChange={this.handleChange}
          type="text"
          placeholder="Search books"
          value={this.state.value}
        />
      </div>
    );
  }
}
SearchInput.propTypes = {
  booksQuery: PropTypes.func.isRequired,
};
export default SearchInput;
