import { initializeBrowserDataDeletionControls } from "../core/browser-data.js";
import { initializeCookieConsent } from "../core/cookie-consent.js";

document.addEventListener("DOMContentLoaded", () => {
  initializeCookieConsent();
  initializeBrowserDataDeletionControls();
});
