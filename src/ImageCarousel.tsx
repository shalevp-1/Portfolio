import { useEffect, useState } from 'react';

const AUTO_ADVANCE_DELAY = 7_000;
const CROSSFADE_DURATION = 850;

export type CarouselImage = {
  src: string;
  alt: string;
};

type ImageCarouselProps = {
  images: CarouselImage[];
  label: string;
  previousLabel: string;
  nextLabel: string;
  isParentHovered?: boolean;
};

function ImageCarousel({ images, label, previousLabel, nextLabel, isParentHovered = false }: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const isPaused = isHovered || isFocused || isParentHovered;

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return;

    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncPreference = () => setPrefersReducedMotion(query.matches);
    syncPreference();
    if (typeof query.addEventListener === 'function') {
      query.addEventListener('change', syncPreference);
      return () => query.removeEventListener('change', syncPreference);
    }

    query.addListener(syncPreference);
    return () => query.removeListener(syncPreference);
  }, []);

  useEffect(() => {
    if (previousIndex === null) return;
    const timer = window.setTimeout(() => setPreviousIndex(null), CROSSFADE_DURATION);
    return () => window.clearTimeout(timer);
  }, [previousIndex, activeIndex]);

  const showImage = (nextIndex: number) => {
    setPreviousIndex(activeIndex);
    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    if (isPaused || prefersReducedMotion || images.length < 2) return;

    const timer = window.setTimeout(() => {
      setPreviousIndex(activeIndex);
      setActiveIndex((index) => (index + 1) % images.length);
    }, AUTO_ADVANCE_DELAY);

    return () => window.clearTimeout(timer);
  }, [activeIndex, images.length, isPaused, prefersReducedMotion]);

  const showPrevious = () => showImage((activeIndex - 1 + images.length) % images.length);
  const showNext = () => showImage((activeIndex + 1) % images.length);
  const visibleIndexes = previousIndex === null || previousIndex === activeIndex
    ? [activeIndex]
    : [previousIndex, activeIndex];

  return (
    <figure
      className="project-carousel"
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsFocused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          showPrevious();
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          showNext();
        }
      }}
    >
      <div className="project-carousel-frame" aria-live="off">
        {visibleIndexes.map((index) => (
          <img
            key={images[index].src}
            src={images[index].src}
            alt={index === activeIndex ? images[index].alt : ''}
            aria-hidden={index !== activeIndex}
            className={`project-carousel-image${index === activeIndex ? ' is-active' : ' is-outgoing'}`}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>
      <figcaption className="project-carousel-controls">
        <button type="button" onClick={showPrevious} aria-label={previousLabel}>
          <span aria-hidden="true">{'\u2039'}</span>
        </button>
        <span className="project-carousel-count" aria-live="off">
          {activeIndex + 1} / {images.length}
        </span>
        <button type="button" onClick={showNext} aria-label={nextLabel}>
          <span aria-hidden="true">{'\u203a'}</span>
        </button>
      </figcaption>
    </figure>
  );
}

export default ImageCarousel;
