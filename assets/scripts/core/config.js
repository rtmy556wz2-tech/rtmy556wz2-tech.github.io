export const DEFAULT_LANGUAGE = "en";

export const LANGUAGE_STORAGE_KEY = "moontaleLanguage";
export const PROFILE_STORAGE_KEY = "moontaleStoryProfile";
export const SAVED_STORIES_KEY = "moontaleSavedStories";
export const MAX_SAVED_STORIES = 10;

export const STORY_BUILDER_URL = "./story-builder.html";

export function normalizeLanguageCode(language) {
  const value = String(language || "").toLowerCase();

  const allowed = ["en", "pl", "es", "fr", "de"];

  return allowed.includes(value) ? value : DEFAULT_LANGUAGE;
}

export function resolveLanguageConfig(profile) {
  return {
    interfaceLanguage: normalizeLanguageCode(
      localStorage.getItem(LANGUAGE_STORAGE_KEY) || DEFAULT_LANGUAGE
    ),
    targetLanguage: profile?.targetLanguage || "Spanish",
  };
}
