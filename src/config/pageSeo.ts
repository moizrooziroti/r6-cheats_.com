/**
 * Central titles/descriptions for high-traffic routes.
 * Titles target ≤60 characters; descriptions ≤155 where practical.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Rainbow Six Siege Cheats | ESP, Aim & HWID',
    description:
      'Rainbow Six Siege cheats hub: ESP, aim assist, wallhack-style tools, HWID spoofer, UGC recovery & Cloud DMA — r6-cheats.com.',
  },
  '/products/': {
    title: 'R6 Cheats, Spoofer, UGC & DMA | Products',
    description:
      'Four Rainbow Six Siege products — cheats, HWID spoofer, UGC recovery, Cloud DMA — same listing price; Buy opens affiliate checkout.',
  },
  '/articles/': {
    title: 'R6 Cheats Guides 2026 | ESP, Aimbot, DMA',
    description:
      '2026 Rainbow Six Siege cheat guides: ESP vs aimbot vs wallhack, HWID spoofer, Cloud DMA, buying checklist, and patch troubleshooting.',
  },
  '/forums/': {
    title: 'R6 Cheats Forums | Q&A Threads',
    description:
      'R6 cheat discussions: aimbot FOV, ESP clutter, wallhack, HWID spoofer, UGC recovery, and Cloud DMA — threads on r6-cheats.com.',
  },
  '/faq/': {
    title: 'FAQ | Rainbow Six Siege Cheats & Risk',
    description:
      'Affiliate links, account risk, ESP and aim terms, HWID spoofer scope — FAQ for r6-cheats.com readers.',
  },
  '/affiliate-disclosure/': {
    title: 'Affiliate Disclosure | r6-cheats.com',
    description:
      'r6-cheats.com may earn commissions from qualifying purchases through sponsored Buy links; third-party checkout handles orders.',
  },
  '/terms/': {
    title: 'Terms & Conditions | r6-cheats.com',
    description: 'Site terms, affiliate outbound links, and risk disclaimer for readers of r6-cheats.com.',
  },
  '/privacy/': {
    title: 'Privacy Policy | r6-cheats.com',
    description: 'How r6-cheats.com handles analytics, cookies, and support messages.',
  },
  '/about/': {
    title: 'About r6-cheats.com',
    description:
      'r6-cheats.com sells Rainbow Six Siege cheats, an HWID spoofer, UGC recovery, and Cloud DMA, with guides and forums beside each offer.',
  },
  '/support/': {
    title: 'Support | r6-cheats.com',
    description: 'How to use this site — products, FAQ, articles, forums. Checkout handles purchases.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
