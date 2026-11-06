/**
 * Legacy internal checkout redirects — disabled.
 * Purchases use direct affiliate links from config/checkout.ts (sponsored outbound).
 */
export const CHECKOUT_URLS = {};

export const CHECKOUT_PATH_REDIRECTS = new Map();

export function resolveCheckoutPathRedirect() {
  return null;
}
