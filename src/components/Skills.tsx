import React from 'react';
import {
  Layout,
  Server,
  Cpu,
  Code,
  PenTool,
  Layers,
  BarChart,
  Database,
  Repeat,
  GitBranch,
  Terminal,
  Cloud,
  Zap,
  Search,
  ShieldCheck,
  Lock,
  Smartphone,
  Globe
} from 'lucide-react';
import SkillBar, { GradientType } from './SkillBar';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    progress: number;
    gradient: GradientType;
    icon: React.ReactNode;
  }[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Web Development",
      icon: <Globe className="text-blue-500" size={28} />,
      skills: [
        { name: "HTML/CSS", progress: 92, gradient: 'blue', icon: <Code size={18} /> },
        { name: "JavaScript", progress: 85, gradient: 'orange', icon: <Code size={18} /> },
        { name: "React", progress: 90, gradient: 'blue', icon: <Code size={18} /> },
        { name: "Node.js", progress: 88, gradient: 'green', icon: <Server size={18} /> },
        { name: "MongoDB", progress: 85, gradient: 'green', icon: <Database size={18} /> },
      ]
    },
    {
      title: "Programming Languages",
      icon: <Terminal className="text-green-500" size={28} />,
      skills: [
        { name: "JavaScript", progress: 90, gradient: 'orange', icon: <Code size={18} /> },
        { name: "Python", progress: 82, gradient: 'teal', icon: <Code size={18} /> },
        { name: "C", progress: 75, gradient: 'blue', icon: <Terminal size={18} /> },
        { name: "TypeScript", progress: 78, gradient: 'blue', icon: <Code size={18} /> },
        { name: "C++", progress: 70, gradient: 'orange', icon: <Coffee size={18} /> },
      ]
    },
    {
      title: "Cyber Security & Tools",
      icon: <Lock className="text-purple-500" size={28} />,
      skills: [
        { name: "Network Security", progress: 80, gradient: 'purple', icon: <Globe size={18} /> },
        { name: "Linux/Shell", progress: 85, gradient: 'orange', icon: <Terminal size={18} /> },
        { name: "Git/GitHub", progress: 92, gradient: 'pink', icon: <GitBranch size={18} /> },
        { name: "API Development", progress: 88, gradient: 'green', icon: <Server size={18} /> },
        { name: "Web Scraping", progress: 86, gradient: 'teal', icon: <Search size={18} /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-800 via-navy-900 to-navy-900">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">What I bring to the table</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="glass-card p-8 hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-bold gradient-text">{category.title}</h3>
              </div>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    skill={skill.name}
                    progress={skill.progress}
                    gradient={skill.gradient}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notable Projects */}
      <div className="container mx-auto px-6 mt-20">
        <h3 className="text-2xl font-bold text-center mb-12 text-blue-400">Notable Projects</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <Globe size={24} />, title: "HolyMix Anime Site", color: "blue", link: "https://holymix.live" },
            { icon: <Server size={24} />, title: "HolyMix API", color: "green", link: "https://api.holymix.workers.dev/" },
            { icon: <Terminal size={24} />, title: "TCP Server App", color: "purple", link: "https://github.com/debasish26/TCP-Server-Application-In-C" },
            { icon: <Code size={24} />, title: "QR Code Generator", color: "orange", link: "https://github.com/debasish26/qr-code-generator" }
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 text-center hover:scale-105 transition-transform"
            >
              <div className={`text-${item.color}-500 flex justify-center mb-4`}>
                {item.icon}
              </div>
              <h4 className="text-lg font-semibold">{item.title}</h4>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Coffee = ({ size }: { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
    <line x1="6" y1="2" x2="6" y2="4" />
    <line x1="10" y1="2" x2="10" y2="4" />
    <line x1="14" y1="2" x2="14" y2="4" />
  </svg>
);

export default Skills;
