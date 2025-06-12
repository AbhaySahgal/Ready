import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import QuestionScreen from './components/QuestionScreen/QuestionScreen';
import { questions } from './data';

export default function App() {
  const [screen, setScreen] = useState('welcome');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-800 flex items-center justify-center p-4 font-sans text-gray-100">
      {screen === 'welcome'
        ? <WelcomeScreen onContinue={() => setScreen('practice')} />
        : <QuestionScreen questions={questions} />}
    </div>
  );
}
