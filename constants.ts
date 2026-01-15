
import { Role, Question, RoleConfig } from './types';

export const ROLES_CONFIG: RoleConfig[] = [
  {
    id: Role.INSTAGRAM,
    name: 'Instagram Creators',
    icon: '📱',
    description: 'Any niche, any style. Just starting to post.',
  },
  {
    id: Role.DESIGN,
    name: 'Designers & Editors',
    icon: '🎨',
    description: 'Still learning tools, still finding your style.',
  },
  {
    id: Role.WRITING,
    name: 'Writers & Storytellers',
    icon: '✍️',
    description: 'Writing for yourself, ready to write for the world.',
  },
  {
    id: Role.MARKETING,
    name: 'Marketing & Growth',
    icon: '📈',
    description: 'People trying to understand how things grow.',
  },
  {
    id: Role.CURIOUS,
    name: 'Curious Thinkers',
    icon: '🧠',
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
