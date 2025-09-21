import { motion, useInView } from 'framer-motion';
import React, { useEffect, useMemo, useRef, useState } from 'react';

// Native counter component
const CountUp = ({ end, duration, delay, suffix = '' }: { end: number; duration: number; delay: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const increment = end / (duration * 60); // Assuming 60fps
      const counter = setInterval(() => {
        setCount(prev => {
          if (prev < end) {
            return Math.min(prev + increment, end);
          } else {
            clearInterval(counter);
            return end;
          }
        });
      }, 1000 / 60);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [end, duration, delay]);

  return <>{Math.floor(count)}{suffix}</>;
};

const SimpleHero: React.FC = () => {
  // Mouse position tracking
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Typing effect for subtitle
  const titles = useMemo(() => [
    "Competitive Programmer",
    "Full-Stack Developer",
    "Problem Solver",
    "Tech Enthusiast"
  ], []);

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Intersection Observer for animations
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  // Mouse tracking effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typing effect
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIndex, titles]);
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Mouse-following elements */}
        <motion.div
          className="absolute w-6 h-6 bg-blue-500/20 rounded-full blur-sm pointer-events-none"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20
          }}
          style={{
            left: '10%',
            top: '20%'
          }}
        />
        <motion.div
          className="absolute w-4 h-4 bg-cyan-500/30 rounded-full blur-sm pointer-events-none"
          animate={{
            x: mousePosition.x * -0.015,
            y: mousePosition.y * 0.025,
          }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25
          }}
          style={{
            right: '15%',
            top: '30%'
          }}
        />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-16 h-16 bg-cyan-500/10 rounded-lg blur-xl rotate-45"
          animate={{
            y: [0, 15, 0],
            rotate: [45, 135, 45],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-12 h-12 bg-blue-400/10 rounded-full blur-lg"
          animate={{
            y: [0, -25, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-8 h-8 bg-cyan-400/15 blur-md"
          animate={{
            y: [0, 20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10" ref={ref}>
        {/* Status Badge */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 text-sm font-medium cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-2 h-2 bg-blue-500 rounded-full mr-3"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            Hey Nerds....
          </motion.span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm{' '}
          <motion.span
            className="text-blue-600 dark:text-blue-400"
            animate={{
              textShadow: [
                '0 0 0px rgba(59, 130, 246, 0)',
                '0 0 10px rgba(59, 130, 246, 0.5)',
                '0 0 0px rgba(59, 130, 246, 0)'
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Debasish
          </motion.span>
        </motion.h1>

        {/* Animated Subtitle with Typing Effect */}
        <motion.div
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-normal h-16 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="mr-2">I'm a</span>
          <span className="text-blue-600 dark:text-blue-400 font-medium min-w-[280px] text-left">
            {displayText}
            <motion.span
              className="inline-block ml-1 w-0.5 h-6 bg-blue-600 dark:bg-blue-400"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I specialize in solving complex algorithmic challenges and building scalable web applications.
          Passionate about competitive programming with a strong foundation in full-stack development.
        </motion.p>

        {/* Enhanced Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { value: 235, label: "Problems Solved", sublabel: "Codeforces", color: "text-blue-600 dark:text-blue-400", delay: 0 },
            { value: 1245, label: "Contest Rating", sublabel: "Pupil Rank", color: "text-cyan-600 dark:text-cyan-400", delay: 0.1 },
            { value: 15, label: "Projects Built", sublabel: "Full-Stack", color: "text-blue-500 dark:text-blue-300", delay: 0.2, suffix: "+" },
            { value: 20, label: "Technologies", sublabel: "Mastered", color: "text-cyan-500 dark:text-cyan-300", delay: 0.3, suffix: "+" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + stat.delay }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
            >
              <div className={`text-3xl font-bold ${stat.color} mb-2 transition-colors group-hover:scale-110 transform duration-300`}>
                {inView && (
                  <CountUp
                    end={stat.value}
                    duration={2}
                    delay={1.5 + stat.delay}
                    suffix={stat.suffix || ''}
                  />
                )}
                {!inView && `${stat.value}${stat.suffix || ''}`}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                {stat.label}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-lg transition-all duration-300 group relative overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <motion.span
                className="transition-transform duration-300 group-hover:translate-x-1"
                initial={{ x: 0 }}
                animate={{ x: 0 }}
              >
                →
              </motion.span>
            </span>
          </motion.a>

          <motion.a
            href="https://blogs-of-debasishh.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium shadow-lg transition-all duration-300 group relative overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(168, 85, 247, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="text-lg">📝</span>
              Read My Blogs
              <motion.span
                className="text-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              >
                ↗
              </motion.span>
            </span>
          </motion.a>

          <motion.a
            href="https://codeforces.com/profile/strangerr01"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 rounded-lg font-medium transition-all duration-300 group relative overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="text-lg">🏆</span>
              Codeforces Profile
              <motion.span
                className="text-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              >
                ↗
              </motion.span>
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default SimpleHero;
