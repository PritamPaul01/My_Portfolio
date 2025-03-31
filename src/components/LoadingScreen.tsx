'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
          }, 500); // Delay before hiding the loading screen
          return 100;
        }
        return prev + 5; // Increment by 5% each time
      });
    }, 100);
    
    // Cleanup
    return () => clearInterval(interval);
  }, []);
  
  // Calculate the stroke dash offset based on progress
  const circumference = 2 * Math.PI * 50; // 2πr where r=50
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-secondary flex flex-col items-center justify-center z-[100]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-32 h-32">
            {/* Background circle */}
            <svg 
              className="w-full h-full" 
              viewBox="0 0 120 120"
            >
              <circle
                cx="60"
                cy="60"
                r="50"
                fill="none"
                stroke="#2D2D2D"
                strokeWidth="8"
              />
            </svg>
            
            {/* Progress circle */}
            <svg 
              className="absolute top-0 left-0 w-full h-full -rotate-90" 
              viewBox="0 0 120 120"
            >
              <circle
                cx="60"
                cy="60"
                r="50"
                fill="none"
                stroke="#9F7AEA"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-300 ease-out"
              />
            </svg>
            
            {/* Percentage text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-xl font-bold">{Math.round(progress)}%</span>
            </div>
          </div>
          
          <motion.p 
            className="text-white/70 mt-6 text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Loading amazing content...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
