import * as React from 'react';
import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Role, ApplicationAnswers } from '../types';
import { QUESTIONS, ROLES_CONFIG } from '../constants';

interface ApplicationFormProps {
  role: Role;
  onSubmit: (data: ApplicationAnswers) => void;
  isSubmitting?: boolean;
  error?: string | null;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
};

const ApplicationForm: React.FC<ApplicationFormProps> = ({ role, onSubmit, isSubmitting = false, error = null }) => {
  const questions = QUESTIONS[role];
  const roleInfo = ROLES_CONFIG.find(r => r.id === role);

  const initialAnswers = questions.reduce((acc, q) => {
    acc[q.id] = '';
    return acc;
  }, { email: '', contact: '' } as ApplicationAnswers);

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

    // Email validation
    if (!answers.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Contact validation
    if (!answers.contact || answers.contact.trim().length < 2) {
      newErrors.contact = "Contact handle is compulsory.";
    }

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
      <div className="text-center mb-12 sm:mb-16">
        <motion.div variants={itemVariants} className="text-3xl sm:text-4xl mb-4 sm:mb-6">{roleInfo?.icon}</motion.div>
        <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl font-bold font-heading mb-3 sm:mb-4 text-white tracking-tight">
          Apply to the Collab Room
        </motion.h2>
        <motion.p variants={itemVariants} className="text-[#9CA3AF] text-base sm:text-lg">
          Professional. Honest. Still Building.
        </motion.p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10 sm:space-y-14" noValidate>
        {/* Contact Info Section */}
        <section className="space-y-8 sm:space-y-10 p-6 sm:p-8 bg-white/[0.02] border border-white/5 rounded-[2rem]">
          <h3 className="text-white/60 text-xs font-bold uppercase tracking-widest px-1">Professional Identity</h3>

          <motion.div variants={itemVariants} className="flex flex-col">
            <label htmlFor="email" className="mb-3 font-medium text-base text-white/90">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={answers.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="you@example.com"
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-[#7C7CFF]/50 focus:border-[#7C7CFF]/50 transition-all w-full placeholder:text-[#9CA3AF]/30 text-white text-base"
            />
            {errors.email && <p className="text-red-400/60 text-sm mt-3 ml-1">{errors.email}</p>}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col">
            <label htmlFor="contact" className="mb-3 font-medium text-base text-white/90">
              Contact Handle <span className="text-[#7C7CFF]">*</span>
            </label>
            <input
              type="text"
              id="contact"
              value={answers.contact}
              onChange={(e) => handleChange('contact', e.target.value)}
              placeholder="@handle or +1..."
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-[#7C7CFF]/50 focus:border-[#7C7CFF]/50 transition-all w-full placeholder:text-[#9CA3AF]/30 text-white text-base"
            />
            {errors.contact && <p className="text-red-400/60 text-sm mt-3 ml-1">{errors.contact}</p>}
          </motion.div>
        </section>

        {/* Dynamic Questions Section */}
        <section className="space-y-8 sm:space-y-12">
          <h3 className="text-white/60 text-xs font-bold uppercase tracking-widest px-1">Concept & Spark</h3>
          {questions.map((q) => (
            <motion.div key={q.id} variants={itemVariants} className="flex flex-col">
              <label htmlFor={q.id} className="mb-3 font-medium text-base text-white/90">
                {q.text}
              </label>
              {q.type === 'textarea' ? (
                <textarea
                  id={q.id}
                  value={answers[q.id]}
                  onChange={(e) => handleChange(q.id, e.target.value)}
                  placeholder={q.placeholder}
                  rows={4}
                  className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-[#7C7CFF]/50 focus:border-[#7C7CFF]/50 transition-all w-full placeholder:text-[#9CA3AF]/30 text-white resize-none text-base leading-relaxed"
                />
              ) : q.type === 'text' ? (
                <input
                  type="text"
                  id={q.id}
                  value={answers[q.id]}
                  onChange={(e) => handleChange(q.id, e.target.value)}
                  placeholder={q.placeholder}
                  className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-[#7C7CFF]/50 focus:border-[#7C7CFF]/50 transition-all w-full placeholder:text-[#9CA3AF]/30 text-white text-base"
                />
              ) : null}
              {errors[q.id] && <p className="text-red-400/60 text-sm mt-3 ml-1">{errors[q.id]}</p>}
            </motion.div>
          ))}
        </section>

        <motion.div variants={itemVariants} className="pt-6 sm:pt-8 bg-black/20 p-8 rounded-[2rem] border border-white/5">
          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-sm flex items-start gap-3"
            >
              <span className="text-lg">⚠️</span>
              <div>
                <p className="font-bold mb-1">Submission Failed</p>
                <p className="opacity-80">{error}</p>
              </div>
            </motion.div>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-[#7C7CFF] hover:bg-[#8e8eff] text-white font-bold py-5 px-6 rounded-2xl text-lg transition-all shadow-[0_0_25px_rgba(124,124,255,0.2)] hover:shadow-[0_0_35px_rgba(124,124,255,0.4)] flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Processing...
              </>
            ) : (
              'Submit Application'
            )}
          </button>
          <div className="flex flex-col items-center gap-2 mt-6">
            <p className="text-[#9CA3AF]/40 text-xs italic text-center">
              "Your ideas are safe here. We build in quiet."
            </p>
            <div className="w-8 h-[1px] bg-white/5" />
            <p className="text-[#9CA3AF]/20 text-[10px] uppercase tracking-[0.2em]">End of Transmission</p>
          </div>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ApplicationForm;

