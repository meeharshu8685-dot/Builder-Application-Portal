
import { Role, Question, RoleConfig } from './types';

export const ROLES_CONFIG: RoleConfig[] = [
  {
    id: Role.DEVELOPER,
    name: 'Frontend / Backend Developer',
    icon: '🧑‍💻',
    description: 'Build and scale our products.',
  },
  {
    id: Role.DESIGNER,
    name: 'Designer (UI / Brand)',
    icon: '🎨',
    description: 'Shape the look and feel of our vision.',
  },
  {
    id: Role.MARKETING,
    name: 'Marketing / Growth',
    icon: '📈',
    description: 'Connect our products with the world.',
  },
  {
    id: Role.CONTENT,
    name: 'Content / Story / Copy',
    icon: '✍️',
    description: 'Craft the narrative that inspires.',
  },
  {
    id: Role.AI,
    name: 'AI / Automation',
    icon: '🤖',
    description: 'Engineer the future with intelligence.',
  },
  {
    id: Role.GENERALIST,
    name: 'Generalist (Still exploring)',
    icon: '🧠',
    description: 'Wear multiple hats and solve diverse problems.',
  },
];

export const QUESTIONS: Record<Role, Question[]> = {
  [Role.DEVELOPER]: [
    {
      id: 'build_now',
      text: 'What technologies are you most proficient with, and what can you build with them right now?',
      type: 'textarea',
      placeholder: 'e.g., React, Node.js, Python. I can build a full-stack web app with a REST API...',
    },
    {
      id: 'project_link',
      text: 'Share your GitHub, portfolio, or a project you\'re proud of.',
      type: 'text',
      placeholder: 'https://github.com/your-username',
      optional: true,
    },
    {
      id: 'learn_earn_build',
      text: 'Are you here to learn, earn, or build something long-term?',
      type: 'radio',
      options: ['Primarily to Learn', 'Primarily to Earn', 'To Build a Long-Term Project/Career', 'A mix of all three'],
    },
    {
      id: 'time_commitment',
      text: 'How many hours per week can you realistically commit?',
      type: 'text',
      placeholder: 'e.g., 10-15 hours',
    },
    {
      id: 'problem_to_solve',
      text: 'Describe one problem, big or small, that you would love to solve with technology.',
      type: 'textarea',
      placeholder: 'e.g., I\'d love to build an app that helps local communities reduce food waste...',
    },
  ],
  [Role.DESIGNER]: [
    {
      id: 'design_philosophy',
      text: 'Describe your design philosophy in a few sentences.',
      type: 'textarea',
      placeholder: 'e.g., I believe in user-centric design that is both beautiful and intuitive...',
    },
    {
      id: 'portfolio_link',
      text: 'Link to your Dribbble, Behance, or personal portfolio.',
      type: 'text',
      placeholder: 'https://dribbble.com/your-username',
    },
     {
      id: 'tools',
      text: 'What are your go-to design tools?',
      type: 'text',
      placeholder: 'e.g., Figma, Sketch, Adobe XD, Illustrator',
    },
    {
      id: 'learn_earn_build',
      text: 'Are you here to learn, earn, or build something long-term?',
      type: 'radio',
      options: ['Primarily to Learn', 'Primarily to Earn', 'To Build a Long-Term Project/Career', 'A mix of all three'],
    },
    {
      id: 'favorite_design',
      text: 'What is a product whose design you admire, and why?',
      type: 'textarea',
      placeholder: 'e.g., I admire Stripe\'s website for its clean layout, clear hierarchy, and beautiful animations.',
    },
  ],
  [Role.MARKETING]: [
    {
      id: 'first_100_users',
      text: 'Imagine we just launched. How would you get our first 100 users?',
      type: 'textarea',
      placeholder: 'e.g., I would start by identifying target communities on Reddit and LinkedIn, engage in conversations...',
    },
    {
      id: 'campaign_link',
      text: 'Share a link to a page, reel, or campaign you\'ve worked on.',
      type: 'text',
      placeholder: 'https://instagram.com/p/your-post',
      optional: true,
    },
    {
      id: 'metrics',
      text: 'What marketing metrics do you care about the most and why?',
      type: 'text',
      placeholder: 'e.g., Conversion Rate, CAC, LTV...',
    },
    {
      id: 'learn_earn_build',
      text: 'Are you here to learn, earn, or build something long-term?',
      type: 'radio',
      options: ['Primarily to Learn', 'Primarily to Earn', 'To Build a Long-Term Project/Career', 'A mix of all three'],
    },
    {
      id: 'growth_idea',
      text: 'What\'s one unconventional growth hack you\'d like to try?',
      type: 'textarea',
      placeholder: 'e.g., Creating a useful free tool related to our product to attract organic traffic...',
    },
  ],
  [Role.CONTENT]: [
      {
        id: 'writing_style',
        text: 'How would you describe your writing style?',
        type: 'textarea',
        placeholder: 'e.g., Conversational and witty, formal and technical, storytelling-focused...'
      },
      {
        id: 'writing_sample',
        text: 'Link to a blog post, article, or copy you\'ve written.',
        type: 'text',
        placeholder: 'https://medium.com/@your-username/your-article'
      },
      {
        id: 'target_audience',
        text: 'How do you adapt your writing for different audiences?',
        type: 'textarea',
        placeholder: 'I research their pain points, language, and the platforms they use...'
      },
      {
        id: 'learn_earn_build',
        text: 'Are you here to learn, earn, or build something long-term?',
        type: 'radio',
        options: ['Primarily to Learn', 'Primarily to Earn', 'To Build a Long-Term Project/Career', 'A mix of all three'],
      },
      {
        id: 'story_idea',
        text: 'Pitch a story or content idea for our brand.',
        type: 'textarea',
        placeholder: 'e.g., A series of case studies on how builders used our platform to launch their careers...'
      }
  ],
  [Role.AI]: [
      {
        id: 'ai_experience',
        text: 'What\'s your experience with AI/ML models and frameworks?',
        type: 'textarea',
        placeholder: 'e.g., I have experience with TensorFlow and PyTorch, fine-tuning LLMs like GPT and Llama...'
      },
      {
        id: 'project_link',
        text: 'Share a link to an AI project, notebook, or paper you\'ve worked on.',
        type: 'text',
        placeholder: 'https://github.com/your-username/your-ai-project',
        optional: true,
      },
      {
        id: 'ai_application',
        text: 'How would you apply AI to improve our product or operations?',
        type: 'textarea',
        placeholder: 'e.g., We could build a recommendation engine to match builders with projects based on their skills...'
      },
      {
        id: 'learn_earn_build',
        text: 'Are you here to learn, earn, or build something long-term?',
        type: 'radio',
        options: ['Primarily to Learn', 'Primarily to Earn', 'To Build a Long-Term Project/Career', 'A mix of all three'],
      },
      {
        id: 'future_of_ai',
        text: 'What excites you most about the future of AI?',
        type: 'textarea',
        placeholder: 'I am excited about the potential of generative AI to democratize creativity...'
      }
  ],
  [Role.GENERALIST]: [
      {
        id: 'superpower',
        text: 'What\'s your professional "superpower"?',
        type: 'textarea',
        placeholder: 'e.g., I can quickly learn new things and connect disparate ideas. I\'m great at organizing chaos...'
      },
      {
        id: 'past_experience',
        text: 'Describe a project where you had to wear multiple hats.',
        type: 'textarea',
        placeholder: 'e.g., At my last startup, I handled customer support, product testing, and wrote marketing copy...'
      },
      {
        id: 'interested_in',
        text: 'Which of the other roles (dev, design, etc.) are you most interested in learning about?',
        type: 'text',
        placeholder: 'e.g., I\'d love to learn more about UI/UX design.'
      },
      {
        id: 'learn_earn_build',
        text: 'Are you here to learn, earn, or build something long-term?',
        type: 'radio',
        options: ['Primarily to Learn', 'Primarily to Earn', 'To Build a Long-Term Project/Career', 'A mix of all three'],
      },
      {
        id: 'ideal_contribution',
        text: 'In an ideal world, how would you contribute to our mission?',
        type: 'textarea',
        placeholder: 'e.g., I want to be the glue that holds teams together, ensuring projects move forward smoothly.'
      }
  ]
};
