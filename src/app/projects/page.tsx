'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';

// Project data
const projects = [
  {
    id: 1,
    title: 'Immersive AR Universe',
    subtitle: 'Interactive AR Planetary System',
    description: 'Developed with a private company\'s SDK, delivering object tracking capabilities and crafting captivating AR experiences featuring dynamic, animated 3D models of planets.',
    techStack: ['Unity', 'C#', 'Vuforia', 'TechXR SDK'],
    category: 'ar',
    featured: true,
    videoSrc: '/videos/PV1.m4v',
    link: '/projects/ar-universe'
  },
  {
    id: 2,
    title: 'AR Medical App',
    subtitle: 'Interactive Medical Education',
    description: 'Development of an interactive AR Medical App, helping students to engage with intricate 3D medical models.',
    techStack: ['Unity', 'C#', 'Vuforia'],
    category: 'ar',
    featured: true,
    videoSrc: '/videos/PV2.mp4',
    image: '/images/placeholder.jpg',
    link: '#'
  },
  {
    id: 3,
    title: 'VR Surgery Simulator',
    subtitle: 'Medical Training in Virtual Reality',
    description: 'Internship project where I helped with optimizing the apk\'s performance, designed and Implemented the UI Dashboard System and improved the UX.',
    techStack: ['Unity', 'C#', 'Blender', 'Figma', 'Meta SDK'],
    category: 'vr',
    featured: true,
    videoSrc: '/videos/PV3.m4v',
    image: '/images/placeholder.jpg',
    link: '#'
  },
  {
    id: 4,
    title: 'Space Showroom X',
    subtitle: 'VR Automotive Experience',
    description: 'Developed a VR Car Showroom in space. Optimized apk with fluid movement, smooth UI panel, fully customizable car model and interactive environment.',
    techStack: ['Unity', 'C#', 'Blender', 'Figma', 'Meta SDK'],
    category: 'vr',
    featured: true,
    videoSrc: '/videos/PV4.m4v',
    image: '/images/placeholder.jpg',
    link: '#'
  }
];

const ProjectsPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState<{ 
    x: number; 
    y: number; 
    opacity: number;
    hover: boolean;
  }>({ 
    x: 0, 
    y: 0, 
    opacity: 0,
    hover: false
  });
  const [activeProject, setActiveProject] = useState(0);
  const [isProjectSectionInView, setIsProjectSectionInView] = useState(false);
  const [isLastProjectActive, setIsLastProjectActive] = useState(false);
  const [isFirstProjectActive, setIsFirstProjectActive] = useState(true);
  const [scrollDirection, setScrollDirection] = useState<'left' | 'right'>('right');
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Refs for each project card and sections
  const projectSectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ];
  
  // Check if project section is in view
  const projectSectionInView = useInView(projectSectionRef, { amount: 0.2 });
  
  // Scroll progress for animations
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({
    target: projectSectionRef,
    offset: ["start start", "end end"]
  });
  
  // Transform scrollYProgress to project index with slower animation
  const currentProjectIndex = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 0, 1, 2, 3]
  );
  
  // Create a spring animation for smoother transitions
  const springProjectIndex = useSpring(currentProjectIndex, { 
    stiffness: 50, 
    damping: 20,
    restDelta: 0.001
  });
  
  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY) {
        setScrollDirection('right');
      } else {
        setScrollDirection('left');
      }
      setPrevScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);
  
  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    
    // Update active project based on scroll position with slower animation
    const unsubscribe = springProjectIndex.onChange(v => {
      setActiveProject(Math.round(v));
      
      // Check if first or last project is active
      setIsFirstProjectActive(Math.round(v) === 0);
      setIsLastProjectActive(Math.round(v) === projects.length - 1);
    });
    
    // Update whether project section is in view
    if (projectSectionInView) {
      setIsProjectSectionInView(true);
    } else {
      setIsProjectSectionInView(false);
    }
    
    return () => {
      clearTimeout(timer);
      unsubscribe();
    };
  }, [springProjectIndex, projectSectionInView]);
  
  // Handle wheel events to control scroll behavior
  const handleWheel = (e: React.WheelEvent) => {
    // Only handle wheel events when the mouse is over the carousel container
    const target = e.target as HTMLElement;
    const carouselContainer = document.querySelector('.carousel-container');
    
    // Check if the event target is within the carousel container
    if (carouselContainer && carouselContainer.contains(target)) {
      // Prevent default scroll behavior
      e.preventDefault();
      
      // Up scroll (negative deltaY) = left direction (previous project)
      // Down scroll (positive deltaY) = right direction (next project)
      const direction = e.deltaY > 0 ? 'right' : 'left';
      setScrollDirection(direction);
      
      // Calculate new active project index
      if (direction === 'right' && activeProject < projects.length - 1) {
        setActiveProject(prev => Math.min(projects.length - 1, prev + 1));
      } else if (direction === 'left' && activeProject > 0) {
        setActiveProject(prev => Math.max(0, prev - 1));
      }
    }
    // If not in the carousel area, let the default scroll behavior happen
  };
  
  // Function to handle mouse move for play button effect
  const handleMouseMove = (e: React.MouseEvent, ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({
        x,
        y,
        opacity: 1,
        hover: true
      });
    }
  };

  const handleMouseLeave = () => {
    setMousePosition(prev => ({
      ...prev,
      opacity: 0,
      hover: false
    }));
  };

  // Functions to navigate between projects
  const goToPreviousProject = () => {
    if (activeProject > 0) {
      setScrollDirection('left');
      setActiveProject(Math.max(0, activeProject - 1));
    }
  };

  const goToNextProject = () => {
    if (activeProject < projects.length - 1) {
      setScrollDirection('right');
      setActiveProject(Math.min(projects.length - 1, activeProject + 1));
    }
  };

  // Animation variants for project cards
  const cardVariants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      zIndex: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 10,
      transition: {
        x: { type: "spring", stiffness: 25, damping: 10, duration: 1 },
        opacity: { duration: 1 }
      }
    },
    exit: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? -300 : 300,
      opacity: 0,
      scale: 0.8,
      zIndex: 0,
      transition: {
        x: { type: "spring", stiffness: 25, damping: 10, duration: 1 },
        opacity: { duration: 1 }
      }
    })
  };

  // Animation variants for non-active cards in carousel
  const carouselItemVariants = {
    active: {
      x: 0,
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      zIndex: 10,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        duration: 0.5 
      }
    },
    inactive: (distance: number) => ({
      x: distance * 250, // Offset based on distance from active
      scale: 0.85,
      opacity: 0.6, // Add fading for inactive cards
      filter: "blur(3px)", // Add blur effect for inactive cards
      zIndex: 5 - Math.abs(distance),
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        duration: 0.5 
      }
    })
  };

  return (
    <motion.main 
      className="flex min-h-screen flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section - Galactic Adventure */}
      <section className="relative w-full min-h-[58vh] flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-dark z-0"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Galactic Adventure
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              An immersive journey through the cosmos, blending technology and creativity in stunning XR experiences.
            </motion.p>
            <div className="flex justify-center space-x-4">
              <span className="px-4 py-2 bg-primary-dark bg-opacity-50 rounded-full text-sm text-white">XR Innovation</span>
              <span className="px-4 py-2 bg-primary-dark bg-opacity-50 rounded-full text-sm text-white">Space Exploration</span>
              <span className="px-4 py-2 bg-primary-dark bg-opacity-50 rounded-full text-sm text-white">Interactive Design</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Playcards Section - Carousel Style */}
      <section 
        ref={projectSectionRef}
        className="relative bg-purple-50 flex flex-col pt-10 pb-24"
        onWheel={handleWheel}
      >
        {/* Main Content Area - Project Playcards Carousel */}
        <div className="flex-grow container mx-auto px-4">
          {/* Section Title - Directly above playcards */}
          <h2 className="text-3xl font-bold text-center mb-8 text-purple-900">Explore My Projects</h2>
          
          <div className="relative h-[80vh] flex items-center justify-center overflow-hidden mt-[-40px]">
            {/* Carousel container */}
            <div className="relative w-full h-full flex items-center justify-center carousel-container">
              {projects.map((project, index) => {
                // Calculate distance from active project
                const distance = index - activeProject;
                return (
                  <motion.div
                    key={project.id}
                    ref={projectRefs[index]}
                    className="absolute w-full max-w-4xl h-[55vh]"
                    custom={distance}
                    variants={carouselItemVariants}
                    initial="inactive"
                    animate={index === activeProject ? "active" : "inactive"}
                    style={{ 
                      zIndex: index === activeProject ? 10 : 5 - Math.abs(distance)
                    }}
                  >
                    <div className={`bg-gradient-to-r from-purple-900 to-black rounded-xl shadow-xl overflow-hidden h-full transition-all duration-500 ${index === activeProject ? 'ring-2 ring-purple-400 shadow-2xl shadow-purple-300/20' : 'shadow-md'}`}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 h-full">
                        {/* Left side - Video/Image */}
                        <div 
                          className="relative bg-black overflow-hidden flex items-center justify-center rounded-l-xl"
                          onMouseMove={(e) => {
                            if (index === activeProject) {
                              const rect = e.currentTarget.getBoundingClientRect();
                              const x = e.clientX - rect.left;
                              const y = e.clientY - rect.top;
                              setMousePosition({
                                x,
                                y,
                                opacity: 1,
                                hover: true
                              });
                            }
                          }}
                          onMouseLeave={() => {
                            if (index === activeProject) {
                              setMousePosition(prev => ({
                                ...prev,
                                opacity: 0,
                                hover: false
                              }));
                            }
                          }}
                          onClick={() => {
                            if (index === activeProject) {
                              setPlayingVideo(prev => prev === index ? null : index);
                            }
                          }}
                        >
                          {/* Video Player */}
                          {index === activeProject && playingVideo === index ? (
                            <video 
                              className="absolute inset-0 w-full h-full object-cover bg-black z-20"
                              src={project.videoSrc}
                              autoPlay
                              controls
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-white/70">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                          )}
                          
                          {/* Play button circle that follows mouse - only show for active card and when video is not playing */}
                          {index === activeProject && playingVideo !== index && (
                            <motion.div
                              className="absolute w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center text-white font-medium pointer-events-none z-10"
                              style={{ 
                                left: mousePosition.x - 40, 
                                top: mousePosition.y - 40,
                                opacity: mousePosition.opacity
                              }}
                              animate={{
                                scale: mousePosition.hover ? 1.1 : 1
                              }}
                              transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            >
                              <span>Play</span>
                            </motion.div>
                          )}
                          
                          {/* Project image/video placeholder */}
                          <div className="w-full h-full bg-gradient-to-br from-purple-900 to-gray-900">
                            {/* Image would go here */}
                          </div>
                        </div>
                        
                        {/* Right side - Project Info - Simplified */}
                        <div className="p-8 flex flex-col bg-gradient-to-br from-purple-900 to-black text-white">
                          <h3 className="text-2xl font-bold mb-2 text-purple-300">
                            {project.title}
                          </h3>
                          <p className="text-sm text-white/80 mb-4">
                            {project.description}
                          </p>
                          
                          {/* Tech Stack - Simplified */}
                          <div className="mb-6">
                            <h4 className="text-lg font-semibold text-purple-300 mb-3">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.techStack.map((tech, i) => (
                                <span key={i} className="px-3 py-1 bg-purple-800/50 border border-purple-400/30 text-white text-sm rounded-full">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Navigation controls below playcards - Larger and more spaced */}
            <div className="absolute bottom-[12px] left-0 right-0 flex justify-center items-center space-x-28 z-20">
              <button 
                onClick={goToPreviousProject}
                disabled={activeProject === 0}
                className={`w-12 h-12 rounded-full ${activeProject === 0 ? 'bg-gray-200 text-gray-400' : 'bg-purple-800 text-white hover:bg-primary hover:text-white active:bg-primary'} transition-colors duration-300 flex items-center justify-center shadow-md`}
                aria-label="Previous project"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <button 
                onClick={goToNextProject}
                disabled={activeProject === projects.length - 1}
                className={`w-12 h-12 rounded-full ${activeProject === projects.length - 1 ? 'bg-gray-200 text-gray-400' : 'bg-purple-800 text-white hover:bg-primary hover:text-white active:bg-primary'} transition-colors duration-300 flex items-center justify-center shadow-md`}
                aria-label="Next project"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* UI Mockup Section */}
        <section className="py-32 bg-black text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-16 text-center text-white">UI Mockups</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
              {/* Mockup 1 */}
              <div className="flex flex-col">
                <div 
                  className="bg-gray-900 rounded-lg overflow-hidden shadow-lg mb-4 aspect-w-16 aspect-h-12 cursor-pointer transform transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:scale-105 border border-gray-800"
                  onClick={() => setSelectedImage("/images/PI1.png")}
                >
                  <img 
                    src="/images/PI1.png" 
                    alt="Website UI for College Fest" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Website</h3>
                <p className="text-gray-300 text-sm">Website UI for College Fest.</p>
              </div>

              {/* Mockup 2 */}
              <div className="flex flex-col">
                <div 
                  className="bg-gray-900 rounded-lg overflow-hidden shadow-lg mb-4 aspect-w-16 aspect-h-12 cursor-pointer transform transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:scale-105 border border-gray-800"
                  onClick={() => setSelectedImage("/images/PI2.png")}
                >
                  <img 
                    src="/images/PI2.png" 
                    alt="Website UI for a Society Project" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Website 2</h3>
                <p className="text-gray-300 text-sm">Website UI for a Society Project.</p>
              </div>

              {/* Mockup 3 */}
              <div className="flex flex-col">
                <div 
                  className="bg-gray-900 rounded-lg overflow-hidden shadow-lg mb-4 aspect-w-16 aspect-h-12 cursor-pointer transform transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:scale-105 border border-gray-800"
                  onClick={() => setSelectedImage("/images/PI3.png")}
                >
                  <img 
                    src="/images/PI3.png" 
                    alt="VR UI for the Medical Surgery Simulator project" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">VR Surgery Simulator</h3>
                <p className="text-gray-300 text-sm">VR UI for the Medical Surgery Simulator project.</p>
              </div>

              {/* Mockup 4 */}
              <div className="flex flex-col">
                <div 
                  className="bg-gray-900 rounded-lg overflow-hidden shadow-lg mb-4 aspect-w-16 aspect-h-12 cursor-pointer transform transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:scale-105 border border-gray-800"
                  onClick={() => setSelectedImage("/images/PI4.png")}
                >
                  <img 
                    src="/images/PI4.png" 
                    alt="VR UI for XRCH Hackathon team project" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Space Showroom X</h3>
                <p className="text-gray-300 text-sm">VR UI for XRCH Hackathon team project.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-[90%] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-4 -right-12 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg z-10 hover:bg-primary hover:text-white active:bg-primary active:text-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <motion.img
                src={selectedImage}
                alt="Enlarged UI Mockup"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", damping: 15, stiffness: 100 }}
              />
            </div>
          </div>
        )}

        {/* Future Roadmap Section */}
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-purple-900">My Future Roadmap</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="space-y-10">
                {/* In Progress */}
                <div>
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <h3 className="text-2xl font-bold text-purple-900">In Progress</h3>
                  </div>
                  <div className="ml-8 space-y-4">
                    <p className="text-gray-700">
                      <span className="text-primary font-semibold">Meta Horizon Creator Hackathon: </span>
                      <span className="text-purple-950">Me and my team is working on an action, adventure, rpg, open-world, fantasy game for the hackathon.</span>
                    </p>
                    <p className="text-gray-700">
                      <span className="text-primary font-semibold">AI NPC in Unreal Engine: </span>
                      <span className="text-purple-950">Me and my friend is working on a UE project focusing on making different types of AI NPC's.</span>
                    </p>
                  </div>
                </div>
                
                {/* Future Updates */}
                <div>
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <h3 className="text-2xl font-bold text-purple-900">Future Updates</h3>
                  </div>
                  <div className="ml-8">
                    <p className="text-gray-700">
                      <span className="text-primary font-semibold">Space Showroom X: </span>
                      <span className="text-purple-950">With some proper guidance, I am planning to add test drive feature, a multiplayer feature in it and some asset optimisations.</span>
                    </p>
                  </div>
                </div>
                
                {/* Dream Project */}
                <div>
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <h3 className="text-2xl font-bold text-purple-900">Dream Project</h3>
                  </div>
                  <div className="ml-8">
                    <p className="text-gray-700">
                      <span className="text-primary font-semibold">DejaVu: </span>
                      <span className="text-purple-950">An action, adventure, rpg, VR/MR game project which I plan to create after getting ample practical knowledge in the gaming and XR sector.</span>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Image */}
              <div className="rounded-lg overflow-hidden shadow-lg border-2 border-purple-200">
                <img 
                  src="/images/PI11.jpg" 
                  alt="Future Projects Visualization"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Development Process Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900 to-purple-800 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">My Development Process</h2>
            <p className="text-center text-white/90 max-w-3xl mx-auto mb-12">
              A systematic approach to creating immersive XR experiences from concept to completion.
            </p>
            
            <div className="max-w-5xl mx-auto">
              {/* Process Steps - Horizontal Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Step 1 */}
                <div className="bg-black p-6 rounded-lg border border-purple-300/30 hover:border-purple-300/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-700/50 text-white mb-4 mx-auto">
                    <span className="font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center text-white">Research & Planning</h3>
                  <p className="text-white/80 text-sm text-center">
                    Defining project scope, researching technologies, and creating a development roadmap.
                  </p>
                </div>
                
                {/* Step 2 */}
                <div className="bg-black p-6 rounded-lg border border-purple-300/30 hover:border-purple-300/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-700/50 text-white mb-4 mx-auto">
                    <span className="font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center text-white">Design & Prototyping</h3>
                  <p className="text-white/80 text-sm text-center">
                    Creating UI/UX wireframes, 3D assets, and building interactive prototypes.
                  </p>
                </div>
                
                {/* Step 3 */}
                <div className="bg-black p-6 rounded-lg border border-purple-300/30 hover:border-purple-300/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-700/50 text-white mb-4 mx-auto">
                    <span className="font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center text-white">Development</h3>
                  <p className="text-white/80 text-sm text-center">
                    Implementing core features, scripting interactions, and creating immersive environments.
                  </p>
                </div>
                
                {/* Step 4 */}
                <div className="bg-black p-6 rounded-lg border border-purple-300/30 hover:border-purple-300/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-700/50 text-white mb-4 mx-auto">
                    <span className="font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center text-white">Testing & Refinement</h3>
                  <p className="text-white/80 text-sm text-center">
                    Iterative testing for performance optimization, user feedback integration, and polishing.
                  </p>
                </div>
              </div>
              
              {/* Development Tools & Skills */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-6 text-center">Development Toolkit</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                  {/* Tools used in development process */}
                  <div className="flex flex-col items-center p-4 bg-black rounded-lg border border-purple-300/20 hover:border-purple-300/40 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium text-white">Unity 3D</span>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 bg-black rounded-lg border border-purple-300/20 hover:border-purple-300/40 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                    <span className="text-sm font-medium text-white">Blender</span>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 bg-black rounded-lg border border-purple-300/20 hover:border-purple-300/40 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <span className="text-sm font-medium text-white">C# / C++</span>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 bg-black rounded-lg border border-purple-300/20 hover:border-purple-300/40 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                    <span className="text-sm font-medium text-white">Figma / UI Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-purple-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-purple-900">Interested in Collaboration?</h2>
              <p className="text-purple-700 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-purple-700 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </section>
      
      <Footer />
    </motion.main>
  );
};

export default ProjectsPage;
