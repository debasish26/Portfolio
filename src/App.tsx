import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import SimpleHero from './components/SimpleHero';
import SimpleAbout from './components/SimpleAbout';
import SimpleSkills from './components/SimpleSkills';
import SimpleProjects from './components/SimpleProjects';
import SimpleContact from './components/SimpleContact';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  console.log('App rendering with all sections...');

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <section id="home">
        <SimpleHero />
      </section>
      <section id="about">
        <SimpleAbout />
      </section>
      <section id="skills">
        <SimpleSkills />
      </section>
      <section id="projects">
        <SimpleProjects />
      </section>
      <section id="contact">
        <SimpleContact />
      </section>
      {/* <Footer /> */}
      
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 100 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
