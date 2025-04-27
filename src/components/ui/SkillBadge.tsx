import React from 'react';
import { Skill } from '../../data/skills';

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  const getTypeColor = () => {
    switch (skill.type) {
      case 'frontend':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'backend':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'database':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'tools':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'languages':
        return 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <div className={`px-4 py-2 rounded-lg ${getTypeColor()} flex items-center justify-between transition-all duration-300 hover:scale-105`}>
      <span className="font-medium">{skill.name}</span>
      <div className="w-16 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full ml-3">
        <div 
          className="h-full rounded-full bg-blue-600 dark:bg-blue-400" 
          style={{ width: `${(skill.level / 10) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBadge;