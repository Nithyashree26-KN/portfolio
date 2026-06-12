import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-[#0a0a0a] z-[100000] flex items-center justify-center"
        >
          <motion.div
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative flex flex-col items-center gap-6"
          >
            {/* Name fill animation */}
            <div className="relative text-6xl md:text-8xl font-black tracking-tighter">
              {/* Background ghost text */}
              <div className="text-white/10 select-none">Nithya<span className="text-[#ff2a2a]/20">.</span></div>

              {/* Foreground fill text */}
              <motion.div
                className="absolute top-0 left-0 text-white overflow-hidden whitespace-nowrap"
                initial={{ clipPath: 'inset(100% 0 0 0)' }}
                animate={{ clipPath: 'inset(0% 0 0 0)' }}
                transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.2 }}
              >
                Nithya<span className="text-[#ff2a2a]">.</span>
              </motion.div>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-white/40 text-xs font-mono tracking-[0.4em] uppercase"
            >
              Java Full Stack Developer
            </motion.p>

            {/* Loading bar */}
            <motion.div className="w-40 h-0.5 bg-white/10 rounded-full overflow-hidden mt-2">
              <motion.div
                className="h-full bg-[#ff2a2a] rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.8, ease: 'easeInOut', delay: 0.1 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
