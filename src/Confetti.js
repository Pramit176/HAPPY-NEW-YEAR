import React from 'react';
import './Confetti.css';

function randomColor() {
  const colors = ['#FFD700', '#FF69B4', '#00FFFF', '#ADFF2F', '#FF6347', '#FFB6C1'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function makeConfettiPiece(left, delay, size) {
  const style = {
    left: `${left}%`,
    animationDelay: `${delay}s`,
    width: size,
    height: size * 1.5,
    background: randomColor(),
    opacity: 0.9,
  };
  return <div className="confetti-piece" style={style} key={`${left}-${delay}-${size}`}/>;
}

export default function Confetti() {
  // Generates many confetti pieces randomly
  const pieces = [];
  for (let i = 0; i < 60; i++) {
    pieces.push(makeConfettiPiece(
      Math.random() * 100, // left
      Math.random() * 3,   // delay
      12 + Math.random() * 12 // size
    ));
  }
  return <div className="confetti-container">{pieces}</div>;
}

