import type { Metadata } from "next";
import SoftGlassCard from "@/components/SoftGlassCard";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Bite Battle team. Have questions, feedback, or partnership inquiries? We'd love to hear from you!",
  openGraph: {
    title: "Contact Us | Bite Battle",
    description: "Get in touch with the Bite Battle team. Questions, feedback, or partnership inquiries welcome!",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 py-16">
        <h1 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
          Contact Us
        </h1>
        
        <div className="w-full">
          <SoftGlassCard>
            <div className="text-center">
              <div className="text-7xl mb-6" aria-hidden="true">📧</div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
              <p className="text-gray-700 text-lg mb-6">
                Have questions, feedback, or partnership inquiries? We&apos;d love to hear from you!
              </p>
              <div className="soft-glass rounded-full px-8 py-4 inline-block">
                <a 
                  href="mailto:support@bitebattle.net" 
                  className="text-xl font-semibold text-gray-800 hover:text-orange-500 transition-colors"
                >
                  support@bitebattle.net
                </a>
              </div>
            </div>
          </SoftGlassCard>
        </div>
      </div>
    </div>
  );
}

