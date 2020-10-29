import React from 'react';
import ScoreCounter from './ScoreCounter';

const Header = (props) => {
  return (
    <div id='header'>
      <div id='titleText'>
        <p>Memory Cards</p>
      </div>
      <div id='instructionText'>
        <p>Don't click anything more than once!</p>
      </div>
      <ScoreCounter score={props.score} highScore={props.highScore} />
    </div>
  );
};

export default Header;
