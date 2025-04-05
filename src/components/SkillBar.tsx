import React, { useState, useEffect } from 'react';

export type GradientType =
  | 'blue'
  | 'green'
  | 'purple'
  | 'orange'
  | 'pink'
  | 'teal'
  | 'emerald';

interface SkillBarProps {
  skill: string;
  progress: number;
  gradient?: GradientType;
  icon?: React.ReactNode;
}

const SkillBar: React.FC<SkillBarProps> = ({
  skill,
  progress,
  gradient = 'emerald',
  icon
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const gradientMap: Record<GradientType, string> = {
    blue: 'from-blue-500 to-cyan-500',
    green: 'from-green-500 to-emerald-400',
    purple: 'from-purple-500 to-indigo-500',
    orange: 'from-orange-500 to-amber-400',
    pink: 'from-pink-500 to-rose-400',
    teal: 'from-teal-500 to-cyan-400',
    emerald: 'from-emerald-500 to-teal-500'
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`skill-${skill}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [skill]);

  return (
    <div id={`skill-${skill}`} className="group">
      <div className="flex justify-between mb-2 items-center">
        {icon && (
          <div className={`text-${gradient === 'blue' ? 'blue' : gradient}-500 mr-2 group-hover:scale-110 transition-transform`}>
            {icon}
          </div>
        )}
        <span className="flex-grow">{skill}</span>
        <span className={`text-${gradient === 'blue' ? 'blue' : gradient}-500`}>{progress}%</span>
      </div>
      <div className="h-2 bg-navy-700 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${gradientMap[gradient]} rounded-full transition-all duration-1000 shadow-glow-${gradient}`}
          style={{ width: isVisible ? `${progress}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
