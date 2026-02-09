import Hero from '../components/Hero';
import FeaturedWork from '../components/FeaturedWork';
import About from '../components/About';
import Clients from '../components/Clients';

interface HomeProps {
  darkMode: boolean;
}

function Home({ darkMode }: HomeProps) {
  return (
    <>
      <Hero darkMode={darkMode} />
      <FeaturedWork darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Clients darkMode={darkMode} />
    </>
  );
}

export default Home;
