// App.tsx
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Work from './pages/Work';
import AboutPage from './pages/About';
import Services from './pages/Services';
import Careers from './pages/Careers';
import News from './pages/News';
import Contact from './pages/Contact';
import useScrollToTop from './hooks/useScrollToTop';

const ScrollToTop: React.FC = () => {
  useScrollToTop();
  return null;
};

function App() {
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    
    <div className={`${darkMode ? 'dark bg-zinc-950' : 'bg-white'} min-h-screen`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Remove padding on Home page */}
      <main className={location.pathname === "/" ? "pt-0" : "pt-[80px]"}>
        <ScrollToTop />
        <Routes>         
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/work" element={<Work darkMode={darkMode} />} />
          <Route path="/about" element={<AboutPage darkMode={darkMode} />} />
          <Route path="/services" element={<Services darkMode={darkMode} />} />
          <Route path="/careers" element={<Careers darkMode={darkMode} />} />
          <Route path="/news" element={<News darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        </Routes>
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
