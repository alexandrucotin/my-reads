import React from "react";
import Category from "./Category";
import ButtonLink from "./ButtonLink";
import PropTypes from "prop-types";

class Home extends React.Component {
  render() {
    const { update, category } = this.props;
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
        <Category update={update} books={category("read")} name="Read" />
        <ButtonLink path={"/search"} class="addbook-container" />
      </div>
    );
  }
}
Home.propTypes = {
  update: PropTypes.func.isRequired,
  category: PropTypes.func.isRequired,
};

export default Home;
