import React from "react";
import QuizList from "../components/quizList/QuizList";

const Translate = ({ quizListTranslate }) => {
  return (
    <div className="info">
      <QuizList quizList={quizListTranslate} />
    </div>
  );
};

export default Translate;
