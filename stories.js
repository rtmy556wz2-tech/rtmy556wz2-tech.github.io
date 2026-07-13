(function () {
  "use strict";

  const vocabulary = {
  Spanish: window.SpanishVocabulary || [],
  French: window.FrenchVocabulary || [],
  German: window.GermanVocabulary || [],
  Polish: window.PolishVocabulary || [],
  English: window.EnglishVocabulary || [],
};
  const characterDetails = {
    Astronaut: {
      friend: "Nova, a tiny astronaut with silver boots",
      object: "a softly humming star compass",
      place: "the Moonlit Meadow",
    },
    Dinosaur: {
      friend: "Pip, a gentle little dinosaur with moss-green spots",
      object: "a warm amber pebble",
      place: "the Whispering Fern Forest",
    },
    Princess: {
      friend: "Princess Lumi, keeper of the sleepy lanterns",
      object: "a ribbon of moonlight",
      place: "the Cloudberry Castle garden",
    },
    Animal: {
      friend: "Willow, a curious fox with a velvet tail",
      object: "a tiny bell shaped like a star",
      place: "the Silverleaf Forest",
    },
    Robot: {
      friend: "Beep, a kind little robot with a glowing heart",
      object: "a pocket-sized dream lantern",
      place: "the Starlight Workshop",
    },
  };

  const moodDetails = {
    Calm: {
      sky: "The night was soft and still, and every cloud moved as slowly as a sleepy breath.",
      movement: "They followed the quiet silver path, listening to leaves whisper goodnight.",
      ending: "Nothing needed to be hurried. The answer arrived when they paused and listened together.",
    },
    Magical: {
      sky: "The stars blinked in colors no crayon had ever named, and moonbeams curled like ribbons.",
      movement: "Each step made a new constellation shimmer beneath their feet.",
      ending: "A little magic had been waiting inside them all along, bright enough to guide the way.",
    },
    Funny: {
      sky: "The moon wore a cloud like a very fluffy hat, and even the stars seemed to be giggling.",
      movement: "They tiptoed past three snoring mushrooms and one owl who insisted it was morning.",
      ending: "Their laughter became the final clue, bubbling softly until the whole path glowed.",
    },
    Adventurous: {
      sky: "Beyond the window, a silver trail curved toward a place no map had ever shown.",
      movement: "They crossed a moonbeam bridge and climbed a hill that sparkled with sleeping fireflies.",
      ending: "The path had felt mysterious, but every brave little step had made the next one easier.",
    },
  };

  const goalDetails = {
    "Language learning": {
      lesson: "Notice how new words can feel familiar when they live inside a story.",
      tip: "Ask: Which new word would you like to use in a sentence tomorrow?",
    },
    "Build reading habit": {
      lesson: "A small story each night can become a comforting habit that children look forward to.",
      tip: "Let your child choose one favorite sentence to hear again before lights out.",
    },
    "Improve bedtime routine": {
      lesson: "A predictable, gentle ending helps signal that the busy part of the day is complete.",
      tip: "Ask: What is one peaceful thing you want to carry into your dreams?",
    },
    Confidence: {
      lesson: "Confidence grows when we notice the small steps we were already able to take.",
      tip: "Ask: What is something you tried today, even if it felt new?",
    },
    Courage: {
      lesson: "Courage does not mean never feeling unsure. It means taking one kind step forward anyway.",
      tip: "Ask: When were you brave today?",
    },
    Kindness: {
      lesson: "Kindness can be quiet, but even a small caring choice can change someone else's night.",
      tip: "Ask: Who could use a little kindness from us tomorrow?",
    },
  };

  const lengthDetails = {
    "3": { label: "3 minute read", extraParagraphs: 0 },
    "5": { label: "5 minute read", extraParagraphs: 1 },
    "8": { label: "8 minute read", extraParagraphs: 2 },
  };
const storyOpenings = [
  "Just as {name} was getting ready for bed, a warm pearl-coloured glow appeared beside the window. It was Milo the Moonbear, waving from inside his round glass helmet.",

  "As {name} snuggled beneath the blanket, a tiny silver star drifted through the bedroom window. It floated gently until it landed in Milo's waiting paws.",

  "The moon seemed brighter than usual that evening. A soft knock sounded on the window, and there stood Milo with a friendly smile and a glowing lantern.",

  "A sleepy little owl landed on the windowsill carrying a shimmering envelope. Across the front, written in sparkling letters, was {name}'s name.",

  "Just before the bedtime story began, tiny moonbeams danced across the bedroom walls. They twirled together until Milo stepped out of the light.",

  "The room became wonderfully quiet. Then a gentle breeze carried silver stardust through the open window, and Milo appeared with an excited grin.",

  "As the first stars began to sparkle outside, a tiny golden key floated gently onto {name}'s pillow. Milo appeared moments later, whispering, 'I think tonight's adventure has found us.'",

  "A soft glow spread across the ceiling like moonlight on water. Milo looked up, smiled at {name}, and said, 'The Moon has a very special mission for us tonight.'",

  "The bedtime clock had only just chimed when a little shooting star zipped across the room, leaving behind a trail of glitter. Milo hurried after it with a cheerful laugh.",

  "As {name} closed their eyes, the room filled with tiny floating lights. One by one they gathered together until they formed Milo, already holding tonight's magical storybook."
];

  
function fillTemplate(template, values) {
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] || "");
}

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}
  function getFriendName(character) {
  return character.friend.split(",")[0];
}
  function safeText(value, fallback) {
    return String(value || fallback).replace(/[<>]/g, "").trim();
  }
  function shuffleWords(words) {
  return [...words].sort(() => Math.random() - 0.5);
}

