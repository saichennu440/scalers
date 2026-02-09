import { useParams, Link } from 'react-router-dom';
import { ArrowUpRight, Calendar, Tag } from 'lucide-react';

interface ProjectDetailProps {
  darkMode: boolean;
}

interface ProjectInfo {
  id: number;
  title: string;
  category: string;
  date: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
}

const projectsData: { [key: number]: ProjectInfo } = {
  1: {
    id: 1,
    title: 'Created a cultural moment powered by innovative storytelling',
    category: 'Brand Campaign',
    date: 'January 2024',
    client: 'Global Consumer Brand',
    description: 'Award-winning campaign that redefined brand engagement through immersive storytelling across digital and traditional channels.',
    challenge: 'The brand needed to reconnect with younger audiences while maintaining loyalty among existing customers. Traditional marketing approaches were no longer effective.',
    solution: 'We developed an integrated storytelling campaign that leveraged user-generated content, influencer partnerships, and immersive experiences to create authentic connections with the audience.',
    results: [
      '300% increase in brand engagement',
      '50M+ total impressions across channels',
      '25% increase in sales during campaign period',
      'Won 3 major industry awards'
    ],
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1920'
  },
  2: {
    id: 2,
    title: 'Transformed digital presence across all touchpoints',
    category: 'Digital Strategy',
    date: 'November 2023',
    client: 'Financial Services Company',
    description: 'Comprehensive digital ecosystem that increased engagement by 300% and streamlined customer journey.',
    challenge: 'The client\'s digital presence was fragmented across multiple platforms with inconsistent messaging and poor user experience.',
    solution: 'We conducted a comprehensive digital audit, redesigned the website and mobile app, and implemented a unified content strategy across all digital touchpoints.',
    results: [
      '300% increase in engagement',
      '45% reduction in customer acquisition cost',
      '2.5x increase in conversion rates',
      'Award for Best Digital Experience'
    ],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920'
  },
  3: {
    id: 3,
    title: 'Launched revolutionary product positioning',
    category: 'Brand Launch',
    date: 'September 2023',
    client: 'Tech Startup',
    description: 'Successfully positioned new product category in competitive market, achieving category leadership within 6 months.',
    challenge: 'Entering a crowded market with a new product category that consumers didn\'t yet understand or recognize as valuable.',
    solution: 'We developed a thought leadership campaign, created educational content, and built strategic partnerships to establish the brand as the category leader.',
    results: [
      'Category leadership achieved in 6 months',
      '75M+ impressions in first quarter',
      'Series B funding $50M based partly on brand positioning',
      'Featured in major publications'
    ],
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920'
  },
  4: {
    id: 4,
    title: 'Revitalized legacy brand for new generation',
    category: 'Brand Refresh',
    date: 'July 2023',
    client: 'Heritage Retail Brand',
    description: 'Modernized heritage brand while maintaining core identity and values, appealing to younger demographics.',
    challenge: 'A 50-year-old brand was perceived as outdated by younger consumers while older audiences remained loyal.',
    solution: 'We conducted extensive consumer research and developed a modernized visual identity, refreshed messaging, and new marketing channels while respecting brand heritage.',
    results: [
      '40% increase in younger demographic (18-35)',
      'Overall brand sentiment up 45%',
      '30% revenue growth year-over-year',
      'Expanded to 15 new retail locations'
    ],
    image: 'https://images.pexels.com/photos/3498517/pexels-photo-3498517.jpeg?auto=compress&cs=tinysrgb&w=1920'
  },
  5: {
    id: 5,
    title: 'Built integrated campaign across 15 markets',
    category: 'Global Campaign',
    date: 'May 2023',
    client: 'International Consumer Brand',
    description: 'Multi-market campaign adapted for local relevance while maintaining global consistency and brand messaging.',
    challenge: 'Creating a unified global campaign that resonates locally in 15 different markets with diverse cultures and languages.',
    solution: 'We developed a core brand narrative framework and worked with local teams to adapt messaging, creative, and media strategies for each market while maintaining global consistency.',
    results: [
      'Coordinated launch across 15 markets',
      '200M+ total impressions',
      'Average 35% increase in brand awareness per market',
      'Won Best Global Campaign award'
    ],
    image: 'https://images.pexels.com/photos/3944465/pexels-photo-3944465.jpeg?auto=compress&cs=tinysrgb&w=1920'
  },
  6: {
    id: 6,
    title: 'Developed immersive brand experience',
    category: 'Experiential Marketing',
    date: 'March 2023',
    client: 'Luxury Brand',
    description: 'Designed and executed large-scale brand activation reaching 100k+ attendees across multiple cities.',
    challenge: 'Creating a memorable, scalable brand experience that could travel to multiple cities while maintaining quality and impact.',
    solution: 'We designed a modular experiential platform that combined physical installations with digital integration, creating Instagram-worthy moments that extended the campaign reach.',
    results: [
      '100k+ attendees across 8 cities',
      '5M+ social media impressions',
      '30% of attendees became brand advocates',
      'Generated significant earned media coverage'
    ],
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1920'
  }
};

