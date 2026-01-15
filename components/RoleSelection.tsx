import * as React from 'react';
import { motion } from 'framer-motion';
import LottieIcon from './LottieIcon';
import { Role } from '../types';
import { ROLES_CONFIG } from '../constants';

interface RoleSelectionProps {
  onSelectRole: (role: Role) => void;
}

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const RoleSelection: React.FC<RoleSelectionProps> = ({ onSelectRole }) => {
  return (
    <div className="py-12">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white tracking-tight font-heading">Open Collab Room</h2>
      <p className="text-[#9CA3AF] text-center mb-16 text-lg max-w-xl mx-auto">Where does your spark usually show up?</p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {ROLES_CONFIG.map((role) => (
          <motion.button
            key={role.id}
            onClick={() => onSelectRole(role.id)}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="backdrop-blur-sm bg-white/5 p-8 rounded-[2rem] border border-white/10 text-left focus:outline-none focus:ring-2 focus:ring-[#7C7CFF]/50 hover:shadow-[0_0_30px_rgba(124,124,255,0.15)] hover:border-[#7C7CFF]/40 transition-all group"
          >
            <div className="w-16 h-16 mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
              <LottieIcon url={role.lottieUrl} className="w-full h-full" />
            </div>
            <h3 className="text-2xl font-bold text-white font-heading group-hover:text-[#7C7CFF] transition-colors">{role.name}</h3>
            <p className="text-[#9CA3AF] mt-2 leading-relaxed">{role.description}</p>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default RoleSelection;