function getThemesForCharacter(characterName) {
  const themeMap = {
    Astronaut: ["Space", "Actions", "Bedtime"],
    Dinosaur: ["Animals", "Nature", "Actions"],
    Princess: ["Magic", "Friends", "Colours"],
    Animal: ["Animals", "Nature", "Friends"],
    Robot: ["Space", "Actions", "Colours"],
  };

  return themeMap[characterName] || ["Nature", "Friends", "Bedtime"];
}

function getThemesForMood(moodName) {
  const moodMap = {
    Calm: ["Bedtime", "Nature", "Feelings"],
    Magical: ["Magic", "Space", "Colours"],
    Funny: ["Friends", "Animals", "Actions"],
    Adventurous: ["Actions", "Nature", "Space"],
  };

  return moodMap[moodName] || ["Nature", "Friends"];
}

function getWordsForStory(languageVocabulary, profile, wordCount) {
  const themes = [
    ...getThemesForCharacter(profile.character),
    ...getThemesForMood(profile.mood),
  ];

  const themedWords = themes.flatMap(
    (theme) => languageVocabulary[theme] || []
  );

  const fallbackWords = Object.values(languageVocabulary).flat();

  const availableWords =
    themedWords.length > 0 ? themedWords : fallbackWords;

  return shuffleWords(availableWords).slice(0, wordCount);
}

  function generateStory(profile) {
    const name = safeText(profile.childName, "Your child");
    const interest = safeText(profile.interest, "the stars");
    const character = characterDetails[profile.character] || characterDetails.Animal;
    const mood = moodDetails[profile.mood] || moodDetails.Magical;
   const allWords = vocabulary[profile.targetLanguage] || vocabulary.Spanish;

const totalWords = Object.values(allWords).flat().length;

const wordCount = Math.min(
  Number(profile.newWordsCount) || 3,
  totalWords
);

const words = getWordsForStory(
  allWords,
  profile,
  wordCount
);


    const goal = goalDetails[profile.goal] || goalDetails.Courage;
    const length = lengthDetails[String(profile.readingTime)] || lengthDetails["5"];

    const title = `${name} and the Moonlight Promise`;
    const paragraphs = [
      `${fillTemplate(pickRandom(storyOpenings), { name })} “Tonight,” Milo whispered, “the moon needs a little help from someone who loves ${interest}.”`,
      `${mood.sky} Milo opened his storybook, and its pages became a silver doorway. Together, ${name} and Milo stepped through and arrived in ${character.place}, where they met ${character.friend}.`,
     `${window.MoonTaleStoryEngine.randomMission(profile.character)} Milo pointed toward the sky and taught ${name} ${wordCount} special ${profile.targetLanguage || "Spanish"} words: ${words.map(word => `“${word.word}” meant ${word.meaning}`).join(", ")}. Each new word made the adventure glow a little brighter.`,
     `${mood.movement} ${window.MoonTaleStoryEngine.randomObstacle(profile.character)} Along the way, ${name} noticed something wonderful: the adventure was filled with ${interest}. It was as if the story had remembered exactly what made ${name}'s imagination wake up.`,
      `Soon they reached a fork in the path. One trail was bright but noisy. The other was dim, peaceful, and marked with a tiny crescent moon. ${name} thought about tonight's goal: ${String(profile.goal || "courage").toLowerCase()}. Then ${name} chose the quiet moon path and invited everyone to stay close.`,
    ];
   

    if (length.extraParagraphs >= 1) {
      paragraphs.push(
        `Behind a curtain of silver leaves, they found three sleepy fireflies trying to carry a fallen star home. ${name}, Milo, and ${character.friend.split(",")[0]} worked together, sharing the light from ${character.object}. No one had to solve the problem alone.`,
      );
    }

    if (length.extraParagraphs >= 2) {
      paragraphs.push(
        `At the top of the hill, the moon asked ${name} to make one gentle wish for tomorrow. ${name} wished for more moments of curiosity, kindness, and time together. The wish floated upward and became a new star.`,
      );
    }

    paragraphs.push(
      `${mood.ending} ${window.MoonTaleStoryEngine.randomReward(profile.character)} The special words shone once more: ${words.map((item) => item.word).join(", ")}. Milo smiled. “You learned them because they became part of your adventure.”`,
      `Back in the bedroom, the storybook folded itself closed. Milo tucked ${character.object} safely into one of its painted pages and promised to return. ${name} snuggled beneath the blanket, feeling proud, peaceful, and ready for sleep.`,
    );

    return {
      title,
      paragraphs,
      vocabulary: words,
      language: profile.targetLanguage || "Spanish",
      readingTime: length.label,
      goal: profile.goal || "Courage",
      lesson: goal.lesson,
      parentTip: goal.tip,
    };
  }

  window.MoonTaleStories = {
    generateStory,
    vocabulary,
    goals: goalDetails,
  };
})();
