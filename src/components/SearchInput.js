import React, { Component } from "react";

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
    console.log(this.state);
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

export default SearchInput;
