import React, { useEffect, useRef } from 'react';

export default function StarBg({ count = 35 }) {
  const ref = useRef();
  useEffect(() => {
    const cnv = ref.current;
    const ctx = cnv.getContext('2d');
    let running = true;

    const stars = Array.from({ length: count }).map(() => ({
      x: Math.random() * cnv.width,
      y: Math.random() * cnv.height,
      r: 1.5 + Math.random() * 1.7,
      a: Math.random() * Math.PI * 2,
      speed: 0.3 + Math.random() * 0.6,
      twinkle: 0.6 + Math.random() * 0.5
    }));
    function draw() {
      ctx.clearRect(0, 0, cnv.width, cnv.height);
      for (let s of stars) {
        ctx.save();
        ctx.globalAlpha = Math.abs(Math.sin(performance.now() * 0.001 * s.twinkle + s.a)) * 0.65 + 0.32;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
        ctx.fillStyle = '#fff9fb';
        ctx.shadowColor = '#fddeff';
        ctx.shadowBlur = 12 + 7 * Math.random();
        ctx.fill();
        ctx.restore();
      }
    }
    function animate() {
      for (let s of stars) {
        s.a += s.speed * 0.015;
      }
      draw();
      if (running) requestAnimationFrame(animate);
    }
    animate();
    return () => { running = false; };
  }, [count]);
  return <canvas ref={ref} width={window.innerWidth} height={window.innerHeight} style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} />;
}

