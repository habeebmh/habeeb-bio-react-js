import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Biography from './Biography';
import { papers } from '../components/PapersPatents';

test('keeps every career organization and publication available', () => {
  render(<Biography />);
  for (const name of ['Famous in Dallas', 'Hooshmand Enterprises', 'Self', 'Capital One', 'Texas A&M University (InfoLab)']) {
    expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument();
  }
  for (const paper of papers) {
    const link = screen.getByRole('link', { name: paper.title });
    expect(link).toHaveAttribute('href', paper.url);
    expect(screen.getByText(paper.description)).toBeInTheDocument();
  }
});

test('every local navigation link resolves to a section on the page', () => {
  render(<Biography />);
  const localLinks = screen.getAllByRole('link').filter(link => link.getAttribute('href').includes('#') && !link.getAttribute('href').startsWith('https:'));
  expect(localLinks.length).toBeGreaterThan(5);
  for (const link of localLinks) {
    const id = link.getAttribute('href').split('#')[1];
    expect(document.getElementById(id)).toBeInTheDocument();
  }
  expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
});
