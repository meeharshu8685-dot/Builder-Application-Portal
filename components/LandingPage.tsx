import * as React from 'react';
import { motion, Variants } from 'framer-motion';
import LottieIcon from './LottieIcon';

interface LandingPageProps {
  onNext: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  },
};

const LandingPage: React.FC<LandingPageProps> = ({ onNext }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-12 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* 1. Hero Section */}
      <section className="text-center mb-24 max-w-4xl mx-auto">
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 font-heading text-white tracking-tight"
        >
          Not a big creator? <br />
          <span className="text-white/40">Not a problem.</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="space-y-4 mb-12">
          <p className="text-xl sm:text-2xl text-[#9CA3AF] font-medium leading-relaxed">
            If you’re creating — you’re welcome here.
          </p>
          <p className="text-lg text-[#9CA3AF]/60 max-w-2xl mx-auto leading-relaxed">
            A place for people who are still learning, still experimenting, and still showing up.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onNext}
            className="bg-[#7C7CFF] hover:bg-[#8e8eff] text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 shadow-[0_0_30px_rgba(124,124,255,0.3)] hover:shadow-[0_0_40px_rgba(124,124,255,0.5)] transform hover:-translate-y-1"
          >
            Start a collab
          </button>
          <button
            onClick={onNext}
            className="bg-white/5 hover:bg-white/10 text-white font-semibold py-4 px-10 rounded-full text-lg transition-all duration-300 border border-white/10"
          >
            I'm just exploring
          </button>
        </motion.div>
      </section>

      {/* 2. Who This Is For */}
      <section className="w-full mb-32 max-w-5xl">
        <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-12 text-center text-white/80">
          Who This Is For
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { url: 'https://lottie.host/802fed28-a4cc-408a-b86e-b358e578adcf/PjG8p7sN3f.json', title: 'Instagram creators', desc: 'Any niche, any style' },
            { url: 'https://lottie.host/7bd931ea-3617-48f0-b0b3-f61405e32304/O0T1T5L8qD.json', title: 'Designers & editors', desc: 'Still finding your style' },
            { url: 'https://lottie.host/64d7c0f1-4fd3-4b6e-b69c-5a3d7b4c9e1e/writing.json', title: 'Writers', desc: 'Ready to write for the world' },
            { url: 'https://lottie.host/1b9d7c8a-0a5b-4e8c-8f9a-6a5b2e8a1a3a/growth.json', title: 'Marketing souls', desc: 'Trying to understand growth' },
            { url: 'https://lottie.host/2b9d7c8a-0a5b-4e8c-8f9a-6a5b2e8a1a3a/brain.json', title: 'Thinkers', desc: 'Ideas but no audience yet' },
            { url: 'https://lottie.host/3b9d7c8a-0a5b-4e8c-8f9a-6a5b2e8a1a3a/experiment.json', title: 'Experimenters', desc: 'Always trying new things' },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-md transition-all hover:bg-white/[0.04] hover:border-[#7C7CFF]/30 group"
            >
              <div className="w-16 h-16 mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                <LottieIcon url={item.url} className="w-full h-full" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#7C7CFF] transition-colors">{item.title}</h3>
              <p className="text-[#9CA3AF] text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Remove Fear Section */}
      <section className="w-full mb-32 max-w-3xl mx-auto p-12 rounded-[2.5rem] bg-gradient-to-b from-white/[0.04] to-transparent border border-white/5">
        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-12 text-center text-white">
          You don't need:
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          {[
            'Big followers',
            'Perfect portfolio',
            'Years of experience',
            'Certainty',
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex items-center gap-4 text-xl text-[#9CA3AF]"
            >
              <span className="text-red-400/60 font-bold ml-2">✕</span>
              {item}
            </motion.div>
          ))}
        </div>
        <motion.p variants={itemVariants} className="text-center text-2xl font-medium text-white/90">
          You just need <span className="text-[#7C7CFF]">curiosity</span> and <span className="text-[#7C7CFF]">consistency</span>.
        </motion.p>
      </section>

      {/* 4. How Collab Works */}
      <section className="w-full max-w-5xl mb-24">
        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-16 text-center text-white">
          How it works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Share your spark', desc: 'Tell us what you\'re trying to build' },
            { step: '02', title: 'Find your fit', desc: 'We see where you belong' },
            { step: '03', title: 'Build small', desc: 'We create something tiny together' },
            { step: '04', title: 'Keep moving', desc: 'If it works — we continue' },
          ].map((item, i) => (
            <motion.div key={i} variants={itemVariants} className="relative">
              <div className="text-6xl font-black text-white/5 absolute -top-10 -left-4">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white relative z-10">{item.title}</h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Quote */}
      <motion.footer variants={itemVariants} className="w-full text-center py-12 border-t border-white/5 mt-12">
        <p className="text-[#9CA3AF]/40 text-sm italic font-medium">
          “This space is for people who are still figuring it out.”
        </p>
      </motion.footer>
    </motion.div>
  );
};

export default LandingPage;