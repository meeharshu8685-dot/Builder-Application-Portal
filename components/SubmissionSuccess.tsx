import React from 'react';
import { motion } from 'framer-motion';

interface SubmissionSuccessProps {
  onReset: () => void;
}

const SubmissionSuccess: React.FC<SubmissionSuccessProps> = ({ onReset }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-20 px-4 max-w-xl mx-auto"
    >
      <div className="w-24 h-24 bg-[#7C7CFF]/5 rounded-full flex items-center justify-center mx-auto mb-10 border border-[#7C7CFF]/10">
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 12, delay: 0.2 }}
          className="text-5xl"
        >
          ✨
        </motion.span>
      </div>
      <h2 className="text-4xl font-bold mb-6 text-white tracking-tight font-heading">We've heard you.</h2>
      <div className="space-y-6 mb-12">
        <p className="text-[#9CA3AF] text-xl leading-relaxed">
          No promises. No fake hype. <br />
          We'll see where we fit, and we'll be in touch soon.
        </p>
        <p className="text-[#9CA3AF]/60 text-lg">
          In the meantime, keep building.
        </p>
      </div>
      <button
        onClick={onReset}
        className="bg-white/[0.03] hover:bg-white/[0.08] text-white font-semibold py-4 px-10 rounded-full text-lg transition-all duration-300 border border-white/5"
      >
        Back to start
      </button>
    </motion.div>
  );
};

export default SubmissionSuccess;

