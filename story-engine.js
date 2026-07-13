window.MoonTaleStoryEngine = {
  getTemplate(characterName) {
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
      }
    };

    return templates[characterName] || templates.Astronaut;
  }
};
