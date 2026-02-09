import { MapPin, Briefcase, Building2 } from 'lucide-react';

interface CareersProps {
  darkMode: boolean;
}

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
}

interface Benefit {
  icon: typeof MapPin;
  title: string;
  description: string;
}

function Careers({ darkMode }: CareersProps) {
  const jobs: Job[] = [
    {
      id: 1,
      title: 'Senior Strategist',
      department: 'Strategy',
      location: 'New York, USA',
      type: 'Full-time'
    },
    {
      id: 2,
      title: 'Creative Director',
      department: 'Creative',
      location: 'London, UK',
      type: 'Full-time'
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Toronto, Canada',
      type: 'Full-time'
    },
    {
      id: 4,
      title: 'Digital Campaign Manager',
      department: 'Digital',
      location: 'Los Angeles, USA',
      type: 'Full-time'
    },
    {
      id: 5,
      title: 'Content Strategist',
      department: 'Content',
      location: 'Austin, USA',
      type: 'Remote'
    },
    {
      id: 6,
      title: 'Data Analyst',
      department: 'Analytics',
      location: 'Denver, USA',
      type: 'Hybrid'
    }
  ];

  const benefits: Benefit[] = [
    {
      icon: Building2,
      title: 'Global Opportunities',
      description: 'Work with leading brands and collaborate across our international offices.'
    },
    {
      icon: Briefcase,
      title: 'Professional Growth',
      description: 'Access to industry training, mentorship programs, and career development opportunities.'
    },
    {
      icon: MapPin,
      title: 'Work Flexibility',
      description: 'Flexible work arrangements including remote options and flexible scheduling.'
    }
  ];

  return (
    <div className={`pt-8 pb-20 px-6 ${darkMode ? 'bg-zinc-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-black'
          }`}>
            Careers at Scalers
          </h1>
          <p className={`text-xl max-w-3xl ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Join our talented team and help shape the future of brand transformation. We're looking for creative, strategic thinkers who are passionate about delivering excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  darkMode ? 'bg-zinc-900' : 'bg-gray-50'
                }`}
              >
                <Icon className="w-12 h-12 text-red-500 mb-4" />
                <h3 className={`text-2xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-black'
                }`}>
                  {benefit.title}
                </h3>
                <p className={`${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mb-20">
          <h2 className={`text-4xl font-bold mb-8 ${
            darkMode ? 'text-white' : 'text-black'
          }`}>
            Open Positions
          </h2>
          <div className="space-y-4">
            {jobs.map((job) => (
              <div
                key={job.id}
                className={`rounded-2xl p-8 transition-all duration-300 hover:shadow-lg ${
                  darkMode ? 'bg-zinc-900 hover:bg-zinc-800' : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-2 ${
                      darkMode ? 'text-white' : 'text-black'
                    }`}>
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
                        <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                          {job.department}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
                        <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                          {job.location}
                        </span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        darkMode ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-700'
                      }`}>
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 px-6 py-2 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition-all transform hover:scale-105">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`rounded-2xl p-12 text-center ${
          darkMode ? 'bg-zinc-900' : 'bg-gray-50'
        }`}>
          <h2 className={`text-3xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-black'
          }`}>
            Don't See Your Role?
          </h2>
          <p className={`text-lg mb-8 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            We're always looking for talented individuals. Send us your resume and let's talk about how you can contribute to Scalers.
          </p>
          <a
            href="mailto:careers@Scalers.agency"
            className="inline-flex items-center gap-2 px-8 py-3 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition-all transform hover:scale-105"
          >
            Send Your Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Careers;
