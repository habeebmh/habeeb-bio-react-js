import { readFileSync } from 'node:fs';
import { expect, test } from 'vitest';

const html = readFileSync('index.html', 'utf8');
const page = new DOMParser().parseFromString(html, 'text/html');

test('identifies Habeeb in canonical search and social metadata without running JavaScript', () => {
  expect(page.title).toContain('Habeeb Hooshmand');
  expect(page.querySelector('meta[name="description"]').content).toContain('known as Habeeb');
  expect(page.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
  expect(page.querySelector('link[rel="canonical"]').href).toBe('https://habeeb.bio/');
  expect(page.querySelector('meta[property="og:url"]').content).toBe('https://habeeb.bio/');
  expect(page.querySelector('meta[property="og:title"]').content).toContain('Habeeb Hooshmand');
  expect(page.querySelector('meta[name="twitter:card"]').content).toBe('summary_large_image');
});

test('links the profile page and site to one person with both name variants', () => {
  const data = JSON.parse(page.querySelector('script[type="application/ld+json"]').textContent);
  const person = data['@graph'].find(item => item['@type'] === 'Person');
  const profile = data['@graph'].find(item => item['@type'] === 'ProfilePage');
  const site = data['@graph'].find(item => item['@type'] === 'WebSite');
  expect(person.name).toBe('Habeeb Hooshmand');
  expect(person.alternateName).toContain('Habeeb');
  expect(profile.mainEntity['@id']).toBe(person['@id']);
  expect(site.about['@id']).toBe(person['@id']);
  expect(person.sameAs).toContain('https://nightmethodagency.com/habeeb');
});

test('publishes the canonical homepage in a discoverable XML sitemap', () => {
  const robots = readFileSync('public/robots.txt', 'utf8');
  expect(robots).toContain('Sitemap: https://habeeb.bio/sitemap.xml');
  const xml = readFileSync('public/sitemap.xml', 'utf8');
  const sitemap = new DOMParser().parseFromString(xml, 'application/xml');
  expect(sitemap.querySelector('parsererror')).toBeNull();
  expect(sitemap.querySelector('loc').textContent).toBe('https://habeeb.bio/');
});
