import * as React from 'react';
import { useRef } from 'react';
import './style.css';
import gsap from 'gsap';

export default function App() {
  const handlePointerEvent = () => {
    const randomNumber = Math.floor(Math.random() * (5 - 1) + 1);

    gsap.to('.square1', {
      duration: 1,
      x:
        randomNumber === 1 || randomNumber === 4
          ? -30
          : randomNumber === 2 || randomNumber === 3
          ? 30
          : 30,
      y:
        randomNumber === 1 || randomNumber === 2
          ? 30
          : randomNumber === 3 || randomNumber === 4
          ? -30
          : -30,
    });

    gsap.to('.square3', {
      duration: 1,
      x:
        randomNumber === 1 || randomNumber === 4
          ? 30
          : randomNumber === 2 || randomNumber === 3
          ? -30
          : -30,
      y:
        randomNumber === 1 || randomNumber === 2
          ? -30
          : randomNumber === 3 || randomNumber === 4
          ? 30
          : 30,
    });
  };

  const handleLeaveEvent = () => {
    gsap.to('.square1', {
      duration: 1,
      x: 0,
      y: 0,
    });

    gsap.to('.square3', { duration: 1, x: 0, y: 0 });
  };

  return (
    <main>
      <div className="container">
        <div className="square1 square"></div>
        <div
          className="square2 square"
          onMouseEnter={() => handlePointerEvent()}
          onMouseLeave={() => handleLeaveEvent()}
        ></div>
        <div className="square3 square"></div>
      </div>
    </main>
  );
}
