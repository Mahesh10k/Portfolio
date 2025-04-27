export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubLink?: string;
  demoLink?: string;
}

export const projects: Project[] = [
  {
    id: 'podcast-app',
    title: 'Podcast Streaming App',
    description: 'A feature-rich podcast streaming application that allows users to discover and listen to their favorite podcasts. Includes features like Trending playlists and playback speed control.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API', 'Cloudinary'],
    image: 'https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg',
    githubLink: 'https://github.com/Mahesh10k/PodListen',
    demoLink: 'https://pod-listen.vercel.app/',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Website',
    description: 'A full-featured e-commerce platform for Mobiles, Laptops and Watches with product catalog, shopping cart, user authentication. Responsive design ensures a seamless shopping experience across all devices.',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    githubLink: 'https://github.com/Mahesh10k/TechShop-ECommerce-Project',
    demoLink: 'https://mahesh10k.github.io/TechShop-ECommerce-Project/',
  },
  {
    id: 'sentiment-analysis',
    title: 'Text Sentiment Analysis',
    description: 'An application that analyzes text input to determine sentiment (positive, negative). Uses natural language processing techniques to provide accurate sentiment scores for various applications.',
    technologies: ['Python', 'Machine Learning', 'NLP'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
    githubLink: 'https://github.com/maheshpikki/Sentimental-Analysis',
    demoLink: 'https://www.linkedin.com/posts/mahesh-pikki_machinelearning-nlp-datascience-activity-7231341130095722496-jEfz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6ObR8B8lxohfxVpNPWNE3k8j7UnmAZfb8',
  },
];