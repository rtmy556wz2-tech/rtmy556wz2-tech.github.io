import "../../../script.js";
import { initializeCookieConsent } from "../core/cookie-consent.js";

function initializeHomePage() {
  initializeCookieConsent();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeHomePage, {
    once: true,
  });
} else {
  initializeHomePage();
}
