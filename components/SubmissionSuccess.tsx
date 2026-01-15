import * as React from 'react';
import { motion } from 'framer-motion';
import LottieIcon from './LottieIcon';

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
      <div className="w-48 h-48 mx-auto mb-12">
        <LottieIcon
          url="https://lottie.host/dca7b9af-559d-481e-84b2-a4e8a1a3a3a3/celebration.json"
          className="w-full h-full"
        />
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

