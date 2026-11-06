/**
 * Affiliate purchase destinations (four products only).
 * These are the only allowed outbound purchase URLs site-wide.
 */
export const BUY_URLS = {
  cheats: 'https://zadeyo.com/go/MOIZ?to=%2Fproducts%2Frainbow-six-siege',
  spoofer: 'https://zadeyo.com/go/MOIZ?to=%2Fproducts%2Fhwid-spoofer',
  ugc: 'https://zadeyo.com/go/MOIZ?to=%2Fproducts%2Fugc',
  cloudDma: 'https://zadeyo.com/go/MOIZ?to=%2Fproducts%2Fcloud-dma',
} as const;

export type BuyProduct = keyof typeof BUY_URLS;

/** Default header CTA — main cheats offer */
export const PRIMARY_BUY_URL = BUY_URLS.cheats;

/** Map product slug → buy URL */
export function buyUrlForSlug(slug: string): string {
  switch (slug) {
    case 'rainbow-six-siege-cheats':
      return BUY_URLS.cheats;
    case 'rainbow-six-siege-spoofer':
      return BUY_URLS.spoofer;
    case 'ugc-account-recovery':
      return BUY_URLS.ugc;
    case 'cloud-dma':
      return BUY_URLS.cloudDma;
    default:
      return PRIMARY_BUY_URL;
  }
}

/** Legacy blog CTA hrefs → current affiliate URLs (if any old paths remain in content). */
export function resolveCheckoutHref(href: string): string {
  if (!href.startsWith('http')) {
    return href.startsWith('/') ? href : `/${href}`;
  }
  for (const url of Object.values(BUY_URLS)) {
    if (href === url || href.startsWith(`${url}&`)) return url;
  }
  return href;
}
