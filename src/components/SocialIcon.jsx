import { Github, Instagram, Send } from 'lucide-react';

const icons = {
  telegram: Send,
  instagram: Instagram,
  github: Github,
};

export default function SocialIcon({ name, size = 22 }) {
  const Icon = icons[name];
  return Icon ? <Icon size={size} aria-hidden="true" /> : null;
}
