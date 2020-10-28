import React, { useEffect, useState } from 'react';

const CardContainer = () => {
  const [cardList, setCardList] = useState([
    'mike',
    'tyler',
    'sull',
    'luke',
    'dean',
    'garth',
    'mitch',
    'howie',
  ]);

  //An implementation of the knuth shuffle adapted from an answer by ashleedawg on StackOverflow

  function shuffleCardList() {
    const array = [...cardList];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function clickHandler() {
    setCardList(shuffleCardList());
  }

  useEffect(() => {
    setCardList(shuffleCardList());
  }, []);

  let clickedList = [];
  function addToClickedList(e) {
    console.log(e.target.firstChild.textContent);
    clickedList.push(e.target.firstChild.textContent);
    console.log(clickedList);
  }

  return (
    <>
      <div id='cardContainer'>
        {cardList.map((card) => {
          return (
            <div className='card' onClick={clickHandler}>
              <p>{card}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardContainer;
