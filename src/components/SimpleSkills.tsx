import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const SimpleSkills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [animatedBars, setAnimatedBars] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const skillCategories = [
    {
      title: "Competitive Programming",
      shortTitle: "CP",
      icon: "🏆",
      color: "bg-blue-600",
      textColor: "text-blue-600",
      skills: [
        { name: "C++", level: 85, icon: "⚡" },
        { name: "Algorithms", level: 80, icon: "🧠" },
        { name: "Data Structures", level: 85, icon: "🗂️" },
        { name: "Problem Solving", level: 82, icon: "🎯" },
      ]
    },
    {
      title: "Full-Stack Development",
      shortTitle: "Full-Stack",
      icon: "💻",
      color: "bg-cyan-600",
      textColor: "text-cyan-600",
      skills: [
        { name: "React/Next.js", level: 90, icon: "⚛️" },
        { name: "Node.js/Express", level: 88, icon: "🟢" },
        { name: "JavaScript/TypeScript", level: 92, icon: "🟨" },
        { name: "MongoDB/MySQL", level: 85, icon: "🗄️" },
      ]
    },
    {
      title: "Tools & Technologies",
      shortTitle: "Tools",
      icon: "🛠️",
      color: "bg-purple-600",
      textColor: "text-purple-600",
      skills: [
        { name: "Git/GitHub", level: 92, icon: "📁" },
        { name: "Linux/Shell", level: 85, icon: "🐧" },
        { name: "Python", level: 82, icon: "🐍" },
        { name: "Web Development", level: 90, icon: "🌐" },
      ]
    }
  ];

  useEffect(() => {
    if (inView) {
      setAnimatedBars(true);
    }
  }, [inView]);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Technologies and skills I work with
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white dark:bg-gray-800 backdrop-blur-sm p-2 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-x-auto">
            <div className="flex gap-1 min-w-max">
              {skillCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`px-4 md:px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                    activeCategory === index
                      ? `${category.color} text-white shadow-md`
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="hidden sm:inline">{category.title}</span>
                  <span className="sm:hidden text-sm">{category.shortTitle}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Active Skills Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-4 mb-8 justify-center">
                <span className="text-3xl md:text-4xl">{skillCategories[activeCategory].icon}</span>
                <h3 className={`text-xl md:text-2xl font-bold ${skillCategories[activeCategory].textColor} dark:${skillCategories[activeCategory].textColor.replace('text-', 'text-')}`}>
                  {skillCategories[activeCategory].title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillCategories[activeCategory].skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * skillIndex, duration: 0.4 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-lg md:text-xl transition-transform duration-200 group-hover:scale-110">{skill.icon}</span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-base md:text-lg font-bold text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="relative h-2 md:h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden transition-all duration-200 group-hover:h-3 md:group-hover:h-4">
                      <motion.div
                        className={`h-full ${skillCategories[activeCategory].color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: animatedBars ? `${skill.level}%` : 0 }}
                        transition={{
                          delay: 0.1 * skillIndex,
                          duration: 1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Competitive Programming Platforms */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Competitive Programming Profiles
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="https://codeforces.com/profile/strangerr01"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow text-center"
            >
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">1245</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Codeforces</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Pupil • 235 solved</div>
            </a>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center">
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">Coming Soon</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">LeetCode</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Profile in progress</div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-2">Coming Soon</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">AtCoder</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Profile in progress</div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">Coming Soon</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">CodeChef</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Profile in progress</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleSkills;
