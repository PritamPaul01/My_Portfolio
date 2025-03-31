'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Footer from '../../components/Footer';

const experiences = [
  {
    title: 'VR Technical Artist',
    company: 'Inion VR Technology · Internship',
    period: 'May 2024 to Aug 2024 · 4 mos',
    location: 'India · Remote',
    skills: 'UI/UX, Unity, VR, MR',
    description: 'Worked as an VR Technical Artist, designing the whole UI system including Dashboard, Surgery Based Panels, etc. Making the UI system responsive and taking care of the UX. Also worked on the project optimization and FPS Management.'
  },
  {
    title: 'XR Lead',
    company: 'Microsoft Learn Student Ambassadors, KIIT Chapter',
    period: 'Jul 2023 to Jul 2024 · 1 yr 1 mo',
    location: 'Bhubaneswar, Odisha, India',
    skills: 'Unity, Unreal Engine, C#, AR, VR',
    description: ''
  },
  {
    title: 'User Interface Designer',
    company: 'Microsoft Learn Student Ambassadors, KIIT Chapter',
    period: 'Jan 2022 to Jul 2023 · 1 yr 7 mos',
    location: 'India',
    skills: 'Adobe XD, Canva, Figma, User Interface Design',
    description: ''
  }
];

const education = [
  {
    degree: 'Bachelor of Technology - BTech, Computer Science',
    specialization: '',
    institution: 'Kalinga Institute of Industrial Technology, Bhubaneswar',
    period: '2021 - 2025'
  },
  {
    degree: 'Higher Secondary School Certificate',
    specialization: '',
    institution: 'Central Board of Secondary Education',
    period: 'Apr 2017 - Apr 2019'
  },
  {
    degree: 'All India Secondary School Examination',
    specialization: '',
    institution: 'Central Board of Secondary Education',
    period: 'Apr 2016 - Apr 2017'
  }
];

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const videoPlayerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
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
  
  const experienceInView = useInView(experienceRef, { once: false, amount: 0.2 });
  const educationInView = useInView(educationRef, { once: false, amount: 0.2 });

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Function to handle mouse move for play button effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (videoPlayerRef.current && !isVideoPlaying) {
      const videoRect = videoPlayerRef.current.getBoundingClientRect();
      const x = e.clientX - videoRect.left;
      const y = e.clientY - videoRect.top;
      
      // Check if mouse is within the video section
      const isInVideoSection = 
        e.clientX >= videoRect.left && 
        e.clientX <= videoRect.right && 
        e.clientY >= videoRect.top && 
        e.clientY <= videoRect.bottom;
      
      setMousePosition({ 
        x, 
        y, 
        opacity: isInVideoSection ? 1 : 0,
        hover: isInVideoSection
      });
    } else if (isVideoPlaying) {
      setMousePosition({ 
        x: 0, 
        y: 0, 
        opacity: 0,
        hover: false
      });
    }
  };

  // Function to toggle play/pause
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsVideoPlaying(true);
      } else {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  // Handle video ended
  const handleVideoEnded = () => {
    setIsVideoPlaying(false);
  };

  // Handle video state change from controls
  const handleVideoStateChange = () => {
    if (videoRef.current) {
      setIsVideoPlaying(!videoRef.current.paused);
    }
  };

  return (
    <motion.main 
      className="flex min-h-screen flex-col pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Section */}
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
              About Me
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              XR Developer & Creative Technologist with a passion for immersive experiences
            </motion.p>
            <div className="flex justify-center space-x-4">
              <span className="px-4 py-2 bg-primary-dark bg-opacity-50 rounded-full text-sm text-white">XR Developer</span>
              <span className="px-4 py-2 bg-primary-dark bg-opacity-50 rounded-full text-sm text-white">Creative Tech</span>
              <span className="px-4 py-2 bg-primary-dark bg-opacity-50 rounded-full text-sm text-white">Immersive Design</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <img src="/images/Pritam3.png" alt="Profile" className="w-full h-full object-cover" />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-900">My Journey</h2>
                <div className="w-20 h-1 bg-primary mb-8"></div>
                
                <p className="text-gray-700 mb-6">
                  I'm a passionate XR developer with over 2 years + of experience creating immersive experiences for various platforms. My journey in extended reality began while I was watching an anime named "Swort Art Online" and my curosity in that fictional tech increased. And when i got to know about VR and MR technology, i was super happy as it was like a dream come true.
                </p>
                
                <p className="text-gray-700 mb-6">
                  I specialize in developing AR, VR and MR applications, combining technical expertise with creative vision to deliver memorable user experiences.
                </p>
                
                <p className="text-gray-700">
                  When I'm not coding or designing in virtual spaces, you can find me exploring new technologies, deep diving in news regarding upcoming tech products, or sharing my knowledge through mentoring.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-3">Professional Milestones</h2>
              <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Showcasing the journey that shaped my expertise in XR development through dedicated practice and real-world projects.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gray-900 p-8 rounded-xl border border-purple-500/20"
              >
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Career Highlights</h3>
                
                <div className="mb-8">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-3"></div>
                    <h4 className="text-xl font-semibold text-white">3+ Months Internship</h4>
                  </div>
                  <p className="text-white/70 ml-6">Hands-on experience working with industry professionals on cutting-edge XR technologies</p>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-3"></div>
                    <h4 className="text-xl font-semibold text-white">Freelance Experience</h4>
                  </div>
                  <p className="text-white/70 ml-6">Delivering tailored XR solutions for clients with unique creative and technical requirements</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-3"></div>
                    <h4 className="text-xl font-semibold text-white">2+ Years MLSA Support</h4>
                  </div>
                  <p className="text-white/70 ml-6">Dedicated technical leadership at Microsoft Learn Student Ambassadors, KIIT, India</p>
                </div>

                <div className="flex space-x-6 mt-8">
                  <Link 
                    href="/projects" 
                    className="px-5 py-3 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                  >
                    Explore My Work
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative bg-gray-900 rounded-xl overflow-hidden border border-purple-500/20"
                ref={videoPlayerRef}
                onMouseMove={handleMouseMove}
                onClick={togglePlayPause}
              >
                {!isVideoPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center text-white/50 z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                )}
                
                {/* Play button circle that follows mouse */}
                {!isVideoPlaying && (
                  <motion.div
                    className="absolute w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium pointer-events-none z-20"
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
                
                {/* Video player */}
                <div className="w-full h-full aspect-video cursor-pointer">
                  <video 
                    ref={videoRef}
                    className="w-full h-full object-cover" 
                    controls
                    onClick={(e) => e.stopPropagation()}
                    onPlay={handleVideoStateChange}
                    onPause={handleVideoStateChange}
                    onEnded={handleVideoEnded}
                  >
                    <source src="/videos/AV1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 bg-white" ref={experienceRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Professional Experience</h2>
              <p className="text-gray-600">
                My career journey in XR development and creative technology
              </p>
            </motion.div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  className="border-l-4 border-primary pl-6 relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={experienceInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 1.2, delay: 0.1 * index }}
                >
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[10px] top-0"></div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                    <p className="text-gray-600 font-medium">{exp.company}</p>
                    <span className="text-primary text-sm font-medium">{exp.period}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-2">{exp.location}</p>
                  {exp.skills && (
                    <p className="text-gray-600 mb-2 text-sm italic">
                      Skills: {exp.skills}
                    </p>
                  )}
                  {exp.description && (
                    <p className="text-gray-700 mt-2">{exp.description}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-primary text-white" ref={educationRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={educationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-black">Education</h2>
              <p className="text-white/80">
                My academic background and qualifications
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={educationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                  <p className="text-gray-800 font-medium mb-1">{edu.specialization}</p>
                  <p className="text-gray-700 mb-2">{edu.institution}</p>
                  <p className="text-gray-600 text-sm">{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Interested in Working Together?</h2>
            <p className="text-gray-600 mb-8">
              I'm always open to discussing product design work or partnership opportunities.
            </p>
            <Link 
              href="/projects" 
              className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-all duration-300 mr-4"
            >
              View My Projects
            </Link>
            <Link 
              href="/contact" 
              className="inline-block px-6 py-3 border border-primary text-primary font-medium rounded-full hover:bg-primary/10 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}
