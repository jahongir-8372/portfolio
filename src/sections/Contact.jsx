import { Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import SocialLinks from '../components/SocialLinks.jsx';
import { contact } from '../data/contact.js';

export default function Contact() {
  const { t } = useLanguage();
  // tel: havolasi uchun faqat raqam va + belgisi qoldiriladi
  const phoneHref = contact.phone ? `tel:${contact.phone.replace(/[^\d+]/g, '')}` : '';

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container contact">
        <SectionHeading id="contact-title" title={t.contact.title} subtitle={t.contact.subtitle} />
        <p className="contact__text">{t.contact.text}</p>

        {contact.phone && (
          <a href={phoneHref} className="contact__phone">
            <Phone size={20} aria-hidden="true" />
            <span>
              <span className="contact__label">{t.contact.phone}</span>
              {contact.phone}
            </span>
          </a>
        )}

        <SocialLinks size={24} withLabel className="social-links--contact" />
      </div>
    </section>
  );
}
