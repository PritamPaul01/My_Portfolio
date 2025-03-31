  'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

// Project data
const projects = [
  {
    id: 1,
    title: 'Immersive AR Universe',
    category: 'AR Development',
    image: '/images/HI1.png',
    description: 'An educational AR experience featuring dynamic, animated 3D models of planets with interactive elements for learning about our solar system.',
    technologies: ['Unity', 'Vuforia', 'TechXR SDK', 'C#'],
  },
  {
    id: 2,
    title: 'AR Medical Training App',
    category: 'AR Development',
    image: '/images/HI2.png',
    description: 'An augmented reality application helping medical students learn through interactive 3D models of medical equipment and anatomical structures.',
    technologies: ['Unity', 'Vuforia', 'ARCore', 'C#'],
  },
  {
    id: 3,
    title: 'VR Surgery Simulator',
    category: 'VR Development',
    image: '/images/HI3.png',
    description: 'A virtual reality simulator for practicing common surgical procedures with haptic feedback and realistic tissue interaction physics.',
    technologies: ['Unity', 'Blender', 'Figma', 'Meta SDK', 'C#'],
  },
  {
    id: 4,
    title: 'Space Showroom X',
    category: 'VR Development',
    image: '/images/HI4.png',
    description: 'A luxury car showroom set in space featuring a "Design Your Own Car" experience with customizable components and realistic lighting.',
    technologies: ['Unity', 'Blender', 'Figma', 'Meta SDK', 'C#'],
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Variants for slide animations
  const slideVariants = {
    enterLeft: {
      x: -1000,
      opacity: 0
    },
    enterRight: {
      x: 1000,
      opacity: 0
    },
    center: {
      x: 0,
      opacity: 1,
      zIndex: 1
    },
    exitLeft: {
      x: -1000,
      opacity: 0,
      zIndex: 0
    },
    exitRight: {
      x: 1000,
      opacity: 0,
      zIndex: 0
    }
  };

  return (
    <section 
      id="projects"
      ref={sectionRef}
      className="section bg-gray-100 py-16"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-3 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Explore My Projects
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Discover my innovative work in XR development and creative technology
          </motion.p>
        </div>
        
        {/* Project Carousel Container */}
        <div className="relative max-w-5xl mx-auto px-10 overflow-hidden">
          {/* Project Cards */}
          <AnimatePresence initial={false} mode="popLayout">
            <motion.div 
              className="carousel-container"
              key={`project-${currentIndex}`}
              initial={direction > 0 ? "enterRight" : "enterLeft"}
              animate="center"
              exit={direction > 0 ? "exitLeft" : "exitRight"}
              variants={slideVariants}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 35 },
                opacity: { duration: 0.3 }
              }}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col md:flex-row border border-gray-100">
                {/* Project Image */}
                <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-gray-200 group">
                  <img 
                    src={projects[currentIndex].image} 
                    alt={projects[currentIndex].title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Project Details */}
                <div className="md:w-1/2 p-8 flex flex-col">
                  <h3 className="text-2xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {projects[currentIndex].category}
                  </p>
                  <p className="text-gray-700 mb-6 flex-grow">
                    {projects[currentIndex].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projects[currentIndex].technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 mb-16">
            {/* Previous Button */}
            <button 
              onClick={prevProject}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 z-10"
              aria-label="Previous project"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {/* Indicator Dots */}
            <div className="flex space-x-3 justify-center">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Next Button */}
            <button 
              onClick={nextProject}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 z-10"
              aria-label="Next project"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
