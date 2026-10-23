
import { useState, type CSSProperties } from 'react';
import type { Locale, ProjectItem } from '../content/contentTypes';
import { TechnologyIcon, technologyCatalog } from '../technologyCatalog';
import ImageCarousel from '../ImageCarousel';

type ProjectCardProps = {
  project: ProjectItem;
  featured: boolean;
  isRtl: boolean;
  locale: Locale;
};

function getRevealStyle(delay = 0): CSSProperties {
  return { ['--reveal-delay' as string]: `${delay}ms` } as CSSProperties;
}

function ProjectCard({
  project,
  featured,
  isRtl,
  locale,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className={`project-showcase${featured ? ' project-showcase-featured' : ''}`}
      style={
        {
          '--project-background-image': `url("${project.backgroundImage}")`,
        } as CSSProperties
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-labelledby={`${project.id}-title`}
    >
      <div
        className={`project-showcase-inner${isRtl ? ' project-showcase-rtl' : ''}`}
      >
        <div className="project-copy" data-reveal="left">
          <p className="project-kicker" data-reveal="up">
            {project.eyebrow}
          </p>

          <h2
            id={`${project.id}-title`}
            data-reveal="up"
            style={getRevealStyle(80)}
          >
            {project.name}
          </h2>

          <p
            className="project-summary"
            data-reveal="up"
            style={getRevealStyle(160)}
          >
            {project.summary}
          </p>

          <ul
            className="project-highlights"
            data-reveal="up"
            style={getRevealStyle(240)}
          >
            {project.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>

          <div
            className="project-tech-list"
            aria-label={project.technologiesLabel}
          >
            {project.stack.map((technologyId) => {
              const technology = technologyCatalog[technologyId];

              return (
                <span key={technology.id} className="has-tech-icon">
                  <i
                    className="project-tech-icon"
                    data-tech={technology.id}
                    aria-hidden="true"
                  >
                    <TechnologyIcon technology={technology} />
                  </i>
                  {technology.label[locale]}
                </span>
              );
            })}
          </div>

          <div
            className="project-actions"
            data-reveal="up"
            style={getRevealStyle(400)}
          >
            {project.actions.map((action) => (
              <a
                key={action.label}
                className={`project-action project-action-${action.variant}`}
                href={action.href}
                target={action.external ? '_blank' : undefined}
                rel={action.external ? 'noreferrer' : undefined}
              >
                {action.label}
              </a>
            ))}
          </div>
        </div>

        <div
          className="project-gallery"
          data-reveal="right"
          style={getRevealStyle(150)}
        >
          <ImageCarousel
            images={project.images}
            label={project.screenshotsLabel}
            previousLabel={project.previousImageLabel}
            nextLabel={project.nextImageLabel}
            isParentHovered={isHovered}
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
