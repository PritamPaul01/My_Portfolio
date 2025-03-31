'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <section 
      id="contact"
      ref={sectionRef}
      className="section py-16 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Let's Connect and <span className="text-primary">Collaborate</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm always open to discuss project work or partnership opportunities. Let's create something amazing together!
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a 
              href="mailto:contact@example.com" 
              className="px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-all duration-300"
            >
              Email Me
            </a>
            <a 
              href="#" 
              className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
