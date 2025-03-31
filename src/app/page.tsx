'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import TechStack from '../components/TechStack';
import Inspirations from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.main 
      className="flex min-h-screen flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Projects />
      <TechStack />
      <Inspirations />
      
      {/* Quote Section with Image - Dark Theme */}
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Image holder on the left */}
            <div className="rounded-lg overflow-hidden h-full flex items-center justify-center bg-gray-900">
              <img 
                src="/images/HI111.jpg" 
                alt="Pritam Kumar Pal" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Quote on the right */}
            <div className="flex flex-col justify-center">
              <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-6">
                "Even if it's <span className="text-primary">difficult</span> and <span className="text-primary">time consuming</span>, it doesn't matter, as long as the <span className="text-primary">process is enjoyable</span>"
              </p>
              <div className="text-right">
                <p className="text-xl text-primary font-medium">
                  - Pritam Kumar Pal
                </p>
                <p className="text-gray-400">
                  XR Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Want to Learn More?</h2>
            <p className="text-gray-600 mb-8">
              Check out my detailed project pages or get in touch with me to discuss how we can work together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/projects" 
                className="px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-all duration-300"
              >
                View All Projects
              </Link>
              <Link 
                href="/about" 
                className="px-6 py-3 border border-primary text-primary font-medium rounded-full hover:bg-primary/10 transition-all duration-300"
              >
                About Me
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-gray-800 text-white font-medium rounded-full hover:bg-gray-700 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </motion.main>
  );
}
