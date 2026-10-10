import { GraduationCap, Target, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading id="about-title" title={a.title} subtitle={a.subtitle} />
        <p className="about__bio">{a.bio}</p>

        <div className="about__grid">
          <article className="card">
            <h3 className="card__title">
              <GraduationCap size={20} aria-hidden="true" /> {a.educationTitle}
            </h3>
            <ul className="timeline">
              {a.education.map((e) => (
                <li key={e.title + e.place}>
                  {e.period && <span className="timeline__period">{e.period}</span>}
                  <strong>{e.title}</strong>
                  <span className="timeline__place">{e.place}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="card">
            <h3 className="card__title">
              <Sparkles size={20} aria-hidden="true" /> {a.interestsTitle}
            </h3>
            <ul className="tags">
              {a.interests.map((i) => (
                <li key={i} className="tag">{i}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <h3 className="card__title">
              <Target size={20} aria-hidden="true" /> {a.goalsTitle}
            </h3>
            <p>{a.goals}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
