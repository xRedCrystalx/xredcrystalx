'use client';
import React, { useEffect, useRef } from 'react';

const BackgroundCanvas = () => {
  // A ref for the canvas element
  const canvasRef = useRef(null);
  // A ref for storing the current mouse position
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const GRID_SIZE = 25;
    const REVEAL_RADIUS = window.innerWidth / 8;
    const UPDATE_INTERVAL = 500;
    
    // Variables to store the grid dimensions and the generated grid itself.
    let grid = [];
    let rows = 0;
    let cols = 0;
    
    // Store coordinates where "Lillie" is drawn so these don't get updated.
    let letterCoordinates = [];

    // Generates or regenerates the grid based on the current canvas size.
    const generateGrid = () => {
      cols = Math.ceil(canvas.width / GRID_SIZE);
      rows = Math.ceil(canvas.height / GRID_SIZE);
      grid = [];
      
      for (let y = 0; y < rows; y++) {
        grid[y] = [];
      
        for (let x = 0; x < cols; x++) {
          grid[y][x] = Math.random() > 0.5 ? '1' : '0';
        }
      }

      // Place the "Lillie" text once at a random position
      const text = "Lillie";
      const startCol = Math.floor(Math.random() * (cols - text.length));
      const startRow = Math.floor(Math.random() * rows);

      letterCoordinates = [];
      for (let i = 0; i < text.length; i++) {
        grid[startRow][startCol + i] = text[i];
        letterCoordinates.push({ row: startRow, col: startCol + i });
      }
    };

    // Resize canvas and recalc the grid upon window size change.
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generateGrid();
    };

    // Initialize canvas size and grid
    resizeCanvas();

    // Setup text drawing properties once (they do not change)
    ctx.font = `1.2em monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Draws the grid onto the canvas with fading cells depending on mouse distance.
    const draw = () => {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          // Center each cell by adding half of GRID_SIZE
          const posX = x * GRID_SIZE + GRID_SIZE / 2;
          const posY = y * GRID_SIZE + GRID_SIZE / 2;
          const dist = Math.hypot(mouseRef.current.x - posX, mouseRef.current.y - posY);
          const opacity = Math.max(0, 1 - dist / REVEAL_RADIUS);

          if (opacity > 0) {
            ctx.fillStyle = `rgba(255, 0, 0, ${opacity})`;
            ctx.fillText(grid[y][x], posX, posY);
          }
        }
      }
    };

    // Simplified animation loop using a self-calling function
    let animationFrame = requestAnimationFrame(function loop() {
      draw();
      animationFrame = requestAnimationFrame(loop);
    });

    // Update the grid on a fixed interval, but protect the "Lillie" cells
    const interval = setInterval(() => {
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          // Check if the current cell is NOT part of the "Lillie" text
          if (!letterCoordinates.some(coord => coord.row === y && coord.col === x)) {
            if (Math.random() < 0.1) {
              grid[y][x] = Math.random() > 0.5 ? '1' : '0';
            }
          }
        }
      }
    }, UPDATE_INTERVAL);

    // Listen for window resize events
    window.addEventListener('resize', resizeCanvas);

    // Cleanup listeners and intervals when the component is unmounted.
    return () => {
      clearInterval(interval);
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Listen to mouse movements to update the area that reveals the grid
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Render the canvas (which remains fixed in the background)
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        zIndex: -1,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none'
      }}
    />
  );
};

export default BackgroundCanvas;
