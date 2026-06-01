import type { Metadata } from "next";
import { Coiny } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const coiny = Coiny({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-coiny",
});

export const metadata: Metadata = {
  title: {
    default: "Bite Battle - Unique Tic Tac Toe Game | Win Real Burgers",
    template: "%s | Bite Battle",
  },
  description:
    "Play Bite Battle: a unique Tic Tac Toe with 10 characters and 8 arenas. Join the Bite Friend program to win real burgers! Officially available on the iOS App Store.",
  keywords: ["Bite Battle", "food game", "battle game", "tic-tac-toe", "mobile game", "food fighters"],
  authors: [{ name: "Bite Battle Team" }],
  creator: "REBUSHAR LLC",
  publisher: "REBUSHAR LLC",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://bitebattle.net"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Bite Battle",
    title: "Bite Battle - Unique Tic Tac Toe Game | Win Real Burgers",
    description:
      "Play Bite Battle: a unique Tic Tac Toe with 10 characters and 8 arenas. Join the Bite Friend program to win real burgers! Officially available on the iOS App Store.",
    images: [
      {
        url: "/logo/bitebattletitle.webp",
        width: 1200,
        height: 630,
        alt: "Bite Battle Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bite Battle - Unique Tic Tac Toe Game | Win Real Burgers",
    description:
      "Play Bite Battle: a unique Tic Tac Toe with 10 characters and 8 arenas. Join the Bite Friend program to win real burgers! Officially available on the iOS App Store.",
    images: ["/logo/bitebattletitle.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: "verification_token_here",
    other: {
      "p:domain_verify": "ae68d08fd46ca641566159c512c79b20",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={coiny.variable}>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

