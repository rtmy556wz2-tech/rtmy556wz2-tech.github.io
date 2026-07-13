window.MoonTaleStoryEngine = (() => {
  const templates = {
    Astronaut: {
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
  };

  function getTemplate(characterName) {
    return templates[characterName] || templates.Astronaut;
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
    randomMission,
    randomObstacle,
    randomReward
  };
})();
