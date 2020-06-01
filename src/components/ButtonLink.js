import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = (props) => {
  return (
    <Link to={props.path}>
      <div className={props.class}></div>
    </Link>
  );
};

export default ButtonLink;
