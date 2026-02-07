import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CharacterPreview from "@/components/CharacterPreview";
import Battlefields from "@/components/Battlefields";
import SpecialWeapons from "@/components/SpecialWeapons";
import Avatars from "@/components/Avatars";

export const metadata: Metadata = {
  title: "Bite Battle - Unique Tic Tac Toe Game | Win Real Burgers",
  description: "Play Bite Battle: a unique Tic Tac Toe with 10 characters and 8 arenas. Join the Bite Friend program to win real burgers! Available on Web and coming soon to iOS.",
  openGraph: {
    title: "Bite Battle - Unique Tic Tac Toe Game | Win Real Burgers",
    description: "Play Bite Battle: a unique Tic Tac Toe with 10 characters and 8 arenas. Join the Bite Friend program to win real burgers! Available on Web and coming soon to iOS.",
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
      <section
        className="w-full px-4 py-12 text-center text-sm text-gray-500 max-w-3xl mx-auto border-t border-gray-200/50"
        aria-label="About Bite Battle"
      >
        <h1 className="text-base font-semibold text-gray-500 mb-2">
          Bite Battle: The Most Funny Tic Tac Toe Game Online
        </h1>
        <h2 className="text-sm font-medium text-gray-400 mb-3">
          Win Real Food with Bite Friend Partner Program
        </h2>
        <p className="text-xs text-gray-400 leading-relaxed">
          Bite Battle features 8 different battlefields and 10 unique food characters like Burger, Taco, and Pizza. Use special weapons including Hammergeddon, Hammerquake, and Extra Turn to win. Currently in Apple Review for iOS launch.
        </p>
      </section>
    </div>
  );
}

