import React, { useEffect, useRef } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Code, User, GraduationCap, Briefcase } from 'lucide-react';
import Button from '../ui/Button';
import Typed from 'typed.js';

const AboutSection: React.FC = () => {

  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'MERN Stack Developer',
        'Frontend Developer',
        'Backend Developer',
        'Fullstack Developer'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleResumeDownload = () => {
    const resumeUrl = "https://drive.google.com/file/d/1GNXRfrFY4nb50bBEWxyaI9LfNY0OfOVm/view?usp=sharing";
    window.open(resumeUrl, '_blank');
  };

  const openGithub = () => {
    window.open('https://github.com/Mahesh10k', '_blank');
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Mahesh Pikki</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300">
            Aspiring <span ref={typedRef} className="text-blue-600 dark:text-blue-400"></span>
          </h2>
        </div>
        <SectionHeading 
          title="About Me" 
          subtitle="A brief introduction to who I am and what I do"
        />
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-4">
                  <User className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-bold">Who I Am</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Hi, I'm Mahesh Pikki, a passionate MERN stack developer with a fresh Computer Science degree. I love building web applications that solve real-world problems and provide excellent user experiences.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-4">
                  <Code className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-bold">What I Do</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                I specialize in building full-stack web applications using the MERN stack. From responsive front-end interfaces to robust back-end systems, I enjoy the entire development process.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-3">
                    <GraduationCap className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold">Education</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  B.Tech in Computer Science (AI & ML)<br />
                  <b>College</b> : KIET College <br />
                  <b>Graduation</b> : 2020 - 2024<br />
                  <b>CGPA</b> : 7.0 <br />
                </p>
              </div>
              
              <div className="flex-1 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-3">
                    <Briefcase className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold">Experience</h3>
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  <h4 className="font-semibold">Full Stack Developer Apprentice</h4>
                  <p className="text-sm">10000 Coders | Hyderabad, India</p>
                  <p className="text-sm mb-2">1 Year</p>
                  <ul className="text-sm list-disc list-inside space-y-1">
                    <li>Built reusable React components and implemented Redux for state management</li>
                    <li>Developed secure authentication using JWT and cookies</li>
                    <li>Integrated Cloudinary for file storage and streaming</li>
                    <li>Worked with MongoDB Atlas and REST APIs</li>
                    <li>Applied Agile methodologies and Git version control</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-start gap-4">
            <Button onClick={handleResumeDownload}>Download Resume</Button>
            <Button variant="outline" onClick={openGithub}>View Github</Button>
            </div>
          </div>
          
          <div className="w-full md:w-2/5">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg transform rotate-3 absolute -z-10 top-4 left-4 w-full h-full"></div>
              <div className="aspect-square rounded-2xl bg-white dark:bg-gray-800 overflow-hidden shadow-xl">
                <img 
                  src="https://res.cloudinary.com/daz6mccmm/image/upload/IMG_20250427_200807_bhcact.jpg" 
                  alt="Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
