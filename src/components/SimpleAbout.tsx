import React from 'react';

const SimpleAbout: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Get to know me better</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/profile/profile.jpg"
                  alt="Debasish Mahanta - Profile Picture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                <span className="text-2xl">👨‍💻</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Passionate Problem Solver & Developer
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I'm Debasish Mahanta, a dedicated competitive programmer and full-stack developer with a passion for solving complex algorithmic challenges and building innovative web applications.
              </p>

              <p>
                With <strong className="text-blue-600 dark:text-blue-400">235 problems solved</strong> on Codeforces and a current rating of <strong className="text-blue-600 dark:text-blue-400">1245 (Pupil)</strong>, I continuously push my boundaries in competitive programming while developing real-world applications using modern technologies.
              </p>

              <p>
                My journey combines the logical thinking required for competitive programming with the creativity needed for full-stack development, allowing me to approach problems from multiple angles and deliver efficient solutions.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                <p className="text-gray-600 dark:text-gray-300">India</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white">Focus</h4>
                <p className="text-gray-600 dark:text-gray-300">CP & Development</p>
              </div>
            </div>
          </div>

          {/* Skills Overview */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Core Expertise
            </h3>

            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Competitive Programming</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Algorithms, Data Structures, Problem Solving, Contest Participation
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Full-Stack Development</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  React, Node.js, MongoDB, TypeScript, Modern Web Technologies
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Programming Languages</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  C++, JavaScript/TypeScript, Python, Modern Development Tools
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleAbout;
