'use client';
import React, { useEffect, useRef } from 'react';

const GRID_SIZE = 25;
const REVEAL_RADIUS = 200;
const UPDATE_INTERVAL = 500;
const FONT_SIZE = 16

const BackgroundCanvas = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    
    // setup
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    // resize handler
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // generation of 1s and 0s
    const grid = [];
    const cols = Math.ceil(window.innerWidth / GRID_SIZE);
    const rows = Math.ceil(window.innerHeight / GRID_SIZE);

    for (let y = 0; y < rows; y++) {
      grid[y] = [];
      for (let x = 0; x < cols; x++) {
        grid[y][x] = Math.random() > 0.5 ? '1' : '0';
      }
    }

    const text = "Lillie";
    const startCol = Math.floor(Math.random() * (cols - text.length));
    const startRow = Math.floor(Math.random() * rows);
    const letterCoordinates = [];

    for (let i = 0; i < text.length; i++) {
      grid[startRow][startCol + i] = text[i];
      letterCoordinates.push({ row: startRow, col: startCol + i });
    }

    // draw logic
    const draw = () => {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = '1.2em monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const posX = x * GRID_SIZE;
          const posY = y * GRID_SIZE;
          
          const dist = Math.hypot(mouseRef.current.x - posX, mouseRef.current.y - posY);
          const opacity = Math.max(0, 1 - dist / REVEAL_RADIUS);

          if (opacity > 0) {
            ctx.fillStyle = `rgba(255, 0, 0, ${opacity})`;
            ctx.fillText(grid[y][x], posX, posY);
          }
        }
      }
    };

    let animationFrame;
    const loop = () => {
      draw();
      animationFrame = requestAnimationFrame(loop);
    };
    loop();

    const interval = setInterval(() => {
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {

          if (!letterCoordinates.some(coord => coord.row === y && coord.col === x)) {
            if (Math.random() < 0.1) {
              grid[y][x] = Math.random() > 0.5 ? '1' : '0';
            }
          }

        }
      }
    }, UPDATE_INTERVAL);

    return () => {
      clearInterval(interval);
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, []); 

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }; 
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []); 

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', zIndex: -1,
        width: '100vw', height: '100vh',
        pointerEvents: 'none',
      }}
    />
  );
};

export default BackgroundCanvas;