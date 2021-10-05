import React from "react";
import { Link } from "react-router-dom";

const Home = ({ quizListInformatique }) => {
  return (
    <div className="Home">
      <Link
        to={{
          pathname: "/informatique",
          state: { quizList: quizListInformatique },
        }}
        style={{ textDecoration: "none", margin: "3%" }}
      >
        <div className="box">
          <h1>Informatique</h1>
        </div>
      </Link>
      <Link to="/languge" style={{ textDecoration: "none", margin: "3%" }}>
        <div className="box">
          <h1>Languge</h1>
        </div>
      </Link>
    </div>
  );
};

export default Home;
