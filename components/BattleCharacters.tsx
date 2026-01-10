"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface BattleCharactersProps {
  isMobile: boolean;
}

export default function BattleCharacters({ isMobile }: BattleCharactersProps) {
  const [burgerEntered, setBurgerEntered] = useState(false);
  const [pizzaEntered, setPizzaEntered] = useState(false);

  useEffect(() => {
    // Burger enters from left
    const timer1 = setTimeout(() => {
      setBurgerEntered(true);
    }, 300);

    // Pizza enters from right
    const timer2 = setTimeout(() => {
      setPizzaEntered(true);
    }, 500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (isMobile) {
    return null; // Hide on mobile
  }

  const characterSize = 140;

  return (
    <>
      {/* Burger Bro (X side) - Left */}
      <div
        className="absolute left-4 md:left-8 lg:left-16 xl:left-24 top-1/2 -translate-y-1/2 z-10"
        style={{
          transform: burgerEntered
            ? "translateX(0) translateY(-50%)"
            : "translateX(-200px) translateY(-50%)",
          transition: "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <div
          className="relative animate-float"
          style={{
            width: `${characterSize}px`,
            height: `${characterSize}px`,
          }}
        >
          <Image
            src="/assets/characters/burger.png"
            alt="Burger Bro"
            width={characterSize}
            height={characterSize}
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Pizza Pepperoni (O side) - Right */}
      <div
        className="absolute right-4 md:right-8 lg:right-16 xl:right-24 top-1/2 -translate-y-1/2 z-10"
        style={{
          transform: pizzaEntered
            ? "translateX(0) translateY(-50%)"
            : "translateX(200px) translateY(-50%)",
          transition: "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <div
          className="relative animate-float"
          style={{
            width: `${characterSize}px`,
            height: `${characterSize}px`,
          }}
        >
          <Image
            src="/assets/characters/pizzapeperroni.png"
            alt="Pizza Pepperoni"
            width={characterSize}
            height={characterSize}
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </>
  );
}

