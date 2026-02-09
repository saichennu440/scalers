import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

function Footer({ darkMode }: FooterProps) {
  const offices = [
    { city: 'New York', country: 'USA' },
    { city: 'London', country: 'UK' },
    { city: 'Toronto', country: 'Canada' },
    { city: 'Los Angeles', country: 'USA' },
    { city: 'Austin', country: 'USA' },
    { city: 'Denver', country: 'USA' }
  ];

  return (
    <footer id="contact" className={`py-16 px-6 border-t ${
      darkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-black'
            }`}>
              Scalers
            </h3>
            <p className={`text-sm mb-6 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              A Business Agency transforming brands through strategic insights and creative excellence.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className={`p-2 rounded-full transition-colors hover:bg-red-500 hover:text-white ${
                  darkMode ? 'bg-zinc-800 text-gray-400' : 'bg-gray-100 text-gray-600'
                }`}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className={`p-2 rounded-full transition-colors hover:bg-red-500 hover:text-white ${
                  darkMode ? 'bg-zinc-800 text-gray-400' : 'bg-gray-100 text-gray-600'
                }`}
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className={`p-2 rounded-full transition-colors hover:bg-red-500 hover:text-white ${
                  darkMode ? 'bg-zinc-800 text-gray-400' : 'bg-gray-100 text-gray-600'
                }`}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className={`text-lg font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-black'
            }`}>
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@Scalers.agency"
                className={`flex items-center gap-2 text-sm transition-colors hover:text-red-500 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                <Mail size={16} />
                hello@Scalers.agency
              </a>
              <a
                href="mailto:careers@Scalers.agency"
                className={`flex items-center gap-2 text-sm transition-colors hover:text-red-500 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                <Mail size={16} />
                careers@Scalers.agency
              </a>
            </div>
          </div>

          <div>
            <h4 className={`text-lg font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-black'
            }`}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Work', 'About', 'Services', 'Careers', 'News'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className={`text-sm transition-colors hover:text-red-500 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`text-lg font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-black'
            }`}>
              Offices
            </h4>
            <ul className="space-y-2">
              {offices.map((office, index) => (
                <li
                  key={index}
                  className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {office.city}, {office.country}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`pt-8 border-t text-center ${
          darkMode ? 'border-zinc-800' : 'border-gray-200'
        }`}>
          <p className={`text-sm ${
            darkMode ? 'text-gray-500' : 'text-gray-500'
          }`}>
            © {new Date().getFullYear()} Scalers Agency. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
