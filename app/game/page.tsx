import type { Metadata } from "next";
import ArenaPreview from "@/components/ArenaPreview";
import SoftGlassCard from "@/components/SoftGlassCard";

export const metadata: Metadata = {
  title: "How to Play",
  description: "Learn how to play Bite Battle! Master the tic-tac-toe battle game, explore arenas, collect ingredients, and equip powerful weapons to become the ultimate food fighter.",
  openGraph: {
    title: "How to Play Bite Battle",
    description: "Learn how to play Bite Battle! Master the tic-tac-toe battle game, explore arenas, and become the ultimate food fighter.",
    url: "/game",
  },
};

export default function GamePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50 to-pink-50">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 py-16">
        <h1 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
          How to Play
        </h1>
        
        <div className="w-full mb-16">
          <SoftGlassCard>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Game Rules</h2>
            <p className="text-gray-700 mb-4">
              Bite Battle is a tic-tac-toe battle game featuring food characters. 
              Place your food warriors strategically on the board and be the first to get three in a row!
            </p>
            <p className="text-gray-700">
              Each character has unique abilities and weapons. Master the arenas and become the ultimate food fighter!
            </p>
          </SoftGlassCard>
        </div>

        <ArenaPreview />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <SoftGlassCard>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">🍽️ Ingredients</h2>
            <p className="text-gray-700">
              Collect rare ingredients to power up your characters and unlock special abilities.
            </p>
          </SoftGlassCard>
          
          <SoftGlassCard>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">⚔️ Weapons</h2>
            <p className="text-gray-700">
              Equip your fighters with powerful weapons like spatulas, pizza cutters, and sushi knives.
            </p>
          </SoftGlassCard>
        </div>
      </div>
    </div>
  );
}

