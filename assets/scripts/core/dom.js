export function createStoryParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

export function initializeRevealElements() {
  document.querySelectorAll(".reveal").forEach((item) => {
    item.classList.add("is-visible");
  });
}
