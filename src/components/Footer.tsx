'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Footer = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  const linkVariants = {
    initial: { opacity: 0, y: 10 },
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * custom,
        duration: 0.5
      }
    }),
    hover: {
      scale: 1.05,
      color: isHomePage ? '#FFFFFF' : '#9F7AEA',
      transition: { duration: 0.2 }
    }
  };
  
  const socialLinkVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2 * custom,
        duration: 0.4,
        type: "spring",
        stiffness: 200
      }
    }),
    hover: {
      scale: 1.2,
      transition: { duration: 0.2 }
    }
  };
  
  return (
    <footer 
      className={`relative overflow-hidden ${isHomePage ? 'bg-gradient-to-br from-primary to-primary-dark/90' : 'bg-gradient-to-br from-secondary to-secondary/90'} py-12 border-t ${isHomePage ? 'border-white/20' : 'border-primary/20'}`}
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/5 backdrop-blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white/5 backdrop-blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className={`text-2xl font-bold ${isHomePage ? 'text-white' : 'text-white'} mb-3`}>Portfolio</h3>
              <p className={`${isHomePage ? 'text-white/80' : 'text-white/80'} mb-6 max-w-md`}>
                A creative portfolio showcasing innovative XR projects and 
                immersive experiences through interactive design.
              </p>
              <div className="flex space-x-6">
                <motion.a 
                  href="https://github.com/PritamPaul01" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${isHomePage ? 'text-white/80 hover:text-white' : 'text-white/80 hover:text-accent'} transition-colors p-2 rounded-full bg-white/10 backdrop-blur-sm`}
                  variants={socialLinkVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  custom={0}
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/pritam-pal-oo7/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${isHomePage ? 'text-white/80 hover:text-white' : 'text-white/80 hover:text-accent'} transition-colors p-2 rounded-full bg-white/10 backdrop-blur-sm`}
                  variants={socialLinkVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  custom={1}
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </motion.a>
                <motion.a 
                  href="mailto:metro1pal2000@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${isHomePage ? 'text-white/80 hover:text-white' : 'text-white/80 hover:text-accent'} transition-colors p-2 rounded-full bg-white/10 backdrop-blur-sm`}
                  variants={socialLinkVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  custom={2}
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          {/* Menu Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className={`text-lg font-medium ${isHomePage ? 'text-white' : 'text-white'} mb-4`}>Quick Links</h4>
              <ul className="space-y-2">
                <motion.li
                  variants={linkVariants}
                  initial="initial"
                  animate="animate"
                  custom={0}
                >
                  <Link 
                    href="/" 
                    className={`${isHomePage ? 'text-white/70 hover:text-white' : 'text-white/70 hover:text-accent'} transition-colors inline-block`}
                  >
                    Home
                  </Link>
                </motion.li>
                <motion.li
                  variants={linkVariants}
                  initial="initial"
                  animate="animate"
                  custom={1}
                >
                  <Link 
                    href="/about" 
                    className={`${isHomePage ? 'text-white/70 hover:text-white' : 'text-white/70 hover:text-accent'} transition-colors inline-block`}
                  >
                    About
                  </Link>
                </motion.li>
                <motion.li
                  variants={linkVariants}
                  initial="initial"
                  animate="animate"
                  custom={2}
                >
                  <Link 
                    href="/projects" 
                    className={`${isHomePage ? 'text-white/70 hover:text-white' : 'text-white/70 hover:text-accent'} transition-colors inline-block`}
                  >
                    Projects
                  </Link>
                </motion.li>
                <motion.li
                  variants={linkVariants}
                  initial="initial"
                  animate="animate"
                  custom={3}
                >
                  <Link 
                    href="/contact" 
                    className={`${isHomePage ? 'text-white/70 hover:text-white' : 'text-white/70 hover:text-accent'} transition-colors inline-block`}
                  >
                    Contact
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          </div>
          
          {/* Newsletter Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className={`text-lg font-medium ${isHomePage ? 'text-white' : 'text-white'} mb-4`}>Stay Connected</h4>
              <p className={`${isHomePage ? 'text-white/70' : 'text-white/70'} mb-4`}>
                Subscribe to receive updates about new projects and featured work.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-l-lg w-full text-white placeholder:text-white/50 focus:outline-none focus:border-white/50"
                />
                <button 
                  className="px-4 py-2 bg-white text-primary font-medium rounded-r-lg hover:bg-primary-dark hover:text-white transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className={`border-t ${isHomePage ? 'border-white/20' : 'border-white/20'} mt-8 pt-6 flex flex-col md:flex-row justify-between items-center`}>
          <motion.p 
            className={`${isHomePage ? 'text-white/60' : 'text-white/60'} text-sm mb-3 md:mb-0`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </motion.p>
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <span className={`${isHomePage ? 'text-white/60' : 'text-white/60'} text-sm mr-1`}>Made with</span>
            <svg 
              className="w-4 h-4 text-accent mx-1" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32c-5.15-4.67-8.55-7.75-8.55-11.53 0-3.08 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.09 1.09-1.28 2.76-2.09 4.5-2.09 3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54l-1.45 1.31z" />
            </svg>
            <span className={`${isHomePage ? 'text-white/60' : 'text-white/60'} text-sm ml-1`}>using</span>
            <span className="text-accent font-medium text-sm ml-1">Next.js</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
