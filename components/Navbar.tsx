"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="soft-glass sticky top-0 z-50 w-full border-b border-white/20">
      <div className="relative w-full px-2 md:px-3 lg:px-4 xl:px-6 2xl:max-w-[1536px] 2xl:mx-auto py-2 md:py-0.5 h-auto md:h-[48px] flex items-center">
        <div className="w-full flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/bitebattletitle_line.png"
              alt="Bite Battle"
              width={280}
              height={160}
              className="h-20 w-auto mt-2 md:h-36 md:mt-8"
            />
          </Link>
          {/* Mobile-only nav toggle to preserve desktop layout */}
          <button
            type="button"
            className="md:hidden soft-glass rounded-md px-3 py-2 text-blue-600 hover:text-blue-500 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/50 active:scale-95"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="nav-link-font text-blue-600 hover:text-blue-500 font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/50 rounded">
              Home
            </Link>
            <Link href="/game" className="nav-link-font text-blue-600 hover:text-blue-500 font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/50 rounded">
              Game
            </Link>
            <Link href="/rewards" className="nav-link-font text-blue-600 hover:text-blue-500 font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/50 rounded">
              Rewards
            </Link>
            <Link href="/friend" className="nav-link-font text-blue-600 hover:text-blue-500 font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/50 rounded">
              Bite Friend
            </Link>
            <Link href="/blog" className="nav-link-font text-blue-600 hover:text-blue-500 font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/50 rounded">
              Blog
            </Link>
            <Link href="/contact" className="nav-link-font text-blue-600 hover:text-blue-500 font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/50 rounded">
              Contact
            </Link>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 soft-glass border-t border-white/20">
            <div className="flex flex-col gap-3 px-4 py-4">
              <Link href="/" className="nav-link-font text-blue-600 hover:text-blue-500 font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/50 rounded" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/game" className="nav-link-font text-blue-600 hover:text-blue-500 font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/50 rounded" onClick={() => setIsMenuOpen(false)}>
                Game
              </Link>
              <Link href="/rewards" className="nav-link-font text-blue-600 hover:text-blue-500 font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/50 rounded" onClick={() => setIsMenuOpen(false)}>
                Rewards
              </Link>
              <Link href="/friend" className="nav-link-font text-blue-600 hover:text-blue-500 font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/50 rounded" onClick={() => setIsMenuOpen(false)}>
                Bite Friend
              </Link>
              <Link href="/blog" className="nav-link-font text-blue-600 hover:text-blue-500 font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/50 rounded" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
              <Link href="/contact" className="nav-link-font text-blue-600 hover:text-blue-500 font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/50 rounded" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

