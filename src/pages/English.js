import React from "react";
import QuizList from "../components/quizList/QuizList";

const English = ({ quizListEnglish }) => {
  return (
    <div className="info">
      <QuizList quizList={quizListEnglish} />
    </div>
  );
};

export default English;
