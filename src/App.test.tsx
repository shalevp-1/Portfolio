import { screen } from '@testing-library/react';
import * as React from 'react';
import { createRoot, Root } from 'react-dom/client';
import App from './App';

const act = (React as unknown as { act: (callback: () => void) => void }).act;

test('renders the main resume heading and language switcher', () => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root: Root = createRoot(container);

  act(() => {
    root.render(<App />);
  });

  expect(screen.getByRole('heading', { name: /shalev peck/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /english/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /עברית/i })).toBeInTheDocument();
  expect(screen.getByText(/front-end systems/i)).toBeInTheDocument();

  act(() => {
    root.unmount();
  });
  container.remove();
});
