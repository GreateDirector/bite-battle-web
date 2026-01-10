import HeroSection from "@/components/HeroSection";
import CharacterPreview from "@/components/CharacterPreview";
import Battlefields from "@/components/Battlefields";
import SpecialWeapons from "@/components/SpecialWeapons";
import Avatars from "@/components/Avatars";

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

