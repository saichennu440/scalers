interface AboutProps {
  darkMode: boolean;
}

function About({ darkMode }: AboutProps) {
  return (
    <section id="about" className={`py-20 px-6 ${
      darkMode ? 'bg-zinc-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-black'
            }`}>
              We're a Business Agency
            </h2>
            <p className={`text-xl md:text-2xl leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              We bring business insights to brand storytelling that transforms companies and drives growth.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-bold mb-3 ${
                darkMode ? 'text-white' : 'text-black'
              }`}>
                Strategic Thinking
              </h3>
              <p className={`text-lg ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                We combine data-driven insights with creative excellence to build brands that resonate and drive measurable business results.
              </p>
            </div>

            <div>
              <h3 className={`text-2xl font-bold mb-3 ${
                darkMode ? 'text-white' : 'text-black'
              }`}>
                Creative Excellence
              </h3>
              <p className={`text-lg ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Our award-winning creative team crafts compelling narratives that capture attention and inspire action across all channels.
              </p>
            </div>

            <div>
              <h3 className={`text-2xl font-bold mb-3 ${
                darkMode ? 'text-white' : 'text-black'
              }`}>
                Business Impact
              </h3>
              <p className={`text-lg ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Every campaign is designed to deliver tangible outcomes, from brand awareness to revenue growth and market leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
