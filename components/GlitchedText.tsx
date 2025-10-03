"use client";

import { useState, useEffect, useRef } from 'react';

interface GlitchedTextProps {
  text: string;
  className?: string;
}

const GlitchedText: React.FC<GlitchedTextProps> = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*_#@';
  const animationDuration = 1200; // Total duration of the glitch effect in ms

  const animate = (timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }

    const elapsed = timestamp - startTimeRef.current;
    const progress = Math.min(elapsed / animationDuration, 1);

    const newText = text
      .split('')
      .map((char, index) => {
        if (char === ' ') return ' ';
        // As progress increases, the chance of revealing the original character grows
        if (progress > Math.random() || progress === 1) {
          return text[index];
        }
        // Otherwise, show a random character
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join('');

    setDisplayText(newText);

    if (progress < 1) {
      animationFrameRef.current = requestAnimationFrame(animate);
    } else {
      setDisplayText(text); // Ensure the final text is correct
    }
  };

  const handleMouseEnter = () => {
    // Reset state and start animation
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    startTimeRef.current = null;
    animationFrameRef.current = requestAnimationFrame(animate);

    // Fallback to ensure text is correct after animation
    timeoutRef.current = setTimeout(() => {
      setDisplayText(text);
    }, animationDuration);
  };

  const handleMouseLeave = () => {
    // Cancel animation and reset to original text
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    startTimeRef.current = null;
    setDisplayText(text);
  };

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`font-mono ${className || ''}`}
    >
      {displayText}
    </span>
  );
};

export default GlitchedText;
