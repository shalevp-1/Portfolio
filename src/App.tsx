import { useEffect, useState, type CSSProperties } from 'react';
import './App.css';

import { TechnologyIcon, technologyCatalog } from './technologyCatalog';
import type { Locale } from './content/contentTypes';
import { Content } from './content/content';

import Navbar from './components/navbar';
import ProjectCard from './components/projectCard';
import SectionHeading from './components/sectionHeading';

function App() {
  const [locale, setLocale] = useState<Locale>('en');
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);

  const current = Content[locale];

  // Document lang / dir / title
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = current.direction;
    document.title =
      locale === 'he'
        ? 'שליו פק | Full-Stack Developer'
        : 'Shalev Peck | Full-Stack Developer';

    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', current.metaDescription);
  }, [locale, current.direction, current.metaDescription]);

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const y = Math.max(0, window.scrollY);

        if (y <= 24) {
          setIsNavbarHidden(false);
        } else if (Math.abs(y - lastY) >= 12) {
          setIsNavbarHidden(y > lastY);
        }

        lastY = y;
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Reveal animations (left / right / up)
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');

    if (typeof IntersectionObserver === 'undefined') {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const enter = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -20% 0px' },
    );

    const exit = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0, rootMargin: '35% 0px 35% 0px' },
    );

    elements.forEach((el) => {
      enter.observe(el);
      exit.observe(el);
    });

    return () => {
      enter.disconnect();
      exit.disconnect();
    };
  }, [locale]);

  return (
    <div className="site-shell" data-dir={current.direction}>
      <div className="ambient-grid" aria-hidden="true" />

      <div className="page-frame">
        <Navbar
          locale={locale}
          navItems={current.nav}
          languageLabel={current.languageLabel}
          onLanguageChange={setLocale}
          isHidden={isNavbarHidden}
        />

        <main>
          {/* Intro */}
          <section className="me section-block section-me" id="home">
            <div className="me-intro-panel panel" data-reveal="left">
              <p className="me-eyebrow">{current.me.eyebrow}</p>
              <h1>{current.me.title}</h1>
              <p className="me-role">{current.me.role}</p>
              <p className="me-summary">{current.me.summary}</p>

              <div className="credential-list">
                {current.me.badges.map((badge) => (
                  <span key={badge} className="status-pill">
                    {badge}
                  </span>
                ))}
              </div>

              <div className="cta-group">
                {current.me.actions.map((action) => (
                  <a
                    key={action.label}
                    className={`button-link ${action.variant}`}
                    href={action.href}
                    target={action.external ? '_blank' : undefined}
                    rel={action.external ? 'noreferrer' : undefined}
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Projects */}
          <div className="projects-section" id="project">
            {current.project.items.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={i === 0}
                isRtl={current.direction === 'rtl'}
                locale={locale}
              />
            ))}
          </div>

          {/* Skills */}
          <section className="section-block section-skills" id="skills">
            <SectionHeading
              eyebrow={current.skills.eyebrow}
              title={current.skills.title}
              description={current.skills.description}
            />

            <div className="skill-group-grid">
              {current.skills.groups.map((group, gi) => (
                <article
                  key={group.id}
                  className="panel skill-group-panel"
                  data-reveal={gi % 2 === 0 ? 'left' : 'right'}
                  style={
                    {
                      ['--reveal-delay' as string]: `${gi * 110}ms`,
                    } as CSSProperties
                  }
                >
                  <div className="section-panel-header">
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>

                  <div className="technology-grid">
                    {group.technologies.map((id, ti) => {
                      const tech = technologyCatalog[id];
                      return (
                        <article
                          key={tech.id}
                          className="technology-card"
                          data-reveal="up"
                          style={
                            {
                              ['--reveal-delay' as string]: `${ti * 55}ms`,
                            } as CSSProperties
                          }
                        >
                          <div className="technology-icon-shell">
                            <TechnologyIcon technology={tech} />
                          </div>
                          <strong>{tech.label[locale]}</strong>
                          <span>{tech.note[locale]}</span>
                        </article>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="section-block section-contact" id="contact">
            <SectionHeading
              eyebrow={current.contact.eyebrow}
              title={current.contact.title}
              description={current.contact.description}
            />

            <div className="contact-overview-layout">
              <article className="panel contact-details-panel" data-reveal="left">
                <div className="contact-grid">
                  {current.contact.items.map((item, i) => {
                    const isLtr =
                      item.href?.startsWith('mailto:') ||
                      item.href?.startsWith('tel:');

                    return (
                      <article
                        key={item.label}
                        className="contact-card"
                        data-reveal="right"
                        style={
                          {
                            ['--reveal-delay' as string]: `${i * 75}ms`,
                          } as CSSProperties
                        }
                      >
                        <span>{item.label}</span>
                        {item.href ? (
                          <a
                            href={item.href}
                            className={`contact-value${isLtr ? ' contact-value-inline-ltr' : ''}`}
                            dir={isLtr ? 'ltr' : undefined}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <strong
                            className={`contact-value${isLtr ? ' contact-value-inline-ltr' : ''}`}
                            dir={isLtr ? 'ltr' : undefined}
                          >
                            {item.value}
                          </strong>
                        )}
                      </article>
                    );
                  })}
                </div>
              </article>
            </div>
          </section>
        </main>

        <footer className="footer">
          <p>{current.footer}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;