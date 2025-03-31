'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const techCategories = [
  {
    id: 1,
    title: 'XR Development',
    description: 'Specialized tools and frameworks for creating immersive virtual, augmented, and mixed reality experiences.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 18H12.01M9 21H15C15.5523 21 16 20.5523 16 20V4C16 3.44772 15.5523 3 15 3H9C8.44772 3 8 3.44772 8 4V20C8 20.5523 8.44772 21 9 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    skills: ['Unity XR', 'Unreal XR', 'OpenXR', 'ARKit/ARCore', 'WebXR', 'Meta SDK'],
  },
  {
    id: 2,
    title: 'Programming & Frameworks',
    description: 'Languages and frameworks that power the interactive and computational aspects of XR development.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 3V5.4C8 5.96 8 6.24 7.89 6.45C7.79 6.64 7.64 6.79 7.45 6.89C7.24 7 6.96 7 6.4 7H4M8 3H16M8 3H6.8C6.11 3 5.77 3 5.5 3.11C5.27 3.2 5.2 3.27 5.11 3.5C5 3.77 5 4.11 5 4.8V6.4C5 6.96 5 7.24 4.89 7.45C4.79 7.64 4.64 7.79 4.45 7.89C4.24 8 3.96 8 3.4 8H3M16 3H17.2C17.89 3 18.23 3 18.5 3.11C18.73 3.2 18.8 3.27 18.89 3.5C19 3.77 19 4.11 19 4.8V6.4C19 6.96 19 7.24 19.11 7.45C19.21 7.64 19.36 7.79 19.55 7.89C19.76 8 20.04 8 20.6 8H21M16 3V5.4C16 5.96 16 6.24 16.11 6.45C16.21 6.64 16.36 6.79 16.55 6.89C16.76 7 17.04 7 17.6 7H20M21 8V16M21 16H19.6C19.04 16 18.76 16 18.55 16.11C18.36 16.21 18.21 16.36 18.11 16.55C18 16.76 18 17.04 18 17.6V20M21 16V17.2C21 17.89 21 18.23 20.89 18.5C20.8 18.73 20.73 18.8 20.5 18.89C20.23 19 19.89 19 19.2 19H17.6C17.04 19 16.76 19 16.55 18.89C16.36 18.79 16.21 18.64 16.11 18.45C16 18.24 16 17.96 16 17.4V16M3 8V16M3 16H4.4C4.96 16 5.24 16 5.45 16.11C5.64 16.21 5.79 16.36 5.89 16.55C6 16.76 6 17.04 6 17.6V20M3 16V17.2C3 17.89 3 18.23 3.11 18.5C3.2 18.73 3.27 18.8 3.5 18.89C3.77 19 4.11 19 4.8 19H6.4C6.96 19 7.24 19 7.45 18.89C7.64 18.79 7.79 18.64 7.89 18.45C8 18.24 8 17.96 8 17.4V16M8 20V17.6C8 17.04 8 16.76 8.11 16.55C8.21 16.36 8.36 16.21 8.55 16.11C8.76 16 9.04 16 9.6 16H14.4C14.96 16 15.24 16 15.45 16.11C15.64 16.21 15.79 16.36 15.89 16.55C16 16.76 16 17.04 16 17.6V20M8 20H16M8 20H6M16 20H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    skills: ['C#', 'C++', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Three.js'],
  },
  {
    id: 3,
    title: '3D Visualization & Design',
    description: 'Tools for creating, modifying and animating 3D assets and environments for immersive experiences.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 16.0002V8.00024C20.9996 7.6495 20.9071 7.30501 20.7315 7.00109C20.556 6.69717 20.3037 6.44494 20 6.27024L13 2.27024C12.696 2.09558 12.3511 2.00391 12 2.00391C11.6489 2.00391 11.304 2.09558 11 2.27024L4 6.27024C3.69626 6.44494 3.44398 6.69717 3.26846 7.00109C3.09294 7.30501 3.00036 7.6495 3 8.00024V16.0002C3.00036 16.351 3.09294 16.6955 3.26846 16.9994C3.44398 17.3033 3.69626 17.5556 4 17.7302L11 21.7302C11.304 21.9049 11.6489 21.9966 12 21.9966C12.3511 21.9966 12.696 21.9049 13 21.7302L20 17.7302C20.3037 17.5556 20.556 17.3033 20.7315 16.9994C20.9071 16.6955 20.9996 16.351 21 16.0002Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.27002 6.96021L12 12.0102L20.73 6.96021" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    skills: ['Blender', 'Maya', 'ZBrush', 'Substance Painter', 'Adobe Creative Suite', 'Figma'],
  },
  {
    id: 4,
    title: 'Spatial Computing',
    description: 'Technologies focused on merging digital content with physical space for richer interactive experiences.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 7.5V6.75C21 5.50736 19.9926 4.5 18.75 4.5H5.25C4.00736 4.5 3 5.50736 3 6.75V17.25C3 18.4926 4.00736 19.5 5.25 19.5H18.75C19.9926 19.5 21 18.4926 21 17.25V16.5M21 12H8.25M21 12L18.75 9.75M21 12L18.75 14.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    skills: ['LiDAR', 'Spatial Audio', 'Computer Vision', 'Haptic Feedback', 'Gesture Control', 'SLAM'],
  },
];

const TechStack = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const bubbleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { 
        delay: 0.8 + (i * 0.1),
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    })
  };

  return (
    <section 
      id="tech"
      ref={sectionRef}
      className="section relative py-24 overflow-hidden"
    >
      {/* Dynamic animated background with particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-purple-900 z-0">
        {/* Animated particle overlay */}
        <div className="absolute inset-0 mix-blend-overlay opacity-30 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        {/* Floating 3D-like elements */}
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/5 backdrop-blur-3xl"
          animate={{ 
            y: [0, 15, 0],
            x: [0, 10, 0],
            rotate: [0, 5, 0] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            ease: "easeInOut"
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-white/5 backdrop-blur-3xl"
          animate={{ 
            y: [0, -20, 0],
            x: [0, -15, 0],
            rotate: [0, -7, 0] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 12,
            ease: "easeInOut"
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full bg-white/5 backdrop-blur-3xl"
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 3, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut"
          }}
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="inline-block py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6"
          >
            Tech Expertise
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Cutting-Edge <span className="text-black">XR Technology</span><br />
            & Development Tools
          </motion.h2>
          <motion.p 
            className="mt-6 text-white/90 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            My work integrates the latest XR technologies to create immersive, 
            interactive experiences that push the boundaries of digital interaction.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {techCategories.map((category) => (
            <motion.div 
              key={category.id}
              className="relative backdrop-blur-xl rounded-xl p-8 group h-full"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.3 },
                boxShadow: "0 10px 30px -10px rgba(138, 43, 226, 0.5)" 
              }}
            >
              {/* Glass morphism card background */}
              <div className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl group-hover:border-white/40 transition-all duration-300 group-hover:bg-white/15"></div>
              
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 bg-gradient-to-b from-white to-transparent transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-white mb-6 p-4 rounded-full bg-white/10 inline-block group-hover:bg-white/20 transition-colors duration-300 group-hover:text-primary">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white">
                  {category.title}
                </h3>
                <p className="text-white/80 mb-6 group-hover:text-white/90">
                  {category.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1.5 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors text-sm font-medium border border-white/10 hover:border-white/30"
                      custom={index}
                      variants={bubbleVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        transition: { duration: 0.2 }
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
