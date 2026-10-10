import { socials } from '../data/socials.js';
import SocialIcon from './SocialIcon.jsx';

export default function SocialLinks({ size = 22, withLabel = false, className = '' }) {
  return (
    <ul className={`social-links ${className}`}>
      {socials.map((s) => (
        <li key={s.id}>
          <a
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            title={s.label}
            className={withLabel ? 'social-link social-link--label' : 'social-link'}
          >
            <SocialIcon name={s.icon} size={size} />
            {withLabel && <span>{s.label}</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
