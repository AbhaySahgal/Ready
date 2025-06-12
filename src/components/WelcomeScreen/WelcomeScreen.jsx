import React from 'react';
import './WelcomeScreen.css';

export default function WelcomeScreen({ onContinue }) {
  return (
    <div className="container">
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome to Ready!</h1>
      <p className="welcome-description">
        Sharpen your coding skills and ace those technical interviews with Confidence.
      </p>
      <button onClick={onContinue} className="welcome-button">
        Continue
      </button>
    </div>
    </div>
  );
}
