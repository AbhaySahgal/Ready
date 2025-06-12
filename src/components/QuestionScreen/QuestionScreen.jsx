import React, { useState } from 'react';
import './QuestionScreen.css';

export default function QuestionScreen({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [copied, setCopied] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleNextQuestion = () => {
    setShowSolution(false);
    setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
    setCopied(false);
  };

  const handlePreviousQuestion = () => {
    setShowSolution(false);
    setCurrentQuestionIndex((prev) => (prev - 1 + questions.length) % questions.length);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentQuestion.solution).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // revert after 2 seconds
    });
  };

  return (
    <div className="container">
      <div className="qs-container">
        <h2 className="qs-heading">
          Interview Question {currentQuestionIndex + 1} of {questions.length}
        </h2>

        <div className="qs-question-box">
          <p className="qs-question">
            <strong>Question:</strong> {currentQuestion.question}
          </p>
        </div>

        <button
          onClick={() => setShowSolution(!showSolution)}
          className="qs-toggle-button"
        >
          {showSolution ? 'Hide Answer' : 'Show Answer'}
        </button>

        {showSolution && (
          <div className="qs-solution-box">
            <pre className="qs-code">{currentQuestion.solution}</pre>
            <button onClick={copyToClipboard} className="qs-copy-button">
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        )}

        <div className="qs-nav-buttons">
          <button onClick={handlePreviousQuestion} className="qs-prev-button">
            Previous
          </button>
          <button onClick={handleNextQuestion} className="qs-next-button">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
