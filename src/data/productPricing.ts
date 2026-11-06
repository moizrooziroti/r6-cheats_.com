/** Placeholder until buyer sets a single price in docs/missing-info.md */
export const DISPLAY_PRICE_LABEL = '$0 — price pending';

export type ProductPlanId = 'standard';

export interface ProductPlan {
  id: ProductPlanId;
  label: string;
  priceUsd: number;
  priceNote: string;
}

const singlePlan: ProductPlan[] = [
  { id: 'standard', label: 'Listed price', priceUsd: 0, priceNote: 'Confirm on checkout — set amount in docs/missing-info.md' },
];

export function getProductPlans(_productSlug: string): ProductPlan[] {
  return singlePlan;
}

export function formatPlanPrice(usd: number): string {
  return usd > 0 ? `$${usd}` : DISPLAY_PRICE_LABEL;
}

export function checkoutUrlWithPlan(baseUrl: string, _planId: ProductPlanId): string {
  return baseUrl;
}
