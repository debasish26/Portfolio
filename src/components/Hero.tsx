import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const phrases = [
    "MERN Stack Developer",
    "Programmer",
    "Cyber Security Enthusiast",
    "Web Developer"
  ];

  useEffect(() => {
    let interval: ReturnType<typeof setTimeout>;
    let letterIndex = 0;
    let currentText = '';
    let isDeleting = false;

    const type = () => {
      const currentPhaseText = phrases[currentPhrase];

      if (isDeleting) {
        // Deleting text
        currentText = currentPhaseText.substring(0, letterIndex - 1);
        letterIndex--;
      } else {
        // Typing text
        currentText = currentPhaseText.substring(0, letterIndex + 1);
        letterIndex++;
      }

      setTypedText(currentText);

      // Determine typing speed
      let typeSpeed = isDeleting ? 50 : 100;

      // Move to next phrase or start deleting
      if (!isDeleting && letterIndex === currentPhaseText.length) {
        // Delay before starting to delete
        typeSpeed = 1500;
        isDeleting = true;
      } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        // Delay before typing next phrase
        typeSpeed = 500;
      }

      interval = setTimeout(type, typeSpeed);
    };

    interval = setTimeout(type, 1000);

    return () => clearTimeout(interval);
  }, [currentPhrase]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-navy-800 via-navy-900 to-navy-900">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-6 text-blue-500">
          <span className="inline-block animate-float px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm">
            Welcome to my portfolio
          </span>
        </div>
        <h2 className="text-5xl md:text-7xl font-bold mb-4 animate-gradient bg-gradient-to-r from-white via-blue-500 to-white bg-clip-text text-transparent">
          Hi, I'm <span className='text-white'>Debasish<span className='text-blue-500'>.</span></span>
        </h2>
        <h3 className="h-8 text-xl md:text-2xl text-gray-400 mb-8 flex justify-center items-center">
          <span className="typing-text mr-1">I'm a</span>
          <span className="text-blue-400 border-r-2 border-blue-500 pr-1 animate-cursor">{typedText}</span>
        </h3>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed animate-fadeIn">
          I build robust applications with modern technologies.
          Specializing in MERN stack development and cyber security solutions.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-slideUp">
          <a href="#projects" className="btn-primary w-full md:w-auto group relative overflow-hidden">
            <span className="relative z-10 group-hover:translate-x-1 transition-transform inline-block">
              View My Work
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
          <a href="https://github.com/debasish26" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full md:w-auto group relative overflow-hidden">
            <span className="relative z-10">
              GitHub Profile
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-blue-500 flex flex-col items-center">
            <span className="text-sm mb-2">Scroll Down</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
