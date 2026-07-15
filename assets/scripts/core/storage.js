import {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  MAX_SAVED_STORIES,
  PROFILE_STORAGE_KEY,
  SAVED_STORIES_KEY,
  normalizeLanguageCode,
} from "./config.js";

function getBrowserStorage(storage) {
  if (storage) return storage;
  try {
    return typeof window !== "undefined" ? window.localStorage : null;
  } catch (error) {
    return null;
  }
}

function encodeBinary(value) {
  if (typeof btoa === "function") return btoa(value);
  if (typeof Buffer !== "undefined") return Buffer.from(value, "binary").toString("base64");
  throw new Error("Base64 encoding is unavailable.");
}

function decodeBinary(value) {
  if (typeof atob === "function") return atob(value);
  if (typeof Buffer !== "undefined") return Buffer.from(value, "base64").toString("binary");
  throw new Error("Base64 decoding is unavailable.");
}

export function readStorageValue(key, fallback = null, storage) {
  const localStorage = getBrowserStorage(storage);
  if (!localStorage) return fallback;

  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : value;
  } catch (error) {
    return fallback;
  }
}

export function writeStorageValue(key, value, storage) {
  const localStorage = getBrowserStorage(storage);
  if (!localStorage) return false;

  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    return false;
  }
}

export function readJsonStorage(key, fallback = null, storage) {
  const value = readStorageValue(key, null, storage);
  if (value === null) return fallback;

  try {
    return JSON.parse(value);
  } catch (error) {
    return fallback;
  }
}

export function writeJsonStorage(key, value, storage) {
  try {
    return writeStorageValue(key, JSON.stringify(value), storage);
  } catch (error) {
    return false;
  }
}

export function getCurrentLanguage(storage) {
  return normalizeLanguageCode(readStorageValue(LANGUAGE_STORAGE_KEY, "", storage)) || DEFAULT_LANGUAGE;
}

export function writeCurrentLanguage(language, storage) {
  const normalizedLanguage = normalizeLanguageCode(language);
  if (!normalizedLanguage) return false;
  return writeStorageValue(LANGUAGE_STORAGE_KEY, normalizedLanguage, storage);
}

export function encodeProfile(profile) {
  try {
    return encodeBinary(unescape(encodeURIComponent(JSON.stringify(profile))));
  } catch (error) {
    return "";
  }
}

export function decodeProfile(encodedProfile) {
  try {
    return JSON.parse(decodeURIComponent(escape(decodeBinary(encodedProfile))));
  } catch (error) {
    return null;
  }
}

export function readStoredProfile(options = {}) {
  return readJsonStorage(PROFILE_STORAGE_KEY, null, options.storage);
}

export function writeStoredProfile(profile, storage) {
  return writeJsonStorage(PROFILE_STORAGE_KEY, profile, storage);
}

export function readSavedStories(storage) {
  const stories = readJsonStorage(SAVED_STORIES_KEY, [], storage);
  return Array.isArray(stories) ? stories : [];
}

export function saveGeneratedStory(story, profile, storage) {
  const nextStories = [
    {
      title: story.title,
      language: story.languageCode || DEFAULT_LANGUAGE,
      targetLanguage: profile.targetLanguage,
      createdAt: new Date().toISOString(),
      profile,
    },
    ...readSavedStories(storage),
  ].slice(0, MAX_SAVED_STORIES);

  writeJsonStorage(SAVED_STORIES_KEY, nextStories, storage);
}
