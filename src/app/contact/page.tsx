'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '../../components/Footer';

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <motion.main 
      className="flex min-h-screen flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Section */}
      <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-dark z-0"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Connect with Me
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I'm always looking for new opportunities to create innovative digital experiences. Let's get in touch.
            </motion.p>
            <div className="flex justify-center space-x-4">
              <span className="px-4 py-2 bg-primary-dark bg-opacity-50 rounded-full text-sm text-white">Collaboration</span>
              <span className="px-4 py-2 bg-primary-dark bg-opacity-50 rounded-full text-sm text-white">Innovation</span>
              <span className="px-4 py-2 bg-primary-dark bg-opacity-50 rounded-full text-sm text-white">XR Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col justify-center"
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Get in Touch</h2>
                <div className="w-20 h-1 bg-primary mb-8"></div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <svg 
                        className="w-6 h-6 text-primary" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-medium">Email</h4>
                      <p className="text-gray-600">metro1pal2000@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <svg 
                        className="w-6 h-6 text-primary" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-medium">Location</h4>
                      <p className="text-gray-600">Odisha, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mt-8">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <svg 
                        className="w-6 h-6 text-primary" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-medium">Connect</h4>
                      <div className="flex mt-2 space-x-3">
                        <a href="https://github.com" className="text-gray-600 hover:text-primary transition-colors duration-300">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                        <a href="https://linkedin.com" className="text-gray-600 hover:text-primary transition-colors duration-300">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center"
              >
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <img 
                    src="/images/Pritam1.jpeg" 
                    alt="Pritam" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-3">Get in Touch</h2>
              <div className="w-24 h-1 bg-purple-500 mx-auto mb-4"></div>
              <p className="text-white/70 max-w-xl mx-auto">
                Have a project in mind or want to discuss collaboration opportunities? Send me a message, and I'll get back to you soon!
              </p>
            </motion.div>

            {isSubmitted ? (
              <motion.div 
                className="bg-black/50 border border-purple-500/20 rounded-lg p-10 text-center shadow-lg shadow-purple-500/5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-20 h-20 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                <p className="text-white/70 mb-8">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-6 bg-black/30 p-8 rounded-xl border border-purple-500/10 shadow-lg shadow-purple-500/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-800/80 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all duration-300"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-800/80 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">Your Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-gray-800/80 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or inquiry"
                    required
                  ></textarea>
                </div>
                
                <div className="text-right">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 inline-flex items-center justify-center shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </>
                    ) : 'Send Message'}
                  </button>
                </div>
              </motion.form>
            )}
            
            <div className="mt-8 text-center text-white/60 text-sm">
              <p>* Under Construction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-gray-900 relative">
                  <span className="relative z-10">
                    Inspiration drives Innovation
                    <div className="absolute -bottom-2 left-0 h-3 w-full bg-purple-200/70 -z-10 transform -rotate-1"></div>
                  </span>
                </h3>
                <h4 className="text-xl text-purple-800 font-medium">Embrace the future of gaming with XR technology</h4>
                
                <p className="text-gray-700">
                  As XR technologies continue to advance, they're transforming how we experience digital environments. My work focuses on creating immersive experiences that push these boundaries further.
                </p>
                
                <p className="text-gray-700">
                  Let's collaborate to create the next generation of digital experiences that blend reality with imagination.
                </p>
                
                <div className="pt-4">
                  <Link 
                    href="/projects" 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium rounded-full shadow-md hover:shadow-lg shadow-purple-200/50 hover:shadow-purple-300/50 transition-all duration-300"
                  >
                    Explore My Projects
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center"
              >
                <div className="relative w-full rounded-xl overflow-hidden shadow-2xl shadow-purple-200/50">
                  <img 
                    src="/images/Pritam2.png" 
                    alt="VR Innovation" 
                    className="w-full z-10 relative rounded-xl"
                  />
                  <div className="absolute w-24 h-24 rounded-full bg-purple-300/50 -top-5 -right-5 blur-xl"></div>
                  <div className="absolute w-40 h-40 rounded-full bg-purple-300/30 -bottom-10 -left-10 blur-xl"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Thank You for Visiting!</h2>
            <p className="text-white/80 mb-6">
              Keep exploring to discover more projects and innovations in XR technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/" 
                className="px-6 py-2 bg-white text-primary font-medium rounded-full hover:bg-white/90 transition-all duration-300"
              >
                Home
              </Link>
              <Link 
                href="/projects" 
                className="px-6 py-2 border border-white text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}
