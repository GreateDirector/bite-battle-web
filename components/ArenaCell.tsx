"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ArenaCellProps {
  character: "burger" | "pizza" | null;
  cellSize: number;
  isAnimating: boolean;
}

export default function ArenaCell({ character, cellSize, isAnimating }: ArenaCellProps) {
  const [showPiece, setShowPiece] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (character) {
      if (isAnimating) {
        setShouldAnimate(true);
        setShowPiece(true);
        // Reset animation flag after animation completes
        setTimeout(() => setShouldAnimate(false), 400);
      } else {
        setShowPiece(true);
      }
    } else {
      setShowPiece(false);
      setShouldAnimate(false);
    }
  }, [character, isAnimating]);

  const imageSize = cellSize * 0.7;
  const glowColor = character === "burger" ? "#FF4F70" : "#FFB347";

  return (
    <div
      className="soft-glass rounded-xl border border-white/20 flex items-center justify-center relative overflow-hidden"
      style={{
        width: `${cellSize}px`,
        height: `${cellSize}px`,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        if (character) {
          e.currentTarget.style.boxShadow = `0 8px 24px ${glowColor}40`;
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
      }}
    >
      {character && showPiece && (
        <div
          className={`relative ${shouldAnimate ? "animate-piece-pop" : ""}`}
          style={{
            width: `${imageSize}px`,
            height: `${imageSize}px`,
            filter: `drop-shadow(0 0 12px ${glowColor}80)`,
          }}
        >
          <Image
            src={
              character === "burger"
                ? "/assets/characters/burger.png"
                : "/assets/characters/pizzapeperroni.png"
            }
            alt={character === "burger" ? "Burger Bro" : "Pizza Pepperoni"}
            width={imageSize}
            height={imageSize}
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
}

