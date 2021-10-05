import React from "react";
import { Link } from "react-router-dom";

const Languge = () => {
  return (
    <div className="Home">
      <Link
        to="/languge/english"
        style={{ textDecoration: "none", margin: "3%" }}
      >
        <div className="box">
          <h1>English</h1>
        </div>
      </Link>
      <Link
        to="/languge/translate"
        style={{ textDecoration: "none", margin: "3%" }}
      >
        <div className="box">
          <h1>Translate</h1>
        </div>
      </Link>
    </div>
  );
};

export default Languge;
