"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import SoftGlassCard from "./SoftGlassCard";

interface Character {
  name: string;
  tagline: string;
  image: string;
}

const characters: Character[] = [
  {
    name: "Fry Fighter",
    tagline: "The crispy guardian",
    image: "/assets/characters/fryfighter.png",
  },
  {
    name: "Burger Bro",
    tagline: "The juicy warrior",
    image: "/assets/characters/burger.png",
  },
  {
    name: "Burrito Bandit",
    tagline: "The spicy outlaw",
    image: "/assets/characters/burrito.png",
  },
  {
    name: "Don Pizza",
    tagline: "The slice master",
    image: "/assets/characters/pizzapeperroni.png",
  },
  {
    name: "Nugget Ninja",
    tagline: "The golden defender",
    image: "/assets/characters/chickennuggets.png",
  },
  {
    name: "Onion Overlord",
    tagline: "The crispy circle",
    image: "/assets/characters/onionrings.png",
  },
  {
    name: "Sandwich",
    tagline: "The layered hero",
    image: "/assets/characters/sandwich.png",
  },
  {
    name: "Quesa Queen",
    tagline: "The folded fighter",
    image: "/assets/characters/quesadilla.png",
  },
  {
    name: "Taco Slamo",
    tagline: "The shell warrior",
    image: "/assets/characters/taco.png",
  },
  {
    name: "Wrap Oliver",
    tagline: "The rolling striker",
    image: "/assets/characters/wrapoliver.png",
  },
];

interface CharacterCardProps {
  character: Character;
}

