import * as React from 'react';
import { createRoot, Root } from 'react-dom/client';
import ImageCarousel from './ImageCarousel';

const act = (React as unknown as { act: (callback: () => void) => void }).act;
Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true });

const images = [
  { src: '/one.png', alt: 'First screenshot' },
  { src: '/two.png', alt: 'Second screenshot' }
];

beforeEach(() => {
  window.matchMedia = jest.fn().mockReturnValue({
    matches: false,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn()
  });
});

afterEach(() => {
  jest.useRealTimers();
});

function mountCarousel() {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root: Root = createRoot(container);
  act(() => {
    root.render(
      <ImageCarousel
        images={images}
        label="Project screenshots"
        previousLabel="Previous image"
        nextLabel="Next image"
      />
    );
  });
  return { container, root };
}

function unmountCarousel(root: Root, container: HTMLDivElement) {
  act(() => root.unmount());
  container.remove();
}

test('manual controls wrap at both ends and reset the seven-second rotation interval', () => {
  jest.useFakeTimers();
  const { container, root } = mountCarousel();

  act(() => container.querySelector<HTMLButtonElement>('[aria-label="Previous image"]')!.click());
  expect(container.querySelector('[alt="Second screenshot"]')).toBeInTheDocument();

  act(() => container.querySelector<HTMLButtonElement>('[aria-label="Next image"]')!.click());
  expect(container.querySelector('[alt="First screenshot"]')).toBeInTheDocument();

  act(() => jest.advanceTimersByTime(7000));
  expect(container.querySelector('[alt="Second screenshot"]')).toBeInTheDocument();
  unmountCarousel(root, container);
});

test('pauses rotation while hovered and resumes when the pointer leaves', () => {
  jest.useFakeTimers();
  const { container, root } = mountCarousel();
  const carousel = container.querySelector<HTMLElement>('[role="group"]')!;

  act(() => carousel.dispatchEvent(new MouseEvent('mouseover', { bubbles: true })));
  act(() => jest.advanceTimersByTime(7000));
  expect(container.querySelector('[alt="First screenshot"]')).toBeInTheDocument();

  act(() => carousel.dispatchEvent(new MouseEvent('mouseout', { bubbles: true, relatedTarget: document.body })));
  act(() => jest.advanceTimersByTime(7000));
  expect(container.querySelector('[alt="Second screenshot"]')).toBeInTheDocument();
  unmountCarousel(root, container);
});


test('carousels advance independently', () => {
  jest.useFakeTimers();
  const first = mountCarousel();
  const second = mountCarousel();

  act(() => first.container.querySelector<HTMLButtonElement>('[aria-label="Next image"]')!.click());
  expect(first.container.querySelector('[alt="Second screenshot"]')).toBeInTheDocument();
  expect(second.container.querySelector('[alt="First screenshot"]')).toBeInTheDocument();

  act(() => jest.advanceTimersByTime(7000));
  expect(first.container.querySelector('[alt="First screenshot"]')).toBeInTheDocument();
  expect(second.container.querySelector('[alt="Second screenshot"]')).toBeInTheDocument();

  unmountCarousel(first.root, first.container);
  unmountCarousel(second.root, second.container);
});
