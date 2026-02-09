import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

interface Project {
  id: number;
  title: string;
  client: string;
  image: string;
  category: string;
}

function FeaturedWork({ darkMode }: HeroProps) {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Redefining luxury travel experiences',
      client: 'Premium Airlines',
      image: 'https://images.pexels.com/photos/1309644/pexels-photo-1309644.jpeg?auto=compress&cs=tinysrgb&w=1920',
      category: 'Brand Strategy'
    },
    {
      id: 2,
      title: 'Building a digital-first restaurant brand',
      client: 'Modern Dining',
      image: 'https://images.pexels.com/photos/2291597/pexels-photo-2291597.jpeg?auto=compress&cs=tinysrgb&w=1920',
      category: 'Digital Experience'
    },
    {
      id: 3,
      title: 'Crafting automotive excellence',
      client: 'Luxury Motors',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920',
      category: 'Campaign'
    },
    {
      id: 4,
      title: 'Elevating spirit brand storytelling',
      client: 'Premium Spirits',
      image: 'https://images.pexels.com/photos/5864245/pexels-photo-5864245.jpeg?auto=compress&cs=tinysrgb&w=1920',
      category: 'Content Creation'
    }
  ];

  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-black'
          }`}>
            Featured Work
          </h2>
          <p className={`text-lg max-w-2xl ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            We bring business insights to brand storytelling that transforms companies and drives growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group cursor-pointer rounded-2xl overflow-hidden ${
                darkMode ? 'bg-zinc-900' : 'bg-gray-50'
              }`}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <span className={`text-sm font-medium ${
                  darkMode ? 'text-red-400' : 'text-red-500'
                }`}>
                  {project.category}
                </span>
                <h3 className={`text-2xl font-bold mt-2 mb-2 ${
                  darkMode ? 'text-white' : 'text-black'
                }`}>
                  {project.title}
                </h3>
                <div className="flex items-center justify-between">
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {project.client}
                  </p>
                  <ArrowUpRight
                    size={20}
                    className={`transition-all duration-300 group-hover:text-red-500 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;
