
import React from 'react';
import { motion } from 'framer-motion';

interface SubmissionSuccessProps {
  onReset: () => void;
}

const SubmissionSuccess: React.FC<SubmissionSuccessProps> = ({ onReset }) => {
  return (
    <div className="text-center flex flex-col items-center justify-center min-h-[70vh] backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}
        className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/20"
      >
          <svg className="w-12 h-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            />
          </svg>
      </motion.div>
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-heading">Application Submitted!</h2>
      <p className="text-lg text-[#9CA3AF] max-w-md mx-auto mb-8">
        Thank you for your interest. We've received your application and will review it shortly. If there's a good fit, we'll be in touch.
      </p>
      <button
        onClick={onReset}
        className="bg-white/5 hover:bg-white/10 text-[#E5E7EB] font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 border border-white/10 hover:border-white/20"
      >
        Start Over
      </button>
    </div>
  );
};

export default SubmissionSuccess;
