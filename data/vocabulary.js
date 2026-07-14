const baseMeanings = {
  moon: {
    en: "moon",
    pl: "księżyc",
    es: "luna",
    fr: "lune",
    de: "Mond",
  },
  star: {
    en: "star",
    pl: "gwiazda",
    es: "estrella",
    fr: "étoile",
    de: "Stern",
  },
  forest: {
    en: "forest",
    pl: "las",
    es: "bosque",
    fr: "forêt",
    de: "Wald",
  },
  dream: {
    en: "dream",
    pl: "sen",
    es: "sueño",
    fr: "rêve",
    de: "Traum",
  },
  courage: {
    en: "courage",
    pl: "odwaga",
    es: "valentía",
    fr: "courage",
    de: "Mut",
  },
};

const metadata = {
  moon: {
    themes: ["Astronaut", "Princess", "Robot"],
    moods: ["Calm", "Magical"],
  },
  star: {
    themes: ["Astronaut", "Dinosaur", "Princess"],
    moods: ["Magical", "Adventurous"],
  },
  forest: {
    themes: ["Dinosaur", "Animal", "Princess"],
    moods: ["Calm", "Adventurous"],
  },
  dream: {
    themes: ["Animal", "Princess", "Robot"],
    moods: ["Calm", "Funny"],
  },
  courage: {
    themes: ["Astronaut", "Dinosaur", "Animal", "Robot"],
    moods: ["Funny", "Adventurous"],
  },
};

function entry(id, word) {
  return {
    id,
    word,
    meanings: baseMeanings[id],
    themes: metadata[id].themes,
    moods: metadata[id].moods,
  };
}

export const VOCABULARY = {
  English: [
    entry("moon", "moon"),
    entry("star", "star"),
    entry("forest", "forest"),
    entry("dream", "dream"),
    entry("courage", "courage"),
  ],
  Polish: [
    entry("moon", "księżyc"),
    entry("star", "gwiazda"),
    entry("forest", "las"),
    entry("dream", "sen"),
    entry("courage", "odwaga"),
  ],
  Spanish: [
    entry("moon", "luna"),
    entry("star", "estrella"),
    entry("forest", "bosque"),
    entry("dream", "sueño"),
    entry("courage", "valentía"),
  ],
  French: [
    entry("moon", "lune"),
    entry("star", "étoile"),
    entry("forest", "forêt"),
    entry("dream", "rêve"),
    entry("courage", "courage"),
  ],
  German: [
    entry("moon", "Mond"),
    entry("star", "Stern"),
    entry("forest", "Wald"),
    entry("dream", "Traum"),
    entry("courage", "Mut"),
  ],
};

export default VOCABULARY;
