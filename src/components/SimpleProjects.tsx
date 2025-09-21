import React from 'react';

const SimpleProjects: React.FC = () => {

  const projects = [
    {
      title: "HolyMix Anime Platform",
      description: "Full-stack anime streaming platform with modern UI, user authentication, and seamless video playback. Features responsive design and optimized performance.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      githubLink: "https://github.com/debasish26/HolyMix-Anime-SIte",
      liveLink: "https://holymix.live",
      type: "Full-Stack"
    },
    {
      title: "HolyMix API Service",
      description: "Robust REST API powering the HolyMix platform. Implements efficient data fetching, caching strategies, and real-time content delivery.",
      tags: ["Node.js", "Express", "API", "MongoDB"],
      githubLink: "https://github.com/debasish26/HolyMix-API",
      liveLink: "https://api.holymix.workers.dev/",
      type: "Backend"
    },
    {
      title: "TCP Server Architecture",
      description: "High-performance TCP server implementation in C with multi-client support, efficient memory management, and robust error handling.",
      tags: ["C", "Networking", "Sockets", "Systems"],
      githubLink: "https://github.com/debasish26/TCP-Server-Application-In-C",
      type: "System Programming"
    },
    {
      title: "Smart QR Generator",
      description: "Interactive QR code generation tool with customization options, bulk generation, and download functionality. Built with modern web technologies.",
      tags: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
      githubLink: "https://github.com/debasish26/qr-code-generator",
      liveLink: "https://qr-code-generator-debasish.netlify.app",
      type: "Web Tool"
    },
    {
      title: "Data Mining Tool",
      description: "Advanced web scraping solution with parallel processing, data parsing, and automated extraction capabilities for large datasets.",
      tags: ["Python", "BeautifulSoup", "Threading", "Data Mining"],
      githubLink: "https://github.com/debasish26/DODI-Repack-Scrapper",
      type: "Automation"
    },
    {
      title: "Molecular Mass Calculator",
      description: "Python tool for calculating the molecular mass of any chemical molecule or compound.",
      tags: ["Python", "Algorithms", "Chemestry", "Education"],
      githubLink: "https://github.com/debasish26/molecular-mass-calculator",
      type: "Educational"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">A showcase of my development work and programming solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full mb-3">
                  {project.type}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors text-center text-sm"
                >
                  GitHub
                </a>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-center text-sm"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/debasish26"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            View All Projects on GitHub
            <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SimpleProjects;
