import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import SkillBadge from '../ui/SkillBadge';
import { skills, Skill } from '../../data/skills';
import { Code, Database, Server, Wrench, FileCode } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredSkills = filter 
    ? skills.filter(skill => skill.type === filter) 
    : skills;
  
  const skillCategories = [
    { id: 'frontend', label: 'Frontend', icon: Code },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'database', label: 'Database', icon: Database },
    { id: 'tools', label: 'Dev Tools', icon: Wrench },
    { id: 'languages', label: 'Languages', icon: FileCode },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="My Skills" 
          subtitle="Technologies and tools I work with"
        />
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === null 
                ? 'bg-blue-600 text-white dark:bg-blue-500' 
                : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            All
          </button>
          
          {skillCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-lg flex items-center transition-colors ${
                filter === category.id 
                  ? 'bg-blue-600 text-white dark:bg-blue-500' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <category.icon size={16} className="mr-2" />
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <SkillBadge key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;