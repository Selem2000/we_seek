import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="logo">
          <b>We</b>
          <s>Seek</s>
        </h1>
      </Link>
    </div>
  );
};

export default NavBar;
