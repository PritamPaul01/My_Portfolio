'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Game industry inspirations data
const inspirations = [
  {
    id: 1,
    name: 'John Carmack',
    role: 'Consulting CTO',
    company: 'Oculus VR',
    image: '/images/HI11.png',
    quote: 'The measure of success is not whether you have a tough problem to deal with, but whether it is the same problem you had last year.',
  },
  {
    id: 2,
    name: 'Shigeru Miyamoto',
    role: 'Representative Director',
    company: 'Nintendo',
    image: '/images/HI22.png',
    quote: 'A delayed game is eventually good, but a rushed game is forever bad.',
  },
  {
    id: 3,
    name: 'Hideo Kojima',
    role: 'Game Designer & Director',
    company: 'Kojima Productions',
    image: '/images/HI33.png',
    quote: "Creating something that no one has created before is the only way to establish your own identity.",
  },
  {
    id: 4,
    name: 'Tim Sweeney',
    role: 'CEO & Founder',
    company: 'Epic Games',
    image: '/images/HI44.png',
    quote: 'The metaverse is going to be far more pervasive and powerful than anything else. If one central company gains control of this, they will become more powerful than any government.',
  },
  {
    id: 5,
    name: 'Bonnie Ross',
    role: 'Head of 343 Industries',
    company: 'Microsoft',
    image: '/images/HI55.png',
    quote: "In this industry, things are always evolving and changing. If you're not passionate about what you do, it becomes really hard to keep up.",
  },
  {
    id: 6,
    name: 'Mark Zuckerberg',
    role: 'CEO & Founder',
    company: 'Meta',
    image: '/images/HI66.png',
    quote: "The next platform will be even more immersive—an embodied internet where you're in the experience, not just looking at it.",
  },
];

const Inspirations = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Auto-switch inspirations every 6 seconds
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % inspirations.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isInView]);

  const nextInspiration = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % inspirations.length);
  };

  const prevInspiration = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + inspirations.length) % inspirations.length);
  };

  const goToInspiration = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Animation variants
  const variants = {
    enterRight: { x: 300, opacity: 0 },
    enterLeft: { x: -300, opacity: 0 },
    center: { 
      x: 0, 
      opacity: 1, 
      transition: { duration: 0.6 } 
    },
    exitLeft: { 
      x: -300, 
      opacity: 0,
      transition: { duration: 0.6 } 
    },
    exitRight: { 
      x: 300, 
      opacity: 0,
      transition: { duration: 0.6 } 
    }
  };

  return (
    <section 
      id="inspirations"
      ref={sectionRef}
      className="section bg-white py-24 relative"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Game Industry Inspirations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Wisdom from innovators who push the boundaries of interactive experiences</p>
          </motion.div>
          
          {/* Testimonial container */}
          <div className="w-full relative overflow-hidden bg-gray-50 rounded-2xl shadow-lg p-10 mb-10">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-purple-400"></div>
            
            {/* Quote container with fixed height */}
            <div className="relative h-[180px] mb-10">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={`quote-${currentIndex}`}
                  custom={direction}
                  initial={direction > 0 ? "enterRight" : "enterLeft"}
                  animate="center"
                  exit={direction > 0 ? "exitLeft" : "exitRight"}
                  variants={variants}
                  className="absolute inset-0 flex flex-col items-center justify-center"
                >
                  <svg className="w-12 h-12 text-primary/20 mx-auto mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-2xl md:text-3xl lg:text-4xl text-gray-800 font-light leading-relaxed max-w-3xl mx-auto">
                    "{inspirations[currentIndex].quote}"
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Avatar and info */}
            <AnimatePresence mode="wait">
              <motion.div
                className="flex flex-col items-center"
                key={`avatar-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-20 h-20 rounded-full ring-4 ring-primary/20 bg-gray-200 mb-4 overflow-hidden relative">
                  <Image 
                    src={inspirations[currentIndex].image}
                    alt={inspirations[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-gray-900 font-medium text-xl">{inspirations[currentIndex].name}</h4>
                <p className="text-gray-600 text-sm">
                  {inspirations[currentIndex].role}, {inspirations[currentIndex].company}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex items-center justify-between w-full max-w-md mx-auto">
            <button 
              onClick={prevInspiration}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 z-10"
              aria-label="Previous inspiration"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="flex space-x-3">
              {inspirations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToInspiration(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
                  aria-label={`Go to inspiration ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextInspiration}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 z-10"
              aria-label="Next inspiration"
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

export default Inspirations;
