window.MoonTaleStoryEngine = (() => {
  const templates = {
    Astronaut: {
      openings: [
  "Just as {name} was getting ready for bed, a warm pearl-coloured glow appeared beside the window.",
  "As {name} snuggled beneath the blanket, a tiny silver star drifted into the bedroom.",
  "The moon seemed brighter than usual tonight. Milo knocked softly on the window.",
  "A sleepy owl landed on the windowsill carrying a glowing invitation.",
  "Tiny moonbeams danced across the bedroom until Milo stepped out of the light."
],
      missions: [
        "Find the missing moon crystal.",
        "Deliver a message to a lonely star.",
        "Help a tiny comet find its family.",
        "Repair the glowing star compass.",
        "Guide a lost rocket home."
      ],

      obstacles: [
        "A cloud maze blocked the way.",
        "The stars had become mixed up.",
        "A sleepy moon dragon guarded the path.",
        "A bridge of moonlight disappeared.",
        "A gentle space wind blew the map away."
      ],

      rewards: [
        "The moon created a brand-new constellation.",
        "Every star sparkled a little brighter.",
        "Nova received a shiny explorer badge.",
        "The whole sky glowed with silver light.",
        "A tiny shooting star granted one special wish."
      ]
    },

    Dinosaur: {
      openings: [
  "As {name} was drifting off to sleep, a tiny dinosaur footprint appeared on the bedroom floor, glowing softly in the moonlight.",
  "A gentle rumble echoed outside the window. Milo smiled and whispered, 'I think our dinosaur friends need us tonight.'",
  "The stars formed the shape of a friendly dinosaur, inviting {name} on a prehistoric adventure.",
  "A warm breeze carried the scent of ancient ferns into the room, and Milo opened a doorway to a world of dinosaurs.",
  "Just before bedtime, a little dinosaur peeked through a moonlit portal and waved excitedly at {name}."
],
      missions: [
        "Find the lost dinosaur egg.",
        "Help a baby dinosaur find its parents.",
        "Save the glowing fern forest.",
        "Follow ancient footprints.",
        "Wake the sleeping volcano safely."
      ],

      obstacles: [
        "A roaring river blocked the path.",
        "Tall ferns hid the clues.",
        "Friendly dinosaurs needed help crossing a bridge.",
        "A cave became too dark to explore.",
        "A giant footprint led everyone in circles."
      ],

      rewards: [
        "The dinosaurs celebrated with a moon picnic.",
        "A rainbow appeared above the valley.",
        "Pip discovered a sparkling fossil.",
        "The forest sang a happy song.",
        "A baby dinosaur gave the child a glowing leaf."
      ]
    }
    ,

Princess: {
  openings: [
    "As {name} settled into bed, a tiny golden crown shimmered on the pillow.",
    "A soft pink glow appeared by the window, and Milo smiled as castle bells rang far away.",
    "The moonlight turned into a silver staircase leading towards a quiet castle garden.",
    "A fairy lantern floated into the room and gently circled above {name}'s blanket.",
    "Just before sleep, a ribbon of moonlight curled through the air and opened a path to Princess Lumi."
  ],

  missions: [
    "Find the missing moon crown.",
    "Help Princess Lumi wake the sleepy lanterns.",
    "Open the secret garden gate.",
    "Return a lost fairy wish.",
    "Find the key to the Cloudberry Castle library."
  ],

  obstacles: [
    "A wall of sleeping roses blocked the path.",
    "The castle bridge had disappeared in silver mist.",
    "A shy fairy had hidden the final clue.",
    "The moonlit garden changed its paths.",
    "A tiny dragon was guarding the golden key."
  ],

  rewards: [
    "Princess Lumi placed a glowing star on the castle tower.",
    "The garden bloomed with silver flowers.",
    "A fairy choir sang a soft goodnight song.",
    "The castle lanterns glowed warmly again.",
    "The moon gave {name} a tiny crown of light."
  ]
},

Animal: {
  openings: [
    "As {name} closed their eyes, a tiny fox pawprint appeared beside the bed.",
    "A soft rustle came from the window, and Milo arrived with a friendly woodland smile.",
    "The moonlight turned into a forest path covered with silver leaves.",
    "A little bird tapped gently on the window, carrying a message from the forest.",
    "Just before bedtime, the room filled with the quiet sounds of a sleepy woodland."
  ],

  missions: [
    "Help Willow find the lost star bell.",
    "Guide a baby fox back to its den.",
    "Find the missing song of the forest.",
    "Help the woodland animals prepare for moonrise.",
    "Return a silver feather to the night bird."
  ],

  obstacles: [
    "A sleepy river blocked the path.",
    "The forest path split into three glowing trails.",
    "A family of rabbits needed help crossing the meadow.",
    "The silver leaves covered the final clue.",
    "A shy owl would only speak in riddles."
  ],

  rewards: [
    "The forest animals gathered for a quiet moon parade.",
    "Willow gave {name} a tiny bell shaped like a star.",
    "The trees whispered a soft thank you.",
    "A circle of fireflies lit the path home.",
    "The night bird sang a gentle lullaby."
  ]
},

Robot: {
  openings: [
    "As {name} got ready for bed, a tiny beep sounded from under the pillow.",
    "A small glowing button appeared on the blanket, blinking softly in moonlight.",
    "The stars outside arranged themselves into the shape of a friendly robot.",
    "Milo arrived carrying a little dream lantern that hummed like a sleepy machine.",
    "Just before bedtime, a pocket-sized robot rolled through a moonlit doorway."
  ],

  missions: [
    "Help Beep repair the dream lantern.",
    "Find the missing moon battery.",
    "Restart the Starlight Workshop.",
    "Solve the glowing bedtime puzzle.",
    "Guide a tiny robot home before sunrise."
  ],

  obstacles: [
    "The workshop doors were locked by a puzzle.",
    "A trail of glowing buttons led in different directions.",
    "The moon battery rolled under a silver bridge.",
    "A sleepy machine kept mixing up the clues.",
    "The dream lantern needed one final spark."
  ],

  rewards: [
    "Beep's heart glowed bright and warm.",
    "The Starlight Workshop lit up with tiny stars.",
    "The dream lantern projected a beautiful moon picture.",
    "A little robot choir sang goodnight.",
    "Beep gave {name} a tiny badge shaped like a gear."
  ]
}
  };

  function getTemplate(characterName) {
    return templates[characterName] || templates.Astronaut;
  }
function randomOpening(characterName) {
  const template = getTemplate(characterName);

  return template.openings[
    Math.floor(Math.random() * template.openings.length)
  ];
}
  function randomMission(characterName) {
    const template = getTemplate(characterName);
    return template.missions[
      Math.floor(Math.random() * template.missions.length)
    ];
  }

  function randomObstacle(characterName) {
    const template = getTemplate(characterName);
    return template.obstacles[
      Math.floor(Math.random() * template.obstacles.length)
    ];
  }

  function randomReward(characterName) {
    const template = getTemplate(characterName);
    return template.rewards[
      Math.floor(Math.random() * template.rewards.length)
    ];
  }

 return {
  getTemplate,
  randomOpening,
  randomMission,
  randomObstacle,
  randomReward
};
})();
