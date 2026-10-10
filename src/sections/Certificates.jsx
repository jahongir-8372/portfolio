import { BadgeCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import SafeImage from '../components/SafeImage.jsx';
import { certificates } from '../data/certificates.js';

export default function Certificates() {
  const { lang, t } = useLanguage();
  const c = t.certificates;

  return (
    <section id="certificates" className="section section--alt" aria-labelledby="certificates-title">
      <div className="container">
        <SectionHeading id="certificates-title" title={c.title} subtitle={c.subtitle} />

        {certificates.length === 0 ? (
          <p className="empty-state">{c.empty}</p>
        ) : (
          <div className="certs__grid">
            {certificates.map((item) => (
              <article className="card cert-card" key={item.id}>
                <SafeImage
                  src={item.image}
                  alt={c.imageAlt}
                  placeholder={item.title[lang]}
                  className="cert-card__img"
                />
                <div className="cert-card__body">
                  <h3>{item.title[lang]}</h3>
                  <p className="cert-card__meta">{item.issuer}</p>
                  {item.date && <p className="cert-card__meta">{item.date}</p>}
                  {item.verifyUrl && (
                    <a href={item.verifyUrl} target="_blank" rel="noopener noreferrer" className="btn btn--small btn--secondary">
                      <BadgeCheck size={16} aria-hidden="true" /> {c.verify}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
