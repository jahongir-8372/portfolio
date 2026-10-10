import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import SafeImage from '../components/SafeImage.jsx';
import { projects } from '../data/projects.js';

export default function Projects() {
  const { lang, t } = useLanguage();
  const p = t.projects;

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading id="projects-title" title={p.title} subtitle={p.subtitle} />

        {projects.length === 0 ? (
          <p className="empty-state">{p.empty}</p>
        ) : (
          <div className="projects__grid">
            {projects.map((item) => (
              <article className="card project-card" key={item.id}>
                <SafeImage
                  src={item.image}
                  alt={p.imageAlt}
                  placeholder={item.title[lang]}
                  className="project-card__img"
                />
                <div className="project-card__body">
                  {item.status && p.status[item.status] && (
                    <span className="badge">{p.status[item.status]}</span>
                  )}
                  <h3>{item.title[lang]}</h3>
                  <p>{item.description[lang]}</p>
                  {item.technologies?.length > 0 && (
                    <ul className="tags">
                      {item.technologies.map((tech) => (
                        <li key={tech} className="tag">{tech}</li>
                      ))}
                    </ul>
                  )}
                  <div className="project-card__links">
                    {item.github && (
                      <a href={item.github} target="_blank" rel="noopener noreferrer" className="btn btn--small btn--secondary">
                        <Github size={16} aria-hidden="true" /> {p.github}
                      </a>
                    )}
                    {item.demo && (
                      <a href={item.demo} target="_blank" rel="noopener noreferrer" className="btn btn--small btn--primary">
                        <ExternalLink size={16} aria-hidden="true" /> {p.demo}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
