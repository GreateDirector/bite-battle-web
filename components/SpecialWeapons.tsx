"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import SoftGlassCard from "./SoftGlassCard";

interface Weapon {
  name: string;
  image: string;
  description?: string;
}

const weapons: Weapon[] = [
  {
    name: "Extra Turn",
    image: "/assets/weapons/weapon_extraturn.webp",
    description: "Make two moves!\nPlay again right away.",
  },
  {
    name: "Hammergeddon",
    image: "/assets/weapons/weapon_hammergeddon.webp",
    description: "Break a cell forever\nThis spot is gone for the whole game.",
  },
  {
    name: "Hammerquake",
    image: "/assets/weapons/weapon_hammerquake.webp",
    description: "Freeze a cell for a while\nNo one can use it for 4 turns.",
  },
];

interface WeaponCardProps {
  weapon: Weapon;
}

function WeaponCard({ weapon }: WeaponCardProps) {
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
        className="group cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="text-center" style={{ transformStyle: "preserve-3d" }}>
          <div className="relative mb-4 flex justify-center">
            <div
              ref={imageRef}
              className="relative"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <Image
                src={weapon.image}
                alt={weapon.name}
                width={140}
                height={140}
                className="object-contain"
                loading="lazy"
              />
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2 text-red-500">{weapon.name}</h3>
          {weapon.description && (
            <p className="text-gray-600 text-sm whitespace-pre-line">{weapon.description}</p>
          )}
        </div>
      </SoftGlassCard>
    </div>
  );
}

export default function SpecialWeapons() {
  return (
    <section className="py-16 bg-gradient-to-b from-orange-50 to-pink-50">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 2xl:max-w-[1536px] 2xl:mx-auto">
        <h2 className="section-heading-font text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
          Special Weapons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-full">
          {weapons.map((weapon, index) => (
            <WeaponCard key={index} weapon={weapon} />
          ))}
        </div>
      </div>
    </section>
  );
}

