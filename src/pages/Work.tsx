import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface WorkProps {
  darkMode: boolean;
}

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

function Work({ darkMode }: WorkProps) {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Created a cultural moment powered by innovative storytelling',
      category: 'Brand Campaign',
      description: 'Award-winning campaign that redefined brand engagement through immersive storytelling.',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1920'
    },
    {
      id: 2,
      title: 'Transformed digital presence across all touchpoints',
      category: 'Digital Strategy',
      description: 'Comprehensive digital ecosystem that increased engagement by 300%.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920'
    },
    {
      id: 3,
      title: 'Launched revolutionary product positioning',
      category: 'Brand Launch',
      description: 'Successfully positioned new product category in competitive market.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920'
    },
    {
      id: 4,
      title: 'Revitalized legacy brand for new generation',
      category: 'Brand Refresh',
      description: 'Modernized heritage brand while maintaining core identity and values.',
      image: 'https://images.pexels.com/photos/3498517/pexels-photo-3498517.jpeg?auto=compress&cs=tinysrgb&w=1920'
    },
    {
      id: 5,
      title: 'Built integrated campaign across 15 markets',
      category: 'Global Campaign',
      description: 'Multi-market campaign adapted for local relevance while maintaining global consistency.',
      image: 'https://images.pexels.com/photos/3944465/pexels-photo-3944465.jpeg?auto=compress&cs=tinysrgb&w=1920'
    },
    {
      id: 6,
      title: 'Developed immersive brand experience',
      category: 'Experiential Marketing',
      description: 'Designed and executed large-scale brand activation reaching 100k+ attendees.',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1920'
    }
  ];

  return (
    <div className={`pt-8 pb-20 px-6 ${darkMode ? 'bg-zinc-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-black'
          }`}>
            Our Work
          </h1>
          <p className={`text-xl max-w-3xl ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Explore our portfolio of award-winning campaigns and projects that have transformed brands and driven measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/work/${project.id}`}
              className={`rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 ${
                darkMode ? 'bg-zinc-900' : 'bg-gray-50'
              }`}
            >
              <div className="relative overflow-hidden h-64 md:h-80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end`}>
                  <div className="w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium inline-block mb-4 ${
                      darkMode ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-700'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className={`text-2xl font-bold mb-3 group-hover:text-red-500 transition-colors ${
                  darkMode ? 'text-white' : 'text-black'
                }`}>
                  {project.title}
                </h3>
                <p className={`mb-4 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-red-500 font-medium group-hover:gap-3 transition-all">
                  View Project
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className={`rounded-2xl p-12 text-center ${
          darkMode ? 'bg-zinc-900' : 'bg-gray-50'
        }`}>
          <h2 className={`text-3xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-black'
          }`}>
            Ready to Create Something Remarkable?
          </h2>
          <p className={`text-lg mb-8 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Let's discuss how we can help transform your brand and drive business growth.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition-all transform hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

export default Work;
