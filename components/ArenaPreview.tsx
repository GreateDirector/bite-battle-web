import SoftGlassCard from "./SoftGlassCard";

interface Arena {
  name: string;
  description: string;
  theme: string;
}

const placeholderArenas: Arena[] = [
  { name: "Kitchen Arena", description: "Battle in the heart of the kitchen", theme: "🍳" },
  { name: "Food Court", description: "The ultimate food fight destination", theme: "🏪" },
  { name: "Gourmet Garden", description: "Elegant battles in nature", theme: "🌿" },
];

export default function ArenaPreview() {
  return (
    <section className="py-16 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
          Battle Arenas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {placeholderArenas.map((arena, index) => (
            <SoftGlassCard key={index}>
              <div className="text-center">
                <div className="text-5xl mb-4">{arena.theme}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{arena.name}</h3>
                <p className="text-gray-600">{arena.description}</p>
              </div>
            </SoftGlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

