import React, { useState, useEffect } from 'react';

function getTimeRemaining(targetDate) {
  const total = targetDate - new Date();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

export default function Countdown({ target }) {
  const targetDate = typeof target === 'string' ? new Date(target) : target;
  const [time, setTime] = useState(getTimeRemaining(targetDate));
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeRemaining(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (time.total <= 0) {
    return <span className="countdown">🎊 Happy New Year! 🎊</span>;
  }

  return (
    <div className="countdown" style={{ margin: '2rem 0', fontWeight: 'bold', fontSize: '2rem', letterSpacing: '2px' }}>
      {time.days > 0 && <span>{time.days}d </span>}
      <span>{String(time.hours).padStart(2, '0')}:{String(time.minutes).padStart(2, '0')}:{String(time.seconds).padStart(2, '0')}</span>
      <span style={{ fontSize: '1rem', marginLeft: 10 }}>left in {targetDate.getFullYear()}!</span>
    </div>
  );
}

