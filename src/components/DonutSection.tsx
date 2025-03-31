'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Simplified version without Three.js for compatibility
const DonutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress (0 to 1)
      const progress = 1 - (top / (windowHeight - height));
      const clampedProgress = Math.max(0, Math.min(1, progress));
      
      setScrollProgress(clampedProgress);
      
      // Update rotation based on scroll progress
      setRotation(clampedProgress * 360);
      
      // Update scale based on scroll progress (grow and then shrink)
      const newScale = 1 + Math.sin(clampedProgress * Math.PI) * 0.5;
      setScale(newScale);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="section relative h-screen bg-gradient-to-b from-secondary to-primary/80"
      id="donut-section"
    >
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div 
          className="w-64 h-64 rounded-full bg-accent/80 flex items-center justify-center"
          style={{ 
            transform: `rotate(${rotation}deg) scale(${scale})`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="w-24 h-24 rounded-full bg-secondary"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20 h-full flex flex-col justify-center">
        <motion.div 
          className="max-w-xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Interactive <span className="text-accent">3D</span> Experience
          </h2>
          <p className="text-white/80 mb-8">
            This section showcases a donut shape that transforms dynamically. 
            As you scroll through this section, watch how the donut transforms, 
            rotating and scaling in response to your scroll position.
          </p>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-1 bg-accent"></div>
            <p className="text-accent font-medium">Scroll to animate</p>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 text-center text-white/50 text-sm">
        <p>Created with CSS and JavaScript animations</p>
      </div>
    </section>
  );
};

export default DonutSection;
