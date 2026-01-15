
import React from 'react';
import { motion } from 'framer-motion';
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
    <div>
      <h2 className="text-3xl font-bold text-center mb-2 font-heading">Choose Your Role</h2>
      <p className="text-[#9CA3AF] text-center mb-8">How do you want to contribute?</p>
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
            className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 text-left focus:outline-none focus:ring-2 focus:ring-[#7C7CFF] focus:ring-offset-2 focus:ring-offset-[#0B0F14] hover:shadow-[0_0_20px_var(--accent-color-glow)] hover:border-white/20"
          >
            <div className="text-4xl mb-4">{role.icon}</div>
            <h3 className="text-xl font-semibold text-white font-heading">{role.name}</h3>
            <p className="text-[#9CA3AF] mt-1">{role.description}</p>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default RoleSelection;
