import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

interface ContactProps {
  darkMode: boolean;
}

function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const offices = [
    {
      city: 'New York',
      country: 'USA',
      address: '123 Main Street, New York, NY 10001',
      email: 'newyork@Scalers.agency',
      phone: '+1 (212) 555-0123'
    },
    {
      city: 'London',
      country: 'UK',
      address: '456 Oxford Street, London, W1A 1AA',
      email: 'london@Scalers.agency',
      phone: '+44 (20) 7946 0958'
    },
    {
      city: 'Toronto',
      country: 'Canada',
      address: '789 King Street West, Toronto, ON M5H 2Y2',
      email: 'toronto@Scalers.agency',
      phone: '+1 (416) 555-0123'
    },
    {
      city: 'Los Angeles',
      country: 'USA',
      address: '321 Sunset Boulevard, Los Angeles, CA 90001',
      email: 'losangeles@Scalers.agency',
      phone: '+1 (310) 555-0123'
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className={`pt-8 pb-20 px-6 ${darkMode ? 'bg-zinc-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-black'
          }`}>
            Get In Touch
          </h1>
          <p className={`text-xl max-w-3xl ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Have a project in mind? We'd love to hear about your brand challenges and discuss how we can help drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className={`text-3xl font-bold mb-8 ${
              darkMode ? 'text-white' : 'text-black'
            }`}>
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 outline-none transition-colors ${
                    darkMode
                      ? 'bg-zinc-900 border-zinc-800 text-white placeholder-gray-500 focus:border-red-500'
                      : 'bg-white border-gray-200 text-black placeholder-gray-400 focus:border-red-500'
                  }`}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 outline-none transition-colors ${
                    darkMode
                      ? 'bg-zinc-900 border-zinc-800 text-white placeholder-gray-500 focus:border-red-500'
                      : 'bg-white border-gray-200 text-black placeholder-gray-400 focus:border-red-500'
                  }`}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 outline-none transition-colors ${
                    darkMode
                      ? 'bg-zinc-900 border-zinc-800 text-white placeholder-gray-500 focus:border-red-500'
                      : 'bg-white border-gray-200 text-black placeholder-gray-400 focus:border-red-500'
                  }`}
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border-2 outline-none transition-colors resize-none ${
                    darkMode
                      ? 'bg-zinc-900 border-zinc-800 text-white placeholder-gray-500 focus:border-red-500'
                      : 'bg-white border-gray-200 text-black placeholder-gray-400 focus:border-red-500'
                  }`}
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className={`text-3xl font-bold mb-8 ${
              darkMode ? 'text-white' : 'text-black'
            }`}>
              Our Offices
            </h2>

            <div className="grid grid-cols-1 gap-8">
              {offices.map((office, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 ${
                    darkMode ? 'bg-zinc-900' : 'bg-gray-50'
                  }`}
                >
                  <h3 className={`text-2xl font-bold mb-1 ${
                    darkMode ? 'text-white' : 'text-black'
                  }`}>
                    {office.city}
                  </h3>
                  <p className={`text-sm mb-6 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {office.country}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="text-red-500 mt-1 flex-shrink-0" />
                      <p className={`${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {office.address}
                      </p>
                    </div>

                    <a
                      href={`mailto:${office.email}`}
                      className="flex items-center gap-3 text-red-500 hover:text-red-600 transition-colors"
                    >
                      <Mail size={16} />
                      {office.email}
                    </a>

                    <a
                      href={`tel:${office.phone}`}
                      className="flex items-center gap-3 text-red-500 hover:text-red-600 transition-colors"
                    >
                      <Phone size={16} />
                      {office.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`rounded-2xl p-12 text-center border-2 ${
          darkMode ? 'border-zinc-800' : 'border-gray-200'
        }`}>
          <h2 className={`text-3xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-black'
          }`}>
            Quick Response
          </h2>
          <p className={`text-lg ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            We typically respond to inquiries within 24 business hours. For urgent matters, please call our main office directly.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
