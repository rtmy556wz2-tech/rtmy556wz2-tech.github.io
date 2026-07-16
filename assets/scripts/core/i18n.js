import { getCurrentLanguage, writeCurrentLanguage } from "./storage.js";

export function translate(key, fallback = "") {
  return fallback || key;
}

export function updateTranslatedContent() {
  return;
}

export function initializeLanguageSelectors(options = {}) {
  const currentLanguage = getCurrentLanguage();

  document.querySelectorAll("[data-language-select]").forEach((select) => {
    select.value = currentLanguage;

    select.addEventListener("change", () => {
      writeCurrentLanguage(select.value);

      if (typeof options.onLanguageChange === "function") {
        options.onLanguageChange(select.value);
      }

      updateTranslatedContent();
    });
  });
}
