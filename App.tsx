
import React, { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LandingPage from './components/LandingPage';
import RoleSelection from './components/RoleSelection';
import ApplicationForm from './components/ApplicationForm';
import SubmissionSuccess from './components/SubmissionSuccess';
import ProgressBar from './components/ProgressBar';
import { Role } from './types';

type AppStep = 'landing' | 'roleSelection' | 'applicationForm' | 'success';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>('landing');
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const handleStart = useCallback(() => {
    setStep('roleSelection');
  }, []);

  const handleRoleSelect = useCallback((role: Role) => {
    setSelectedRole(role);
    setStep('applicationForm');
  }, []);

  const handleSubmit = useCallback(() => {
    setStep('success');
  }, []);

  const handleReset = useCallback(() => {
    setSelectedRole(null);
    setStep('landing');
  }, []);

  const renderStep = () => {
    switch (step) {
      case 'landing':
        return <LandingPage onNext={handleStart} />;
      case 'roleSelection':
        return <RoleSelection onSelectRole={handleRoleSelect} />;
      case 'applicationForm':
        if (selectedRole) {
          return <ApplicationForm role={selectedRole} onSubmit={handleSubmit} />;
        }
        return <RoleSelection onSelectRole={handleRoleSelect} />;
      case 'success':
        return <SubmissionSuccess onReset={handleReset} />;
      default:
        return <LandingPage onNext={handleStart} />;
    }
  };

  const stepOrder: AppStep[] = ['landing', 'roleSelection', 'applicationForm', 'success'];
  const currentStepIndex = stepOrder.indexOf(step);

  return (
    <div className="min-h-screen text-[#E5E7EB] flex flex-col items-center p-4 sm:p-8 font-body">
      <ProgressBar currentStep={currentStepIndex} totalSteps={stepOrder.length} />
      <div className="w-full max-w-4xl mx-auto flex-grow flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="w-full"
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
