(function () {
  "use strict";

  const STORAGE_KEY = "moontaleStoryProfile";

  function trackEvent(eventName, details) {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, details || {});
    }
    console.log(`[MoonTale analytics] ${eventName}`, details || {});
  }

  window.trackCTAClick = function () {
    trackEvent("cta_click", { location: "landing_hero" });
  };

  window.trackStoryBuilderStart = function () {
    trackEvent("story_builder_start");
  };

  window.trackStoryGenerated = function (profile) {
    trackEvent("story_generated", {
      character: profile.character,
      mood: profile.mood,
      targetLanguage: profile.targetLanguage,
      goal: profile.goal,
      readingTime: profile.readingTime,
    });
  };

  window.trackWaitlistSubmission = function (source) {
    trackEvent("waitlist_submission", { location: source || "story-preview" });
  };

  function initializeRevealElements() {
    document.querySelectorAll(".reveal").forEach((item) => item.classList.add("is-visible"));
  }

  function initializeLandingPage() {
    document.querySelectorAll("[data-track='cta']").forEach((link) => {
      link.addEventListener("click", window.trackCTAClick);
    });

    document.querySelectorAll(".language-button").forEach((button) => {
      button.addEventListener("click", () => {
        document.querySelectorAll(".language-button").forEach((candidate) => {
          const isActive = candidate === button;
          candidate.classList.toggle("is-active", isActive);
          candidate.setAttribute("aria-pressed", String(isActive));
        });
      });
    });
  }

  function encodeProfile(profile) {
    try {
      return btoa(unescape(encodeURIComponent(JSON.stringify(profile))));
    } catch (error) {
      return "";
    }
  }

  function decodeProfile(encodedProfile) {
    try {
      return JSON.parse(decodeURIComponent(escape(atob(encodedProfile))));
    } catch (error) {
      return null;
    }
  }

  function readStoredProfile() {
    const params = new URLSearchParams(window.location.search);
    const profileFromUrl = params.get("story");

    if (profileFromUrl) {
      const decoded = decodeProfile(profileFromUrl);
      if (decoded) return decoded;
    }

    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY));
    } catch (error) {
      return null;
    }
  }

  function writeStoredProfile(profile) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  }

  function getFormProfile(form) {
    const formData = new FormData(form);
    return {
      childName: formData.get("childName"),
      childAge: formData.get("childAge"),
      currentLanguage: formData.get("currentLanguage"),
      targetLanguage: formData.get("targetLanguage"),
      character: formData.get("character"),
      mood: formData.get("mood"),
      interest: formData.get("interest"),
      goal: formData.get("goal"),
      readingTime: formData.get("readingTime"),
      parentEmail: formData.get("email"),
    };
  }

  async function postFormToFormspree(form) {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Formspree rejected the submission.");
    }
  }

  function initializeFormspreeForms() {
    document.querySelectorAll(".formspree-form").forEach((form) => {
      const status = form.querySelector(".waitlist-status");
      const submitButton = form.querySelector("button[type='submit']");

      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (!form.reportValidity()) return;

        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = "Joining...";
        status.textContent = "";

        try {
          await postFormToFormspree(form);
          const source = form.elements.source ? form.elements.source.value : "waitlist";
          window.trackWaitlistSubmission(source);
          form.reset();
          status.textContent = "Thank you! You're on the MoonTale waitlist.";
        } catch (error) {
          status.textContent = "Something went wrong. Please try again.";
        } finally {
          submitButton.disabled = false;
          submitButton.textContent = originalButtonText;
        }
      });
    });
  }

  function setFieldError(field, message) {
    const wrapper = field.closest(".field");
    const error = wrapper ? wrapper.querySelector(".field-error") : null;
    field.setAttribute("aria-invalid", "true");
    if (error) error.textContent = message;
  }

  function clearStepErrors(step) {
    step.querySelectorAll("[aria-invalid='true']").forEach((field) => {
      field.removeAttribute("aria-invalid");
    });
    step.querySelectorAll(".field-error, .group-error").forEach((error) => {
      error.textContent = "";
    });
  }

  function validateStep(step) {
    clearStepErrors(step);
    let isValid = true;

    step.querySelectorAll("input:not([type='radio']):not([type='checkbox']), select").forEach((field) => {
      if (!field.checkValidity()) {
        const message =
          field.type === "email" && field.value
            ? "Please enter a valid email address."
            : "Please complete this field.";
        setFieldError(field, message);
        isValid = false;
      }
    });

    const radioNames = new Set(
      Array.from(step.querySelectorAll("input[type='radio'][required]")).map((input) => input.name),
    );

    radioNames.forEach((name) => {
      if (!step.querySelector(`input[name="${name}"]:checked`)) {
        const error = step.querySelector(`[data-error-for="${name}"]`);
        if (error) error.textContent = "Please choose one option.";
        isValid = false;
      }
    });

    const requiredCheckbox = step.querySelector("input[type='checkbox'][required]");
    if (requiredCheckbox && !requiredCheckbox.checked) {
      const error = step.querySelector('[data-error-for="consent"]');
      if (error) error.textContent = "Please confirm before creating the story.";
      isValid = false;
    }

    if (!isValid) {
      const firstInvalid = step.querySelector("[aria-invalid='true'], input:invalid");
      if (firstInvalid) firstInvalid.focus();
    }

    return isValid;
  }

  function initializeBuilderPage() {
    const form = document.querySelector("#story-builder-form");
    if (!form) return;

    window.trackStoryBuilderStart();

    const steps = Array.from(form.querySelectorAll(".wizard-step"));
    const backButton = form.querySelector(".wizard-back");
    const nextButton = form.querySelector(".wizard-next");
    const generateButton = form.querySelector(".wizard-generate");
    const progressFill = document.querySelector("#progress-fill");
    const progressLabels = Array.from(document.querySelectorAll(".progress-labels span"));
    const formStatus = document.querySelector("#form-status");
    let currentStep = 0;

    const previousProfile = readStoredProfile();
    if (previousProfile) {
      Object.entries(previousProfile).forEach(([name, value]) => {
        const field = form.elements[name === "parentEmail" ? "email" : name];
        if (!field || value === undefined || value === null) return;

        if (field instanceof RadioNodeList) {
          Array.from(field).forEach((input) => {
            if (input.value === String(value)) input.checked = true;
          });
        } else {
          field.value = value;
        }
      });
    }

    function showStep(index) {
      currentStep = index;
      steps.forEach((step, stepIndex) => {
        step.classList.toggle("is-active", stepIndex === index);
      });
      progressLabels.forEach((label, labelIndex) => {
        label.classList.toggle("is-current", labelIndex === index);
        label.classList.toggle("is-complete", labelIndex < index);
      });
      progressFill.style.width = `${((index + 1) / steps.length) * 100}%`;
      backButton.hidden = index === 0;
      nextButton.hidden = index === steps.length - 1;
      generateButton.hidden = index !== steps.length - 1;
      formStatus.textContent = "";

      const activeStep = steps[index];
      activeStep.classList.remove("step-enter");
      requestAnimationFrame(() => activeStep.classList.add("step-enter"));
      window.scrollTo({ top: Math.max(0, form.offsetTop - 100), behavior: "smooth" });
    }

    nextButton.addEventListener("click", () => {
      if (validateStep(steps[currentStep])) showStep(currentStep + 1);
    });

    backButton.addEventListener("click", () => showStep(currentStep - 1));

    form.addEventListener("change", (event) => {
      const target = event.target;
      if (target.matches("input, select")) {
        target.removeAttribute("aria-invalid");
        const step = target.closest(".wizard-step");
        if (step) clearStepErrors(step);
      }
    });

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!validateStep(steps[currentStep])) return;

      const profile = getFormProfile(form);
      generateButton.disabled = true;
      generateButton.textContent = "Joining...";
      formStatus.textContent = "";

      try {
        await postFormToFormspree(form);
        window.trackWaitlistSubmission("story-builder");
        writeStoredProfile(profile);
        window.trackStoryGenerated(profile);
        form.reset();
        formStatus.textContent = "Thank you! You're on the MoonTale waitlist.";

        const encodedProfile = encodeProfile(profile);
        window.setTimeout(() => {
          window.location.href = `./story.html?story=${encodeURIComponent(encodedProfile)}`;
        }, 1100);
      } catch (error) {
        formStatus.textContent = "Something went wrong. Please try again.";
        generateButton.disabled = false;
        generateButton.textContent = "Create Tonight's Story";
      }
    });

    showStep(0);
  }

  function createStoryParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  }

  function initializeStoryPage() {
    const storyContent = document.querySelector("#story-content");
    if (!storyContent || !window.MoonTaleStories) return;

    const profile = readStoredProfile();
    if (!profile) {
      window.location.replace("./story-builder.html");
      return;
    }

    const story = window.MoonTaleStories.generateStory(profile);
    document.title = `${story.title} — MoonTale`;
    document.querySelector("#story-title").textContent = story.title;
    document.querySelector("#story-reading-time").textContent = story.readingTime;
    document.querySelector("#story-language").textContent = `${story.language} · 3 new words`;
    document.querySelector("#vocabulary-language").textContent = story.language;
    document.querySelector("#learning-goal").textContent = `${story.goal}: ${story.lesson}`;
    document.querySelector("#parent-tip").textContent = story.parentTip;

    story.paragraphs.forEach((paragraph) => {
      storyContent.appendChild(createStoryParagraph(paragraph));
    });

    const vocabularyList = document.querySelector("#vocabulary-list");
    story.vocabulary.forEach((item) => {
      const row = document.createElement("div");
      const term = document.createElement("dt");
      const definition = document.createElement("dd");
      term.textContent = item.word;
      definition.textContent = item.meaning;
      row.append(term, definition);
      vocabularyList.appendChild(row);
    });

    const waitlistEmail = document.querySelector("#waitlist-email");
    if (waitlistEmail && profile.parentEmail) waitlistEmail.value = profile.parentEmail;

  }

  document.addEventListener("DOMContentLoaded", () => {
    initializeRevealElements();
    initializeLandingPage();
    initializeFormspreeForms();

    const page = document.body.dataset.page;
    if (page === "builder") initializeBuilderPage();
    if (page === "story") initializeStoryPage();
  });
})();
