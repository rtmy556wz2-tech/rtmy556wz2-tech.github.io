import { trackWaitlistSubmission } from "../core/analytics.js";
import { clearElementMessage, setElementMessage, translate } from "../core/i18n.js";

export const CONSENT_TEXT_VERSION = "2026-07-15";
export const MINIMAL_WAITLIST_FIELDS = [
  "email",
  "source",
  "adultConfirmation",
  "marketingConsent",
  "consentTextVersion",
  "submissionDate",
];

export function buildMinimalWaitlistPayload({
  email,
  source = "waitlist",
  adultConfirmation = true,
  marketingConsent = true,
  submissionDate = new Date().toISOString(),
} = {}) {
  return {
    email: String(email || "").trim(),
    source: String(source || "waitlist"),
    adultConfirmation: adultConfirmation ? "true" : "false",
    marketingConsent: marketingConsent ? "true" : "false",
    consentTextVersion: CONSENT_TEXT_VERSION,
    submissionDate,
  };
}

export function createMinimalWaitlistFormData(payload) {
  const formData = new FormData();
  MINIMAL_WAITLIST_FIELDS.forEach((field) => {
    formData.append(field, payload[field] || "");
  });
  return formData;
}

export async function postMinimalWaitlistToFormspree(endpoint, payload, options = {}) {
  const timeoutMs = options.timeoutMs || 0;
  const controller = timeoutMs ? new AbortController() : null;
  const timeoutId = controller ? window.setTimeout(() => controller.abort(), timeoutMs) : null;

  const response = await fetch(endpoint, {
    method: "POST",
    body: createMinimalWaitlistFormData(payload),
    headers: {
      Accept: "application/json",
    },
    signal: controller ? controller.signal : undefined,
  }).finally(() => {
    if (timeoutId) window.clearTimeout(timeoutId);
  });

  if (!response.ok) {
    throw new Error("Formspree rejected the submission.");
  }
}

function readFormEmail(form) {
  return String(form.elements.email?.value || "").trim();
}

export function initializeFormspreeForms(root = document) {
  root.querySelectorAll(".formspree-form").forEach((form) => {
    const status = form.querySelector(".waitlist-status");
    const submitButton = form.querySelector("button[type='submit']");
    if (!submitButton) return;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      submitButton.disabled = true;
      submitButton.textContent = translate("form.status.submitting");
      clearElementMessage(status);

      const source = form.elements.source ? form.elements.source.value : "waitlist";
      const payload = buildMinimalWaitlistPayload({
        email: readFormEmail(form),
        source,
        adultConfirmation: true,
        marketingConsent: true,
      });

      try {
        await postMinimalWaitlistToFormspree(form.action, payload);
        trackWaitlistSubmission(source);
        form.reset();
        setElementMessage(status, "form.status.success");
      } catch (error) {
        setElementMessage(status, "form.status.error");
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = translate(submitButton.dataset.i18n || "common.joinWaitlist");
      }
    });
  });
}
