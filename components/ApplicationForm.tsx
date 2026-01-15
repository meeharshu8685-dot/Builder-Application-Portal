
import React, { useState } from 'react';
import { Role, ApplicationAnswers } from '../types';
import { QUESTIONS, ROLES_CONFIG } from '../constants';

interface ApplicationFormProps {
  role: Role;
  onSubmit: (data: ApplicationAnswers) => void;
}

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
      setErrors(prev => ({...prev, [id]: ''}));
    }
  };
  
  const validate = () => {
    const newErrors: Record<string, string> = {};
    questions.forEach(q => {
      if (!q.optional && !answers[q.id]?.trim()) {
        newErrors[q.id] = "This field is required.";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Submitting answers:', answers);
      onSubmit(answers);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-10">
         <div className="text-5xl mb-4">{roleInfo?.icon}</div>
        <h2 className="text-3xl font-bold font-heading">Application: {roleInfo?.name}</h2>
        <p className="text-[#9CA3AF]">Answer a few questions to help us get to know you.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-8" noValidate>
        {questions.map((q, index) => (
          <div key={q.id} className="flex flex-col">
            <label htmlFor={q.id} className="mb-3 font-medium text-lg text-[#E5E7EB]">
              {index + 1}. {q.text} {!q.optional && <span className="text-red-500 ml-1">*</span>}
            </label>
            {q.type === 'textarea' ? (
              <textarea
                id={q.id}
                value={answers[q.id]}
                onChange={(e) => handleChange(q.id, e.target.value)}
                placeholder={q.placeholder}
                rows={4}
                className="bg-white/5 border border-white/10 rounded-lg p-3 focus:ring-2 focus:ring-[#7C7CFF] focus:border-[#7C7CFF] transition-colors w-full placeholder:text-[#9CA3AF]/50"
              />
            ) : q.type === 'text' ? (
               <input
                type="text"
                id={q.id}
                value={answers[q.id]}
                onChange={(e) => handleChange(q.id, e.target.value)}
                placeholder={q.placeholder}
                className="bg-white/5 border border-white/10 rounded-lg p-3 focus:ring-2 focus:ring-[#7C7CFF] focus:border-[#7C7CFF] transition-colors w-full placeholder:text-[#9CA3AF]/50"
              />
            ) : q.type === 'radio' ? (
              <div className="space-y-2 mt-2">
                {q.options?.map(option => (
                  <label key={option} className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${answers[q.id] === option ? 'bg-[#7C7CFF]/20 border-[#7C7CFF]/50' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
                    <input
                      type="radio"
                      name={q.id}
                      value={option}
                      checked={answers[q.id] === option}
                      onChange={(e) => handleChange(q.id, e.target.value)}
                      className="h-4 w-4 text-[#7C7CFF] bg-transparent border-white/20 focus:ring-[#7C7CFF] focus:ring-offset-0"
                    />
                    <span className="ml-3 text-[#E5E7EB]">{option}</span>
                  </label>
                ))}
              </div>
            ): null}
             {errors[q.id] && <p className="text-red-500 text-sm mt-2">{errors[q.id]}</p>}
          </div>
        ))}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-[#7C7CFF] hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all transform hover:scale-[1.01] shadow-[0_0_20px_var(--accent-color-glow)]"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
