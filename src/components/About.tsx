'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  { name: 'AR/VR Development', level: 90 },
  { name: 'Unity & Unreal Engine', level: 85 },
  { name: '3D Modeling', level: 75 },
  { name: 'WebXR & Three.js', level: 80 },
  { name: 'UI/UX Design', level: 70 },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  return (
    <section 
      id="about"
      ref={sectionRef}
      className="section bg-primary py-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
            <div className="w-20 h-1 bg-white/30 mb-8"></div>
            
            <p className="text-white/80 mb-6">
              I'm a passionate XR developer with over 5 years of experience creating immersive experiences for various platforms. 
              My journey in extended reality began with a fascination for how technology can transform the way we interact with digital content.
            </p>
            
            <p className="text-white/80 mb-6">
              I specialize in developing AR and VR applications that push the boundaries of what's possible, 
              combining technical expertise with creative vision to deliver memorable user experiences.
            </p>
            
            <div className="space-y-4 mt-8">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-white/70">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2.5">
                    <motion.div 
                      className="bg-white h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-white">Experience</h3>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-medium text-white">XR Developer</h4>
                      <p className="text-white/70 text-sm">Immersive Tech Studios</p>
                    </div>
                    <span className="text-white/80 text-sm px-3 py-1 bg-white/10 rounded-full">2022 - Present</span>
                  </div>
                  <p className="text-white/80 mt-2">
                    Leading development of AR/VR applications for enterprise clients, focusing on training simulations and interactive product visualizations.
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-medium text-white">Unity Developer</h4>
                      <p className="text-white/70 text-sm">GameVerse Interactive</p>
                    </div>
                    <span className="text-white/80 text-sm px-3 py-1 bg-white/10 rounded-full">2020 - 2022</span>
                  </div>
                  <p className="text-white/80 mt-2">
                    Developed VR games and experiences, implemented physics-based interactions and optimized performance for mobile VR platforms.
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-medium text-white">3D Artist & Developer</h4>
                      <p className="text-white/70 text-sm">Creative Digital Studio</p>
                    </div>
                    <span className="text-white/80 text-sm px-3 py-1 bg-white/10 rounded-full">2018 - 2020</span>
                  </div>
                  <p className="text-white/80 mt-2">
                    Created 3D assets and environments for AR applications, collaborated with designers to implement interactive features.
                  </p>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <a 
                  href="#contact" 
                  className="inline-block px-6 py-3 bg-white text-primary font-medium rounded-full hover:bg-white/90 transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </div>
            
            <div className="absolute top-8 -right-8 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
