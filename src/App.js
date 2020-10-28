import React, { useState } from 'react';
import CardContainer from './components/CardContainer';
import Header from './components/Header';
import './styles/reset.css';
import './styles/main.css';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div id='app'>
      <Header score={score} highScore={highScore} />
      <CardContainer
        score={score}
        setScore={setScore}
        setHighScore={setHighScore}
        highScore={highScore}
      />
    </div>
  );
}

export default App;
