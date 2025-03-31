'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'projects', label: 'Projects', path: '/projects' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Logo letter animation variants
  const logoLetterVariants = {
    initial: { y: -20, opacity: 0 },
    animate: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      y: [0, -5, 0],
      color: ["#FFFFFF", "#9F7AEA", "#FFFFFF"],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "mirror" as "mirror"
      }
    }
  };
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex items-center justify-between bg-black/50 backdrop-blur-md rounded-full px-6 py-2 border border-purple-500/20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/" 
            className="text-white text-2xl font-bold relative overflow-hidden group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className="flex items-center">
              {Array.from("Pritam").map((letter, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={logoLetterVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className={index === 0 ? "text-primary" : ""}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <motion.div 
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-600 to-purple-300" 
              initial={{ width: 0 }}
              animate={{ width: hovered ? "100%" : "20%" }}
              transition={{ duration: 0.3 }}
            />
          </Link>
          
          <nav className="flex items-center">
            <motion.ul 
              className="flex space-x-6 bg-black/40 backdrop-blur-sm rounded-full px-5 py-2 border border-purple-500/10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index + 0.3 }}
                >
                  <Link
                    href={item.path}
                    className={`text-sm font-medium transition-all duration-300 relative px-3 py-2 hover:text-white ${pathname === item.path ? 'text-primary' : 'text-white/80'}`}
                  >
                    {item.label}
                    {pathname === item.path ? (
                      <motion.span
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-purple-300"
                        layoutId="navbar-indicator"
                        transition={{ type: 'spring', duration: 0.6 }}
                      />
                    ) : (
                      <motion.span
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-300"
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
