import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-navy-800 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2023 Debasish Mahanta. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/debasish26" className="text-gray-400 hover:text-blue-500 transition-colors" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/debashish-mahanta-720184320/" className="text-gray-400 hover:text-blue-500 transition-colors" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/de_bashish024/" className="text-gray-400 hover:text-blue-500 transition-colors" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} />
            </a>
            <a href="https://holymix.live" className="text-gray-400 hover:text-blue-500 transition-colors" target="_blank" rel="noopener noreferrer">
              holymix.live
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
