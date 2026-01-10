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
  title: "Bite Battle - Internal Development",
  description: "Internal development website for Bite Battle ecosystem",
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

