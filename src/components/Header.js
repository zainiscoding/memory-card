import React from 'react';

const Header = (props) => {
  return (
    <div id='header'>
      <div id='scoreDisplay'>
        <p>Score: {props.score}</p>
      </div>
      <div id='highScoreDisplay'>
        <p>High score: {props.highScore}</p>
      </div>
    </div>
  );
};

export default Header;
