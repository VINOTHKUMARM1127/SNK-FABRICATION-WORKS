import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProjects } from '../context/ProjectContext';
import snkLogo from '../assets/intro.png';

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
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#FFEDD5] via-[#F8FAFC] to-[#E0F2FE] will-change-transform"
          initial={{ y: 0 }}
          exit={{ 
            y: '-100vh',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Subtle minimal background glow — static, no animation to reduce GPU load */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-primary/5 rounded-full blur-[80px]" />

          <motion.div
            className="relative z-10 flex flex-col items-center justify-center w-full px-4 will-change-[transform,opacity]"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            {/* Logo Container - 4:3 Ratio, responsive sizing */}
            <div className="w-[70%] sm:w-[50%] max-w-[350px] aspect-[4/3] flex items-center justify-center relative">
              <img 
                src={snkLogo} 
                alt="SNK Build Fabric Solutions Logo" 
                className="w-full h-full object-contain"
                width="350"
                height="263"
                style={{ filter: 'drop-shadow(0px 10px 15px rgba(230,81,0,0.1))' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
