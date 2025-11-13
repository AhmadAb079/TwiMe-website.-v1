import { Heart } from 'lucide-react';

type Page = 'home' | 'about' | 'customize' | 'gallery' | 'faq' | 'privacy';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 text-xl font-bold text-pink-600 mb-4">
              <Heart className="fill-pink-600" size={24} />
              <span>TwiMe</span>
            </div>
            <p className="text-gray-600 text-sm">
              Handmade cloth dolls crafted with love. Your twin. Your me.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() => onNavigate('about')}
                className="block text-sm text-gray-600 hover:text-pink-600 transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => onNavigate('customize')}
                className="block text-sm text-gray-600 hover:text-pink-600 transition-colors"
              >
                Create Your TwiMe
              </button>
              <button
                onClick={() => onNavigate('gallery')}
                className="block text-sm text-gray-600 hover:text-pink-600 transition-colors"
              >
                Gallery
              </button>
              <button
                onClick={() => onNavigate('faq')}
                className="block text-sm text-gray-600 hover:text-pink-600 transition-colors"
              >
                FAQ
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <div className="space-y-2">
              <button
                onClick={() => onNavigate('privacy')}
                className="block text-sm text-gray-600 hover:text-pink-600 transition-colors"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} TwiMe. Made with love, one stitch at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
