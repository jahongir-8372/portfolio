import { useLanguage } from '../context/LanguageContext.jsx';

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="lang-switch" role="group" aria-label={t.lang.label}>
      <button
        type="button"
        className={lang === 'uz' ? 'active' : ''}
        onClick={() => setLang('uz')}
        aria-pressed={lang === 'uz'}
        title={t.lang.uz}
      >
        UZ
      </button>
      <span aria-hidden="true">|</span>
      <button
        type="button"
        className={lang === 'en' ? 'active' : ''}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        title={t.lang.en}
      >
        EN
      </button>
    </div>
  );
}
