import React from 'react';
import { Code, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    tags: string[];
    icon: React.ReactNode;
    githubLink?: string;
    demoLink?: string;
  }

  const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    image,
    tags,
    icon,
    githubLink,
    demoLink
  }) => {
  return (
    <div className="glass-card overflow-hidden group hover:scale-[1.02] transition-transform">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute bottom-4 right-4 flex gap-2">
            {githubLink && (
              <a href={githubLink} className="p-2 glass-card hover:bg-blue-500 hover:text-white transition-all duration-300" target="_blank" rel="noopener noreferrer">
                <Code size={20} />
              </a>
            )}
            {demoLink && (
              <a href={demoLink} className="p-2 glass-card hover:bg-blue-500 hover:text-white transition-all duration-300" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-blue-500">
            {icon}
          </div>
          <h3 className="text-xl font-bold gradient-text">{title}</h3>
        </div>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 glass-card text-sm hover:bg-blue-500/10 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
