import React from "react";
import Category from "./Category";
import AddBook from "./AddBook";

class Home extends React.Component {
  render() {
    const {update, category} = this.props
    return (
      <div className="main-contaier">
        <Category
          update={update}
          books={category("currentlyReading")}
          name="Currently Reading"
        />
        <Category
          update={update}
          books={category("wantToRead")}
          name="Want to Read"
        />
        <Category
          update={update}
          books={category("read")}
          name="Read"
        />
        <AddBook />
      </div>
    );
  }
}

export default Home;
