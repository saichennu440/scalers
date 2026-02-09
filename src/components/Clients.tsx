interface ClientsProps {
  darkMode: boolean;
}

function Clients({ darkMode }: ClientsProps) {
  const clients = [
    'Premium Airlines',
    'Modern Dining',
    'Luxury Motors',
    'Premium Spirits',
    'Tech Innovation',
    'Global Retail',
    'Entertainment Co',
    'Lifestyle Brands'
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
          darkMode ? 'text-white' : 'text-black'
        }`}>
          Trusted by Industry Leaders
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`flex items-center justify-center p-8 rounded-xl transition-all duration-300 hover:scale-105 ${
                darkMode ? 'bg-zinc-900 hover:bg-zinc-800' : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <span className={`text-lg font-bold text-center ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
