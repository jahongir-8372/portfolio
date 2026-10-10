import { Code2, BarChart3, BrainCircuit, Sigma } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

// Tarjimadagi guruhlar tartibiga mos ikonkalar
const groupIcons = [Code2, BarChart3, BrainCircuit, Sigma];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section section--alt" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading id="skills-title" title={t.skills.title} subtitle={t.skills.subtitle} />
        <div className="skills__grid">
          {t.skills.groups.map((group, idx) => {
            const Icon = groupIcons[idx] || Code2;
            return (
              <article className="card skill-card" key={group.title}>
                <h3 className="card__title">
                  <Icon size={20} aria-hidden="true" /> {group.title}
                </h3>
                <ul className="tags">
                  {group.items.map((item) => (
                    <li key={item} className="tag">{item}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
