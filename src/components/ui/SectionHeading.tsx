import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 relative inline-block">
        <span className="relative z-10">{title}</span>
        <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-100 dark:bg-blue-900/30 -z-10 transform -rotate-1"></span>
      </h2>
      {subtitle && <p className="text-gray-600 dark:text-gray-400 max-w-2xl">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;