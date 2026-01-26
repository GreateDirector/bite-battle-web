import type { Metadata } from "next";
import Link from "next/link";
import SoftGlassCard from "@/components/SoftGlassCard";

export const metadata: Metadata = {
  title: "Legal Information",
  description: "Review Bite Battle's Privacy Policy and Terms of Service. Learn how we protect your data and the terms that govern your use of our services.",
  openGraph: {
    title: "Legal Information | Bite Battle",
    description: "Review Bite Battle's Privacy Policy and Terms of Service.",
    url: "/legal",
  },
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 py-16">
        <h1 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
          Legal Information
        </h1>
        
        <div className="w-full space-y-8 max-w-4xl mx-auto">
          <Link href="/legal/privacy">
            <SoftGlassCard className="cursor-pointer hover:scale-105 transition-transform">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                Learn how we collect, use, and protect your personal information when you use Bite Battle.
              </p>
              <p className="text-gray-600 text-sm">
                Last updated: December 2025
              </p>
            </SoftGlassCard>
          </Link>

          <Link href="/legal/terms">
            <SoftGlassCard className="cursor-pointer hover:scale-105 transition-transform">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Terms of Service</h2>
              <p className="text-gray-700 mb-4">
                Review the terms and conditions that govern your use of Bite Battle and related services.
              </p>
              <p className="text-gray-600 text-sm">
                Last updated: December 2025
              </p>
            </SoftGlassCard>
          </Link>
        </div>
      </div>
    </div>
  );
}

