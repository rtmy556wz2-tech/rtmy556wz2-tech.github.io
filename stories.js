(function () {
  "use strict";

  const vocabulary = {
  Spanish: [
  { word: "luna", meaning: "moon" },
  { word: "bosque", meaning: "forest" },
  { word: "valiente", meaning: "brave" },
  { word: "estrella", meaning: "star" },
  { word: "amigo", meaning: "friend" },
],

   French: [
  { word: "lune", meaning: "moon" },
  { word: "forêt", meaning: "forest" },
  { word: "courageux", meaning: "brave" },
  { word: "étoile", meaning: "star" },
  { word: "ami", meaning: "friend" },
],
    German: [
  { word: "Mond", meaning: "moon" },
  { word: "Wald", meaning: "forest" },
  { word: "mutig", meaning: "brave" },
  { word: "Stern", meaning: "star" },
  { word: "Freund", meaning: "friend" },
],
    Polish: [
  { word: "księżyc", meaning: "moon" },
  { word: "las", meaning: "forest" },
  { word: "odważny", meaning: "brave" },
  { word: "gwiazda", meaning: "star" },
  { word: "przyjaciel", meaning: "friend" },
],
    English: [
  { word: "moon", meaning: "the glowing light in the night sky" },
  { word: "forest", meaning: "a place filled with trees" },
  { word: "brave", meaning: "ready to try even when something feels new" },
  { word: "star", meaning: "a bright object in the night sky" },
  { word: "friend", meaning: "someone who cares about you" },
],
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
    "Learn 3 new words": {
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

  function safeText(value, fallback) {
    return String(value || fallback).replace(/[<>]/g, "").trim();
  }

  function generateStory(profile) {
    const name = safeText(profile.childName, "Your child");
    const interest = safeText(profile.interest, "the stars");
    const character = characterDetails[profile.character] || characterDetails.Animal;
    const mood = moodDetails[profile.mood] || moodDetails.Magical;
   const allWords = vocabulary[profile.targetLanguage] || vocabulary.Spanish;

const wordCount = Math.min(
  Number(profile.newWordsCount) || 3,
  allWords.length
);

const words = allWords.slice(0, wordCount);
    const goal = goalDetails[profile.goal] || goalDetails.Courage;
    const length = lengthDetails[String(profile.readingTime)] || lengthDetails["5"];

    const title = `${name} and the Moonlight Promise`;
    const paragraphs = [
      `Just as ${name} was getting ready for bed, a warm pearl-colored glow appeared beside the window. It was Milo the Moonbear, waving from inside his round glass helmet. “Tonight,” Milo whispered, “the moon needs a little help from someone who loves ${interest}.”`,
      `${mood.sky} Milo opened his storybook, and its pages became a silver doorway. Together, ${name} and Milo stepped through and arrived in ${character.place}, where they met ${character.friend}.`,
     `${character.friend.split(",")[0]} was holding ${character.object}. It usually showed the way home, but tonight its light had faded. Milo pointed toward the sky and taught ${name} ${wordCount} special ${profile.targetLanguage || "Spanish"} words: ${words.map(word => `“${word.word}” meant ${word.meaning}`).join(", ")}. Each new word made the little object glow a little brighter.`,
      `${mood.movement} Along the way, ${name} noticed something wonderful: the adventure was filled with ${interest}. It was as if the story had remembered exactly what made ${name}'s imagination wake up.`,
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
      `${mood.ending} The special words shone once more: ${words.map((item) => item.word).join(", ")}. Milo smiled. “You learned them because they became part of your adventure.”`,
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
