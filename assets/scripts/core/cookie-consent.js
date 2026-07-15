const CONSENT_STORAGE_KEY = "moontaleCookieConsent";
const CONSENT_VERSION = "2026-07-15";
const ANALYTICS_ID = "G-716GP23C93";

function readConsent() {
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!value) return null;
    const consent = JSON.parse(value);
    return consent && consent.version === CONSENT_VERSION ? consent : null;
  } catch (error) {
    return null;
  }
}

function writeConsent(analytics) {
  try {
    window.localStorage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify({
        version: CONSENT_VERSION,
        analytics: Boolean(analytics),
        updatedAt: new Date().toISOString(),
      }),
    );
  } catch (error) {
    return;
  }
}

function setAnalyticsDisabled(disabled) {
  window[`ga-disable-${ANALYTICS_ID}`] = Boolean(disabled);
}

function announceCookieStatus(message) {
  let status = document.querySelector("[data-cookie-status]");
  if (!status) {
    status = document.createElement("p");
    status.className = "sr-only";
    status.dataset.cookieStatus = "true";
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");
    document.body.appendChild(status);
  }
  status.textContent = message;
}

function loadGoogleAnalytics() {
  if (typeof window === "undefined") return;
  if (window.__moontaleAnalyticsLoaded) {
    setAnalyticsDisabled(false);
    return;
  }
  window.__moontaleAnalyticsLoaded = true;
  setAnalyticsDisabled(false);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", ANALYTICS_ID, {
    anonymize_ip: true,
    page_location: `${window.location.origin}${window.location.pathname}`,
    page_path: window.location.pathname,
    send_page_view: true,
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`;
  document.head.appendChild(script);
}

function removeBanner() {
  document.querySelector("[data-cookie-banner]")?.remove();
}

function createBanner() {
  if (document.querySelector("[data-cookie-banner]")) return;

  const banner = document.createElement("section");
  banner.className = "cookie-banner";
  banner.dataset.cookieBanner = "true";
  banner.setAttribute("role", "dialog");
  banner.setAttribute("aria-modal", "false");
  banner.setAttribute("aria-labelledby", "cookie-banner-title");
  banner.innerHTML = `
    <div class="cookie-panel">
      <p class="eyebrow">Privacy choices</p>
      <h2 id="cookie-banner-title" class="serif">Optional analytics cookies</h2>
      <p>MoonTale uses necessary browser storage for the prototype. Optional Google Analytics loads only if you accept analytics. Rejecting analytics will not block the story builder.</p>
      <label class="cookie-choice">
        <input type="checkbox" data-cookie-analytics />
        <span>Allow optional analytics</span>
      </label>
      <div class="cookie-actions">
        <button class="button button-primary" type="button" data-cookie-accept>Accept optional analytics</button>
        <button class="button button-secondary" type="button" data-cookie-reject>Reject optional analytics</button>
        <a class="text-link" href="/legal/cookies/">Cookie Policy</a>
      </div>
    </div>
  `;

  banner.querySelector("[data-cookie-accept]").addEventListener("click", () => {
    writeConsent(true);
    loadGoogleAnalytics();
    announceCookieStatus("Optional analytics accepted.");
    removeBanner();
  });
  banner.querySelector("[data-cookie-reject]").addEventListener("click", () => {
    writeConsent(false);
    setAnalyticsDisabled(true);
    announceCookieStatus("Optional analytics rejected.");
    removeBanner();
  });
  banner.querySelector("[data-cookie-analytics]").addEventListener("change", (event) => {
    if (event.target.checked) {
      banner.querySelector("[data-cookie-accept]").focus();
    }
  });

  document.body.appendChild(banner);
}

export function openCookieSettings() {
  try {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch (error) {
    console.warn("MoonTale cookie preference could not be reset.", error);
  }
  createBanner();
}

export function initializeCookieConsent() {
  const consent = readConsent();
  if (consent && consent.analytics) {
    loadGoogleAnalytics();
  } else if (consent) {
    setAnalyticsDisabled(true);
  }
  if (!consent) {
    createBanner();
  }

  document.querySelectorAll("[data-cookie-settings]").forEach((control) => {
    control.addEventListener("click", openCookieSettings);
  });
}
