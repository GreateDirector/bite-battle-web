"use client";

import { useState, useEffect } from "react";

interface VSEffectProps {
  isMobile: boolean;
}

export default function VSEffect({ isMobile }: VSEffectProps) {
  const [showVS, setShowVS] = useState(false);

  useEffect(() => {
    // Show VS after characters have entered (after 1 second)
    const timer = setTimeout(() => {
      setShowVS(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isMobile) {
    return null; // Hide on mobile
  }

  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
      style={{
        opacity: showVS ? 1 : 0,
        transform: showVS ? "translate(-50%, -50%) scale(1)" : "translate(-50%, -50%) scale(0.8)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
        animation: showVS ? "pulse-glow 1.2s ease-in-out infinite" : "none",
      }}
    >
      <div
        className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-pink-500"
        style={{
          textShadow: "0 0 30px rgba(255, 79, 112, 0.8), 0 0 60px rgba(255, 179, 71, 0.6)",
          filter: "blur(0.5px)",
          animation: showVS ? "shake-subtle 2s ease-in-out infinite" : "none",
        }}
      >
        VS
      </div>
    </div>
  );
}

