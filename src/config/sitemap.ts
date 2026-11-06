import type { SitemapItem } from '@astrojs/sitemap';
import { blogPosts } from '../data/blog';
import { parseBlogDate } from '../utils/schema';

const buildDate = new Date().toISOString();

const articleLastmod = new Map(
  blogPosts.map((post) => [`/articles/${post.slug}/`, parseBlogDate(post.date)] as const),
);

function pathnameFromUrl(url: string): string {
  const path = new URL(url).pathname;
  return path.endsWith('/') ? path : `${path}/`;
}

export function sitemapSerialize(item: SitemapItem): SitemapItem | undefined {
  const path = pathnameFromUrl(item.url);

  if (path.includes('/404') || path.includes('/rss.xml')) {
    return undefined;
  }

  item.lastmod = buildDate;

  if (path === '/') {
    item.priority = 1;
    item.changefreq = 'weekly';
    return item;
  }

  if (path === '/articles/') {
    item.priority = 0.9;
    item.changefreq = 'weekly';
    return item;
  }

  if (path === '/forums/') {
    item.priority = 0.8;
    item.changefreq = 'daily';
    return item;
  }

  if (path.startsWith('/forums/')) {
    item.priority = 0.6;
    item.changefreq = 'weekly';
    return item;
  }

  if (path.startsWith('/articles/')) {
    item.priority = 0.7;
    item.changefreq = 'monthly';
    item.lastmod = articleLastmod.get(path) ?? buildDate;
    return item;
  }

  if (path.startsWith('/products/')) {
    item.priority = 0.8;
    item.changefreq = 'weekly';
    return item;
  }

  if (
    path === '/about/' ||
    path === '/support/' ||
    path === '/privacy/' ||
    path === '/terms/' ||
    path === '/faq/' ||
    path === '/affiliate-disclosure/'
  ) {
    item.priority = 0.5;
    item.changefreq = 'yearly';
    return item;
  }

  item.priority = 0.6;
  item.changefreq = 'monthly';
  return item;
}
