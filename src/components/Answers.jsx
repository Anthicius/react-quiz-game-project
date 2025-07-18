import React from 'react';

const Answers = ({ answers, onSelectAnswer }) => {
  return (
    <div id="answers">
      {answers.map((answer, index) => (
        <div className="answer" key={index}>
          <button onClick={() => onSelectAnswer(answer)}>{answer}</button>
        </div>
      ))}
    </div>
  );
};

export default Answers;
