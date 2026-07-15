import { trackCTAClick } from "../core/analytics.js";
import { initializeCookieConsent } from "../core/cookie-consent.js";
import { initializeRevealElements } from "../core/dom.js";
import { initializeLanguageSelectors, updateTranslatedContent } from "../core/i18n.js";
import { initializeSiteNavigation } from "../core/navigation.js";

function initializeLandingPage(root = document) {
  root.querySelectorAll("[data-track='cta']").forEach((link) => {
    link.addEventListener("click", trackCTAClick);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initializeSiteNavigation();
  initializeCookieConsent();
  initializeLanguageSelectors();
  updateTranslatedContent();
  initializeRevealElements();
  initializeLandingPage();
});
