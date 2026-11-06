export declare const CHECKOUT_URLS: Record<string, never>;

export declare const CHECKOUT_PATH_REDIRECTS: ReadonlyMap<string, string>;

export declare function resolveCheckoutPathRedirect(
  pathname?: string,
): string | null;
