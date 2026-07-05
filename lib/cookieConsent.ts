export const COOKIE_CONSENT_KEY = "markclaude-cookie-consent";

export type CookieConsentValue = "accepted" | "declined";

/**
 * Checks whether the visitor has opted in to non-essential storage
 * (e.g. analytics). Any future analytics script should gate itself
 * behind this check instead of loading unconditionally.
 */
export function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted";
}
