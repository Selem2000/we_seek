import React from "react";
import { useLocation } from "react-router";
import QuizList from "../components/quizList/QuizList";

const Informatique = () => {
  const {
    state: { quizList },
  } = useLocation();
  return (
    <div className="info">
      <QuizList quizList={quizList} />
    </div>
  );
};

export default Informatique;
