import React, { useState } from 'react';
import hi from './hi.png'
import hi2 from './hi2.png'

function QuizQuestion() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const question = {
    text: 'Select the image of a skunk',
    options: [
      { src: hi, id: 'a', text: 'London' },
      { id: 'b', text: 'Paris' },
      { id: 'c', text: 'Berlin' },
      { id: 'd', text: 'Rome' },
    ],
    correctAnswer: 'b',
  };

  const handleAnswerClick = (optionId) => {
    setSelectedAnswer(optionId);
    setIsCorrect(optionId === question.correctAnswer);
  };

  return (
    <div>
      <h3>{question.text}</h3>
      {question.options.map((option) => (
        <button
          key={option.id}
          onClick={() => handleAnswerClick(option.id)}
          className= "buttons"
        >
          {option.text}
        </button>
      ))}
      {isCorrect !== null && (
        <p>{isCorrect ? 'Correct!' : 'Incorrect!'}</p>
      )}
    </div>
  );
}

export default QuizQuestion;