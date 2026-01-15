import * as React from 'react';
import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LandingPage from './components/LandingPage';
import RoleSelection from './components/RoleSelection';
import ApplicationForm from './components/ApplicationForm';
import SubmissionSuccess from './components/SubmissionSuccess';
import ProgressBar from './components/ProgressBar';
import Background3D from './components/Background3D';
import SmoothScroll from './components/SmoothScroll';
import { supabase } from './supabaseClient';
import { ROLES_CONFIG } from './constants';
import { Role, ApplicationAnswers } from './types';

type AppStep = 'landing' | 'roleSelection' | 'applicationForm' | 'success';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>('landing');
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleStart = useCallback(() => {
    setStep('roleSelection');
  }, []);

  const handleRoleSelect = useCallback((role: Role) => {
    setSelectedRole(role);
    setSubmitError(null);
    setStep('applicationForm');
  }, []);

  const handleSubmit = useCallback(async (data: ApplicationAnswers) => {
    setIsSubmitting(true);
    setSubmitError(null);

    console.log('Attempting to submit to Supabase...');

    try {
      const roleConfig = (ROLES_CONFIG as any[]).find(r => r.id === selectedRole);

      // Separate email and contact from other answers
      const { email, contact, ...restAnswers } = data;

      const { error, data: resultData } = await supabase
        .from('applications')
        .insert([
          {
            role_id: selectedRole,
            role_name: roleConfig?.name || selectedRole || 'Unknown',
            email: email,
            contact: contact,
            answers: restAnswers,
            metadata: {
              submitted_at: new Date().toISOString(),
              userAgent: navigator.userAgent,
              language: navigator.language
            }
          }
        ]);

      if (error) {
        console.error('Supabase Insert Error:', error);
        throw error;
      }

      console.log('Submission successful:', resultData);
      setStep('success');
    } catch (err: any) {
      console.error('Final Submission Error catch:', err);
      setSubmitError(err.message || 'An unexpected error occurred. Please check the console.');
    } finally {
      setIsSubmitting(false);
    }
  }, [selectedRole]);

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
          return (
            <ApplicationForm
              role={selectedRole}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              error={submitError}
            />
          );
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
    <SmoothScroll>
      <div className="min-h-screen text-[#E5E7EB] flex flex-col items-center font-body selection:bg-[#7C7CFF]/30 overflow-x-hidden pt-6">
        <Background3D />
        <ProgressBar currentStep={currentStepIndex} totalSteps={stepOrder.length} />
        <main className="w-full flex-grow flex items-center justify-center px-4 sm:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-5xl mx-auto"
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </SmoothScroll>
  );
};

export default App;
