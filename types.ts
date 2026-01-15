
export enum Role {
  INSTAGRAM = 'instagram',
  DESIGN = 'design',
  WRITING = 'writing',
  MARKETING = 'marketing',
  CURIOUS = 'curious',
}

export interface Question {
  id: string;
  text: string;
  type: 'text' | 'textarea' | 'radio';
  options?: string[];
  placeholder?: string;
  optional?: boolean;
}

export interface RoleConfig {
  id: Role;
  name: string;
  icon: string;
  description: string;
}

export type ApplicationAnswers = {
  [key: string]: string;
};
