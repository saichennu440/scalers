// Header.tsx
import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

function Header({ darkMode, setDarkMode }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Work', to: '/work' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Careers', to: '/careers' },
    { label: 'News', to: '/news' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        darkMode ? 'bg-zinc-950 text-white' : 'bg-white text-black'
      } border-b ${darkMode ? 'border-zinc-800' : 'border-gray-200'}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          Scalers
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`text-sm font-medium transition-colors hover:text-red-500 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              {item.label}
            </Link>
          ))}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile */}
        <div className="md:hidden flex gap-3 items-center">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden fixed inset-0 top-[73px] z-40 ${
            darkMode ? 'bg-zinc-950' : 'bg-white'
          }`}
        >
          <nav className="flex flex-col px-6 py-6 gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`text-2xl ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                } hover:text-red-500`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
