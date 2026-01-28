import React from 'react';
import { motion } from 'motion/react';

export const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none w-full px-6 flex justify-center">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-1 bg-white/80 backdrop-blur-xl border border-dark/10 px-2 py-1.5 rounded-full pointer-events-auto shadow-lg shadow-dark/5"
      >
        <a href="#home" className="px-4 py-2 text-[10px] uppercase tracking-widest font-bold text-dark/60 hover:text-primary transition-colors">Home</a>
        <a href="#about" className="px-4 py-2 text-[10px] uppercase tracking-widest font-bold text-dark/60 hover:text-primary transition-colors">About</a>
        <a href="#work" className="px-4 py-2 text-[10px] uppercase tracking-widest font-bold text-dark/60 hover:text-primary transition-colors">Work</a>
        <a href="#contact" className="px-4 py-2 text-[10px] uppercase tracking-widest font-bold text-dark/60 hover:text-primary transition-colors">Contact</a>
      </motion.div>
    </nav>
  );
};
