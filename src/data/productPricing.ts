/** Prices stay on the partner checkout. This site does not invent a dollar amount. */
export const DISPLAY_PRICE_LABEL = 'On checkout';

export type ProductPlanId = 'standard';

export interface ProductPlan {
  id: ProductPlanId;
  label: string;
  priceUsd: number;
  priceNote: string;
}

const singlePlan: ProductPlan[] = [
  { id: 'standard', label: 'Listed price', priceUsd: 0, priceNote: 'Live price is on the checkout page.' },
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
