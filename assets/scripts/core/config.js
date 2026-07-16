export const STORY_BUILDER_URL = "./story-builder.html";

export function resolveLanguageConfig(profile) {
  return {
    interfaceLanguage: localStorage.getItem("moontaleLanguage") || "en",
    targetLanguage: profile?.targetLanguage || "Spanish",
  };
}
