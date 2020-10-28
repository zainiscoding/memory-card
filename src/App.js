import React, { useState } from 'react';
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import ScoreCounter from './components/ScoreCounter';
import './styles/reset.css';
import './styles/main.css';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div id='app'>
      <Header />
      <div id='gameContainer'>
        <CardContainer
          score={score}
          setScore={setScore}
          setHighScore={setHighScore}
          highScore={highScore}
        />
        <ScoreCounter score={score} highScore={highScore} />
      </div>
    </div>
  );
}

export default App;
