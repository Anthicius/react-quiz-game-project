import React from "react";
import Answers from "./Answers";

const Question = ({ question, onSelectAnswer }) => {
  return (
    <div id="question">
      <h2>{question.text}</h2>
      <Answers onSelectAnswer={onSelectAnswer} answers={question.answers} />
    </div>
  );
};

export default Question;
