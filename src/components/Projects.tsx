import React from 'react';
import { Globe, Terminal, Database, GitBranch, Code, Server } from 'lucide-react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-navy-800 via-navy-900 to-navy-900">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Recent work</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ProjectCard
            title="HolyMix Anime Site"
            description="A comprehensive anime streaming site with a modern UI and user-friendly navigation. Check out holymix.live for the live version."
            image="/images/projects/holymix/holymix-preview.png"
            tags={['HTML', 'CSS', 'JavaScript']}
            icon={<Globe size={24} />}
            githubLink="https://github.com/debasish26/HolyMix-Anime-SIte"
            demoLink="https://holymix.live"
          />
                    <ProjectCard
            title="HolyMix API"
            description="API service for holymix.netlify.app - providing backend functionality for the anime streaming platform."
            image="/images/projects/holymix-api/holymix-api.png"
            tags={['JavaScript', 'API', 'Node.js']}
            icon={<Server size={24} />}
            demoLink="https://api.holymix.workers.dev/"
            githubLink="https://github.com/debasish26/HolyMix-API"
          />
                    <ProjectCard
            title="DODI Repack Scrapper"
            description="Python scraper that extracts data from DODI Repacks, demonstrating web scraping and parsing techniques."
            image="/images/projects/dodi-scraper/placeholder.svg"
            tags={['Python', 'Web Scraping', 'Data Parsing']}
            icon={<Database size={24} />}
            githubLink="https://github.com/debasish26/DODI-Repack-Scrapper"
          />
                    <ProjectCard
            title="TCP Server Application"
            description="A TCP Server application built in C allowing client connections, message sending, and responses - showcasing network communication principles."
            image="/images/projects/tcp-server/placeholder.svg"
            tags={['C', 'Networking', 'Sockets']}
            icon={<Terminal size={24} />}
            githubLink="https://github.com/debasish26/TCP-Server-Application-In-C"
          />
                    <ProjectCard
            title="QR Code Generator"
            description="A simple and efficient QR code generator tool that creates QR codes for URLs, text, and more."
            image="/images/projects/qr-code/placeholder.svg"
            tags={['CSS', 'QR Generator', 'Web Tools']}
            icon={<Code size={24} />}
            githubLink="https://github.com/debasish26/qr-code-generator"
            demoLink="https://qr-code-generator-debasish.netlify.app"
          />
                    <ProjectCard
            title="Molecular Mass Calculator"
            description="Python tool for calculating the molecular mass of any chemical molecule or compound."
            image="/images/projects/molecular-calc/placeholder.svg"
            tags={['Python', 'Chemistry', 'Calculator']}
            icon={<GitBranch size={24} />}
            githubLink="https://github.com/debasish26/molecular-mass-calculator"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
