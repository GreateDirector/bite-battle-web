import SoftGlassCard from "@/components/SoftGlassCard";

export default function RewardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-pink-50 to-purple-50">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 py-16">
        <h1 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
          Real-World Burger Rewards
        </h1>
        
        <div className="w-full">
          <SoftGlassCard className="mb-8">
            <div className="text-center mb-6">
              <div className="text-7xl mb-4">🍔</div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Win Real Burgers!</h2>
            </div>
            <p className="text-gray-700 text-lg mb-4">
              Play Bite Battle and earn rewards that you can redeem for real burgers at partner restaurants!
            </p>
            <p className="text-gray-700">
              The more you play, the more delicious rewards you unlock. Connect with Bite Friend partners 
              to claim your prizes and enjoy the taste of victory.
            </p>
          </SoftGlassCard>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SoftGlassCard>
              <h3 className="text-xl font-bold mb-3 text-gray-800">🥇 Win Battles</h3>
              <p className="text-gray-600 text-sm">
                Earn points by winning matches and climbing the leaderboard.
              </p>
            </SoftGlassCard>
            
            <SoftGlassCard>
              <h3 className="text-xl font-bold mb-3 text-gray-800">🎁 Collect Rewards</h3>
              <p className="text-gray-600 text-sm">
                Unlock burger vouchers and special offers as you progress.
              </p>
            </SoftGlassCard>
            
            <SoftGlassCard>
              <h3 className="text-xl font-bold mb-3 text-gray-800">🍴 Redeem & Enjoy</h3>
              <p className="text-gray-600 text-sm">
                Visit partner restaurants and enjoy your hard-earned burgers!
              </p>
            </SoftGlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}

