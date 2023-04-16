import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ words }) => {
 const [displayWord, setDisplayWord] = useState('');
 const [currentWordIndex, setCurrentWordIndex] = useState(0);
 const currentWord = words[currentWordIndex];

 useEffect(() => {
  let currentIndex = 0;
  let typingInterval;

  const typing = () => {
   typingInterval = setInterval(() => {
    if (currentIndex < currentWord.length) {
     setDisplayWord(currentWord.slice(0, currentIndex + 1));
     currentIndex++;
    } else {
     clearInterval(typingInterval);
     setTimeout(() => {
      setCurrentWordIndex((currentWordIndex + 1) % words.length);
     }, 1000);
    }
   }, 100);
  }

  typing();

  return () => {
   clearInterval(typingInterval);
  };
 }, [currentWord, currentWordIndex, words]);

 return <p>{displayWord}</p>;
};

export default TypingAnimation;
