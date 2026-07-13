# Contributing to MoonTale

Thank you for helping improve MoonTale. The project priorities are reliability, clear structure, accessibility, and preserving the current public website experience.

## Branch Naming

Create a branch for every change. Do not edit directly on `main`.

Recommended branch examples:

- `feature/separate-language-files`
- `fix/story-language-generation`
- `refactor/css-architecture`
- `docs/improve-readme`

## Commit Messages

Use short, clear commit messages with an optional scope.

Recommended style:

- `feat(i18n): add language configuration`
- `fix(builder): restore continue button validation`
- `refactor(css): separate builder styles`
- `docs: improve project setup guide`
- `test(story): verify selected story language`

## Testing Expectations

Before opening a pull request, manually test the affected pages and the core user flow:

- `index.html` loads with styles, scripts, and images.
- `story-builder.html` loads and the form can be completed.
- `story.html` displays a generated story.
- `personalized-bedtime-stories-for-kids.html` loads and links correctly.
- Interface language switching still works.
- The selected current language controls the generated story language.
- Waitlist forms still point to the existing Formspree endpoint.
- `robots.txt` and `sitemap.xml` still reflect public URLs correctly.

If you add automated tests later, include instructions for running them in the pull request.

## Accessibility Expectations

Preserve and improve accessibility:

- Use semantic HTML where possible.
- Keep form fields associated with visible labels.
- Preserve skip links and focus-visible behavior.
- Use meaningful alt text for informative images.
- Do not rely on color alone to communicate important state.
- Keep text readable and avoid layout overlap on mobile.

## Translation Expectations

MoonTale currently supports English, Polish, Spanish, French, and German.

When adding or changing interface text:

- Update all relevant translation entries.
- Keep language codes consistent: `en`, `pl`, `es`, `fr`, `de`.
- Do not confuse the interface/current story language with the separate language-learning target.
- Test that translated metadata is not overwritten incorrectly by the language system.

## Public URL and SEO Expectations

Public URLs must not be changed without reviewing:

- Internal links
- Canonical URLs
- `sitemap.xml`
- `robots.txt`
- Existing search and sharing metadata

Preserve the root-level public pages required for GitHub Pages deployment.

## Review Guidance

Keep pull requests focused. Avoid unrelated refactors or formatting-only rewrites unless that is the explicit purpose of the change.