function ProjectDetail({ darkMode }: ProjectDetailProps) {
  const { id } = useParams();
  const project = id ? projectsData[parseInt(id)] : null;

  if (!project) {
    return (
      <div className={`pt-8 pb-20 px-6 ${darkMode ? 'bg-zinc-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h1 className={`text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-black'
          }`}>
            Project Not Found
          </h1>
          <Link to="/work" className="text-red-500 hover:text-red-600 font-medium">
            Back to Work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`pt-32 pb-20 px-6 ${darkMode ? 'bg-zinc-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <Link to="/work" className={`inline-flex items-center gap-2 mb-8 transition-colors hover:text-red-500 ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          ← Back to Work
        </Link>

        <div className="mb-12">
          <div className="flex flex-wrap gap-4 mb-6">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              darkMode ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-700'
            }`}>
              {project.category}
            </span>
            <span className={`flex items-center gap-2 text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <Calendar size={16} />
              {project.date}
            </span>
          </div>

          <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-black'
          }`}>
            {project.title}
          </h1>

          <p className={`text-xl max-w-3xl ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Client: <span className={darkMode ? 'text-white' : 'text-black'}>{project.client}</span>
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden mb-20">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-96 md:h-96 lg:h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className={`rounded-2xl p-12 mb-12 ${
              darkMode ? 'bg-zinc-900' : 'bg-gray-50'
            }`}>
              <h2 className={`text-3xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-black'
              }`}>
                The Challenge
              </h2>
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {project.challenge}
              </p>
            </div>

            <div className={`rounded-2xl p-12 ${
              darkMode ? 'bg-zinc-900' : 'bg-gray-50'
            }`}>
              <h2 className={`text-3xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-black'
              }`}>
                Our Solution
              </h2>
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {project.solution}
              </p>
            </div>
          </div>

          <div className={`rounded-2xl p-12 ${
            darkMode ? 'bg-zinc-900' : 'bg-gray-50'
          }`}>
            <h2 className={`text-3xl font-bold mb-8 ${
              darkMode ? 'text-white' : 'text-black'
            }`}>
              Results
            </h2>
            <ul className="space-y-4">
              {project.results.map((result, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ArrowUpRight className="text-red-500 mt-1 flex-shrink-0" size={20} />
                  <span className={`text-lg ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {result}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`rounded-2xl p-12 text-center ${
          darkMode ? 'bg-zinc-900' : 'bg-gray-50'
        }`}>
          <h2 className={`text-3xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-black'
          }`}>
            Ready to Create Similar Results?
          </h2>
          <p className={`text-lg mb-8 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Let's discuss how we can help transform your brand.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition-all transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
