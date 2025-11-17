import { Heart } from 'lucide-react';

type Page = 'home' | 'about' | 'customize' | 'gallery' | 'faq' | 'privacy';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const navItems: { page: Page; label: string }[] = [
    { page: 'home', label: 'Home' },
    { page: 'about', label: 'About Us' },
    { page: 'customize', label: 'Create Your TwiMe' },
    { page: 'gallery', label: 'Gallery' },
    { page: 'faq', label: 'FAQ' },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 text-2xl font-bold text-pink-600 hover:text-pink-700 transition-colors"
          >
            <Heart className="fill-pink-600" size={28} />
            <span>TwiMe</span>
          </button>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-pink-600 border-b-2 border-pink-600'
                    : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <select
              value={currentPage}
              onChange={(e) => onNavigate(e.target.value as Page)}
              className="text-sm font-medium text-gray-700 border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
            >
              {navItems.map((item) => (
                <option key={item.page} value={item.page}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}
