import { useLanguage } from '../context/LanguageContext.jsx';
import SafeImage from '../components/SafeImage.jsx';

// Shaxsiy rasmingizni public/images/profile.jpg ga qo'ying.
const PROFILE_IMAGE = '/images/profile.jpg';

export default function Hero({ showCertificates }) {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__greeting">{t.hero.greeting}</p>
          <h1 id="hero-title">{t.hero.name}</h1>
          <p className="hero__role">{t.hero.role}</p>
          <p className="hero__intro">{t.hero.intro}</p>
          <div className="hero__actions">
            <a href="#about" className="btn btn--primary">{t.hero.ctaAbout}</a>
            <a href="#projects" className="btn btn--secondary">{t.hero.ctaProjects}</a>
            <a href="#contact" className="btn btn--ghost">{t.hero.ctaContact}</a>
          </div>
        </div>

        <div className="hero__photo">
          <div className="photo-frame">
            <SafeImage
              src={PROFILE_IMAGE}
              alt={t.hero.photoAlt}
              placeholder={t.hero.photoPlaceholder}
              className="photo-frame__img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
