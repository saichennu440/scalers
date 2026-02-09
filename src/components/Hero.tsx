import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

function Hero({ darkMode }: HeroProps) {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-4 mb-8">
          <span className={`px-4 py-2 text-xs font-semibold border rounded-full ${
            darkMode ? 'border-zinc-700 text-zinc-300' : 'border-gray-300 text-gray-700'
          }`}>
            Business Transformation Agency of the Year
          </span>
          <span className={`px-4 py-2 text-xs font-semibold border rounded-full ${
            darkMode ? 'border-zinc-700 text-zinc-300' : 'border-gray-300 text-gray-700'
          }`}>
            U.S. Media Agency of the Year
          </span>
        </div>

        <div className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
          darkMode ? 'bg-zinc-900' : 'bg-gray-100'
        }`}>
          <div className="aspect-[16/9] relative overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Featured project"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-3xl">
              <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-white'
              }`}>
                Created a cultural moment powered by innovative storytelling
              </h1>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition-all transform hover:scale-105">
                View Project
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
