export function initializeLanguageSelectors() {
  document.querySelectorAll("[data-language-select]").forEach((select) => {
    select.addEventListener("change", () => {
      localStorage.setItem("moontaleLanguage", select.value);
    });
  });
}

export function updateTranslatedContent() {
  return;
}
