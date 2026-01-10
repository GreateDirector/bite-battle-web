"use client";

import { useState, useEffect, useRef } from "react";
import ArenaCell from "./ArenaCell";

interface AutoPlayArenaProps {
  width: number;
  isMobile: boolean;
}

type CellValue = "burger" | "pizza" | null;

export default function AutoPlayArena({ width, isMobile }: AutoPlayArenaProps) {
  const [cells, setCells] = useState<CellValue[]>(Array(12).fill(null));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);
  const gameStateRef = useRef({ index: 0, turn: "burger" as "burger" | "pizza" });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const cellSize = width / 4;
  const rows = 3;
  const cols = 4;

  // Auto-play game loop
  useEffect(() => {
    const placePiece = () => {
      const { index, turn } = gameStateRef.current;

      if (index >= 12) {
        // Board is full, reset after delay
        timeoutRef.current = setTimeout(() => {
          setCells(Array(12).fill(null));
          gameStateRef.current = { index: 0, turn: "burger" };
          setCurrentIndex(0);
          setIsAnimating(false);
          // Restart the loop
          timeoutRef.current = setTimeout(placePiece, isMobile ? 900 : 750);
        }, 800);
        return;
      }

      setIsAnimating(true);
      setCells((prev) => {
        const newCells = [...prev];
        newCells[index] = turn;
        return newCells;
      });
      setCurrentIndex(index);

      // Reset animation flag after a short delay
      setTimeout(() => setIsAnimating(false), 400);

      // Update game state
      gameStateRef.current = {
        index: index + 1,
        turn: turn === "burger" ? "pizza" : "burger",
      };

      timeoutRef.current = setTimeout(placePiece, isMobile ? 900 : 750);
    };

    // Start the game loop
    timeoutRef.current = setTimeout(placePiece, isMobile ? 900 : 750);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isMobile]);

  // Parallax effect on mouse move (desktop only)
  useEffect(() => {
    if (isMobile || !containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const maxRotation = 2;
      const rotateY = (mouseX / (rect.width / 2)) * maxRotation;
      const rotateX = -(mouseY / (rect.height / 2)) * maxRotation;

      mouseXRef.current = rotateY;
      mouseYRef.current = rotateX;
    };

    const updateTransform = () => {
      if (containerRef.current && !isMobile) {
        containerRef.current.style.transform = `
          perspective(1000px)
          rotateX(${mouseYRef.current}deg)
          rotateY(${mouseXRef.current}deg)
        `;
      }
      requestAnimationFrame(updateTransform);
    };

    window.addEventListener("mousemove", handleMouseMove);
    updateTransform();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{
        width: `${width}px`,
        transformStyle: "preserve-3d",
        transition: isMobile ? "none" : "transform 0.1s ease-out",
      }}
    >
      <div
        className="grid gap-3 md:gap-4"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          width: `${width}px`,
        }}
      >
        {cells.map((cell, i) => (
          <ArenaCell
            key={`${i}-${cell || 'empty'}`}
            character={cell}
            cellSize={cellSize}
            isAnimating={isAnimating && cell !== null && i === currentIndex}
          />
        ))}
      </div>
    </div>
  );
}

