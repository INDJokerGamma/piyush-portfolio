import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { profile } from './data/profile';
import { projects } from './data/projects';
import { HelmetProvider } from 'react-helmet-async';

beforeAll(() => {
  window.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

const renderApp = () => render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

test('renders the current profile and primary calls to action', async () => {
  renderApp();

  expect(await screen.findByRole('heading', { name: /Piyush V\. Dawkhare/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /View Projects/i })).toHaveAttribute('href', '#projects');
  expect(screen.getByRole('link', { name: /Download Resume/i })).toHaveAttribute('href', '/Piyush_Dawkhare_HugoHub.pdf');
  expect(screen.getAllByRole('link', { name: 'GitHub' }).some((link) => link.getAttribute('href') === profile.social.github)).toBe(true);
});

test('renders every featured project with its repository link', async () => {
  renderApp();

  await waitFor(() => {
    projects.forEach((project) => {
      expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument();
    });
  });

  projects.forEach((project) => {
    expect(screen.getAllByRole('link', { name: /Code/i }).some((link) => link.getAttribute('href') === project.links.code)).toBe(true);
  });
});
