import type { AppConfig } from '../types';

export const APP_CONFIGS: AppConfig[] = [
  {
    id: 'projects',
    name: 'Projects',
    description: 'Portfolio · Case Studies · Source',
    badge: 'MAIN DRIVE',
    icon: 'FolderOpen',
    defaultSize: { width: 900, height: 640 },
  },
  {
    id: 'casefiles',
    name: 'Case Files',
    description: 'The Grand Scheme — deep dive',
    badge: 'FLAGSHIP',
    icon: 'FileText',
    defaultSize: { width: 800, height: 600 },
  },
  {
    id: 'systems',
    name: 'Systems',
    description: 'How I operate and build',
    icon: 'Cpu',
    defaultSize: { width: 720, height: 580 },
  },
  {
    id: 'journey',
    name: 'Journey',
    description: 'Milestones from 2021',
    icon: 'GitBranch',
    defaultSize: { width: 680, height: 560 },
  },
  {
    id: 'achievements',
    name: 'Achievements',
    description: 'Certifications · Rankings · Proof',
    badge: 'VERIFIED',
    icon: 'Award',
    defaultSize: { width: 700, height: 520 },
  },
  {
    id: 'socials',
    name: 'Socials',
    description: 'GitHub · LinkedIn · Email',
    icon: 'Share2',
    defaultSize: { width: 560, height: 440 },
  },
  {
    id: 'contact',
    name: 'Contact',
    description: 'Get in touch · Hire · Collaborate',
    badge: 'OPEN',
    icon: 'Mail',
    defaultSize: { width: 600, height: 500 },
  },
  {
    id: 'foundertxt',
    name: 'Founder.txt',
    description: 'Who I am · How I think',
    icon: 'Terminal',
    defaultSize: { width: 640, height: 520 },
  },
  {
    id: 'resume',
    name: 'Resume',
    description: 'Curriculum Vitae · PDF',
    icon: 'FileSearch',
    defaultSize: { width: 760, height: 620 },
  },
  {
    id: 'browser',
    name: 'Browser',
    description: 'Live preview · The Grand Scheme',
    icon: 'Globe',
    defaultSize: { width: 900, height: 640 },
  },
];

export const DOCK_APPS: AppConfig['id'][] = [
  'projects',
  'casefiles',
  'contact',
  'foundertxt',
  'browser',
  'socials',
];

