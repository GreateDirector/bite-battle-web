import SoftGlassCard from "@/components/SoftGlassCard";

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 py-16">
        <h1 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
          Legal Information
        </h1>
        
        <div className="w-full space-y-8">
          <SoftGlassCard>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              This is a placeholder for the Privacy Policy. The full privacy policy will be added here 
              in a future update.
            </p>
            <p className="text-gray-600 text-sm">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </SoftGlassCard>

          <SoftGlassCard>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Terms of Service</h2>
            <p className="text-gray-700 mb-4">
              This is a placeholder for the Terms of Service. The full terms of service will be added here 
              in a future update.
            </p>
            <p className="text-gray-600 text-sm">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </SoftGlassCard>
        </div>
      </div>
    </div>
  );
}

