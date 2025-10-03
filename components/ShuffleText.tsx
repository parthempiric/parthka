"use client";

import { useState, useRef, useEffect } from 'react';

interface ShuffleTextProps {
  text: string;
  className?: string;
}

const ShuffleText: React.FC<ShuffleTextProps> = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const shuffle = (array: string[]) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const handleMouseMove = () => {
    // Clear any existing timeout to prevent the text from reverting while the mouse is moving
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // Shuffle the text and update the display
    const shuffledArray = shuffle(text.split(''));
    setDisplayText(shuffledArray.join(''));

    // Set a timeout to revert to the original text when the mouse stops moving
    timeoutRef.current = setTimeout(() => {
      setDisplayText(text);
    }, 150); // Adjust this delay to control the sensitivity
  };

  const handleMouseLeave = () => {
    // Immediately revert to the original text when the mouse leaves the component
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setDisplayText(text);
  };
  
  useEffect(() => {
    // Cleanup on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);


  return (
    <span
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`font-mono ${className || ''}`}
    >
      {displayText}
    </span>
  );
};

export default ShuffleText;
