import React from 'react';

const ScoreCounter = (props) => {
  return (
    <div id='scoreCounterContainer'>
      <div id='scoreDisplay'>
        <p className='scoreText'>Score: {props.score}</p>
      </div>
      <div id='highScoreDisplay'>
        <p className='scoreText'>High score: {props.highScore}</p>
      </div>
    </div>
  );
};

export default ScoreCounter;
