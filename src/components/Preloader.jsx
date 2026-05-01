import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProjects } from '../context/ProjectContext';

const Preloader = () => {
  const { loading } = useProjects();
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const [show, setShow] = useState(true);

  // Enforce minimum animation duration (1.5s)
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // When both minimum time has elapsed AND data is loaded, hide preloader
  useEffect(() => {
    if (minTimeElapsed && !loading) {
      setShow(false);
    }
  }, [minTimeElapsed, loading]);

  // Lock body scroll while preloader is visible
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-light"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }}
        >
          {/* Background Glow */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-brand-primary/5 to-amber-500/5 animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-primary/20 rounded-full blur-[80px]" />
          
          <motion.div
            className="relative z-10 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Logo Box with Glow */}
            <motion.div 
              className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-brand-primary to-orange-500 rounded-[1.5rem] flex items-center justify-center text-white font-black text-3xl sm:text-4xl shadow-xl mb-6 relative overflow-hidden"
              animate={{ 
                boxShadow: ['0 0 20px rgba(230,81,0,0.3)', '0 0 50px rgba(230,81,0,0.6)', '0 0 20px rgba(230,81,0,0.3)']
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="absolute inset-0 bg-white/20 w-1/2 -skew-x-12 translate-x-[-150%] animate-[shimmer_2s_infinite]" />
              SNK
            </motion.div>
            
            {/* Company Name */}
            <div className="text-center overflow-hidden">
              <motion.h1 
                className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tighter"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              >
                Fabrication <span className="text-brand-primary">Works</span>
              </motion.h1>
              
              <motion.div 
                className="h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent mt-4 rounded-full mx-auto"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '100%', opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.4, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
