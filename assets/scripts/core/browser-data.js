import { PROFILE_STORAGE_KEY, SAVED_STORIES_KEY } from "./config.js";

const DELETE_CONFIRMATION =
  "This deletes MoonTale story profiles and saved story previews from this browser and device only. This cannot be undone.";

function getBrowserStorage(storage) {
  if (storage) return storage;
  try {
    return typeof window !== "undefined" ? window.localStorage : null;
  } catch (error) {
    return null;
  }
}

export function deleteMoonTaleBrowserData(storage) {
  const localStorage = getBrowserStorage(storage);
  if (!localStorage) return false;

  try {
    localStorage.removeItem(PROFILE_STORAGE_KEY);
    localStorage.removeItem(SAVED_STORIES_KEY);
    return true;
  } catch (error) {
    return false;
  }
}

export function initializeBrowserDataDeletionControls(root = document) {
  root.querySelectorAll("[data-delete-browser-data]").forEach((button) => {
    button.addEventListener("click", () => {
      const status = button.closest("[data-browser-data-panel]")?.querySelector("[data-browser-data-status]");
      const confirmed = window.confirm(DELETE_CONFIRMATION);
      if (!confirmed) return;

      const deleted = deleteMoonTaleBrowserData();
      if (status) {
        status.textContent = deleted
          ? "MoonTale stories and profile were deleted from this browser."
          : "MoonTale could not delete browser data. Please clear browser storage manually.";
      }

      const redirectUrl = button.dataset.deleteRedirect;
      if (deleted && redirectUrl) {
        window.setTimeout(() => {
          window.location.href = redirectUrl;
        }, 700);
      }
    });
  });
}
