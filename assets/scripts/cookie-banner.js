(function () {
  const STORAGE_KEY = "moontaleCookieConsent";

  if (localStorage.getItem(STORAGE_KEY)) return;

  const banner = document.createElement("div");

  banner.id = "cookie-banner";

  banner.innerHTML = `
    <div class="cookie-banner-content">

      <h3>🍪 Cookie Preferences</h3>

      <p>
        MoonTale uses essential browser storage to provide core functionality
        and optional Google Analytics to improve the experience.
        You can change your preferences at any time in Cookie Settings.
      </p>

      <div class="cookie-banner-buttons">

        <button id="cookie-accept" class="button button-primary">
          Accept All
        </button>

        <button id="cookie-reject" class="button button-secondary">
          Reject Analytics
        </button>

        <a href="/legal/cookies/" class="cookie-link">
          Cookie Policy
        </a>

      </div>

    </div>
  `;

  document.body.appendChild(banner);

  document
    .getElementById("cookie-accept")
    .addEventListener("click", () => {
      localStorage.setItem(STORAGE_KEY, "accepted");
      banner.remove();
    });

  document
    .getElementById("cookie-reject")
    .addEventListener("click", () => {
      localStorage.setItem(STORAGE_KEY, "rejected");
      banner.remove();
    });

})();
