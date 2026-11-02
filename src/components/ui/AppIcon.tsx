import React from 'react';
import {
  FolderOpen,
  FileText,
  Cpu,
  GitBranch,
  Award,
  Share2,
  Mail,
  Terminal,
  FileSearch,
  Globe,
  Box,
  LucideProps,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  FolderOpen,
  FileText,
  Cpu,
  GitBranch,
  Award,
  Share2,
  Mail,
  Terminal,
  FileSearch,
  Globe,
  Box,
};

export function AppIcon({ name, size = 24 }: { name: string; size?: number }) {
  const IconComponent = ICON_MAP[name] ?? Box;
  return <IconComponent size={size} strokeWidth={1.5} />;
}

