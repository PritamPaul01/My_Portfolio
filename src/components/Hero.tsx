'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'loading-anim-type'?: string;
        url?: string;
      }, HTMLElement>;
    }
  }
}

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  
  useEffect(() => {
    if (!heroRef.current) return;
    
    const tl = gsap.timeline();
    
    tl.from('.hero-title', {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
      delay: 0.5
    })
    .from('.hero-subtitle', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.6')
    .from('.hero-tags', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
    }, '-=0.5')
    .from('.hero-cta', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
    }, '-=0.4');
    
    // Set model loaded state after animation completes
    setTimeout(() => {
      setIsModelLoaded(true);
    }, 2000);
    
    return () => {
      tl.kill();
    };
  }, []);
  
  // Text animation variables
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <section 
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Spline 3D Model Background */}
      <Script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js" strategy="afterInteractive" />
      
      <div className="absolute inset-0 z-0">
        {/* 3D Earth model as background */}
        <div className="absolute inset-0" style={{ transform: 'translateX(220px) translateY(120px)' }}>
          <spline-viewer url="https://prod.spline.design/EHuXbQAqtPBYDFi8/scene.splinecode"></spline-viewer>
        </div>
        
        {/* Gradient overlay with animation */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        ></motion.div>
        
        {/* Particle effect overlay */}
        <div className="absolute inset-0 z-5 opacity-30 bg-[radial-gradient(#8a2be2_1px,transparent_1px)] [background-size:32px_32px]"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/3 text-left mb-12 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 mt-4"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-white text-sm backdrop-blur-sm border border-primary/30">
              Welcome to My Digital Space
            </span>
          </motion.div>
          
          <motion.h1 
            className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Embark on the Journey,<br />
            <span className="text-white relative">
              Explore My Portfolio
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-purple-400 to-primary"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.2, delay: 1.2 }}
              ></motion.span>
            </span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle text-xl md:text-2xl mb-0 max-w-xl text-white/90 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 mb-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.span 
              variants={item}
              className="hero-tags px-4 py-2 bg-primary/30 backdrop-blur-sm rounded-full text-sm text-white border border-primary/20 hover:bg-primary/40 transition-colors cursor-default"
            >
              VR Technical Artist
            </motion.span>
            <motion.span 
              variants={item}
              className="hero-tags px-4 py-2 bg-primary/30 backdrop-blur-sm rounded-full text-sm text-white border border-primary/20 hover:bg-primary/40 transition-colors cursor-default"
            >
              3D Visualization
            </motion.span>
            <motion.span 
              variants={item}
              className="hero-tags px-4 py-2 bg-primary/30 backdrop-blur-sm rounded-full text-sm text-white border border-primary/20 hover:bg-primary/40 transition-colors cursor-default"
            >
              Interactive UI/UX Design
            </motion.span>
            <motion.span 
              variants={item}
              className="hero-tags px-4 py-2 bg-primary/30 backdrop-blur-sm rounded-full text-sm text-white border border-primary/20 hover:bg-primary/40 transition-colors cursor-default"
            >
              WebXR Development
            </motion.span>
          </motion.div>
          
          <motion.div 
            className="hero-cta flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link 
              href="#projects" 
              className="px-6 py-3 bg-white text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-primary/20 transform hover:-translate-y-1"
            >
              View Projects
            </Link>
            <Link 
              href="/about" 
              className="px-6 py-3 border border-white text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              About Me
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <p className="text-white/70 text-sm mb-2">Scroll Down</p>
        <motion.div 
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div 
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
            animate={{ 
              y: [0, 15, 0],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
