import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic = 'all' | 'esp' | 'scripts' | 'safety' | 'products' | 'articles' | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const cheats = link('Rainbow Six Siege cheats', productPath('rainbow-six-siege-cheats'));
const spoofer = link('HWID spoofer', productPath('rainbow-six-siege-spoofer'));
const ugc = link('UGC Account Recovery', productPath('ugc-account-recovery'));
const dma = link('Cloud DMA', productPath('cloud-dma'));
const productsHub = link('Products', ROUTES.products);
const articles = link('Articles', ROUTES.articles);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'terms-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can using third-party tools get my Rainbow Six Siege account restricted?',
    a: a(
      'Yes. Third-party software may violate the game terms of service. Publishers can apply penalties including suspensions or permanent loss of access. We do not claim any specific detection status.',
    ),
  },
  {
    id: 'affiliate',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'Why do Buy buttons open another site?',
    a: a(
      'Purchases are completed through our affiliate partner. This site may earn a commission on qualifying purchases. See the affiliate disclosure in the footer.',
    ),
  },
  {
    id: 'where-products',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are the four products listed?',
    a: `${productsHub} lists ${cheats}, ${spoofer}, ${ugc}, and ${dma} with short descriptions.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What do people mean by ESP in Rainbow Six Siege?',
    a: `In cheat listings, ESP usually refers to extra on-screen information about operators or gadgets. Exact behavior depends on the product listing at checkout, not this site.`,
  },
  {
    id: 'hwid-scope',
    topic: 'products',
    icon: 'faqLicenseMove',
    q: 'What is an HWID spoofer used for?',
    a: `${spoofer} explains identifier spoofing at a high level. Read the checkout listing for supported scenarios and limits.`,
    scopes: ['rainbow-six-siege-spoofer'],
  },
  {
    id: 'ugc-scope',
    topic: 'products',
    icon: 'faqBlogGuideTier',
    q: 'Does UGC guarantee account recovery?',
    a: a(
      'No. UGC-style tools organize appeals and documentation. Outcomes are decided by the platform. See the product page and articles for realistic expectations.',
    ),
    scopes: ['ugc-account-recovery'],
  },
  {
    id: 'dma-vs-soft',
    topic: 'products',
    icon: 'faqEspVsScripts',
    q: 'How is Cloud DMA different from software overlays?',
    a: `${dma} and ${articles} cover DMA versus typical on-PC tools. Hardware and workflow differ; confirm details on the listing.`,
    scopes: ['cloud-dma'],
  },
  {
    id: 'read-articles-first',
    topic: 'articles',
    icon: 'faqBlogGuideStart',
    q: 'Should I read the articles before buying?',
    a: `${articles} explains categories, risks, and checklists so you can compare options with clearer vocabulary.`,
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['terms-risk', 'affiliate', 'where-products', 'what-is-esp', 'read-articles-first'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs;
}

export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Browse by category',
  subtitle: 'Filter by topic: ESP, safety, products, articles, and setup.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'esp',
  'scripts',
  'safety',
  'products',
  'articles',
  'setup',
];

export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Quick answers related to what you are reading — see the full FAQ for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, _kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter((f) => !f.scopes);
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const combined = [...scoped, ...general];
  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  }).slice(0, 8);
}

const articleTopicFaqs: Record<string, SiteFaqItem[]> = {
  Guides: [],
};

const defaultArticleFaqs: SiteFaqItem[] = [
  {
    id: 'article-default-1',
    topic: 'articles',
    icon: 'faqBlogDefault1',
    q: 'Are articles a substitute for the checkout listing?',
    a: a(
      'No. Articles explain concepts. The authoritative feature list and price are on the page you reach when you click Buy.',
    ),
  },
  {
    id: 'article-default-2',
    topic: 'safety',
    icon: 'faqBlogDefault2',
    q: 'Do you claim tools are safe or hidden from anti-cheat?',
    a: a(
      'We do not. Third-party tools can violate game rules and lead to account action. Use is at your own risk.',
    ),
  },
];

export function getBlogFaqs(tag: string, slug: string): SiteFaqItem[] {
  const topicFaqs = articleTopicFaqs[tag] ?? [];
  const slugHints: SiteFaqItem[] = [];

  if (slug.includes('esp') || slug.includes('wallhack')) {
    slugHints.push({
      id: 'article-slug-esp',
      topic: 'esp',
      icon: 'faqBlogSlugEsp',
      q: 'Where can I buy ESP-style tools for Siege?',
      a: `See ${cheats} and confirm modules on the checkout listing.`,
    });
  }
  if (slug.includes('hwid') || slug.includes('spoofer')) {
    slugHints.push({
      id: 'article-slug-hwid',
      topic: 'products',
      icon: 'faqBlogSlugHwid',
      q: 'Where is the HWID product?',
      a: `${spoofer} links to the checkout entry for that utility.`,
    });
  }
  if (slug.includes('dma') || slug.includes('cloud')) {
    slugHints.push({
      id: 'article-slug-dma',
      topic: 'products',
      icon: 'faqEspVsScripts',
      q: 'Where is Cloud DMA?',
      a: `${dma} opens the matching checkout destination.`,
    });
  }

  return [...slugHints, ...topicFaqs, ...defaultArticleFaqs].slice(0, 8);
}
