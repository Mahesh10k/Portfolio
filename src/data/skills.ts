export interface Skill {
  name: string;
  type: 'frontend' | 'backend' | 'database' | 'tools' | 'languages';
  level: number; // 1-10
}

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML', type: 'frontend', level: 9 },
  { name: 'CSS', type: 'frontend', level: 8 },
  { name: 'Bootstrap', type: 'frontend', level: 8 },
  { name: 'JavaScript', type: 'frontend', level: 8 },
  { name: 'React', type: 'frontend', level: 8 },
  
  // Backend
  { name: 'Node.js', type: 'backend', level: 7 },
  { name: 'Express', type: 'backend', level: 7 },
  { name: 'REST API', type: 'backend', level: 7 },
  
  // Database
  { name: 'MongoDB', type: 'database', level: 7 },
  { name: 'SQL', type: 'database', level: 6 },
  
  // Development Tools
  { name: 'Git', type: 'tools', level: 8 },
  { name: 'GitHub', type: 'tools', level: 8 },
  { name: 'VS Code', type: 'tools', level: 9 },
  
  // Programming Languages
  { name: 'Python', type: 'languages', level: 6 },
  { name: 'JavaScript', type: 'languages', level: 8 },
];