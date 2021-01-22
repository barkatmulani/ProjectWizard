import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './app';

test('project wizard', () => {
  render(<App />);
  const linkElement = screen.getByText(/Project Wizard/i);
  expect(linkElement).toBeInTheDocument();
});
