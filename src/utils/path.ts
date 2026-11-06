import { PRODUCT_BASE } from '../config/site';

/** Normalize internal paths to match trailingSlash: 'always' and canonical URLs. */
export function withTrailingSlash(path: string): string {
  if (!path || path.startsWith('http') || path.startsWith('#') || path.startsWith('mailto:')) {
    return path;
  }
  const [pathname, hash = ''] = path.split('#');
  const normalized = pathname === '/' || pathname.endsWith('/') ? pathname : `${pathname}/`;
  return hash ? `${normalized}#${hash}` : normalized;
}

export function normalizeInternalPath(href: string): string {
  if (!href || href.startsWith('http') || href.startsWith('mailto:')) {
    return href;
  }

  const hashIndex = href.indexOf('#');
  const rawPath = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : '';

  let pathname = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;

  return withTrailingSlash(pathname) + hash;
}

export const ROUTES = {
  home: '/',
  articles: '/articles/',
  forums: '/forums/',
  products: PRODUCT_BASE,
  faq: '/faq/',
  terms: '/terms/',
  about: '/about/',
  support: '/support/',
  privacy: '/privacy/',
  affiliateDisclosure: '/affiliate-disclosure/',
} as const;

export function articlePath(slug: string): string {
  return `/articles/${slug}/`;
}

/** @deprecated Use articlePath — kept for shared blog components */
export function blogPostPath(slug: string): string {
  return articlePath(slug);
}

/** @deprecated */
export function cheatPath(slug: string): string {
  return productPath(slug);
}

export function forumThreadPath(slug: string): string {
  return `/forums/${slug}/`;
}

export function productPath(slug: string): string {
  return `${PRODUCT_BASE}${slug}/`;
}
