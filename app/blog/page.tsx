import SoftGlassCard from "@/components/SoftGlassCard";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 py-16">
        <h1 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
          Developer Updates
        </h1>
        
        <div className="w-full">
          <SoftGlassCard>
            <div className="text-center">
              <div className="text-6xl mb-4">📝</div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Coming Soon</h2>
              <p className="text-gray-700">
                Developer updates and blog posts will appear here in the future.
              </p>
            </div>
          </SoftGlassCard>
        </div>
      </div>
    </div>
  );
}

