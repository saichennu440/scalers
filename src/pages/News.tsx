import { Calendar, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NewsProps {
  darkMode: boolean;
}

interface Article {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
}

function News({ darkMode }: NewsProps) {
  const articles: Article[] = [
    {
      id: 1,
      title: 'Scalers Wins Campaign of the Year at Industry Awards',
      category: 'News',
      date: 'February 8, 2024',
      excerpt: 'Our innovative campaign for a leading brand has been recognized with the prestigious Campaign of the Year award, highlighting our commitment to creative excellence.',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920'
    },
    {
      id: 2,
      title: 'The Future of Brand Strategy in the AI Era',
      category: 'Insights',
      date: 'February 1, 2024',
      excerpt: 'Discover how artificial intelligence is transforming brand strategy and what forward-thinking companies should be doing now to stay ahead.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920'
    },
    {
      id: 3,
      title: 'Expanding Our London Office with New Talent',
      category: 'Company',
      date: 'January 25, 2024',
      excerpt: 'Were excited to announce the expansion of our London office with 15 new creative and strategic positions. Join our growing team!',
      image: 'https://images.pexels.com/photos/3182814/pexels-photo-3182814.jpeg?auto=compress&cs=tinysrgb&w=1920'
    },
    {
      id: 4,
      title: 'How Data-Driven Creativity Drives Business Results',
      category: 'Insights',
      date: 'January 18, 2024',
      excerpt: 'Explore the intersection of data analytics and creative thinking in building campaigns that deliver measurable business impact.',
      image: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=1920'
    },
    {
      id: 5,
      title: 'Case Study: Transforming Brand Perception in 6 Months',
      category: 'Case Study',
      date: 'January 11, 2024',
      excerpt: 'Learn how our strategic approach helped a major brand completely transform customer perception and market positioning.',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920'
    },
    {
      id: 6,
      title: 'Meet Our Newest Team Members',
      category: 'Company',
      date: 'January 4, 2024',
      excerpt: 'Welcome to Scalers! Meet the talented creative directors, strategists, and designers who recently joined our team.',
      image: 'https://images.pexels.com/photos/3182816/pexels-photo-3182816.jpeg?auto=compress&cs=tinysrgb&w=1920'
    }
  ];

  return (
    <div className={`pt-8 pb-20 px-6 ${darkMode ? 'bg-zinc-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-black'
          }`}>
            News & Insights
          </h1>
          <p className={`text-xl max-w-3xl ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Stay updated with the latest news from Scalers, industry insights, and thought leadership from our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className={`group rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer ${
                darkMode ? 'bg-zinc-900 hover:bg-zinc-800' : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                    darkMode
                      ? 'bg-red-500/20 text-red-400'
                      : 'bg-red-500/10 text-red-600'
                  }`}>
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-sm">
                    <Calendar size={14} className={`${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`} />
                    <span className={`${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {article.date}
                    </span>
                  </div>
                </div>

                <h3 className={`text-xl font-bold mb-2 line-clamp-2 ${
                  darkMode ? 'text-white' : 'text-black'
                }`}>
                  {article.title}
                </h3>

                <p className={`text-sm mb-4 line-clamp-2 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-2 text-red-500 font-medium group-hover:gap-3 transition-all">
                  Read More
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`rounded-2xl p-12 text-center mt-20 ${
          darkMode ? 'bg-zinc-900' : 'bg-gray-50'
        }`}>
          <h2 className={`text-3xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-black'
          }`}>
            Subscribe to Our Newsletter
          </h2>
          <p className={`text-lg mb-8 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Get the latest insights and news delivered to your inbox.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className={`flex-1 px-4 py-3 rounded-full border-2 outline-none transition-colors ${
                darkMode
                  ? 'bg-zinc-800 border-zinc-700 text-white placeholder-gray-500 focus:border-red-500'
                  : 'bg-white border-gray-200 text-black placeholder-gray-400 focus:border-red-500'
              }`}
            />
            <button className="px-8 py-3 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition-all transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
