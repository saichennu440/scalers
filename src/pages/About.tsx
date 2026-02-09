import { Award, Zap, Users, Globe, TrendingUp, Heart } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

interface Stat {
  icon: typeof Award;
  number: string;
  label: string;
}

interface Value {
  icon: typeof Award;
  title: string;
  description: string;
}

function AboutPage({ darkMode }: AboutProps) {
  const stats: Stat[] = [
    { icon: Award, number: '200+', label: 'Awards & Recognition' },
    { icon: Users, number: '500+', label: 'Clients Worldwide' },
    { icon: Zap, number: '1000+', label: 'Successful Campaigns' },
    { icon: TrendingUp, number: '2.5B+', label: 'Media Impressions' }
  ];

  const values: Value[] = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We constantly push boundaries to find new ways to solve complex business challenges with creative solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring their vision is understood and exceeded at every step.'
    },
    {
      icon: Heart,
      title: 'Excellence',
      description: 'Every project is treated with the same dedication and attention to detail, delivering world-class results consistently.'
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'We measure success by the tangible business results we deliver, from revenue growth to market leadership.'
    }
  ];

  return (
    <div className={`pt-8 pb-20 px-6 ${darkMode ? 'bg-zinc-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-black'
          }`}>
            About Scalers
          </h1>
          <p className={`text-xl max-w-3xl ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            We're a global business agency that combines strategic insights with creative excellence to transform brands and drive measurable growth.
          </p>
        </div>

        <div className={`rounded-2xl overflow-hidden mb-20 ${
          darkMode ? 'bg-zinc-900' : 'bg-gray-50'
        }`}>
          <img
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Scalers Team"
            className="w-full h-96 object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`rounded-2xl p-8 text-center ${
                  darkMode ? 'bg-zinc-900' : 'bg-gray-50'
                }`}
              >
                <Icon className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className={`text-3xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-black'
                }`}>
                  {stat.number}
                </h3>
                <p className={`${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mb-20">
          <h2 className={`text-4xl font-bold mb-12 ${
            darkMode ? 'text-white' : 'text-black'
          }`}>
            Our Story
          </h2>
          <div className={`rounded-2xl p-12 ${
            darkMode ? 'bg-zinc-900' : 'bg-gray-50'
          }`}>
            <p className={`text-lg mb-6 leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Founded in 2010, Scalers started with a simple mission: to help businesses tell their stories in ways that resonate with their audiences and drive real results. What began as a small creative team has grown into a global agency with offices across the world.
            </p>
            <p className={`text-lg mb-6 leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Over the past decade, we've partnered with leading brands across industries, from Fortune 500 companies to ambitious startups. We've learned that the most successful brands are those that combine strategic thinking with creative boldness, and that's exactly what we bring to every project.
            </p>
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Today, we're proud to be recognized as one of the industry's leading agencies, with numerous awards and accolades. But our greatest achievement is the success of our clients and the meaningful impact our work has on their businesses.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className={`text-4xl font-bold mb-12 ${
            darkMode ? 'text-white' : 'text-black'
          }`}>
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
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
                    {value.title}
                  </h3>
                  <p className={`${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`rounded-2xl p-12 text-center ${
          darkMode ? 'bg-zinc-900' : 'bg-gray-50'
        }`}>
          <h2 className={`text-3xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-black'
          }`}>
            Ready to Work Together?
          </h2>
          <p className={`text-lg mb-8 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Let's discuss how we can help transform your business.
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

export default AboutPage;
