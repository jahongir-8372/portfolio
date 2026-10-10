import { useLanguage } from '../context/LanguageContext.jsx';
import SocialLinks from './SocialLinks.jsx';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} Jahongir Jabbarov. {t.footer.rights}
        </p>
        <SocialLinks size={18} className="social-links--footer" />
      </div>
    </footer>
  );
}
