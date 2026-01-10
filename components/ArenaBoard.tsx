"use client";

import { useState, useEffect } from "react";

interface ArenaBoardProps {
  size: number;
  isMobile: boolean;
}

type CellValue = "X" | "O" | null;

export default function ArenaBoard({ size, isMobile }: ArenaBoardProps) {
  const [board, setBoard] = useState<CellValue[]>(Array(9).fill(null));
  const [showX, setShowX] = useState(false);
  const [showO, setShowO] = useState(false);

  useEffect(() => {
    // First move: X in top-left (index 0) after 1 second
    const timer1 = setTimeout(() => {
      setBoard((prev) => {
        const newBoard = [...prev];
        newBoard[0] = "X";
        return newBoard;
      });
      setShowX(true);
    }, 1000);

    // Second move: O in center (index 4) after 1.6 seconds
    const timer2 = setTimeout(() => {
      setBoard((prev) => {
        const newBoard = [...prev];
        newBoard[4] = "O";
        return newBoard;
      });
      setShowO(true);
    }, 1600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const cellSize = size / 3;
  const lineWidth = 3;

  return (
    <div
      className="relative soft-glass rounded-2xl p-4"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: isMobile ? "none" : "perspective(1000px) rotateX(10deg)",
        transformStyle: "preserve-3d",
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
      }}
    >
      {/* Grid lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Vertical lines */}
        <div
          className="absolute bg-gray-300/50 rounded-full"
          style={{
            left: `${cellSize}px`,
            width: `${lineWidth}px`,
            height: `${size}px`,
          }}
        />
        <div
          className="absolute bg-gray-300/50 rounded-full"
          style={{
            left: `${cellSize * 2}px`,
            width: `${lineWidth}px`,
            height: `${size}px`,
          }}
        />
        {/* Horizontal lines */}
        <div
          className="absolute bg-gray-300/50 rounded-full"
          style={{
            top: `${cellSize}px`,
            width: `${size}px`,
            height: `${lineWidth}px`,
          }}
        />
        <div
          className="absolute bg-gray-300/50 rounded-full"
          style={{
            top: `${cellSize * 2}px`,
            width: `${size}px`,
            height: `${lineWidth}px`,
          }}
        />
      </div>

      {/* Cells with markers */}
      <div className="relative w-full h-full grid grid-cols-3">
        {board.map((cell, index) => (
          <div
            key={index}
            className="flex items-center justify-center"
            style={{ width: `${cellSize}px`, height: `${cellSize}px` }}
          >
            {cell === "X" && (
              <div
                className="relative flex items-center justify-center"
                style={{
                  transform: showX ? "scale(1)" : "scale(0)",
                  transition: "transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                }}
              >
                <svg
                  width={cellSize * 0.5}
                  height={cellSize * 0.5}
                  viewBox="0 0 100 100"
                  style={{
                    filter: "drop-shadow(0 0 8px rgba(255, 79, 112, 0.6))",
                  }}
                >
                  <line
                    x1="20"
                    y1="20"
                    x2="80"
                    y2="80"
                    stroke="#FF4F70"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                  <line
                    x1="80"
                    y1="20"
                    x2="20"
                    y2="80"
                    stroke="#FF4F70"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            )}
            {cell === "O" && (
              <div
                className="relative flex items-center justify-center"
                style={{
                  transform: showO ? "scale(1)" : "scale(0)",
                  transition: "transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                }}
              >
                <svg
                  width={cellSize * 0.5}
                  height={cellSize * 0.5}
                  viewBox="0 0 100 100"
                  style={{
                    filter: "drop-shadow(0 0 8px rgba(255, 179, 71, 0.6))",
                  }}
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke="#FFB347"
                    strokeWidth="12"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