function CharacterCard({ character }: CharacterCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;
    const imageContainer = imageRef.current;

    if (!container || !card || !imageContainer) return;

    let isHovering = false;
    let currentRotateX = 0;
    let currentRotateY = 0;
    let targetRotateX = 0;
    let targetRotateY = 0;

    const updateTransform = () => {
      if (!card || !imageContainer) return;

      // Smooth interpolation for card
      currentRotateX += (targetRotateX - currentRotateX) * 0.15;
      currentRotateY += (targetRotateY - currentRotateY) * 0.15;

      // Apply card transform
      const scale = isHovering ? 1.03 : 1;
      const translateY = isHovering ? -6 : 0;
      card.style.transform = `
        rotateX(${currentRotateX}deg)
        rotateY(${currentRotateY}deg)
        scale(${scale})
        translateY(${translateY}px)
      `;
      card.style.transition = isHovering ? "none" : "transform 200ms ease-out, box-shadow 200ms ease-out";

      // Apply image transform (1.2x rotation + translateZ)
      const imageRotateX = currentRotateX * 1.2;
      const imageRotateY = currentRotateY * 1.2;
      const translateZ = isHovering ? 20 : 0;
      const imageScale = isHovering ? 1.1 : 1;
      
      imageContainer.style.transform = `
        rotateX(${imageRotateX}deg)
        rotateY(${imageRotateY}deg)
        translateZ(${translateZ}px)
        scale(${imageScale})
      `;
      imageContainer.style.transition = isHovering ? "none" : "transform 200ms ease-out";
      
      // Update image filter on hover
      imageContainer.style.filter = isHovering 
        ? "drop-shadow(0 0 15px rgba(255, 165, 0, 0.4))" 
        : "none";

      // Continue animation if hovering or still animating
      if (isHovering || Math.abs(targetRotateX - currentRotateX) > 0.01 || Math.abs(targetRotateY - currentRotateY) > 0.01) {
        animationFrameRef.current = requestAnimationFrame(updateTransform);
      } else {
        animationFrameRef.current = null;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!container || !isHovering) return;

      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const maxRotation = 10;
      const rotateY = (mouseX / (rect.width / 2)) * maxRotation;
      const rotateX = -(mouseY / (rect.height / 2)) * maxRotation;

      targetRotateX = Math.max(-maxRotation, Math.min(maxRotation, rotateX));
      targetRotateY = Math.max(-maxRotation, Math.min(maxRotation, rotateY));

      if (animationFrameRef.current === null) {
        animationFrameRef.current = requestAnimationFrame(updateTransform);
      }
    };

    const handleMouseEnter = () => {
      isHovering = true;
      if (card) {
        card.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.25)";
      }
      if (animationFrameRef.current === null) {
        animationFrameRef.current = requestAnimationFrame(updateTransform);
      }
    };

    const handleMouseLeave = () => {
      isHovering = false;
      targetRotateX = 0;
      targetRotateY = 0;
      if (card) {
        card.style.boxShadow = "";
      }
      if (animationFrameRef.current === null) {
        animationFrameRef.current = requestAnimationFrame(updateTransform);
      }
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="perspective-900"
      style={{ perspective: "900px" }}
    >
      <SoftGlassCard
        ref={cardRef}
        className="group cursor-pointer w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="text-center h-[232px] flex flex-col justify-between" style={{ transformStyle: "preserve-3d" }}>
          {character.name === "Fry Fighter" ? (
            <>
              <div className="relative mb-4 flex items-center justify-center gap-4 px-2">
                {/* Fry Fighter icon - positioned toward center */}
                <div
                  ref={imageRef}
                  className="relative flex-shrink-0"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <Image
                    src={character.image}
                    alt={character.name}
                    width={180}
                    height={180}
                    className="object-contain"
                  />
                </div>
                {/* Weapons stacked vertically */}
                <div className="h-[64px] flex items-center justify-center flex-shrink-0">
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex flex-col gap-1">
                      <div className="relative w-[50px] h-[50px]">
                        <Image
                          src="/assets/weapons/weapon_hammergeddon.png"
                          alt="Hammergeddon"
                          width={50}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <div className="relative w-[50px] h-[50px]">
                        <Image
                          src="/assets/weapons/weapon_hammerquake.png"
                          alt="Hammerquake"
                          width={50}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <p className="text-xs font-semibold text-orange-600 leading-tight text-center whitespace-nowrap">Exclusive weapon mastery</p>
                  </div>
                </div>
              </div>
            </>
          ) : character.name === "Burger Bro" ? (
            <>
              <div className="relative mb-4 flex items-center justify-center gap-4 px-2">
                {/* Burger Bro icon - positioned toward center */}
                <div
                  ref={imageRef}
                  className="relative flex-shrink-0"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <Image
                    src={character.image}
                    alt={character.name}
                    width={140}
                    height={140}
                    className="object-contain"
                  />
                </div>
                {/* Weapons stacked vertically */}
                <div className="h-[64px] flex items-center justify-center flex-shrink-0">
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex flex-col gap-1">
                      <div className="relative w-[50px] h-[50px]">
                        <Image
                          src="/assets/weapons/weapon_extraturn.png"
                          alt="Extra Turn"
                          width={50}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <div className="relative w-[50px] h-[50px]">
                        <Image
                          src="/assets/weapons/weapon_hammerquake.png"
                          alt="Hammerquake"
                          width={50}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <p className="text-xs font-semibold text-orange-600 leading-tight text-center whitespace-nowrap">Exclusive weapon mastery</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="relative mb-4 flex justify-center">
              <div
                ref={imageRef}
                className="relative"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <Image
                  src={character.image}
                  alt={character.name}
                  width={140}
                  height={140}
                  className="object-contain"
                />
              </div>
            </div>
          )}
          <h3 className="text-xl font-bold mb-2 text-red-500">{character.name}</h3>
          <p className="text-gray-600 text-sm">{character.tagline}</p>
        </div>
      </SoftGlassCard>
    </div>
  );
}

export default function CharacterPreview() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-orange-50">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 2xl:max-w-[1536px] 2xl:mx-auto">
        <h2 className="section-heading-font text-4xl font-bold text-center mb-12">
          <span className="text-blue-600" style={{ textShadow: "-1px -1px 0 #1e40af, 1px -1px 0 #1e40af, -1px 1px 0 #1e40af, 1px 1px 0 #1e40af" }}>Characters</span>
        </h2>
        <div className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          <div className="flex flex-nowrap gap-6">
            {characters.map((character, index) => (
              <div key={index} className="flex-shrink-0 min-w-[220px] sm:min-w-[240px] md:min-w-[260px] lg:min-w-[280px]">
                <CharacterCard character={character} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

