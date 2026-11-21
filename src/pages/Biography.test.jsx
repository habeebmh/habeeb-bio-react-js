import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import userEvent from '@testing-library/user-event';
import Biography from './Biography';
import App from '../App';
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

test('renders the biography through the application router and theme', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /^Habeeb\s*Hooshmand\.$/ })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 3, name: 'Self' })).toBeInTheDocument();
});

test('readers can expand and collapse publication abstracts', async () => {
  const user = userEvent.setup();
  render(<Biography />);
  const summary = screen.getAllByText('Read abstract')[0];
  const details = summary.closest('details');
  expect(details).not.toHaveAttribute('open');
  await user.click(summary);
  expect(details).toHaveAttribute('open');
  await user.click(summary);
  expect(details).not.toHaveAttribute('open');
});

test('keeps Self first and links the Famous in Dallas collection from its body', () => {
  render(<Biography />);
  expect(screen.getAllByRole('heading', { level: 3 })[0]).toHaveTextContent('Self');
  expect(screen.getByRole('link', { name: 'View the collection' })).toHaveAttribute('href', 'https://famousindallas.com');
  expect(screen.getByRole('heading', { name: 'Famous in Dallas' }).closest('a')).toBeNull();
});

test.each(['Let’s connect', 'Say hello'])('%s opens an email to the correct contact address', (name) => {
  render(<Biography />);
  expect(screen.getByRole('link', { name })).toHaveAttribute('href', 'mailto:habeeb@hooshmandenterprises.com');
});
