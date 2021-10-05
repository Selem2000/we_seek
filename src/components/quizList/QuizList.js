import { Button } from "@mui/material";
import React, { useState } from "react";
import Quiz from "../quiz/Quiz";
import Result from "../Result";
import "./QuizList.css";

const QuizList = ({ quizList }) => {
  const [points, setPoints] = useState(0);
  const [counter, setCounter] = useState(0);
  const [clicked, setClicked] = useState(false);

  const handelReset = () => {
    let li = document.querySelectorAll("li");
    li.forEach((e) => e.classList.remove("correct", "incorrect"));
  };
  return (
    <div className="quiz-list">
      <Quiz
        quiz={quizList[counter]}
        setPoints={setPoints}
        points={points}
        setClicked={setClicked}
        clicked={clicked}
      />

      {counter < quizList.length - 1 ? (
        <Button
          style={{
            border: "2px solid",
            fontWeight: "900",
            position: "absolute",
            left: "75%",
            top: "60%",
          }}
          onClick={() => {
            setCounter(counter + 1);
            setClicked(false);
            handelReset();
          }}
        >
          Next
        </Button>
      ) : (
        <Result points={points} />
      )}
    </div>
  );
};

export default QuizList;
