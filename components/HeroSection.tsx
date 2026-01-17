"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AutoPlayArena from "./AutoPlayArena";
import MapFieldOverlay from "./MapFieldOverlay";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [arenaWidth, setArenaWidth] = useState(680);
  const [visibleWords, setVisibleWords] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Set arena width based on screen width
      if (mobile) {
        setArenaWidth(300);
      } else if (window.innerWidth < 1024) {
        setArenaWidth(450);
      } else {
        setArenaWidth(680);
      }
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const delays = [0, 200, 400, 650, 900, 1150, 1450, 1800, 2100, 2400, 2700];
    
    delays.forEach((delay, index) => {
      setTimeout(() => {
        setVisibleWords(index + 1);
      }, delay);
    });
  }, []);

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-visible">
      {/* Map Background Layer - z-0 */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/map/worldmap_land.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(2px)",
        }}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-400 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* UI Content Layer - z-50 */}
      <div className="relative z-50 w-full min-h-[85vh] flex flex-col items-center justify-center overflow-visible">
        {/* Map Field Overlays - Decorative game board images on world map */}
        {/* Hidden on mobile to avoid overlap with core hero content */}
        <MapFieldOverlay
          imageSrc="/gameboard/biteburgersplash.webp"
          alt="Bite Battle Game Board"
          top="35%"
          left="15%"
          className="hidden md:block"
        />
        <MapFieldOverlay
          imageSrc="/gameboard/triangle_6x6x6.webp"
          alt="Tasty Xeop Field"
          top="55%"
          left="20%"
          className="hidden md:block"
        />
        <MapFieldOverlay
          imageSrc="/gameboard/gameboard_5x5.webp"
          alt="5x5 Arena Field"
          top="40%"
          left="75%"
          className="hidden md:block"
        />
        <MapFieldOverlay
          imageSrc="/gameboard/gameboard_6x6.webp"
          alt="6x6 Arena Field"
          top="70%"
          left="80%"
          className="hidden md:block"
        />

        {/* Social Media Ships - Decorative floating elements */}
        {/* Hidden on mobile to keep the hero readable and uncluttered */}
        {/* YouTube Ship - Far Left, Lower Ocean (South Pacific) */}
        <div
          className="hero-social-ship absolute z-10 pointer-events-none hidden md:block"
          style={{
            bottom: "15%",
            left: "2.5%",
          }}
        >
          <a
            href="https://www.youtube.com/@kitchenalone"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Kitchen Alone on YouTube"
            className="pointer-events-auto block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/50 rounded-full"
          >
            <Image
              src="/social/YouTube.webp"
              alt=""
              width={192}
              height={192}
              className="w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48"
            loading="lazy"
            />
          </a>
        </div>

        {/* Facebook Ship - Far Left, Upper Ocean (North Pacific) */}
        <div
          className="hero-social-ship hero-social-ship-delay-1 absolute z-10 pointer-events-none hidden md:block"
          style={{
            bottom: "50%",
            left: "2.5%",
          }}
          aria-hidden="true"
        >
          <Image
            src="/social/facebook.webp"
            alt=""
            width={192}
            height={192}
            className="w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48"
            loading="lazy"
          />
        </div>

        {/* TikTok Ship - Right Ocean near Australia */}
        <div
          className="hero-social-ship hero-social-ship-delay-2 absolute z-10 pointer-events-none hidden md:block"
          style={{
            bottom: "20%",
            left: "70%",
          }}
          aria-hidden="true"
        >
          <Image
            src="/social/Tic_toc.webp"
            alt=""
            width={192}
            height={192}
            className="w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48"
            loading="lazy"
          />
        </div>

        {/* Instagram Ship - Mid-Left, Mid Ocean (Central Pacific) */}
        <div
          className="hero-social-ship hero-social-ship-delay-3 absolute z-10 pointer-events-none hidden md:block"
          style={{
            bottom: "33%",
            left: "9%",
          }}
          aria-hidden="true"
        >
          <Image
            src="/social/instagram.webp"
            alt=""
            width={192}
            height={192}
            className="w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48"
            loading="lazy"
          />
        </div>

        {/* Core hero content bounded on ultra-wide screens */}
        <div className="w-full flex flex-col items-center 2xl:max-w-[1536px] 2xl:mx-auto">
          {/* Title Section */}
          <div className="relative text-center mb-8 md:mb-12 -mt-16 md:-mt-20 overflow-visible">
            <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12 mb-4 md:mb-6 px-4 flex-wrap">
              {/* Taco Fighter - Left */}
              <div className="flex-shrink-0">
                <Image
                  src="/fighters/taco_fighter.webp"
                  alt="Taco Fighter"
                  width={180}
                  height={180}
                  className="w-32 h-auto md:w-40 lg:w-44"
                  priority
                />
              </div>
              
              {/* BITE BATTLE Logo - Center */}
              <div className="flex-shrink-0">
                <Image
                  src="/logo/bitebattletitle.webp"
                  alt="Bite Battle Logo"
                  width={420}
                  height={320}
                  className="w-64 md:w-80 lg:w-[420px] h-auto"
                  priority
                />
              </div>
              
              {/* Burger Fighter - Right */}
              <div className="flex-shrink-0">
                <Image
                  src="/fighters/burger_fighter.webp"
                  alt="Burger Fighter"
                  width={180}
                  height={180}
                  className="w-32 h-auto md:w-40 lg:w-44"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Hero Subtitle - Single line below logo, above board */}
          <div className="relative text-center mb-6 md:mb-8 px-4 md:px-6 lg:px-8 xl:px-12 z-[100]">
            <span className="hero-subtitle-font text-lg md:text-xl lg:text-2xl font-semibold md:whitespace-nowrap">
              Tic Tac Toe Battle with food characters!
            </span>
          </div>

          {/* Auto-Play Arena Section */}
          <div className="relative flex items-center justify-center w-full px-4 mb-12 md:mb-16">
            <AutoPlayArena width={arenaWidth} isMobile={isMobile} />
          </div>
        </div>
      </div>
    </section>
  );
}
