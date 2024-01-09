import React, { useEffect, useState } from 'react';

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayText((prevText) => prevText + text[index]);
      index++;

      if (index === text.length-1) {
        clearInterval(intervalId);
        startBlinkingCursor();
      }
    }, 175);

    return () => clearInterval(intervalId);
  }, [text]);

  const startBlinkingCursor = () => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    setTimeout(() => {
      clearInterval(cursorInterval);
      setShowCursor(false);
    }, 5000);
  };

  const decodedText = displayText.replace(/&apos;/g, "'").replace(/&quot;/g, '"');

  return (
    <div className='animation_layer parallax text-6xl font-mono font-bold text-[#E2D3C4] relative'>
      <div className='inline-block'>{decodedText}</div>
      {showCursor && <span className='inline-block w-1 h-15 bg-coffee'>&nbsp;</span>}
    </div>
  );
};