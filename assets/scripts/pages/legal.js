import { initializeBrowserDataDeletionControls } from "../core/browser-data.js";
import { initializeCookieConsent } from "../core/cookie-consent.js";
import { initializeSiteNavigation } from "../core/navigation.js";

document.addEventListener("DOMContentLoaded", () => {
  initializeSiteNavigation();
  initializeCookieConsent();
  initializeBrowserDataDeletionControls();
});
