import React, { useEffect, useState } from 'react';
import bbq from './images/bbq.jpg';
import burger from './images/burger.jpg';
import chickenSkewers from './images/chickenSkewers.jpg';
import curry from './images/curry.jpg';
import frenchFries from './images/frenchFries.jpg';
import friedChicken from './images/friedChicken.jpg';
import pasta from './images/pasta.jpg';
import pizza from './images/pizza.jpg';
import ramen from './images/ramen.jpg';
import soupDumplings from './images/soupDumplings.jpg';
import sushi from './images/sushi.jpg';
import tacos from './images/tacos.jpg';
var uniqid = require('uniqid');

const CardContainer = (props) => {
  const [cardList, setCardList] = useState([
    { name: 'BBQ', image: bbq },
    { name: 'Burgers', image: burger },
    { name: 'Chicken Skewers', image: chickenSkewers },
    { name: 'Curry', image: curry },
    { name: 'French Fries', image: frenchFries },
    { name: 'Fried Chicken', image: friedChicken },
    { name: 'Pasta', image: pasta },
    { name: 'Pizza', image: pizza },
    { name: 'Ramen', image: ramen },
    { name: 'Soup Dumplings', image: soupDumplings },
    { name: 'Sushi', image: sushi },
    { name: 'Tacos', image: tacos },
  ]);
  const [clickedCards, setClickedCards] = useState([]);

  //Initial shuffle on page load
  useEffect(() => {
    setCardList(shuffleCardList());
    // eslint-disable-next-line
  }, []);

  //An implementation of the knuth shuffle adapted from an answer by ashleedawg on StackOverflow
  function shuffleCardList() {
    const arrayToShuffle = [...cardList];
    for (let i = arrayToShuffle.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [arrayToShuffle[i], arrayToShuffle[randomIndex]] = [
        arrayToShuffle[randomIndex],
        arrayToShuffle[i],
      ];
    }
    return arrayToShuffle;
  }

  //Add a card to the list of clicked cards
  function addToClickedCards(e) {
    const targetCard = e.target.lastChild.textContent;

    if (!clickedCards.includes(targetCard)) {
      setClickedCards([...clickedCards, targetCard]);
      props.setScore(props.score + 1);
    } else if (clickedCards.includes(targetCard)) {
      props.setHighScore(clickedCards.length);
      setClickedCards([]);
      props.setScore(0);
    }
  }

  function clickHandler(e) {
    setCardList(shuffleCardList());
    addToClickedCards(e);
  }

  return (
    <>
      <div id='cardContainer'>
        {cardList.map((card) => {
          return (
            <div
              key={uniqid()}
              className='card'
              onClick={clickHandler}
              onMouseEnter={(e) => (e.target.className = 'growCard')}
            >
              <img src={card.image} alt={card.name} className='cardImage'></img>
              <p className='cardText'>{card.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardContainer;
