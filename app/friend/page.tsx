import SoftGlassCard from "@/components/SoftGlassCard";

export default function FriendPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 py-16">
        <h1 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
          Bite Friend Partner Program
        </h1>
        
        <div className="w-full">
          <SoftGlassCard className="mb-8">
            <div className="text-center mb-6">
              <div className="text-7xl mb-4">🤝</div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Join the Bite Friend Network</h2>
            </div>
            <p className="text-gray-700 text-lg mb-4">
              Bite Friend connects restaurants, food trucks, and food businesses with Bite Battle players.
            </p>
            <p className="text-gray-700">
              Partner with us to offer real-world rewards to players, drive foot traffic to your location, 
              and become part of the Bite Battle ecosystem.
            </p>
          </SoftGlassCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <SoftGlassCard>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">🍽️ For Restaurants</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Increase customer visits</li>
                <li>• Attract new players</li>
                <li>• Easy reward redemption system</li>
                <li>• Marketing support</li>
              </ul>
            </SoftGlassCard>
            
            <SoftGlassCard>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">🚚 For Food Trucks</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Reach mobile game audience</li>
                <li>• Flexible partnership options</li>
                <li>• Location-based rewards</li>
                <li>• Community engagement</li>
              </ul>
            </SoftGlassCard>
          </div>

          <SoftGlassCard>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Get Started</h3>
            <p className="text-gray-700 mb-4">
              Interested in becoming a Bite Friend partner? Contact us to learn more about partnership opportunities.
            </p>
            <p className="text-gray-600 text-sm">
              Email: <a href="mailto:hello@bitebattle.net" className="text-pink-500 hover:underline">hello@bitebattle.net</a>
            </p>
          </SoftGlassCard>
        </div>
      </div>
    </div>
  );
}

