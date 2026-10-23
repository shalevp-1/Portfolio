
import type { Locale, SiteContent } from '../content/contentTypes';

type NavbarProps = {
  locale: Locale;
  navItems: SiteContent['nav'];
  languageLabel: string;
  onLanguageChange: (locale: Locale) => void;
  isHidden: boolean;
};

function Navbar({
  locale,
  navItems,
  languageLabel,
  onLanguageChange,
  isHidden,
}: NavbarProps) {
  return (
    <header className={`navbar panel${isHidden ? ' navbar-hidden' : ''}`}>
      <a className="brand" href="#home">
        <span className="brand-text">
          <strong>{locale === 'he' ? 'שליו פק' : 'Shalev Peck'}</strong>
          <span>{locale === 'he' ? 'תיק עבודות' : 'Portfolio'}</span>
        </span>
      </a>

      <nav className="nav-links" aria-label="Primary">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="language-switcher" aria-label={languageLabel}>
        <button
          type="button"
          className={locale === 'en' ? 'is-active' : ''}
          onClick={() => onLanguageChange('en')}
        >
          English
        </button>

        <button
          type="button"
          className={locale === 'he' ? 'is-active' : ''}
          onClick={() => onLanguageChange('he')}
        >
          עברית
        </button>
      </div>
    </header>
  );
}

export default Navbar;
