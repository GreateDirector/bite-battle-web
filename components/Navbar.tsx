import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="soft-glass sticky top-0 z-50 w-full border-b border-white/20">
      <div className="w-full px-2 md:px-3 lg:px-4 xl:px-6 py-0.5 h-[48px] flex items-center">
        <div className="w-full flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/bitebattletitle_line.png"
              alt="Bite Battle"
              width={280}
              height={160}
              className="h-36 w-auto mt-8"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="nav-link-font text-blue-600 hover:text-blue-500 font-semibold transition-colors duration-300">
              Home
            </Link>
            <Link href="/game" className="nav-link-font text-blue-600 hover:text-blue-500 font-semibold transition-colors duration-300">
              Game
            </Link>
            <Link href="/rewards" className="nav-link-font text-blue-600 hover:text-blue-500 font-semibold transition-colors duration-300">
              Rewards
            </Link>
            <Link href="/friend" className="nav-link-font text-blue-600 hover:text-blue-500 font-semibold transition-colors duration-300">
              Bite Friend
            </Link>
            <Link href="/blog" className="nav-link-font text-blue-600 hover:text-blue-500 font-semibold transition-colors duration-300">
              Blog
            </Link>
            <Link href="/contact" className="nav-link-font text-blue-600 hover:text-blue-500 font-semibold transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

