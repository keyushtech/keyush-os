// ============================================================
// GLOBAL TYPES
// ============================================================

export type AppId =
  | 'projects'
  | 'casefiles'
  | 'systems'
  | 'journey'
  | 'foundertxt'
  | 'resume'
  | 'browser'
  | 'contact'
  | 'socials'
  | 'achievements'
  | 'search';

export interface AppConfig {
  id: AppId;
  name: string;
  description: string;
  badge?: string;
  icon: string; // lucide icon name
  defaultSize: { width: number; height: number };
}

export interface WindowState {
  id: string;
  appId: AppId;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
  isMaximized: boolean;
  isMinimized: boolean;
}

export interface LayoutState {
  windows: WindowState[];
  topZ: number;
}

