
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Role, ApplicationAnswers } from '../types';
import { QUESTIONS, ROLES_CONFIG } from '../constants';

interface ApplicationFormProps {
  role: Role;
  onSubmit: (data: ApplicationAnswers) => void;
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
};

const ApplicationForm: React.FC<ApplicationFormProps> = ({ role, onSubmit }) => {
  const questions = QUESTIONS[role];
  const roleInfo = ROLES_CONFIG.find(r => r.id === role);

  const initialAnswers = questions.reduce((acc, q) => {
    acc[q.id] = '';
    return acc;
  }, {} as ApplicationAnswers);

  const [answers, setAnswers] = useState<ApplicationAnswers>(initialAnswers);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (id: string, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    questions.forEach(q => {
      if (!q.optional && !answers[q.id]?.trim()) {
        newErrors[q.id] = "Take your time, this bit is helpful.";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(answers);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="max-w-xl mx-auto py-12 px-4"
    >
      <div className="text-center mb-16">
        <motion.div variants={itemVariants} className="text-4xl mb-6">{roleInfo?.icon}</motion.div>
        <motion.h2 variants={itemVariants} className="text-3xl font-bold font-heading mb-4 text-white tracking-tight">
          Start a conversation
        </motion.h2>
        <motion.p variants={itemVariants} className="text-[#9CA3AF] text-lg">
          No pressure. Just being honest.
        </motion.p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-12" noValidate>
        {questions.map((q, index) => (
          <motion.div key={q.id} variants={itemVariants} className="flex flex-col">
            <label htmlFor={q.id} className="mb-4 font-medium text-lg text-white/90">
              {q.text}
            </label>
            {q.type === 'textarea' ? (
              <textarea
                id={q.id}
                value={answers[q.id]}
                onChange={(e) => handleChange(q.id, e.target.value)}
                placeholder={q.placeholder}
                rows={3}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-[#7C7CFF]/50 focus:border-[#7C7CFF]/50 transition-all w-full placeholder:text-[#9CA3AF]/30 text-white resize-none"
              />
            ) : q.type === 'text' ? (
              <input
                type="text"
                id={q.id}
                value={answers[q.id]}
                onChange={(e) => handleChange(q.id, e.target.value)}
                placeholder={q.placeholder}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-[#7C7CFF]/50 focus:border-[#7C7CFF]/50 transition-all w-full placeholder:text-[#9CA3AF]/30 text-white"
              />
            ) : null}
            {errors[q.id] && <p className="text-red-400/60 text-sm mt-3 ml-1">{errors[q.id]}</p>}
          </motion.div>
        ))}

        <motion.div variants={itemVariants} className="pt-8">
          <button
            type="submit"
            className="w-full bg-[#7C7CFF] hover:bg-[#8e8eff] text-white font-bold py-4 px-6 rounded-2xl text-lg transition-all shadow-[0_0_25px_rgba(124,124,255,0.2)] hover:shadow-[0_0_35px_rgba(124,124,255,0.4)]"
          >
            Send message
          </button>
          <p className="text-center text-[#9CA3AF]/40 text-sm mt-6 italic">
            "Your ideas are safe here."
          </p>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ApplicationForm;

