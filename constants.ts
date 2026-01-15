
import { Role, Question, RoleConfig } from './types';

export const ROLES_CONFIG: RoleConfig[] = [
  {
    id: Role.INSTAGRAM,
    name: 'Instagram Creators',
    icon: '📱',
    lottieUrl: 'https://lottie.host/802fed28-a4cc-408a-b86e-b358e578adcf/PjG8p7sN3f.json',
    description: 'Any niche, any style. Just starting to post.',
  },
  {
    id: Role.DESIGN,
    name: 'Designers & Editors',
    icon: '🎨',
    lottieUrl: 'https://lottie.host/7bd931ea-3617-48f0-b0b3-f61405e32304/O0T1T5L8qD.json',
    description: 'Still learning tools, still finding your style.',
  },
  {
    id: Role.WRITING,
    name: 'Writers & Storytellers',
    icon: '✍️',
    lottieUrl: 'https://lottie.host/64d7c0f1-4fd3-4b6e-b69c-5a3d7b4c9e1e/writing.json',
    description: 'Writing for yourself, ready to write for the world.',
  },
  {
    id: Role.MARKETING,
    name: 'Marketing & Growth',
    icon: '📈',
    lottieUrl: 'https://lottie.host/1b9d7c8a-0a5b-4e8c-8f9a-6a5b2e8a1a3a/growth.json',
    description: 'People trying to understand how things grow.',
  },
  {
    id: Role.CURIOUS,
    name: 'Curious Thinkers',
    icon: '🧠',
    lottieUrl: 'https://lottie.host/2b9d7c8a-0a5b-4e8c-8f9a-6a5b2e8a1a3a/brain.json',
    description: 'Ideas but no audience yet. Exploring.',
  },
];

export const QUESTIONS: Record<Role, Question[]> = {
  [Role.INSTAGRAM]: [
    {
      id: 'experimenting',
      text: 'What are you experimenting with right now?',
      type: 'textarea',
      placeholder: 'e.g., trying to learn video editing, testing different hooks...',
    },
    {
      id: 'platform',
      text: 'Where do you usually create? (Instagram / etc)',
      type: 'text',
      placeholder: '@yourhandle or link',
    },
    {
      id: 'excitement',
      text: 'What kind of collab excites you?',
      type: 'textarea',
      placeholder: 'Whatever comes to mind...',
    },
    {
      id: 'time',
      text: 'How much time can you honestly give?',
      type: 'text',
      placeholder: 'Be honest, no pressure.',
    },
  ],
  [Role.DESIGN]: [
    {
      id: 'experimenting',
      text: 'What are you experimenting with right now?',
      type: 'textarea',
      placeholder: 'e.g., learning Figma, playing with typography...',
    },
    {
      id: 'platform',
      text: 'Where do you usually create? (Portfolio / Behance / etc)',
      type: 'text',
      placeholder: 'link or @handle',
    },
    {
      id: 'excitement',
      text: 'What kind of collab excites you?',
      type: 'textarea',
      placeholder: 'Whatever comes to mind...',
    },
    {
      id: 'time',
      text: 'How much time can you honestly give?',
      type: 'text',
      placeholder: 'Be honest, no pressure.',
    },
  ],
  [Role.WRITING]: [
    {
      id: 'experimenting',
      text: 'What are you experimenting with right now?',
      type: 'textarea',
      placeholder: 'e.g., daily journaling, writing short stories...',
    },
    {
      id: 'platform',
      text: 'Where do you usually create? (Substack / Medium / etc)',
      type: 'text',
      placeholder: 'link or @handle',
    },
    {
      id: 'excitement',
      text: 'What kind of collab excites you?',
      type: 'textarea',
      placeholder: 'Whatever comes to mind...',
    },
    {
      id: 'time',
      text: 'How much time can you honestly give?',
      type: 'text',
      placeholder: 'Be honest, no pressure.',
    },
  ],
  [Role.MARKETING]: [
    {
      id: 'experimenting',
      text: 'What are you experimenting with right now?',
      type: 'textarea',
      placeholder: 'e.g., learning SEO, studying viral trends...',
    },
    {
      id: 'platform',
      text: 'Where do you usually create? (LinkedIn / etc)',
      type: 'text',
      placeholder: 'link or @handle',
    },
    {
      id: 'excitement',
      text: 'What kind of collab excites you?',
      type: 'textarea',
      placeholder: 'Whatever comes to mind...',
    },
    {
      id: 'time',
      text: 'How much time can you honestly give?',
      type: 'text',
      placeholder: 'Be honest, no pressure.',
    },
  ],
  [Role.CURIOUS]: [
    {
      id: 'experimenting',
      text: 'What are you experimenting with right now?',
      type: 'textarea',
      placeholder: 'e.g., reading books on psychology, learning a new language...',
    },
    {
      id: 'platform',
      text: 'Where do you usually create or hang out?',
      type: 'text',
      placeholder: 'let us know',
    },
    {
      id: 'excitement',
      text: 'What kind of collab excites you?',
      type: 'textarea',
      placeholder: 'Whatever comes to mind...',
    },
    {
      id: 'time',
      text: 'How much time can you honestly give?',
      type: 'text',
      placeholder: 'Be honest, no pressure.',
    },
  ],
};
