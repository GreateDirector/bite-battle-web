import Link from "next/link";

export default function Footer() {
  return (
    <footer className="soft-glass border-t border-white/20 mt-auto">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 mb-4">
              Bite Battle
            </h3>
            <p className="text-gray-600 text-sm">
              Internal development website. Not for public deployment.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Game</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/game" className="text-gray-600 hover:text-orange-500 transition-colors">
                  How to Play
                </Link>
              </li>
              <li>
                <Link href="/game" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Arenas
                </Link>
              </li>
              <li>
                <Link href="/game" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Characters
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/rewards" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Rewards
                </Link>
              </li>
              <li>
                <Link href="/friend" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Bite Friend
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal/privacy" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Bite Battle. Internal Development Only.</p>
        </div>
      </div>
    </footer>
  );
}

