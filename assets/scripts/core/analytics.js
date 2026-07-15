import { getCurrentLanguage } from "./storage.js";

export function trackEvent(eventName, details) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, details || {});
  }

  if (typeof console !== "undefined" && typeof console.log === "function") {
    console.log(`[MoonTale analytics] ${eventName}`, details || {});
  }
}

export function trackCTAClick() {
  trackEvent("cta_click", { location: "landing_hero", interfaceLanguage: getCurrentLanguage() });
}

export function trackStoryBuilderStart() {
  trackEvent("story_builder_start", { pageType: "story-builder", interfaceLanguage: getCurrentLanguage() });
}

export function trackStoryGenerated() {
  trackEvent("story_generated", {
    pageType: "story-builder",
    interfaceLanguage: getCurrentLanguage(),
  });
}

export function trackWaitlistSubmission(source) {
  trackEvent("waitlist_submission", { location: source || "story-preview", interfaceLanguage: getCurrentLanguage() });
}
