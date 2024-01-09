import React, { useEffect, useState } from 'react';

const Typewriter = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const text = "  Welcome to Koe's Kafe";
    let index = 0;

    const intervalId = setInterval(() => {
      setDisplayText((prevText) => prevText + text[index]);
      index++;

      if (index === text.length - 1) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 750);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className='flex h-[100%] justify-center items-center relative'>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      
      {/* Text and Cursor */}
      <span className="absolute heading text-5xl font-semibold text-center text-white z-10">
        {displayText}
        {showCursor && <span className='cursor text-white'>|</span>}
      </span>
    </div>
  );
};

export default Typewriter;