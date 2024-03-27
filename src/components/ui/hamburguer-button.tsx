"use client";
import React, { useState } from 'react';
import { AlignJustify } from 'lucide-react';

export default function HamburguerButton() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Adjust time here for the duration of the animation
  };

  return (
    <AlignJustify
      className={`${isAnimating ? 'animate-spin' : ''} h-5 w-5`}
      onClick={handleClick}
    />
  );
}
