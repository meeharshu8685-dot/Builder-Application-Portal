import React from 'react';
import { motion, Variants } from 'framer-motion';

interface LandingPageProps {
  onNext: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  },
};

const LandingPage: React.FC<LandingPageProps> = ({ onNext }) => {
  return (
    <motion.div 
      className="text-center flex flex-col items-center justify-center min-h-[70vh]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.h1 
        variants={itemVariants} 
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 font-heading"
      >
        We are building quietly.
      </motion.h1>
      <motion.p 
        variants={itemVariants}
        className="text-lg sm:text-xl text-[#9CA3AF] max-w-2xl mx-auto mb-10"
      >
        If you build too — welcome.
      </motion.p>
      <motion.div variants={itemVariants}>
        <button
          onClick={onNext}
          className="bg-[#7C7CFF]/10 hover:bg-[#7C7CFF]/20 text-[#E5E7EB] font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 border border-[#7C7CFF]/30 hover:border-[#7C7CFF]/60"
        >
          Begin
        </button>
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;