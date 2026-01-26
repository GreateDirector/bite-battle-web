import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CharacterPreview from "@/components/CharacterPreview";
import Battlefields from "@/components/Battlefields";
import SpecialWeapons from "@/components/SpecialWeapons";
import Avatars from "@/components/Avatars";

export const metadata: Metadata = {
  title: "Home",
  description: "Play Bite Battle, a strategic tic-tac-toe battle game featuring food characters. Master arenas, collect ingredients, and win real-world burger rewards at partner restaurants!",
  openGraph: {
    title: "Bite Battle - Food Fighter Battle Game",
    description: "Play Bite Battle, a strategic tic-tac-toe battle game featuring food characters. Win real-world burger rewards!",
    url: "/",
  },
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CharacterPreview />
      <Battlefields />
      <SpecialWeapons />
      <Avatars />
    </div>
  );
}

