import React from "react";
import "./Quiz.css";

const Quiz = ({ quiz, points, setPoints, setClicked, clicked }) => {
  return (
    <div className="quiz-box">
      <h1 className="question">{quiz.question}</h1>
      <ul className="response-list">
        <li
          style={clicked ? { pointerEvents: "none" } : {}}
          className={`response `}
          onClick={(e) => {
            setPoints(
              e.target.innerHTML == quiz.correctAnswer ? points + 1 : points
            );

            e.target.classList.add(
              e.target.innerHTML == quiz.correctAnswer ? "correct" : "incorrect"
            );

            setClicked(true);
          }}
        >
          {quiz.a}
        </li>
        <li
          style={clicked ? { pointerEvents: "none" } : {}}
          className={`response `}
          onClick={(e) => {
            setPoints(
              e.target.innerHTML == quiz.correctAnswer ? points + 1 : points
            );
            e.target.classList.add(
              e.target.innerHTML == quiz.correctAnswer ? "correct" : "incorrect"
            );

            setClicked(true);
          }}
        >
          {quiz.b}
        </li>
        <li
          style={clicked ? { pointerEvents: "none" } : {}}
          className={`response `}
          onClick={(e) => {
            setPoints(
              e.target.innerHTML == quiz.correctAnswer ? points + 1 : points
            );
            e.target.classList.add(
              e.target.innerHTML == quiz.correctAnswer ? "correct" : "incorrect"
            );

            setClicked(true);
          }}
        >
          {quiz.c}
        </li>
      </ul>
    </div>
  );
};

export default Quiz;
