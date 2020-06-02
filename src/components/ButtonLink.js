import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ButtonLink = (props) => {
  return (
    <Link to={props.path}>
      <div className={props.class}></div>
    </Link>
  );
};

ButtonLink.propTypes = {
  path: PropTypes.string.isRequired,
  class: PropTypes.string.isRequired,
};

export default ButtonLink;
