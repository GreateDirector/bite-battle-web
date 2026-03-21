import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CharacterPreview from "@/components/CharacterPreview";
import Battlefields from "@/components/Battlefields";
import SpecialWeapons from "@/components/SpecialWeapons";
import Avatars from "@/components/Avatars";

export const metadata: Metadata = {
  title: "Bite Battle - Unique Tic Tac Toe Game | Win Real Burgers",
  description:
    "Play Bite Battle: a unique Tic Tac Toe with 10 characters and 8 arenas. Join the Bite Friend program to win real burgers! Officially available on the iOS App Store.",
  openGraph: {
    title: "Bite Battle - Unique Tic Tac Toe Game | Win Real Burgers",
    description:
      "Play Bite Battle: a unique Tic Tac Toe with 10 characters and 8 arenas. Join the Bite Friend program to win real burgers! Officially available on the iOS App Store.",
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
      {/* SEO & App Store Integration */}
      <section className="mt-20 pb-10 border-t border-transparent text-[10px] text-gray-400/20 leading-tight selection:bg-transparent">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center">
          {/* Official App Store Button Style */}
          <a
            href="https://apps.apple.com/us/app/bite-battl%D0%B5/id6757623037"
            className="mb-8 inline-flex items-center bg-black text-white px-4 py-2 rounded-lg border border-gray-700 hover:bg-gray-900 transition-colors text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 384 512"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            <span>Download on the App Store</span>
          </a>

          {/* Hidden-in-plain-sight SEO Text */}
          <div className="w-full text-left opacity-30 hover:opacity-100 transition-opacity">
            <h1 className="font-semibold mb-1">
              Bite Battle: The Most Funny Tic Tac Toe Game Online
            </h1>
            <h2 className="font-medium mb-2">
              Win Real Food with Bite Friend Partner Program
            </h2>
            <p className="mb-2">
              Experience strategy like never before across 8 different battlefields. Choose from 10
              unique food characters like Burger, Taco, and Pizza to dominate the board. Master
              special weapons including Hammergeddon, Hammerquake, and Extra Turn to outsmart your
              opponents.
            </p>
            <p>
              Bite Battle is officially available on the Apple App Store for iOS and for instant web
              play. Join the Bite Friend program to turn your victories into real-world rewards at
              partner merchants. App Store Link:{" "}
              https://apps.apple.com/us/app/bite-battl%D0%B5/id6757623037
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

