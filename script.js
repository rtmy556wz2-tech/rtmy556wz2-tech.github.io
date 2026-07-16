(function () {
  "use strict";

  const PROFILE_STORAGE_KEY = "moontaleStoryProfile";
  const LANGUAGE_STORAGE_KEY = "moontaleLanguage";
  const SAVED_STORIES_KEY = "moontaleSavedStories";
  const DEFAULT_LANGUAGE = "en";
  const SUPPORTED_LANGUAGES = ["en", "pl", "es", "fr", "de"];
  const LANGUAGE_NAME_BY_CODE = {
    en: "English",
    pl: "Polish",
    es: "Spanish",
    fr: "French",
    de: "German",
  };
  const LANGUAGE_CODE_BY_NAME = {
    English: "en",
    Polish: "pl",
    Spanish: "es",
    French: "fr",
    German: "de",
  };

  const translations = {
    en: {
      "meta.home.title": "MoonTale | Personalized Bedtime Stories for Kids & Language Learning",
      "meta.home.description": "Create personalized bedtime stories for children that make reading, imagination, and language learning part of a calm nightly routine. Try MoonTale for free.",
      "meta.builder.title": "Create a Free Personalized Bedtime Story for Your Child | MoonTale",
      "meta.builder.description": "Create a free personalized bedtime story for your child with MoonTale. Choose their age, interests, story mood, and language learning goal.",
      "meta.story.title": "Your Bedtime Story - MoonTale",
      "meta.story.description": "Read your personalized MoonTale bedtime story preview.",
      "meta.personalizedStories.title": "Personalized Bedtime Stories for Kids | MoonTale",
      "meta.personalizedStories.description": "Create personalized bedtime stories for kids based on their age, interests, and language goals. Make bedtime calmer, more imaginative, and more meaningful with MoonTale.",
      "common.skipContent": "Skip to content",
      "common.mainNavigation": "Main navigation",
      "common.homeLabel": "MoonTale home",
      "common.languageSelector": "Choose language",
      "common.parentEmail": "Parent email",
      "common.joinWaitlist": "Join the Waitlist",
      "common.waitlistMicrocopy": "Early access updates only. Unsubscribe anytime.",
      "common.email": "Email",
      "language.English": "English",
      "language.Polish": "Polish",
      "language.Spanish": "Spanish",
      "language.French": "French",
      "language.German": "German",
      "option.character.Astronaut": "Astronaut",
      "option.character.Dinosaur": "Dinosaur",
      "option.character.Princess": "Princess",
      "option.character.Animal": "Animal",
      "option.character.Robot": "Robot",
      "option.mood.Calm": "Calm",
      "option.mood.Magical": "Magical",
      "option.mood.Funny": "Funny",
      "option.mood.Adventurous": "Adventurous",
      "option.goal.Language learning": "Language learning",
      "option.goal.Build reading habit": "Build reading habit",
      "option.goal.Improve bedtime routine": "Improve bedtime routine",
      "option.goal.Confidence": "Confidence",
      "option.goal.Courage": "Courage",
      "option.goal.Kindness": "Kindness",
      "home.header.cta": "Get Early Access",
      "home.hero.eyebrow": "Language learning, made magical",
      "home.hero.title": "Personalized Bedtime Stories for Kids That Make Language Learning Feel Natural",
      "home.hero.intro": "Personalized bedtime stories designed around your child's interests, helping make language learning natural, reading exciting, and bedtime a moment of connection.",
      "home.hero.benefitsLabel": "MoonTale benefits",
      "home.hero.benefit1": "Builds reading habits",
      "home.hero.benefit2": "Introduces a new language naturally",
      "home.hero.benefit3": "Creates calm, meaningful bedtime routines",
      "home.hero.benefit4": "Encourages imagination and curiosity",
      "home.hero.primaryCta": "Create a Free Bedtime Story",
      "home.hero.secondaryCta": "See a Sample Story",
      "home.hero.microcopy": "No account needed. Create a personalized preview in about two minutes.",
      "home.hero.artLabel": "Milo beside a magical moon and open storybook",
      "home.hero.miloAlt": "Milo the Moonbear, MoonTale's storytelling guide",
      "home.hero.miloGreeting": "Hi, I'm Milo the Moonbear.",
      "home.hero.miloText": "I'll guide your child through magical bedtime adventures while discovering new words, ideas, and cultures.",
      "home.problem.eyebrow": "Built around real family life",
      "home.problem.title": "The Problem we have solved",
      "home.problem.lead": "Parents want reading, learning, and bedtime to feel better. Today, they often have to choose between products that solve only one piece of the puzzle.",
      "home.problem.parentsWant": "Parents want to",
      "home.problem.want1": "Help their children read more",
      "home.problem.want2": "Introduce a second language early",
      "home.problem.want3": "Reduce passive screen time",
      "home.problem.want4": "Create calmer bedtime routines",
      "home.problem.want5": "Spend more meaningful time together",
      "home.problem.solutionsAre": "But most solutions are",
      "home.problem.solution1": "Generic bedtime stories",
      "home.problem.solution2": "Educational apps that feel like lessons",
      "home.problem.solution3": "Entertainment that does not support learning",
      "home.problem.conclusion": "MoonTale combines learning, imagination, and family connection in one experience.",
      "home.transformation.eyebrow": "A small ritual, transformed",
      "home.transformation.title": "Before and after MoonTale",
      "home.transformation.before": "Before MoonTale",
      "home.transformation.before1": "Generic bedtime stories",
      "home.transformation.before2": "Passive screen time",
      "home.transformation.before3": "Children lose interest in reading",
      "home.transformation.before4": "Language learning feels like homework",
      "home.transformation.before5": "Bedtime can feel repetitive or stressful",
      "home.transformation.after": "After MoonTale",
      "home.transformation.after1": "Stories shaped around your child's interests",
      "home.transformation.after2": "Natural exposure to a new language",
      "home.transformation.after3": "More excitement around reading",
      "home.transformation.after4": "Calmer bedtime routines",
      "home.transformation.after5": "Stronger parent-child connection",
      "home.how.eyebrow": "From your family to their story",
      "home.how.title": "How it works.",
      "home.how.lead": "A purpose-built bedtime flow that turns the things your child already loves into a gentle learning experience.",
      "home.how.step1Title": "Add their world",
      "home.how.step1Text": "Share your child's name, age, interests, favorite themes, and reading level.",
      "home.how.step2Title": "Choose a language",
      "home.how.step2Text": "Select a goal such as English, Spanish, French, German, or Polish.",
      "home.how.step3Title": "Add a memory",
      "home.how.step3Text": "Use a trip, pet, toy, or family photo as inspiration for tonight's adventure.",
      "home.how.step4Title": "Read together",
      "home.how.step4Text": "Enjoy a calm story with familiar details, gentle vocabulary, and a relaxing ending.",
      "home.photo.memoryText": "A family memory becomes",
      "home.photo.memoryTitle": "The Secret Island Adventure",
      "home.photo.eyebrow": "Photo to story",
      "home.photo.title": "Turn family photos into magical bedtime stories.",
      "home.photo.body": "A beach photo can become a pirate journey, a picture with a pet can become a forest quest, and a birthday memory can become a magical celebration. Every story feels personal, emotional, and unique to the family.",
      "home.sample.eyebrow": "A glimpse inside",
      "home.sample.title": "Tonight's story preview.",
      "home.sample.textBefore": "Tonight, Emma and Milo travel through a sleepy moon forest while learning the Spanish words",
      "home.sample.textAnd": "and",
      "home.sample.textAfter": "The words appear naturally, with gentle repetition and meaning from context.",
      "home.sample.vocabLabel": "Spanish vocabulary in the sample story",
      "home.sample.wordMoon": "moon",
      "home.sample.wordStar": "star",
      "home.sample.wordForest": "forest",
      "home.research.eyebrow": "Thoughtful by design",
      "home.research.title": "Backed by what we know about children's learning",
      "home.research.lead": "MoonTale is informed by established guidance on shared reading, responsive interaction, early literacy, and consistent family routines. We use careful language because trust matters.",
      "home.research.card1": "Evidence shows that shared reading supports language, literacy, and healthy relationships.",
      "home.research.card2": "Research suggests responsive back-and-forth interaction helps build developing brains.",
      "home.research.card3": "Studies indicate that reading enjoyment and frequency are closely linked with literacy.",
      "home.research.card4": "Early literacy experiences can contribute to vocabulary and language growth.",
      "home.research.sourceLink": "View source ↗",
      "home.research.note": "MoonTale is an educational support tool, not a substitute for books, teachers, caregivers, or professional developmental advice.",
      "home.why.eyebrow": "More than an AI prompt",
      "home.why.title": "Why MoonTale?",
      "home.why.body": "General AI can generate text. MoonTale is a personalized learning and bedtime companion, purpose-built around children, parents, and the rhythm of family life.",
      "home.why.feature1": "Age-appropriate storytelling",
      "home.why.feature2": "Child-safe content",
      "home.why.feature3": "Parent-controlled themes",
      "home.why.feature4": "Personalized adventures",
      "home.why.feature5": "Language-learning support",
      "home.why.feature6": "Bedtime-focused experience",
      "home.why.feature7": "Consistent story quality",
      "home.why.feature8": "Reading habit design",
      "home.platform.eyebrow": "Starting with bedtime",
      "home.platform.title": "One ritual today. A learning companion for years.",
      "home.platform.body": "MoonTale begins with personalized bedtime stories, then grows with each child's interests, language goals, reading confidence, and family memories. The long-term opportunity is a trusted platform for stories, literacy, languages, and cultural discovery.",
      "home.founder.eyebrow": "A personal mission",
      "home.founder.title": "Why I'm Building MoonTale",
      "home.founder.quote": "As a student and athlete, I've seen how powerful consistent habits can be. MoonTale started from a simple question: how can we help children look forward to reading every night while making language learning feel natural, emotional, and fun? I'm building MoonTale to help families turn bedtime into a moment of learning, imagination, and connection.",
      "home.join.eyebrow": "Build it with us",
      "home.join.title": "Help shape MoonTale.",
      "home.join.body": "MoonTale is in early development. Join the waitlist to receive updates, test the first version, and help build a better way for children to learn through bedtime stories.",
      "home.footer.tagline": "© 2026 MoonTale. Language learning through stories families love.",
      "builder.skip": "Skip to story builder",
      "builder.header.note": "A bedtime story made for your child",
      "builder.intro.eyebrow": "Create tonight's adventure",
      "builder.intro.title": "Tell Milo a little about your child.",
      "builder.intro.body": "In three short steps, MoonTale will create a warm story preview with gentle language learning woven into the adventure.",
      "builder.intro.miloAlt": "Milo the Moonbear waving",
      "builder.progress.label": "Story builder progress",
      "builder.progress.child": "Child",
      "builder.progress.story": "Story",
      "builder.progress.goal": "Goal",
      "builder.form.title": "MoonTale story builder",
      "builder.step1.label": "Step 1 of 3",
      "builder.step1.title": "Who is tonight's story for?",
      "builder.step1.description": "These details help Milo make the adventure feel familiar.",
      "builder.fields.childName": "Child's name",
      "builder.placeholders.childName": "e.g. Emma",
      "builder.fields.childAge": "Child's age",
      "builder.options.chooseAge": "Choose age",
      "builder.options.age3": "3 years old",
      "builder.options.age4": "4 years old",
      "builder.options.age5": "5 years old",
      "builder.options.age6": "6 years old",
      "builder.options.age7": "7 years old",
      "builder.options.age8": "8 years old",
      "builder.options.age9": "9 years old",
      "builder.options.age10": "10 years old",
      "builder.fields.currentLanguage": "Current language",
      "builder.fields.targetLanguage": "Language to learn",
      "builder.options.chooseLanguage": "Choose language",
      "builder.step2.label": "Step 2 of 3",
      "builder.step2.title": "What kind of adventure will they love?",
      "builder.step2.description": "Choose the ingredients for tonight's magical world.",
      "builder.fields.character": "Favorite character",
      "builder.fields.mood": "Story mood",
      "builder.fields.interest": "Favorite interest",
      "builder.placeholders.interest": "e.g. stars, trains, butterflies",
      "builder.step3.label": "Step 3 of 3",
      "builder.step3.title": "What should tonight's story nurture?",
      "builder.step3.description": "Milo will gently shape the ending around your goal.",
      "builder.fields.goal": "Parent goal",
      "builder.fields.newWordsCount": "Number of new words",
      "builder.options.chooseNumber": "Choose number",
      "builder.options.oneWord": "1 new word",
      "builder.options.twoWords": "2 new words",
      "builder.options.threeWords": "3 new words",
      "builder.options.fourWords": "4 new words",
      "builder.options.fiveWords": "5 new words",
      "builder.fields.readingTime": "Reading time",
      "builder.options.chooseLength": "Choose length",
      "builder.options.threeMin": "3 min",
      "builder.options.fiveMin": "5 min",
      "builder.options.eightMin": "8 min",
      "builder.consent": "I agree to store these details in this browser to create the preview.",
      "builder.buttons.back": "Back",
      "builder.buttons.continue": "Continue",
      "builder.buttons.generate": "Create Tonight's Story",
      "builder.status.creating": "Creating your story...",
      "builder.status.ready": "Your story is ready. Opening it now...",
      "builder.footer.note": "Made for calm family moments. Your builder details stay in this browser.",
      "story.skip": "Skip to story",
      "story.header.createAnother": "Create another story",
      "story.hero.eyebrow": "Tonight's MoonTale",
      "story.hero.defaultTitle": "Your magical bedtime story",
      "story.hero.defaultReadingTime": "5 minute read",
      "story.hero.defaultWords": "3 new words",
      "story.hero.guidedBy": "Guided by Milo",
      "story.hero.miloAlt": "Milo the Moonbear, tonight's storytelling guide",
      "story.ending": "And under the quiet moon, everyone slept peacefully.",
      "story.sidebar.discovery": "Language discovery",
      "story.sidebar.wordsTitle": "Tonight's New Words",
      "story.sidebar.intention": "A gentle intention",
      "story.sidebar.goalTitle": "Tonight's Learning Goal",
      "story.sidebar.grownups": "For grown-ups",
      "story.sidebar.tipTitle": "Parent Bedtime Tip",
      "story.actions.eyebrow": "Make tonight your own",
      "story.actions.title": "Try another magical combination.",
      "story.actions.button": "Create Another Story",
      "story.waitlist.eyebrow": "The story can continue",
      "story.waitlist.title": "Want a personalized bedtime story every night?",
      "story.waitlist.body": "Join the MoonTale waitlist for early access, product updates, and invitations to test new family storytelling features.",
      "story.footer.tagline": "A personalized learning and bedtime companion for children.",
      "form.status.submitting": "Joining...",
      "form.status.success": "Thank you! You're on the MoonTale waitlist.",
      "form.status.error": "Something went wrong. Please try again.",
      "form.error.required": "Please complete this field.",
      "form.error.email": "Please enter a valid email address.",
      "form.error.choice": "Please choose one option.",
      "form.error.consent": "Please confirm before creating the story.",
      "list.and": "and",
      "story.readingTime": "{minutes} minute read",
      "story.newWords.one": "{count} new word",
      "story.newWords.many": "{count} new words",
      "story.languageMeta": "{language} · {words}",
      "story.generated.title": "{childName} and the Moonlit {character} Adventure",
      "story.generated.paragraph1": "When the sky turned soft and silver, {childName} found Milo waiting beside a tiny glowing map. \"Tonight,\" Milo whispered, \"we are following {interest} into a {mood} adventure.\"",
      "story.generated.paragraph2": "Along the path, Milo showed {childName} {wordPhrase}. Each word glowed like a little lantern, and {childName} repeated it softly before the path turned bright again.",
      "story.generated.paragraph3": "Soon a friendly {character} appeared and invited them to solve a tiny moon puzzle. They listened, tried again, and discovered that every brave step made the night feel kinder.",
      "story.generated.paragraph4": "When the adventure ended, Milo tucked the glowing words into {childName}'s pocket of dreams. {childName} felt proud, sleepy, and ready to carry the new words into tomorrow.",
      "story.generated.vocabIntro": "Learning {targetLanguage} with meanings in {siteLanguage}.",
      "story.generated.goalLine": "{goal}: {lesson}",
      "story.lesson.Language learning": "Notice each new word and say it gently together.",
      "story.lesson.Build reading habit": "End with one favorite sentence so reading feels like a small daily win.",
      "story.lesson.Improve bedtime routine": "Use the same calm closing line tomorrow to make bedtime predictable.",
      "story.lesson.Confidence": "Celebrate one brave choice your child made in the story.",
      "story.lesson.Courage": "Talk about how courage can be quiet, small, and still important.",
      "story.lesson.Kindness": "Ask who in the story needed kindness and how your child noticed.",
      "story.generated.parentTip": "After reading, invite your child to choose one {targetLanguage} word and use it in a tiny bedtime sentence.",
      "story.defaults.childName": "your child",
      "story.defaults.interest": "moonbeams",
    },
    pl: {
      "meta.home.title": "MoonTale - Nauka języków przez bajki na dobranoc",
      "meta.home.description": "MoonTale zmienia wieczór w spersonalizowaną przygodę językową dla dzieci i rodzin.",
      "meta.builder.title": "Stwórz bajkę - MoonTale",
      "meta.builder.description": "Stwórz spersonalizowaną bajkę MoonTale na dobranoc dla swojego dziecka.",
      "meta.story.title": "Twoja bajka na dobranoc - MoonTale",
      "meta.story.description": "Przeczytaj podgląd swojej spersonalizowanej bajki MoonTale na dobranoc.",
      "common.skipContent": "Przejdź do treści",
      "common.mainNavigation": "Główna nawigacja",
      "common.homeLabel": "Strona główna MoonTale",
      "common.languageSelector": "Wybierz język",
      "common.parentEmail": "Email rodzica",
      "common.joinWaitlist": "Dołącz do listy",
      "common.waitlistMicrocopy": "Tylko aktualizacje o wcześniejszym dostępie. Możesz zrezygnować w każdej chwili.",
      "common.email": "Email",
      "language.English": "angielski",
      "language.Polish": "polski",
      "language.Spanish": "hiszpański",
      "language.French": "francuski",
      "language.German": "niemiecki",
      "option.character.Astronaut": "Astronauta",
      "option.character.Dinosaur": "Dinozaur",
      "option.character.Princess": "Księżniczka",
      "option.character.Animal": "Zwierzątko",
      "option.character.Robot": "Robot",
      "option.mood.Calm": "Spokojna",
      "option.mood.Magical": "Magiczna",
      "option.mood.Funny": "Zabawna",
      "option.mood.Adventurous": "Przygodowa",
      "option.goal.Language learning": "Nauka języka",
      "option.goal.Build reading habit": "Budowanie nawyku czytania",
      "option.goal.Improve bedtime routine": "Lepsza wieczorna rutyna",
      "option.goal.Confidence": "Pewność siebie",
      "option.goal.Courage": "Odwaga",
      "option.goal.Kindness": "Życzliwość",
      "home.header.cta": "Uzyskaj wcześniejszy dostęp",
      "home.hero.eyebrow": "Nauka języków z odrobiną magii",
      "home.hero.title": "Pomóż dziecku uczyć się nowego języka przez bajki na dobranoc, które pokocha.",
      "home.hero.intro": "Spersonalizowane bajki tworzone wokół zainteresowań dziecka sprawiają, że nauka języka jest naturalna, czytanie ciekawsze, a wieczór staje się chwilą bliskości.",
      "home.hero.benefitsLabel": "Korzyści MoonTale",
      "home.hero.benefit1": "Buduje nawyk czytania",
      "home.hero.benefit2": "Naturalnie wprowadza nowy język",
      "home.hero.benefit3": "Tworzy spokojne, znaczące wieczorne rytuały",
      "home.hero.benefit4": "Wspiera wyobraźnię i ciekawość",
      "home.hero.primaryCta": "Stwórz darmową bajkę na dobranoc",
      "home.hero.secondaryCta": "Zobacz przykładową bajkę",
      "home.hero.microcopy": "Bez konta. Spersonalizowany podgląd powstaje w około dwie minuty.",
      "home.hero.artLabel": "Milo obok magicznego księżyca i otwartej książki",
      "home.hero.miloAlt": "Milo, księżycowy miś i przewodnik po opowieściach MoonTale",
      "home.hero.miloGreeting": "Cześć, jestem Milo, księżycowy miś.",
      "home.hero.miloText": "Poprowadzę Twoje dziecko przez magiczne przygody na dobranoc, podczas których odkryje nowe słowa, pomysły i kultury.",
      "home.problem.eyebrow": "Stworzone wokół prawdziwego życia rodzinnego",
      "home.problem.title": "Problem",
      "home.problem.lead": "Rodzice chcą, aby czytanie, nauka i zasypianie były przyjemniejsze. Dziś często muszą wybierać między produktami, które rozwiązują tylko jedną część układanki.",
      "home.problem.parentsWant": "Rodzice chcą",
      "home.problem.want1": "Pomóc dzieciom więcej czytać",
      "home.problem.want2": "Wcześnie wprowadzić drugi język",
      "home.problem.want3": "Ograniczyć bierny czas przed ekranem",
      "home.problem.want4": "Tworzyć spokojniejsze wieczorne rutyny",
      "home.problem.want5": "Spędzać razem więcej wartościowego czasu",
      "home.problem.solutionsAre": "Ale większość rozwiązań to",
      "home.problem.solution1": "Ogólne bajki na dobranoc",
      "home.problem.solution2": "Aplikacje edukacyjne, które przypominają lekcje",
      "home.problem.solution3": "Rozrywka, która nie wspiera nauki",
      "home.problem.conclusion": "MoonTale łączy naukę, wyobraźnię i rodzinne więzi w jednym doświadczeniu.",
      "home.transformation.eyebrow": "Mały rytuał, duża zmiana",
      "home.transformation.title": "Przed i po MoonTale",
      "home.transformation.before": "Przed MoonTale",
      "home.transformation.before1": "Ogólne bajki na dobranoc",
      "home.transformation.before2": "Bierny czas przed ekranem",
      "home.transformation.before3": "Dzieci tracą zainteresowanie czytaniem",
      "home.transformation.before4": "Nauka języka przypomina pracę domową",
      "home.transformation.before5": "Wieczór bywa powtarzalny albo stresujący",
      "home.transformation.after": "Po MoonTale",
      "home.transformation.after1": "Bajki dopasowane do zainteresowań dziecka",
      "home.transformation.after2": "Naturalny kontakt z nowym językiem",
      "home.transformation.after3": "Więcej radości z czytania",
      "home.transformation.after4": "Spokojniejsze wieczorne rutyny",
      "home.transformation.after5": "Silniejsza więź rodzica z dzieckiem",
      "home.how.eyebrow": "Od Twojej rodziny do ich opowieści",
      "home.how.title": "Jak to działa.",
      "home.how.lead": "Przemyślany wieczorny proces zamienia to, co dziecko już kocha, w łagodne doświadczenie edukacyjne.",
      "home.how.step1Title": "Dodaj ich świat",
      "home.how.step1Text": "Podaj imię, wiek, zainteresowania, ulubione motywy i poziom czytania dziecka.",
      "home.how.step2Title": "Wybierz język",
      "home.how.step2Text": "Wybierz cel, taki jak angielski, hiszpański, francuski, niemiecki albo polski.",
      "home.how.step3Title": "Dodaj wspomnienie",
      "home.how.step3Text": "Użyj podróży, zwierzaka, zabawki lub rodzinnego zdjęcia jako inspiracji do dzisiejszej przygody.",
      "home.how.step4Title": "Czytajcie razem",
      "home.how.step4Text": "Cieszcie się spokojną bajką ze znajomymi szczegółami, łagodnym słownictwem i relaksującym zakończeniem.",
      "home.photo.memoryText": "Rodzinne wspomnienie zmienia się w",
      "home.photo.memoryTitle": "Przygodę na Tajemniczej Wyspie",
      "home.photo.eyebrow": "Zdjęcie w bajkę",
      "home.photo.title": "Zamień rodzinne zdjęcia w magiczne bajki na dobranoc.",
      "home.photo.body": "Zdjęcie z plaży może stać się piracką wyprawą, zdjęcie ze zwierzakiem leśną misją, a urodzinowe wspomnienie magicznym świętem. Każda opowieść jest osobista, pełna emocji i wyjątkowa dla rodziny.",
      "home.sample.eyebrow": "Zajrzyj do środka",
      "home.sample.title": "Podgląd dzisiejszej bajki.",
      "home.sample.textBefore": "Dziś Emma i Milo wędrują przez senny księżycowy las, ucząc się hiszpańskich słów",
      "home.sample.textAnd": "i",
      "home.sample.textAfter": "Słowa pojawiają się naturalnie, z łagodnym powtórzeniem i znaczeniem wynikającym z kontekstu.",
      "home.sample.vocabLabel": "Hiszpańskie słownictwo w przykładowej bajce",
      "home.sample.wordMoon": "księżyc",
      "home.sample.wordStar": "gwiazda",
      "home.sample.wordForest": "las",
      "home.research.eyebrow": "Przemyślane z założenia",
      "home.research.title": "Oparte na tym, co wiemy o uczeniu się dzieci",
      "home.research.lead": "MoonTale czerpie z ustalonych wskazówek dotyczących wspólnego czytania, responsywnej interakcji, wczesnej edukacji czytelniczej i stałych rodzinnych rytuałów. Używamy ostrożnego języka, bo zaufanie ma znaczenie.",
      "home.research.card1": "Dowody pokazują, że wspólne czytanie wspiera język, umiejętność czytania i zdrowe relacje.",
      "home.research.card2": "Badania sugerują, że responsywna wymiana pomaga rozwijać mózg dziecka.",
      "home.research.card3": "Badania wskazują, że radość z czytania i częstotliwość czytania są mocno powiązane z kompetencjami czytelniczymi.",
      "home.research.card4": "Wczesne doświadczenia z książkami mogą wspierać rozwój słownictwa i języka.",
      "home.research.sourceLink": "Zobacz źródło ↗",
      "home.research.note": "MoonTale jest narzędziem wspierającym edukację, a nie zamiennikiem książek, nauczycieli, opiekunów ani profesjonalnej porady rozwojowej.",
      "home.why.eyebrow": "Więcej niż prompt AI",
      "home.why.title": "Dlaczego MoonTale?",
      "home.why.body": "Ogólna sztuczna inteligencja potrafi wygenerować tekst. MoonTale to spersonalizowany towarzysz nauki i wieczornego czytania, zaprojektowany wokół dzieci, rodziców i rytmu życia rodzinnego.",
      "home.why.feature1": "Opowieści dopasowane do wieku",
      "home.why.feature2": "Treści bezpieczne dla dzieci",
      "home.why.feature3": "Motywy kontrolowane przez rodzica",
      "home.why.feature4": "Spersonalizowane przygody",
      "home.why.feature5": "Wsparcie nauki języka",
      "home.why.feature6": "Doświadczenie skupione na dobranocy",
      "home.why.feature7": "Stała jakość opowieści",
      "home.why.feature8": "Projektowanie nawyku czytania",
      "home.platform.eyebrow": "Zaczynamy od dobranocy",
      "home.platform.title": "Jeden rytuał dziś. Towarzysz nauki na lata.",
      "home.platform.body": "MoonTale zaczyna od spersonalizowanych bajek na dobranoc, a potem rośnie razem z zainteresowaniami dziecka, celami językowymi, pewnością czytania i rodzinnymi wspomnieniami. Długoterminowo może stać się zaufaną platformą opowieści, czytania, języków i odkrywania kultur.",
      "home.founder.eyebrow": "Osobista misja",
      "home.founder.title": "Dlaczego buduję MoonTale",
      "home.founder.quote": "Jako student i sportowiec widziałem, jak wielką moc mają regularne nawyki. MoonTale zaczęło się od prostego pytania: jak sprawić, by dzieci czekały na czytanie każdego wieczoru, a nauka języka była naturalna, emocjonalna i radosna? Buduję MoonTale, by pomagać rodzinom zamieniać dobranoc w chwilę nauki, wyobraźni i bliskości.",
      "home.join.eyebrow": "Buduj z nami",
      "home.join.title": "Pomóż kształtować MoonTale.",
      "home.join.body": "MoonTale jest na wczesnym etapie rozwoju. Dołącz do listy oczekujących, aby otrzymywać aktualizacje, testować pierwszą wersję i pomagać budować lepszy sposób nauki dzieci przez bajki na dobranoc.",
      "home.footer.tagline": "© 2026 MoonTale. Nauka języków przez opowieści, które kochają rodziny.",
      "builder.skip": "Przejdź do kreatora bajki",
      "builder.header.note": "Bajka na dobranoc stworzona dla Twojego dziecka",
      "builder.intro.eyebrow": "Stwórz dzisiejszą przygodę",
      "builder.intro.title": "Opowiedz Milo trochę o swoim dziecku.",
      "builder.intro.body": "W trzech krótkich krokach MoonTale stworzy ciepły podgląd bajki z delikatną nauką języka wplecioną w przygodę.",
      "builder.intro.miloAlt": "Milo, księżycowy miś, macha łapką",
      "builder.progress.label": "Postęp kreatora bajki",
      "builder.progress.child": "Dziecko",
      "builder.progress.story": "Bajka",
      "builder.progress.goal": "Cel",
      "builder.form.title": "Kreator bajek MoonTale",
      "builder.step1.label": "Krok 1 z 3",
      "builder.step1.title": "Dla kogo jest dzisiejsza bajka?",
      "builder.step1.description": "Te szczegóły pomagają Milo stworzyć przygodę, która brzmi znajomo.",
      "builder.fields.childName": "Imię dziecka",
      "builder.placeholders.childName": "np. Emma",
      "builder.fields.childAge": "Wiek dziecka",
      "builder.options.chooseAge": "Wybierz wiek",
      "builder.options.age3": "3 lata",
      "builder.options.age4": "4 lata",
      "builder.options.age5": "5 lat",
      "builder.options.age6": "6 lat",
      "builder.options.age7": "7 lat",
      "builder.options.age8": "8 lat",
      "builder.options.age9": "9 lat",
      "builder.options.age10": "10 lat",
      "builder.fields.currentLanguage": "Obecny język",
      "builder.fields.targetLanguage": "Język do nauki",
      "builder.options.chooseLanguage": "Wybierz język",
      "builder.step2.label": "Krok 2 z 3",
      "builder.step2.title": "Jaką przygodę dziecko pokocha?",
      "builder.step2.description": "Wybierz składniki dzisiejszego magicznego świata.",
      "builder.fields.character": "Ulubiona postać",
      "builder.fields.mood": "Nastrój bajki",
      "builder.fields.interest": "Ulubione zainteresowanie",
      "builder.placeholders.interest": "np. gwiazdy, pociągi, motyle",
      "builder.step3.label": "Krok 3 z 3",
      "builder.step3.title": "Co ma wspierać dzisiejsza bajka?",
      "builder.step3.description": "Milo delikatnie dopasuje zakończenie do Twojego celu.",
      "builder.fields.goal": "Cel rodzica",
      "builder.fields.newWordsCount": "Liczba nowych słów",
      "builder.options.chooseNumber": "Wybierz liczbę",
      "builder.options.oneWord": "1 nowe słowo",
      "builder.options.twoWords": "2 nowe słowa",
      "builder.options.threeWords": "3 nowe słowa",
      "builder.options.fourWords": "4 nowe słowa",
      "builder.options.fiveWords": "5 nowych słów",
      "builder.fields.readingTime": "Czas czytania",
      "builder.options.chooseLength": "Wybierz długość",
      "builder.options.threeMin": "3 min",
      "builder.options.fiveMin": "5 min",
      "builder.options.eightMin": "8 min",
      "builder.consent": "Zgadzam się zapisać te szczegóły w tej przeglądarce, aby stworzyć podgląd.",
      "builder.buttons.back": "Wstecz",
      "builder.buttons.continue": "Dalej",
      "builder.buttons.generate": "Stwórz dzisiejszą bajkę",
      "builder.status.creating": "Tworzę Twoją bajkę...",
      "builder.status.ready": "Bajka jest gotowa. Otwieram ją teraz...",
      "builder.footer.note": "Stworzone dla spokojnych rodzinnych chwil. Dane kreatora zostają w tej przeglądarce.",
      "story.skip": "Przejdź do bajki",
      "story.header.createAnother": "Stwórz kolejną bajkę",
      "story.hero.eyebrow": "Dzisiejsze MoonTale",
      "story.hero.defaultTitle": "Twoja magiczna bajka na dobranoc",
      "story.hero.defaultReadingTime": "5 min czytania",
      "story.hero.defaultWords": "3 nowe słowa",
      "story.hero.guidedBy": "Z przewodnikiem Milo",
      "story.hero.miloAlt": "Milo, księżycowy miś, dzisiejszy przewodnik po opowieści",
      "story.ending": "A pod cichym księżycem wszyscy zasnęli spokojnie.",
      "story.sidebar.discovery": "Odkrywanie języka",
      "story.sidebar.wordsTitle": "Dzisiejsze nowe słowa",
      "story.sidebar.intention": "Łagodna intencja",
      "story.sidebar.goalTitle": "Dzisiejszy cel nauki",
      "story.sidebar.grownups": "Dla dorosłych",
      "story.sidebar.tipTitle": "Wskazówka na dobranoc dla rodzica",
      "story.actions.eyebrow": "Dopasuj dzisiejszy wieczór",
      "story.actions.title": "Wypróbuj inne magiczne połączenie.",
      "story.actions.button": "Stwórz kolejną bajkę",
      "story.waitlist.eyebrow": "Opowieść może trwać dalej",
      "story.waitlist.title": "Chcesz spersonalizowaną bajkę na dobranoc każdego wieczoru?",
      "story.waitlist.body": "Dołącz do listy MoonTale, aby otrzymywać wcześniejszy dostęp, aktualizacje produktu i zaproszenia do testowania nowych funkcji rodzinnego opowiadania.",
      "story.footer.tagline": "Spersonalizowany towarzysz nauki i dobranocki dla dzieci.",
      "form.status.submitting": "Dołączanie...",
      "form.status.success": "Dziękujemy! Jesteś na liście MoonTale.",
      "form.status.error": "Coś poszło nie tak. Spróbuj ponownie.",
      "form.error.required": "Uzupełnij to pole.",
      "form.error.email": "Wpisz poprawny adres email.",
      "form.error.choice": "Wybierz jedną opcję.",
      "form.error.consent": "Potwierdź zgodę przed stworzeniem bajki.",
      "list.and": "i",
      "story.readingTime": "{minutes} min czytania",
      "story.newWords.one": "{count} nowe słowo",
      "story.newWords.many": "{count} nowe słowa",
      "story.languageMeta": "{language} · {words}",
      "story.generated.title": "{childName} i księżycowa przygoda z postacią: {character}",
      "story.generated.paragraph1": "Kiedy niebo stało się miękkie i srebrne, {childName} zobaczył(a) Milo obok małej świecącej mapy. „Dziś”, szepnął Milo, „idziemy za tym, co kochasz: {interest}, prosto w {mood} przygodę”.",
      "story.generated.paragraph2": "Po drodze Milo pokazał dziecku {wordPhrase}. Każde słowo świeciło jak mała latarenka, a {childName} powtarzał(a) je cicho, zanim ścieżka znów rozbłysła.",
      "story.generated.paragraph3": "Wkrótce pojawiła się przyjazna postać: {character}, i zaprosiła ich do rozwiązania małej księżycowej zagadki. Słuchali, próbowali jeszcze raz i odkryli, że każdy odważny krok czyni noc łagodniejszą.",
      "story.generated.paragraph4": "Gdy przygoda dobiegła końca, Milo schował świecące słowa do kieszonki snów dziecka. {childName} poczuł(a) dumę, senność i gotowość, by zabrać nowe słowa w jutrzejszy dzień.",
      "story.generated.vocabIntro": "Nauka języka: {targetLanguage}. Znaczenia są w języku: {siteLanguage}.",
      "story.generated.goalLine": "{goal}: {lesson}",
      "story.lesson.Language learning": "Zauważcie każde nowe słowo i powiedzcie je razem spokojnym głosem.",
      "story.lesson.Build reading habit": "Zakończcie jednym ulubionym zdaniem, żeby czytanie było małym codziennym sukcesem.",
      "story.lesson.Improve bedtime routine": "Jutro użyjcie tej samej spokojnej formuły zakończenia, aby wieczór był przewidywalny.",
      "story.lesson.Confidence": "Nazwij jedną odważną decyzję dziecka w opowieści.",
      "story.lesson.Courage": "Porozmawiajcie o tym, że odwaga może być cicha, mała i nadal bardzo ważna.",
      "story.lesson.Kindness": "Zapytaj, kto w bajce potrzebował życzliwości i po czym dziecko to poznało.",
      "story.generated.parentTip": "Po czytaniu poproś dziecko, aby wybrało jedno słowo z języka {targetLanguage} i użyło go w krótkim zdaniu na dobranoc.",
      "story.defaults.childName": "Twoje dziecko",
      "story.defaults.interest": "księżycowe promienie",
    },
    es: {
      "meta.home.title": "MoonTale - Aprender idiomas con cuentos para dormir",
      "meta.home.description": "MoonTale convierte la hora de dormir en una aventura personalizada de aprendizaje de idiomas para niños y familias.",
      "meta.builder.title": "Crear un cuento - MoonTale",
      "meta.builder.description": "Crea un cuento personalizado de MoonTale para dormir para tu hijo.",
      "meta.story.title": "Tu cuento para dormir - MoonTale",
      "meta.story.description": "Lee la vista previa de tu cuento personalizado de MoonTale.",
      "common.skipContent": "Saltar al contenido",
      "common.mainNavigation": "Navegación principal",
      "common.homeLabel": "Inicio de MoonTale",
      "common.languageSelector": "Elegir idioma",
      "common.parentEmail": "Email del padre o madre",
      "common.joinWaitlist": "Unirse a la lista",
      "common.waitlistMicrocopy": "Solo enviaremos novedades de acceso anticipado. Puedes darte de baja cuando quieras.",
      "common.email": "Email",
      "language.English": "inglés",
      "language.Polish": "polaco",
      "language.Spanish": "español",
      "language.French": "francés",
      "language.German": "alemán",
      "option.character.Astronaut": "Astronauta",
      "option.character.Dinosaur": "Dinosaurio",
      "option.character.Princess": "Princesa",
      "option.character.Animal": "Animal",
      "option.character.Robot": "Robot",
      "option.mood.Calm": "Tranquilo",
      "option.mood.Magical": "Mágico",
      "option.mood.Funny": "Divertido",
      "option.mood.Adventurous": "Aventurero",
      "option.goal.Language learning": "Aprender idiomas",
      "option.goal.Build reading habit": "Crear hábito de lectura",
      "option.goal.Improve bedtime routine": "Mejorar la rutina de dormir",
      "option.goal.Confidence": "Confianza",
      "option.goal.Courage": "Valentía",
      "option.goal.Kindness": "Amabilidad",
      "home.header.cta": "Acceso anticipado",
      "home.hero.eyebrow": "Aprender idiomas, con magia",
      "home.hero.title": "Ayuda a tu hijo a aprender un nuevo idioma con cuentos para dormir que le encantarán.",
      "home.hero.intro": "Cuentos personalizados según los intereses de tu hijo, para que aprender idiomas sea natural, leer sea emocionante y la hora de dormir sea un momento de conexión.",
      "home.hero.benefitsLabel": "Beneficios de MoonTale",
      "home.hero.benefit1": "Crea hábitos de lectura",
      "home.hero.benefit2": "Introduce un nuevo idioma de forma natural",
      "home.hero.benefit3": "Crea rutinas tranquilas y significativas",
      "home.hero.benefit4": "Fomenta la imaginación y la curiosidad",
      "home.hero.primaryCta": "Crear un cuento gratis",
      "home.hero.secondaryCta": "Ver un cuento de ejemplo",
      "home.hero.microcopy": "Sin cuenta. Crea una vista previa personalizada en unos dos minutos.",
      "home.hero.artLabel": "Milo junto a una luna mágica y un libro abierto",
      "home.hero.miloAlt": "Milo, el osito lunar y guía de cuentos de MoonTale",
      "home.hero.miloGreeting": "Hola, soy Milo, el osito lunar.",
      "home.hero.miloText": "Guiaré a tu hijo por aventuras mágicas antes de dormir mientras descubre nuevas palabras, ideas y culturas.",
      "home.problem.eyebrow": "Pensado para la vida familiar real",
      "home.problem.title": "El problema",
      "home.problem.lead": "Las familias quieren que leer, aprender y dormir se sienta mejor. Hoy a menudo deben elegir entre productos que resuelven solo una parte del problema.",
      "home.problem.parentsWant": "Las familias quieren",
      "home.problem.want1": "Ayudar a sus hijos a leer más",
      "home.problem.want2": "Introducir pronto un segundo idioma",
      "home.problem.want3": "Reducir el tiempo pasivo frente a pantallas",
      "home.problem.want4": "Crear rutinas de dormir más tranquilas",
      "home.problem.want5": "Pasar juntos tiempo con más significado",
      "home.problem.solutionsAre": "Pero la mayoría de soluciones son",
      "home.problem.solution1": "Cuentos genéricos para dormir",
      "home.problem.solution2": "Apps educativas que parecen lecciones",
      "home.problem.solution3": "Entretenimiento que no apoya el aprendizaje",
      "home.problem.conclusion": "MoonTale une aprendizaje, imaginación y conexión familiar en una sola experiencia.",
      "home.transformation.eyebrow": "Un pequeño ritual transformado",
      "home.transformation.title": "Antes y después de MoonTale",
      "home.transformation.before": "Antes de MoonTale",
      "home.transformation.before1": "Cuentos genéricos para dormir",
      "home.transformation.before2": "Tiempo pasivo frente a pantallas",
      "home.transformation.before3": "Los niños pierden interés por la lectura",
      "home.transformation.before4": "Aprender idiomas se siente como tarea",
      "home.transformation.before5": "La hora de dormir puede sentirse repetitiva o estresante",
      "home.transformation.after": "Después de MoonTale",
      "home.transformation.after1": "Cuentos creados según los intereses de tu hijo",
      "home.transformation.after2": "Exposición natural a un nuevo idioma",
      "home.transformation.after3": "Más entusiasmo por leer",
      "home.transformation.after4": "Rutinas más tranquilas antes de dormir",
      "home.transformation.after5": "Una conexión más fuerte entre adulto y niño",
      "home.how.eyebrow": "De tu familia a su cuento",
      "home.how.title": "Cómo funciona.",
      "home.how.lead": "Un flujo pensado para la hora de dormir que convierte lo que tu hijo ya ama en una experiencia suave de aprendizaje.",
      "home.how.step1Title": "Añade su mundo",
      "home.how.step1Text": "Comparte su nombre, edad, intereses, temas favoritos y nivel de lectura.",
      "home.how.step2Title": "Elige un idioma",
      "home.how.step2Text": "Selecciona un objetivo como inglés, español, francés, alemán o polaco.",
      "home.how.step3Title": "Añade un recuerdo",
      "home.how.step3Text": "Usa un viaje, una mascota, un juguete o una foto familiar como inspiración para la aventura de hoy.",
      "home.how.step4Title": "Lean juntos",
      "home.how.step4Text": "Disfruten de un cuento tranquilo con detalles familiares, vocabulario suave y un final relajante.",
      "home.photo.memoryText": "Un recuerdo familiar se convierte en",
      "home.photo.memoryTitle": "La aventura de la isla secreta",
      "home.photo.eyebrow": "De foto a cuento",
      "home.photo.title": "Convierte fotos familiares en cuentos mágicos para dormir.",
      "home.photo.body": "Una foto en la playa puede convertirse en un viaje pirata, una foto con una mascota en una misión por el bosque y un recuerdo de cumpleaños en una celebración mágica. Cada cuento se siente personal, emotivo y único para la familia.",
      "home.sample.eyebrow": "Un vistazo por dentro",
      "home.sample.title": "Vista previa del cuento de hoy.",
      "home.sample.textBefore": "Esta noche, Emma y Milo viajan por un bosque lunar dormido mientras aprenden las palabras en español",
      "home.sample.textAnd": "y",
      "home.sample.textAfter": "Las palabras aparecen de forma natural, con repetición suave y significado por contexto.",
      "home.sample.vocabLabel": "Vocabulario español del cuento de ejemplo",
      "home.sample.wordMoon": "luna",
      "home.sample.wordStar": "estrella",
      "home.sample.wordForest": "bosque",
      "home.research.eyebrow": "Diseñado con cuidado",
      "home.research.title": "Basado en lo que sabemos sobre el aprendizaje infantil",
      "home.research.lead": "MoonTale se inspira en orientaciones establecidas sobre lectura compartida, interacción receptiva, alfabetización temprana y rutinas familiares constantes. Usamos un lenguaje cuidadoso porque la confianza importa.",
      "home.research.card1": "La evidencia muestra que la lectura compartida apoya el lenguaje, la alfabetización y las relaciones saludables.",
      "home.research.card2": "La investigación sugiere que la interacción receptiva de ida y vuelta ayuda a desarrollar el cerebro.",
      "home.research.card3": "Los estudios indican que el disfrute y la frecuencia de la lectura están muy ligados a la alfabetización.",
      "home.research.card4": "Las experiencias tempranas de lectura pueden contribuir al crecimiento del vocabulario y del lenguaje.",
      "home.research.sourceLink": "Ver fuente ↗",
      "home.research.note": "MoonTale es una herramienta de apoyo educativo, no sustituye a libros, docentes, cuidadores ni asesoramiento profesional sobre desarrollo.",
      "home.why.eyebrow": "Más que un prompt de IA",
      "home.why.title": "¿Por qué MoonTale?",
      "home.why.body": "La IA general puede generar texto. MoonTale es un compañero personalizado de aprendizaje y hora de dormir, creado alrededor de los niños, los padres y el ritmo de la vida familiar.",
      "home.why.feature1": "Cuentos adecuados para la edad",
      "home.why.feature2": "Contenido seguro para niños",
      "home.why.feature3": "Temas controlados por los padres",
      "home.why.feature4": "Aventuras personalizadas",
      "home.why.feature5": "Apoyo para aprender idiomas",
      "home.why.feature6": "Experiencia centrada en la hora de dormir",
      "home.why.feature7": "Calidad constante de los cuentos",
      "home.why.feature8": "Diseño para crear hábito de lectura",
      "home.platform.eyebrow": "Empezamos con la hora de dormir",
      "home.platform.title": "Un ritual hoy. Un compañero de aprendizaje durante años.",
      "home.platform.body": "MoonTale comienza con cuentos personalizados para dormir y crece con los intereses, objetivos de idioma, confianza lectora y recuerdos familiares de cada niño. La oportunidad a largo plazo es una plataforma confiable para cuentos, alfabetización, idiomas y descubrimiento cultural.",
      "home.founder.eyebrow": "Una misión personal",
      "home.founder.title": "Por qué estoy creando MoonTale",
      "home.founder.quote": "Como estudiante y deportista, he visto lo poderosos que pueden ser los hábitos constantes. MoonTale nació de una pregunta sencilla: ¿cómo podemos ayudar a que los niños esperen con ilusión leer cada noche mientras el aprendizaje de idiomas se siente natural, emocional y divertido? Estoy creando MoonTale para ayudar a las familias a convertir la hora de dormir en un momento de aprendizaje, imaginación y conexión.",
      "home.join.eyebrow": "Construyámoslo juntos",
      "home.join.title": "Ayuda a dar forma a MoonTale.",
      "home.join.body": "MoonTale está en desarrollo temprano. Únete a la lista para recibir novedades, probar la primera versión y ayudar a construir una forma mejor de aprender con cuentos para dormir.",
      "home.footer.tagline": "© 2026 MoonTale. Aprender idiomas con cuentos que las familias aman.",
      "builder.skip": "Saltar al creador de cuentos",
      "builder.header.note": "Un cuento para dormir hecho para tu hijo",
      "builder.intro.eyebrow": "Crea la aventura de esta noche",
      "builder.intro.title": "Cuéntale a Milo un poco sobre tu hijo.",
      "builder.intro.body": "En tres pasos cortos, MoonTale creará una vista previa cálida con aprendizaje de idiomas entrelazado en la aventura.",
      "builder.intro.miloAlt": "Milo, el osito lunar, saludando",
      "builder.progress.label": "Progreso del creador de cuentos",
      "builder.progress.child": "Niño",
      "builder.progress.story": "Cuento",
      "builder.progress.goal": "Objetivo",
      "builder.form.title": "Creador de cuentos MoonTale",
      "builder.step1.label": "Paso 1 de 3",
      "builder.step1.title": "¿Para quién es el cuento de esta noche?",
      "builder.step1.description": "Estos detalles ayudan a Milo a hacer que la aventura se sienta familiar.",
      "builder.fields.childName": "Nombre del niño",
      "builder.placeholders.childName": "p. ej. Emma",
      "builder.fields.childAge": "Edad del niño",
      "builder.options.chooseAge": "Elegir edad",
      "builder.options.age3": "3 años",
      "builder.options.age4": "4 años",
      "builder.options.age5": "5 años",
      "builder.options.age6": "6 años",
      "builder.options.age7": "7 años",
      "builder.options.age8": "8 años",
      "builder.options.age9": "9 años",
      "builder.options.age10": "10 años",
      "builder.fields.currentLanguage": "Idioma actual",
      "builder.fields.targetLanguage": "Idioma a aprender",
      "builder.options.chooseLanguage": "Elegir idioma",
      "builder.step2.label": "Paso 2 de 3",
      "builder.step2.title": "¿Qué tipo de aventura le encantará?",
      "builder.step2.description": "Elige los ingredientes del mundo mágico de esta noche.",
      "builder.fields.character": "Personaje favorito",
      "builder.fields.mood": "Ambiente del cuento",
      "builder.fields.interest": "Interés favorito",
      "builder.placeholders.interest": "p. ej. estrellas, trenes, mariposas",
      "builder.step3.label": "Paso 3 de 3",
      "builder.step3.title": "¿Qué debería cuidar el cuento de hoy?",
      "builder.step3.description": "Milo dará forma al final con suavidad según tu objetivo.",
      "builder.fields.goal": "Objetivo del adulto",
      "builder.fields.newWordsCount": "Número de palabras nuevas",
      "builder.options.chooseNumber": "Elegir número",
      "builder.options.oneWord": "1 palabra nueva",
      "builder.options.twoWords": "2 palabras nuevas",
      "builder.options.threeWords": "3 palabras nuevas",
      "builder.options.fourWords": "4 palabras nuevas",
      "builder.options.fiveWords": "5 palabras nuevas",
      "builder.fields.readingTime": "Tiempo de lectura",
      "builder.options.chooseLength": "Elegir duración",
      "builder.options.threeMin": "3 min",
      "builder.options.fiveMin": "5 min",
      "builder.options.eightMin": "8 min",
      "builder.consent": "Acepto guardar estos datos en este navegador para crear la vista previa.",
      "builder.buttons.back": "Atrás",
      "builder.buttons.continue": "Continuar",
      "builder.buttons.generate": "Crear el cuento de esta noche",
      "builder.status.creating": "Creando tu cuento...",
      "builder.status.ready": "Tu cuento está listo. Abriéndolo ahora...",
      "builder.footer.note": "Hecho para momentos familiares tranquilos. Los datos del creador se quedan en este navegador.",
      "story.skip": "Saltar al cuento",
      "story.header.createAnother": "Crear otro cuento",
      "story.hero.eyebrow": "MoonTale de esta noche",
      "story.hero.defaultTitle": "Tu cuento mágico para dormir",
      "story.hero.defaultReadingTime": "Lectura de 5 min",
      "story.hero.defaultWords": "3 palabras nuevas",
      "story.hero.guidedBy": "Guiado por Milo",
      "story.hero.miloAlt": "Milo, el osito lunar, guía del cuento de esta noche",
      "story.ending": "Y bajo la luna tranquila, todos durmieron en paz.",
      "story.sidebar.discovery": "Descubrimiento del idioma",
      "story.sidebar.wordsTitle": "Palabras nuevas de esta noche",
      "story.sidebar.intention": "Una intención suave",
      "story.sidebar.goalTitle": "Objetivo de aprendizaje de hoy",
      "story.sidebar.grownups": "Para adultos",
      "story.sidebar.tipTitle": "Consejo para la hora de dormir",
      "story.actions.eyebrow": "Haz tuya esta noche",
      "story.actions.title": "Prueba otra combinación mágica.",
      "story.actions.button": "Crear otro cuento",
      "story.waitlist.eyebrow": "El cuento puede continuar",
      "story.waitlist.title": "¿Quieres un cuento personalizado cada noche?",
      "story.waitlist.body": "Únete a la lista de MoonTale para recibir acceso anticipado, novedades del producto e invitaciones para probar nuevas funciones de cuentos familiares.",
      "story.footer.tagline": "Un compañero personalizado de aprendizaje y hora de dormir para niños.",
      "form.status.submitting": "Uniéndote...",
      "form.status.success": "¡Gracias! Ya estás en la lista de MoonTale.",
      "form.status.error": "Algo salió mal. Inténtalo de nuevo.",
      "form.error.required": "Completa este campo.",
      "form.error.email": "Introduce un email válido.",
      "form.error.choice": "Elige una opción.",
      "form.error.consent": "Confirma antes de crear el cuento.",
      "list.and": "y",
      "story.readingTime": "Lectura de {minutes} min",
      "story.newWords.one": "{count} palabra nueva",
      "story.newWords.many": "{count} palabras nuevas",
      "story.languageMeta": "{language} · {words}",
      "story.generated.title": "La aventura lunar de {childName} con {character}",
      "story.generated.paragraph1": "Cuando el cielo se volvió suave y plateado, {childName} encontró a Milo junto a un pequeño mapa brillante. “Esta noche”, susurró Milo, “seguiremos {interest} hasta una aventura {mood}”.",
      "story.generated.paragraph2": "Por el camino, Milo le mostró a {childName} {wordPhrase}. Cada palabra brillaba como una pequeña linterna, y {childName} la repitió en voz baja antes de que el sendero volviera a iluminarse.",
      "story.generated.paragraph3": "Pronto apareció un {character} amable y los invitó a resolver un pequeño acertijo lunar. Escucharon, lo intentaron otra vez y descubrieron que cada paso valiente hacía la noche más amable.",
      "story.generated.paragraph4": "Cuando terminó la aventura, Milo guardó las palabras brillantes en el bolsillo de sueños de {childName}. {childName} se sintió orgulloso, con sueño y listo para llevar las palabras nuevas al día siguiente.",
      "story.generated.vocabIntro": "Aprendiendo {targetLanguage} con significados en {siteLanguage}.",
      "story.generated.goalLine": "{goal}: {lesson}",
      "story.lesson.Language learning": "Observen cada palabra nueva y díganla juntos con suavidad.",
      "story.lesson.Build reading habit": "Terminen con una frase favorita para que leer se sienta como un pequeño logro diario.",
      "story.lesson.Improve bedtime routine": "Usen mañana la misma frase tranquila de cierre para que la hora de dormir sea predecible.",
      "story.lesson.Confidence": "Celebra una decisión valiente que tu hijo tomó en el cuento.",
      "story.lesson.Courage": "Hablen de cómo la valentía puede ser silenciosa, pequeña y aun así importante.",
      "story.lesson.Kindness": "Pregunta quién necesitó amabilidad en el cuento y cómo lo notó tu hijo.",
      "story.generated.parentTip": "Después de leer, invita a tu hijo a elegir una palabra en {targetLanguage} y usarla en una frase pequeñita antes de dormir.",
      "story.defaults.childName": "tu hijo",
      "story.defaults.interest": "rayos de luna",
    },
    fr: {
      "meta.home.title": "MoonTale - Apprendre les langues avec des histoires du soir",
      "meta.home.description": "MoonTale transforme le coucher en aventure personnalisée d'apprentissage des langues pour les enfants et leur famille.",
      "meta.builder.title": "Créer une histoire - MoonTale",
      "meta.builder.description": "Créez une histoire MoonTale personnalisée pour le coucher de votre enfant.",
      "meta.story.title": "Votre histoire du soir - MoonTale",
      "meta.story.description": "Lisez l'aperçu de votre histoire MoonTale personnalisée.",
      "common.skipContent": "Aller au contenu",
      "common.mainNavigation": "Navigation principale",
      "common.homeLabel": "Accueil MoonTale",
      "common.languageSelector": "Choisir la langue",
      "common.parentEmail": "Email du parent",
      "common.joinWaitlist": "Rejoindre la liste",
      "common.waitlistMicrocopy": "Uniquement des nouvelles d'accès anticipé. Désinscription possible à tout moment.",
      "common.email": "Email",
      "language.English": "anglais",
      "language.Polish": "polonais",
      "language.Spanish": "espagnol",
      "language.French": "français",
      "language.German": "allemand",
      "option.character.Astronaut": "Astronaute",
      "option.character.Dinosaur": "Dinosaure",
      "option.character.Princess": "Princesse",
      "option.character.Animal": "Animal",
      "option.character.Robot": "Robot",
      "option.mood.Calm": "Calme",
      "option.mood.Magical": "Magique",
      "option.mood.Funny": "Drôle",
      "option.mood.Adventurous": "Aventureuse",
      "option.goal.Language learning": "Apprentissage des langues",
      "option.goal.Build reading habit": "Créer une habitude de lecture",
      "option.goal.Improve bedtime routine": "Améliorer le rituel du coucher",
      "option.goal.Confidence": "Confiance",
      "option.goal.Courage": "Courage",
      "option.goal.Kindness": "Gentillesse",
      "home.header.cta": "Accès anticipé",
      "home.hero.eyebrow": "L'apprentissage des langues, en version magique",
      "home.hero.title": "Aidez votre enfant à apprendre une nouvelle langue grâce à des histoires du soir qu'il adore.",
      "home.hero.intro": "Des histoires personnalisées autour des centres d'intérêt de votre enfant, pour rendre l'apprentissage naturel, la lecture enthousiasmante et le coucher plus complice.",
      "home.hero.benefitsLabel": "Avantages de MoonTale",
      "home.hero.benefit1": "Installe des habitudes de lecture",
      "home.hero.benefit2": "Introduit naturellement une nouvelle langue",
      "home.hero.benefit3": "Crée des routines du soir calmes et importantes",
      "home.hero.benefit4": "Encourage l'imagination et la curiosité",
      "home.hero.primaryCta": "Créer une histoire gratuite",
      "home.hero.secondaryCta": "Voir un exemple d'histoire",
      "home.hero.microcopy": "Aucun compte nécessaire. Créez un aperçu personnalisé en deux minutes environ.",
      "home.hero.artLabel": "Milo près d'une lune magique et d'un livre ouvert",
      "home.hero.miloAlt": "Milo l'ourson lunaire, guide narratif de MoonTale",
      "home.hero.miloGreeting": "Bonjour, je suis Milo, l'ourson lunaire.",
      "home.hero.miloText": "Je guiderai votre enfant dans des aventures magiques du soir tout en découvrant de nouveaux mots, idées et cultures.",
      "home.problem.eyebrow": "Pensé pour la vraie vie de famille",
      "home.problem.title": "Le problème",
      "home.problem.lead": "Les parents veulent que la lecture, l'apprentissage et le coucher se passent mieux. Aujourd'hui, ils doivent souvent choisir entre des produits qui ne résolvent qu'une partie du puzzle.",
      "home.problem.parentsWant": "Les parents veulent",
      "home.problem.want1": "Aider leurs enfants à lire davantage",
      "home.problem.want2": "Introduire tôt une deuxième langue",
      "home.problem.want3": "Réduire le temps d'écran passif",
      "home.problem.want4": "Créer des routines du coucher plus calmes",
      "home.problem.want5": "Passer ensemble un temps plus précieux",
      "home.problem.solutionsAre": "Mais la plupart des solutions sont",
      "home.problem.solution1": "Des histoires du soir génériques",
      "home.problem.solution2": "Des applis éducatives qui ressemblent à des leçons",
      "home.problem.solution3": "Du divertissement qui ne soutient pas l'apprentissage",
      "home.problem.conclusion": "MoonTale réunit apprentissage, imagination et lien familial dans une seule expérience.",
      "home.transformation.eyebrow": "Un petit rituel transformé",
      "home.transformation.title": "Avant et après MoonTale",
      "home.transformation.before": "Avant MoonTale",
      "home.transformation.before1": "Histoires du soir génériques",
      "home.transformation.before2": "Temps d'écran passif",
      "home.transformation.before3": "Les enfants se désintéressent de la lecture",
      "home.transformation.before4": "L'apprentissage des langues ressemble à des devoirs",
      "home.transformation.before5": "Le coucher peut sembler répétitif ou stressant",
      "home.transformation.after": "Après MoonTale",
      "home.transformation.after1": "Des histoires façonnées par les centres d'intérêt de votre enfant",
      "home.transformation.after2": "Une exposition naturelle à une nouvelle langue",
      "home.transformation.after3": "Plus d'enthousiasme pour la lecture",
      "home.transformation.after4": "Des routines du coucher plus calmes",
      "home.transformation.after5": "Un lien parent-enfant renforcé",
      "home.how.eyebrow": "De votre famille à son histoire",
      "home.how.title": "Comment ça marche.",
      "home.how.lead": "Un parcours pensé pour le coucher qui transforme ce que votre enfant aime déjà en expérience d'apprentissage douce.",
      "home.how.step1Title": "Ajoutez son univers",
      "home.how.step1Text": "Indiquez son prénom, son âge, ses intérêts, ses thèmes préférés et son niveau de lecture.",
      "home.how.step2Title": "Choisissez une langue",
      "home.how.step2Text": "Sélectionnez un objectif comme l'anglais, l'espagnol, le français, l'allemand ou le polonais.",
      "home.how.step3Title": "Ajoutez un souvenir",
      "home.how.step3Text": "Utilisez un voyage, un animal, un jouet ou une photo de famille comme inspiration pour l'aventure du soir.",
      "home.how.step4Title": "Lisez ensemble",
      "home.how.step4Text": "Profitez d'une histoire calme avec des détails familiers, du vocabulaire en douceur et une fin apaisante.",
      "home.photo.memoryText": "Un souvenir de famille devient",
      "home.photo.memoryTitle": "L'aventure de l'île secrète",
      "home.photo.eyebrow": "De la photo à l'histoire",
      "home.photo.title": "Transformez les photos de famille en histoires magiques du soir.",
      "home.photo.body": "Une photo de plage peut devenir un voyage de pirates, une image avec un animal une quête en forêt, et un souvenir d'anniversaire une fête magique. Chaque histoire paraît personnelle, émouvante et unique pour la famille.",
      "home.sample.eyebrow": "Un aperçu à l'intérieur",
      "home.sample.title": "Aperçu de l'histoire de ce soir.",
      "home.sample.textBefore": "Ce soir, Emma et Milo traversent une forêt lunaire endormie tout en apprenant les mots espagnols",
      "home.sample.textAnd": "et",
      "home.sample.textAfter": "Les mots apparaissent naturellement, avec une répétition douce et du sens grâce au contexte.",
      "home.sample.vocabLabel": "Vocabulaire espagnol dans l'histoire d'exemple",
      "home.sample.wordMoon": "lune",
      "home.sample.wordStar": "étoile",
      "home.sample.wordForest": "forêt",
      "home.research.eyebrow": "Conçu avec attention",
      "home.research.title": "Fondé sur ce que nous savons de l'apprentissage des enfants",
      "home.research.lead": "MoonTale s'appuie sur des recommandations établies autour de la lecture partagée, de l'interaction réactive, de la littératie précoce et des routines familiales régulières. Nous employons un langage prudent parce que la confiance compte.",
      "home.research.card1": "Les données montrent que la lecture partagée soutient le langage, la littératie et des relations saines.",
      "home.research.card2": "La recherche suggère que les échanges réactifs aident le cerveau en développement.",
      "home.research.card3": "Les études indiquent que le plaisir de lire et la fréquence de lecture sont étroitement liés à la littératie.",
      "home.research.card4": "Les premières expériences de lecture peuvent contribuer au développement du vocabulaire et du langage.",
      "home.research.sourceLink": "Voir la source ↗",
      "home.research.note": "MoonTale est un outil de soutien éducatif, pas un substitut aux livres, enseignants, aidants ni aux conseils professionnels sur le développement.",
      "home.why.eyebrow": "Plus qu'un prompt d'IA",
      "home.why.title": "Pourquoi MoonTale ?",
      "home.why.body": "L'IA généraliste peut générer du texte. MoonTale est un compagnon personnalisé d'apprentissage et du coucher, conçu autour des enfants, des parents et du rythme familial.",
      "home.why.feature1": "Histoires adaptées à l'âge",
      "home.why.feature2": "Contenu sûr pour les enfants",
      "home.why.feature3": "Thèmes contrôlés par les parents",
      "home.why.feature4": "Aventures personnalisées",
      "home.why.feature5": "Soutien à l'apprentissage des langues",
      "home.why.feature6": "Expérience centrée sur le coucher",
      "home.why.feature7": "Qualité constante des histoires",
      "home.why.feature8": "Conception pour l'habitude de lire",
      "home.platform.eyebrow": "On commence par le coucher",
      "home.platform.title": "Un rituel aujourd'hui. Un compagnon d'apprentissage pour des années.",
      "home.platform.body": "MoonTale commence avec des histoires du soir personnalisées, puis grandit avec les centres d'intérêt, les objectifs linguistiques, la confiance en lecture et les souvenirs familiaux de chaque enfant. À long terme, l'opportunité est une plateforme de confiance pour les histoires, la littératie, les langues et la découverte culturelle.",
      "home.founder.eyebrow": "Une mission personnelle",
      "home.founder.title": "Pourquoi je construis MoonTale",
      "home.founder.quote": "En tant qu'étudiant et sportif, j'ai vu à quel point les habitudes régulières peuvent être puissantes. MoonTale est né d'une question simple : comment aider les enfants à attendre la lecture du soir avec plaisir tout en rendant l'apprentissage des langues naturel, émotionnel et amusant ? Je construis MoonTale pour aider les familles à transformer le coucher en moment d'apprentissage, d'imagination et de lien.",
      "home.join.eyebrow": "Construisez-le avec nous",
      "home.join.title": "Aidez à façonner MoonTale.",
      "home.join.body": "MoonTale est en début de développement. Rejoignez la liste d'attente pour recevoir des nouvelles, tester la première version et aider à construire une meilleure façon d'apprendre grâce aux histoires du soir.",
      "home.footer.tagline": "© 2026 MoonTale. Apprendre les langues avec des histoires que les familles aiment.",
      "builder.skip": "Aller au créateur d'histoire",
      "builder.header.note": "Une histoire du soir créée pour votre enfant",
      "builder.intro.eyebrow": "Créez l'aventure de ce soir",
      "builder.intro.title": "Parlez un peu de votre enfant à Milo.",
      "builder.intro.body": "En trois courtes étapes, MoonTale créera un aperçu chaleureux avec un apprentissage des langues glissé en douceur dans l'aventure.",
      "builder.intro.miloAlt": "Milo l'ourson lunaire qui fait signe",
      "builder.progress.label": "Progression du créateur d'histoire",
      "builder.progress.child": "Enfant",
      "builder.progress.story": "Histoire",
      "builder.progress.goal": "Objectif",
      "builder.form.title": "Créateur d'histoires MoonTale",
      "builder.step1.label": "Étape 1 sur 3",
      "builder.step1.title": "Pour qui est l'histoire de ce soir ?",
      "builder.step1.description": "Ces détails aident Milo à rendre l'aventure familière.",
      "builder.fields.childName": "Prénom de l'enfant",
      "builder.placeholders.childName": "ex. Emma",
      "builder.fields.childAge": "Âge de l'enfant",
      "builder.options.chooseAge": "Choisir l'âge",
      "builder.options.age3": "3 ans",
      "builder.options.age4": "4 ans",
      "builder.options.age5": "5 ans",
      "builder.options.age6": "6 ans",
      "builder.options.age7": "7 ans",
      "builder.options.age8": "8 ans",
      "builder.options.age9": "9 ans",
      "builder.options.age10": "10 ans",
      "builder.fields.currentLanguage": "Langue actuelle",
      "builder.fields.targetLanguage": "Langue à apprendre",
      "builder.options.chooseLanguage": "Choisir une langue",
      "builder.step2.label": "Étape 2 sur 3",
      "builder.step2.title": "Quel type d'aventure aimera-t-il ?",
      "builder.step2.description": "Choisissez les ingrédients du monde magique de ce soir.",
      "builder.fields.character": "Personnage préféré",
      "builder.fields.mood": "Ambiance de l'histoire",
      "builder.fields.interest": "Centre d'intérêt préféré",
      "builder.placeholders.interest": "ex. étoiles, trains, papillons",
      "builder.step3.label": "Étape 3 sur 3",
      "builder.step3.title": "Que doit nourrir l'histoire de ce soir ?",
      "builder.step3.description": "Milo façonnera doucement la fin autour de votre objectif.",
      "builder.fields.goal": "Objectif du parent",
      "builder.fields.newWordsCount": "Nombre de nouveaux mots",
      "builder.options.chooseNumber": "Choisir le nombre",
      "builder.options.oneWord": "1 nouveau mot",
      "builder.options.twoWords": "2 nouveaux mots",
      "builder.options.threeWords": "3 nouveaux mots",
      "builder.options.fourWords": "4 nouveaux mots",
      "builder.options.fiveWords": "5 nouveaux mots",
      "builder.fields.readingTime": "Temps de lecture",
      "builder.options.chooseLength": "Choisir la durée",
      "builder.options.threeMin": "3 min",
      "builder.options.fiveMin": "5 min",
      "builder.options.eightMin": "8 min",
      "builder.consent": "J'accepte d'enregistrer ces détails dans ce navigateur pour créer l'aperçu.",
      "builder.buttons.back": "Retour",
      "builder.buttons.continue": "Continuer",
      "builder.buttons.generate": "Créer l'histoire de ce soir",
      "builder.status.creating": "Création de votre histoire...",
      "builder.status.ready": "Votre histoire est prête. Ouverture en cours...",
      "builder.footer.note": "Créé pour des moments familiaux calmes. Les détails du créateur restent dans ce navigateur.",
      "story.skip": "Aller à l'histoire",
      "story.header.createAnother": "Créer une autre histoire",
      "story.hero.eyebrow": "Le MoonTale de ce soir",
      "story.hero.defaultTitle": "Votre histoire magique du soir",
      "story.hero.defaultReadingTime": "Lecture de 5 min",
      "story.hero.defaultWords": "3 nouveaux mots",
      "story.hero.guidedBy": "Guidé par Milo",
      "story.hero.miloAlt": "Milo l'ourson lunaire, guide de l'histoire de ce soir",
      "story.ending": "Et sous la lune silencieuse, tout le monde dormit paisiblement.",
      "story.sidebar.discovery": "Découverte de la langue",
      "story.sidebar.wordsTitle": "Nouveaux mots de ce soir",
      "story.sidebar.intention": "Une intention douce",
      "story.sidebar.goalTitle": "Objectif d'apprentissage de ce soir",
      "story.sidebar.grownups": "Pour les adultes",
      "story.sidebar.tipTitle": "Conseil du soir pour les parents",
      "story.actions.eyebrow": "Personnalisez ce soir",
      "story.actions.title": "Essayez une autre combinaison magique.",
      "story.actions.button": "Créer une autre histoire",
      "story.waitlist.eyebrow": "L'histoire peut continuer",
      "story.waitlist.title": "Vous voulez une histoire personnalisée chaque soir ?",
      "story.waitlist.body": "Rejoignez la liste MoonTale pour l'accès anticipé, les nouvelles du produit et des invitations à tester de nouvelles fonctions de narration familiale.",
      "story.footer.tagline": "Un compagnon personnalisé d'apprentissage et du coucher pour les enfants.",
      "form.status.submitting": "Inscription...",
      "form.status.success": "Merci ! Vous êtes sur la liste MoonTale.",
      "form.status.error": "Un problème est survenu. Veuillez réessayer.",
      "form.error.required": "Veuillez remplir ce champ.",
      "form.error.email": "Veuillez saisir une adresse email valide.",
      "form.error.choice": "Veuillez choisir une option.",
      "form.error.consent": "Veuillez confirmer avant de créer l'histoire.",
      "list.and": "et",
      "story.readingTime": "Lecture de {minutes} min",
      "story.newWords.one": "{count} nouveau mot",
      "story.newWords.many": "{count} nouveaux mots",
      "story.languageMeta": "{language} · {words}",
      "story.generated.title": "L'aventure au clair de lune de {childName} avec {character}",
      "story.generated.paragraph1": "Quand le ciel devint doux et argenté, {childName} trouva Milo près d'une petite carte lumineuse. « Ce soir, » chuchota Milo, « nous suivons {interest} dans une aventure {mood}. »",
      "story.generated.paragraph2": "Sur le chemin, Milo montra à {childName} {wordPhrase}. Chaque mot brillait comme une petite lanterne, et {childName} le répéta doucement avant que le sentier ne s'illumine à nouveau.",
      "story.generated.paragraph3": "Bientôt, un {character} amical apparut et les invita à résoudre une petite énigme lunaire. Ils écoutèrent, réessayèrent et découvrirent que chaque pas courageux rendait la nuit plus douce.",
      "story.generated.paragraph4": "Quand l'aventure se termina, Milo glissa les mots lumineux dans la poche de rêves de {childName}. {childName} se sentit fier, somnolent et prêt à emporter les nouveaux mots vers demain.",
      "story.generated.vocabIntro": "Apprentissage du {targetLanguage}, avec des significations en {siteLanguage}.",
      "story.generated.goalLine": "{goal} : {lesson}",
      "story.lesson.Language learning": "Repérez chaque nouveau mot et dites-le doucement ensemble.",
      "story.lesson.Build reading habit": "Terminez par une phrase préférée pour que lire ressemble à une petite victoire quotidienne.",
      "story.lesson.Improve bedtime routine": "Utilisez demain la même phrase calme de fin pour rendre le coucher prévisible.",
      "story.lesson.Confidence": "Célébrez un choix courageux que votre enfant a fait dans l'histoire.",
      "story.lesson.Courage": "Parlez du fait que le courage peut être discret, petit et pourtant important.",
      "story.lesson.Kindness": "Demandez qui avait besoin de gentillesse dans l'histoire et comment votre enfant l'a remarqué.",
      "story.generated.parentTip": "Après la lecture, invitez votre enfant à choisir un mot en {targetLanguage} et à l'utiliser dans une toute petite phrase du soir.",
      "story.defaults.childName": "votre enfant",
      "story.defaults.interest": "rayons de lune",
    },
    de: {
      "meta.home.title": "MoonTale - Sprachenlernen mit Gute-Nacht-Geschichten",
      "meta.home.description": "MoonTale macht die Schlafenszeit zu einem personalisierten Sprachlern-Abenteuer für Kinder und Familien.",
      "meta.builder.title": "Geschichte erstellen - MoonTale",
      "meta.builder.description": "Erstelle eine personalisierte MoonTale-Gute-Nacht-Geschichte für dein Kind.",
      "meta.story.title": "Deine Gute-Nacht-Geschichte - MoonTale",
      "meta.story.description": "Lies die Vorschau deiner personalisierten MoonTale-Gute-Nacht-Geschichte.",
      "common.skipContent": "Zum Inhalt springen",
      "common.mainNavigation": "Hauptnavigation",
      "common.homeLabel": "MoonTale Startseite",
      "common.languageSelector": "Sprache wählen",
      "common.parentEmail": "E-Mail der Eltern",
      "common.joinWaitlist": "Warteliste beitreten",
      "common.waitlistMicrocopy": "Nur Updates zum frühen Zugang. Du kannst dich jederzeit abmelden.",
      "common.email": "E-Mail",
      "language.English": "Englisch",
      "language.Polish": "Polnisch",
      "language.Spanish": "Spanisch",
      "language.French": "Französisch",
      "language.German": "Deutsch",
      "option.character.Astronaut": "Astronaut",
      "option.character.Dinosaur": "Dinosaurier",
      "option.character.Princess": "Prinzessin",
      "option.character.Animal": "Tier",
      "option.character.Robot": "Roboter",
      "option.mood.Calm": "Ruhig",
      "option.mood.Magical": "Magisch",
      "option.mood.Funny": "Lustig",
      "option.mood.Adventurous": "Abenteuerlich",
      "option.goal.Language learning": "Sprachenlernen",
      "option.goal.Build reading habit": "Lesegewohnheit aufbauen",
      "option.goal.Improve bedtime routine": "Abendroutine verbessern",
      "option.goal.Confidence": "Selbstvertrauen",
      "option.goal.Courage": "Mut",
      "option.goal.Kindness": "Freundlichkeit",
      "home.header.cta": "Frühen Zugang erhalten",
      "home.hero.eyebrow": "Sprachenlernen, magisch gemacht",
      "home.hero.title": "Hilf deinem Kind, mit geliebten Gute-Nacht-Geschichten eine neue Sprache zu lernen.",
      "home.hero.intro": "Personalisierte Geschichten rund um die Interessen deines Kindes machen Sprachenlernen natürlicher, Lesen spannender und die Schlafenszeit zu einem Moment der Nähe.",
      "home.hero.benefitsLabel": "MoonTale Vorteile",
      "home.hero.benefit1": "Baut Lesegewohnheiten auf",
      "home.hero.benefit2": "Führt natürlich eine neue Sprache ein",
      "home.hero.benefit3": "Schafft ruhige, bedeutungsvolle Abendroutinen",
      "home.hero.benefit4": "Fördert Fantasie und Neugier",
      "home.hero.primaryCta": "Kostenlose Gute-Nacht-Geschichte erstellen",
      "home.hero.secondaryCta": "Beispielgeschichte ansehen",
      "home.hero.microcopy": "Kein Konto nötig. Erstelle in etwa zwei Minuten eine personalisierte Vorschau.",
      "home.hero.artLabel": "Milo neben einem magischen Mond und einem offenen Geschichtenbuch",
      "home.hero.miloAlt": "Milo, der Mondbär und Geschichtenguide von MoonTale",
      "home.hero.miloGreeting": "Hallo, ich bin Milo, der Mondbär.",
      "home.hero.miloText": "Ich begleite dein Kind durch magische Gute-Nacht-Abenteuer, während es neue Wörter, Ideen und Kulturen entdeckt.",
      "home.problem.eyebrow": "Für echtes Familienleben gebaut",
      "home.problem.title": "Das Problem",
      "home.problem.lead": "Eltern möchten, dass Lesen, Lernen und Schlafenszeit sich besser anfühlen. Heute müssen sie oft zwischen Produkten wählen, die nur einen Teil des Puzzles lösen.",
      "home.problem.parentsWant": "Eltern möchten",
      "home.problem.want1": "Ihren Kindern helfen, mehr zu lesen",
      "home.problem.want2": "Früh eine zweite Sprache einführen",
      "home.problem.want3": "Passive Bildschirmzeit reduzieren",
      "home.problem.want4": "Ruhigere Abendroutinen schaffen",
      "home.problem.want5": "Mehr wertvolle Zeit miteinander verbringen",
      "home.problem.solutionsAre": "Aber die meisten Lösungen sind",
      "home.problem.solution1": "Allgemeine Gute-Nacht-Geschichten",
      "home.problem.solution2": "Lern-Apps, die sich wie Unterricht anfühlen",
      "home.problem.solution3": "Unterhaltung, die Lernen nicht unterstützt",
      "home.problem.conclusion": "MoonTale verbindet Lernen, Fantasie und Familiennähe in einem Erlebnis.",
      "home.transformation.eyebrow": "Ein kleines Ritual, verwandelt",
      "home.transformation.title": "Vor und nach MoonTale",
      "home.transformation.before": "Vor MoonTale",
      "home.transformation.before1": "Allgemeine Gute-Nacht-Geschichten",
      "home.transformation.before2": "Passive Bildschirmzeit",
      "home.transformation.before3": "Kinder verlieren das Interesse am Lesen",
      "home.transformation.before4": "Sprachenlernen fühlt sich wie Hausaufgaben an",
      "home.transformation.before5": "Die Schlafenszeit kann eintönig oder stressig wirken",
      "home.transformation.after": "Nach MoonTale",
      "home.transformation.after1": "Geschichten rund um die Interessen deines Kindes",
      "home.transformation.after2": "Natürlicher Kontakt mit einer neuen Sprache",
      "home.transformation.after3": "Mehr Freude am Lesen",
      "home.transformation.after4": "Ruhigere Abendroutinen",
      "home.transformation.after5": "Stärkere Eltern-Kind-Verbindung",
      "home.how.eyebrow": "Von deiner Familie zu ihrer Geschichte",
      "home.how.title": "So funktioniert es.",
      "home.how.lead": "Ein für die Schlafenszeit entwickelter Ablauf verwandelt das, was dein Kind schon liebt, in ein sanftes Lernerlebnis.",
      "home.how.step1Title": "Ihre Welt hinzufügen",
      "home.how.step1Text": "Teile Name, Alter, Interessen, Lieblingsthemen und Leseniveau deines Kindes.",
      "home.how.step2Title": "Sprache wählen",
      "home.how.step2Text": "Wähle ein Ziel wie Englisch, Spanisch, Französisch, Deutsch oder Polnisch.",
      "home.how.step3Title": "Eine Erinnerung hinzufügen",
      "home.how.step3Text": "Nutze eine Reise, ein Haustier, ein Spielzeug oder ein Familienfoto als Inspiration für das heutige Abenteuer.",
      "home.how.step4Title": "Gemeinsam lesen",
      "home.how.step4Text": "Genießt eine ruhige Geschichte mit vertrauten Details, sanftem Wortschatz und einem entspannenden Ende.",
      "home.photo.memoryText": "Eine Familienerinnerung wird zu",
      "home.photo.memoryTitle": "Das Abenteuer der geheimen Insel",
      "home.photo.eyebrow": "Vom Foto zur Geschichte",
      "home.photo.title": "Verwandle Familienfotos in magische Gute-Nacht-Geschichten.",
      "home.photo.body": "Ein Strandfoto kann zu einer Piratenreise werden, ein Bild mit Haustier zu einer Waldsuche und eine Geburtstagserinnerung zu einer magischen Feier. Jede Geschichte fühlt sich persönlich, emotional und einzigartig für die Familie an.",
      "home.sample.eyebrow": "Ein Blick hinein",
      "home.sample.title": "Vorschau auf die heutige Geschichte.",
      "home.sample.textBefore": "Heute Abend reisen Emma und Milo durch einen schläfrigen Mondwald und lernen die spanischen Wörter",
      "home.sample.textAnd": "und",
      "home.sample.textAfter": "Die Wörter erscheinen natürlich, mit sanfter Wiederholung und Bedeutung aus dem Kontext.",
      "home.sample.vocabLabel": "Spanischer Wortschatz in der Beispielgeschichte",
      "home.sample.wordMoon": "Mond",
      "home.sample.wordStar": "Stern",
      "home.sample.wordForest": "Wald",
      "home.research.eyebrow": "Durchdacht gestaltet",
      "home.research.title": "Gestützt auf das, was wir über kindliches Lernen wissen",
      "home.research.lead": "MoonTale orientiert sich an etablierten Empfehlungen zu gemeinsamem Lesen, reaktionsfähiger Interaktion, früher Literalität und verlässlichen Familienroutinen. Wir formulieren vorsichtig, weil Vertrauen zählt.",
      "home.research.card1": "Belege zeigen, dass gemeinsames Lesen Sprache, Literalität und gesunde Beziehungen unterstützt.",
      "home.research.card2": "Forschung legt nahe, dass reaktionsfähiger Austausch die Entwicklung des Gehirns unterstützt.",
      "home.research.card3": "Studien zeigen, dass Lesefreude und Lesehäufigkeit eng mit Literalität verbunden sind.",
      "home.research.card4": "Frühe Leseerfahrungen können Wortschatz- und Sprachentwicklung fördern.",
      "home.research.sourceLink": "Quelle ansehen ↗",
      "home.research.note": "MoonTale ist ein unterstützendes Bildungswerkzeug, kein Ersatz für Bücher, Lehrkräfte, Betreuungspersonen oder professionelle Entwicklungsberatung.",
      "home.why.eyebrow": "Mehr als ein KI-Prompt",
      "home.why.title": "Warum MoonTale?",
      "home.why.body": "Allgemeine KI kann Text erzeugen. MoonTale ist ein personalisierter Lern- und Schlafenszeit-Begleiter, entwickelt rund um Kinder, Eltern und den Rhythmus des Familienlebens.",
      "home.why.feature1": "Altersgerechtes Erzählen",
      "home.why.feature2": "Kindersichere Inhalte",
      "home.why.feature3": "Von Eltern gesteuerte Themen",
      "home.why.feature4": "Personalisierte Abenteuer",
      "home.why.feature5": "Unterstützung beim Sprachenlernen",
      "home.why.feature6": "Auf Schlafenszeit fokussiert",
      "home.why.feature7": "Gleichbleibende Geschichtenqualität",
      "home.why.feature8": "Design für Lesegewohnheiten",
      "home.platform.eyebrow": "Beginnend mit der Schlafenszeit",
      "home.platform.title": "Ein Ritual heute. Ein Lernbegleiter für Jahre.",
      "home.platform.body": "MoonTale beginnt mit personalisierten Gute-Nacht-Geschichten und wächst dann mit den Interessen, Sprachzielen, der Lesesicherheit und den Familienerinnerungen jedes Kindes. Langfristig entsteht eine vertrauenswürdige Plattform für Geschichten, Lesen, Sprachen und kulturelle Entdeckung.",
      "home.founder.eyebrow": "Eine persönliche Mission",
      "home.founder.title": "Warum ich MoonTale baue",
      "home.founder.quote": "Als Student und Sportler habe ich gesehen, wie kraftvoll beständige Gewohnheiten sein können. MoonTale begann mit einer einfachen Frage: Wie können wir Kindern helfen, sich jeden Abend aufs Lesen zu freuen, während Sprachenlernen natürlich, emotional und schön wird? Ich baue MoonTale, um Familien dabei zu helfen, die Schlafenszeit in einen Moment des Lernens, der Fantasie und der Nähe zu verwandeln.",
      "home.join.eyebrow": "Bau es mit uns",
      "home.join.title": "Hilf mit, MoonTale zu formen.",
      "home.join.body": "MoonTale befindet sich in der frühen Entwicklung. Tritt der Warteliste bei, um Updates zu erhalten, die erste Version zu testen und eine bessere Art des Lernens mit Gute-Nacht-Geschichten mitzugestalten.",
      "home.footer.tagline": "© 2026 MoonTale. Sprachenlernen mit Geschichten, die Familien lieben.",
      "builder.skip": "Zum Geschichten-Builder springen",
      "builder.header.note": "Eine Gute-Nacht-Geschichte für dein Kind",
      "builder.intro.eyebrow": "Erstelle das heutige Abenteuer",
      "builder.intro.title": "Erzähl Milo ein wenig über dein Kind.",
      "builder.intro.body": "In drei kurzen Schritten erstellt MoonTale eine warme Vorschau mit sanftem Sprachenlernen, das in das Abenteuer eingewoben ist.",
      "builder.intro.miloAlt": "Milo, der Mondbär, winkt",
      "builder.progress.label": "Fortschritt im Geschichten-Builder",
      "builder.progress.child": "Kind",
      "builder.progress.story": "Geschichte",
      "builder.progress.goal": "Ziel",
      "builder.form.title": "MoonTale Geschichten-Builder",
      "builder.step1.label": "Schritt 1 von 3",
      "builder.step1.title": "Für wen ist die heutige Geschichte?",
      "builder.step1.description": "Diese Details helfen Milo, das Abenteuer vertraut wirken zu lassen.",
      "builder.fields.childName": "Name des Kindes",
      "builder.placeholders.childName": "z. B. Emma",
      "builder.fields.childAge": "Alter des Kindes",
      "builder.options.chooseAge": "Alter wählen",
      "builder.options.age3": "3 Jahre alt",
      "builder.options.age4": "4 Jahre alt",
      "builder.options.age5": "5 Jahre alt",
      "builder.options.age6": "6 Jahre alt",
      "builder.options.age7": "7 Jahre alt",
      "builder.options.age8": "8 Jahre alt",
      "builder.options.age9": "9 Jahre alt",
      "builder.options.age10": "10 Jahre alt",
      "builder.fields.currentLanguage": "Aktuelle Sprache",
      "builder.fields.targetLanguage": "Sprache zum Lernen",
      "builder.options.chooseLanguage": "Sprache wählen",
      "builder.step2.label": "Schritt 2 von 3",
      "builder.step2.title": "Welche Art Abenteuer wird dein Kind lieben?",
      "builder.step2.description": "Wähle die Zutaten für die heutige magische Welt.",
      "builder.fields.character": "Lieblingsfigur",
      "builder.fields.mood": "Stimmung der Geschichte",
      "builder.fields.interest": "Lieblingsinteresse",
      "builder.placeholders.interest": "z. B. Sterne, Züge, Schmetterlinge",
      "builder.step3.label": "Schritt 3 von 3",
      "builder.step3.title": "Was soll die heutige Geschichte stärken?",
      "builder.step3.description": "Milo wird das Ende sanft an dein Ziel anpassen.",
      "builder.fields.goal": "Ziel der Eltern",
      "builder.fields.newWordsCount": "Anzahl neuer Wörter",
      "builder.options.chooseNumber": "Anzahl wählen",
      "builder.options.oneWord": "1 neues Wort",
      "builder.options.twoWords": "2 neue Wörter",
      "builder.options.threeWords": "3 neue Wörter",
      "builder.options.fourWords": "4 neue Wörter",
      "builder.options.fiveWords": "5 neue Wörter",
      "builder.fields.readingTime": "Lesezeit",
      "builder.options.chooseLength": "Länge wählen",
      "builder.options.threeMin": "3 Min.",
      "builder.options.fiveMin": "5 Min.",
      "builder.options.eightMin": "8 Min.",
      "builder.consent": "Ich stimme zu, diese Angaben in diesem Browser zu speichern, um die Vorschau zu erstellen.",
      "builder.buttons.back": "Zurück",
      "builder.buttons.continue": "Weiter",
      "builder.buttons.generate": "Heutige Geschichte erstellen",
      "builder.status.creating": "Deine Geschichte wird erstellt...",
      "builder.status.ready": "Deine Geschichte ist bereit. Sie wird jetzt geöffnet...",
      "builder.footer.note": "Gemacht für ruhige Familienmomente. Deine Builder-Daten bleiben in diesem Browser.",
      "story.skip": "Zur Geschichte springen",
      "story.header.createAnother": "Weitere Geschichte erstellen",
      "story.hero.eyebrow": "Heutiges MoonTale",
      "story.hero.defaultTitle": "Deine magische Gute-Nacht-Geschichte",
      "story.hero.defaultReadingTime": "5 Min. Lesezeit",
      "story.hero.defaultWords": "3 neue Wörter",
      "story.hero.guidedBy": "Geführt von Milo",
      "story.hero.miloAlt": "Milo, der Mondbär, heutiger Geschichtenguide",
      "story.ending": "Und unter dem stillen Mond schliefen alle friedlich ein.",
      "story.sidebar.discovery": "Sprachentdeckung",
      "story.sidebar.wordsTitle": "Heutige neue Wörter",
      "story.sidebar.intention": "Eine sanfte Absicht",
      "story.sidebar.goalTitle": "Heutiges Lernziel",
      "story.sidebar.grownups": "Für Erwachsene",
      "story.sidebar.tipTitle": "Gute-Nacht-Tipp für Eltern",
      "story.actions.eyebrow": "Mach den Abend zu eurem",
      "story.actions.title": "Probiere eine andere magische Kombination.",
      "story.actions.button": "Weitere Geschichte erstellen",
      "story.waitlist.eyebrow": "Die Geschichte kann weitergehen",
      "story.waitlist.title": "Möchtest du jede Nacht eine personalisierte Gute-Nacht-Geschichte?",
      "story.waitlist.body": "Tritt der MoonTale-Warteliste bei für frühen Zugang, Produktupdates und Einladungen zum Testen neuer Familien-Erzählfunktionen.",
      "story.footer.tagline": "Ein personalisierter Lern- und Schlafenszeit-Begleiter für Kinder.",
      "form.status.submitting": "Wird gesendet...",
      "form.status.success": "Danke! Du bist auf der MoonTale-Warteliste.",
      "form.status.error": "Etwas ist schiefgelaufen. Bitte versuche es erneut.",
      "form.error.required": "Bitte fülle dieses Feld aus.",
      "form.error.email": "Bitte gib eine gültige E-Mail-Adresse ein.",
      "form.error.choice": "Bitte wähle eine Option.",
      "form.error.consent": "Bitte bestätige, bevor die Geschichte erstellt wird.",
      "list.and": "und",
      "story.readingTime": "{minutes} Min. Lesezeit",
      "story.newWords.one": "{count} neues Wort",
      "story.newWords.many": "{count} neue Wörter",
      "story.languageMeta": "{language} · {words}",
      "story.generated.title": "{childName}s Mondschein-Abenteuer mit {character}",
      "story.generated.paragraph1": "Als der Himmel weich und silbern wurde, fand {childName} Milo neben einer kleinen leuchtenden Karte. „Heute Abend“, flüsterte Milo, „folgen wir {interest} in ein {mood} Abenteuer.“",
      "story.generated.paragraph2": "Auf dem Weg zeigte Milo {childName} {wordPhrase}. Jedes Wort leuchtete wie eine kleine Laterne, und {childName} wiederholte es leise, bevor der Pfad wieder hell wurde.",
      "story.generated.paragraph3": "Bald erschien ein freundlicher {character} und lud sie ein, ein kleines Mondrätsel zu lösen. Sie hörten zu, versuchten es noch einmal und entdeckten, dass jeder mutige Schritt die Nacht freundlicher machte.",
      "story.generated.paragraph4": "Als das Abenteuer endete, steckte Milo die leuchtenden Wörter in {childName}s Traumtasche. {childName} fühlte sich stolz, schläfrig und bereit, die neuen Wörter in den morgigen Tag mitzunehmen.",
      "story.generated.vocabIntro": "{targetLanguage} lernen, mit Bedeutungen auf {siteLanguage}.",
      "story.generated.goalLine": "{goal}: {lesson}",
      "story.lesson.Language learning": "Achtet auf jedes neue Wort und sagt es gemeinsam leise.",
      "story.lesson.Build reading habit": "Endet mit einem Lieblingssatz, damit Lesen sich wie ein kleiner täglicher Erfolg anfühlt.",
      "story.lesson.Improve bedtime routine": "Verwendet morgen dieselbe ruhige Schlusszeile, damit die Schlafenszeit vorhersehbar wird.",
      "story.lesson.Confidence": "Feiere eine mutige Entscheidung, die dein Kind in der Geschichte getroffen hat.",
      "story.lesson.Courage": "Sprecht darüber, dass Mut leise, klein und trotzdem wichtig sein kann.",
      "story.lesson.Kindness": "Frage, wer in der Geschichte Freundlichkeit brauchte und woran dein Kind das bemerkt hat.",
      "story.generated.parentTip": "Bitte dein Kind nach dem Lesen, ein Wort auf {targetLanguage} auszuwählen und es in einem kleinen Gute-Nacht-Satz zu verwenden.",
      "story.defaults.childName": "dein Kind",
      "story.defaults.interest": "Mondstrahlen",
    },
  };

  const VOCABULARY = {
    English: [
      { word: "moon", meanings: { en: "moon", pl: "księżyc", es: "luna", fr: "lune", de: "Mond" } },
      { word: "star", meanings: { en: "star", pl: "gwiazda", es: "estrella", fr: "étoile", de: "Stern" } },
      { word: "forest", meanings: { en: "forest", pl: "las", es: "bosque", fr: "forêt", de: "Wald" } },
      { word: "dream", meanings: { en: "dream", pl: "sen", es: "sueño", fr: "rêve", de: "Traum" } },
      { word: "courage", meanings: { en: "courage", pl: "odwaga", es: "valentía", fr: "courage", de: "Mut" } },
    ],
    Polish: [
      { word: "księżyc", meanings: { en: "moon", pl: "księżyc", es: "luna", fr: "lune", de: "Mond" } },
      { word: "gwiazda", meanings: { en: "star", pl: "gwiazda", es: "estrella", fr: "étoile", de: "Stern" } },
      { word: "las", meanings: { en: "forest", pl: "las", es: "bosque", fr: "forêt", de: "Wald" } },
      { word: "sen", meanings: { en: "dream", pl: "sen", es: "sueño", fr: "rêve", de: "Traum" } },
      { word: "odwaga", meanings: { en: "courage", pl: "odwaga", es: "valentía", fr: "courage", de: "Mut" } },
    ],
    Spanish: [
      { word: "luna", meanings: { en: "moon", pl: "księżyc", es: "luna", fr: "lune", de: "Mond" } },
      { word: "estrella", meanings: { en: "star", pl: "gwiazda", es: "estrella", fr: "étoile", de: "Stern" } },
      { word: "bosque", meanings: { en: "forest", pl: "las", es: "bosque", fr: "forêt", de: "Wald" } },
      { word: "sueño", meanings: { en: "dream", pl: "sen", es: "sueño", fr: "rêve", de: "Traum" } },
      { word: "valentía", meanings: { en: "courage", pl: "odwaga", es: "valentía", fr: "courage", de: "Mut" } },
    ],
    French: [
      { word: "lune", meanings: { en: "moon", pl: "księżyc", es: "luna", fr: "lune", de: "Mond" } },
      { word: "étoile", meanings: { en: "star", pl: "gwiazda", es: "estrella", fr: "étoile", de: "Stern" } },
      { word: "forêt", meanings: { en: "forest", pl: "las", es: "bosque", fr: "forêt", de: "Wald" } },
      { word: "rêve", meanings: { en: "dream", pl: "sen", es: "sueño", fr: "rêve", de: "Traum" } },
      { word: "courage", meanings: { en: "courage", pl: "odwaga", es: "valentía", fr: "courage", de: "Mut" } },
    ],
    German: [
      { word: "Mond", meanings: { en: "moon", pl: "księżyc", es: "luna", fr: "lune", de: "Mond" } },
      { word: "Stern", meanings: { en: "star", pl: "gwiazda", es: "estrella", fr: "étoile", de: "Stern" } },
      { word: "Wald", meanings: { en: "forest", pl: "las", es: "bosque", fr: "forêt", de: "Wald" } },
      { word: "Traum", meanings: { en: "dream", pl: "sen", es: "sueño", fr: "rêve", de: "Traum" } },
      { word: "Mut", meanings: { en: "courage", pl: "odwaga", es: "valentía", fr: "courage", de: "Mut" } },
    ],
  };

  function isSupportedLanguage(language) {
    return SUPPORTED_LANGUAGES.includes(language);
  }

  function languageCodeFromName(languageName) {
    const normalizedName = String(languageName || "").trim().toLowerCase();
    const languageEntry = Object.entries(LANGUAGE_CODE_BY_NAME).find(([name]) => name.toLowerCase() === normalizedName);
    return languageEntry ? languageEntry[1] : null;
  }

  function normalizeLanguageCode(language) {
    const languageValue = String(language || "").trim();
    if (isSupportedLanguage(languageValue)) return languageValue;
    return languageCodeFromName(languageValue);
  }

  function resolveStoryLanguage(profile, selectedLanguage) {
    return (
      normalizeLanguageCode(selectedLanguage) ||
      normalizeLanguageCode(profile && profile.storyLanguage) ||
      normalizeLanguageCode(profile && profile.websiteLanguage) ||
      normalizeLanguageCode(profile && profile.currentLanguage) ||
      DEFAULT_LANGUAGE
    );
  }

  function languageNameFromCode(language) {
    return LANGUAGE_NAME_BY_CODE[resolveStoryLanguage(null, language)] || LANGUAGE_NAME_BY_CODE[DEFAULT_LANGUAGE];
  }

  function getCurrentLanguage() {
    try {
      const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      return normalizeLanguageCode(storedLanguage) || DEFAULT_LANGUAGE;
    } catch (error) {
      return DEFAULT_LANGUAGE;
    }
  }

  function writeCurrentLanguage(language) {
    const normalizedLanguage = normalizeLanguageCode(language);
    if (!normalizedLanguage) return;

    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, normalizedLanguage);
    } catch (error) {
      return;
    }
  }

  function translateFor(language, key, replacements) {
    const dictionary = translations[language] || translations[DEFAULT_LANGUAGE];
    const template = dictionary[key] || translations[DEFAULT_LANGUAGE][key] || key;
    return Object.entries(replacements || {}).reduce((text, [name, value]) => {
      return text.replace(new RegExp(`\\{${name}\\}`, "g"), value);
    }, template);
  }

  function translate(key, replacements) {
    return translateFor(getCurrentLanguage(), key, replacements);
  }

  function setElementMessage(element, key, replacements) {
    if (!element) return;
    element.dataset.i18nStatus = key;
    if (replacements) {
      element.dataset.i18nReplacements = JSON.stringify(replacements);
    } else {
      delete element.dataset.i18nReplacements;
    }
    element.textContent = translate(key, replacements);
  }

  function clearElementMessage(element) {
    if (!element) return;
    element.textContent = "";
    delete element.dataset.i18nStatus;
    delete element.dataset.i18nReplacements;
  }

  function readStatusReplacements(element) {
    if (!element.dataset.i18nReplacements) return undefined;
    try {
      return JSON.parse(element.dataset.i18nReplacements);
    } catch (error) {
      return undefined;
    }
  }

  function syncLanguageControls() {
    const currentLanguage = getCurrentLanguage();
    document.documentElement.lang = currentLanguage;
    document.querySelectorAll("[data-language-select]").forEach((select) => {
      select.value = currentLanguage;
    });
    document.querySelectorAll(".language-button").forEach((button) => {
      const isActive = button.dataset.language === currentLanguage;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function syncLanguageFormFields() {
    const currentLanguage = getCurrentLanguage();
    const languageField = document.querySelector("#website-language-field");
    if (languageField) languageField.value = currentLanguage;

    const currentLanguageField = document.querySelector("select[name='currentLanguage']");
    if (currentLanguageField) {
      currentLanguageField.value = languageNameFromCode(currentLanguage);
    }
  }

  function updateTranslatedContent() {
    const language = getCurrentLanguage();
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = translateFor(language, element.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      element.setAttribute("placeholder", translateFor(language, element.dataset.i18nPlaceholder));
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      element.setAttribute("aria-label", translateFor(language, element.dataset.i18nAriaLabel));
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      element.setAttribute("alt", translateFor(language, element.dataset.i18nAlt));
    });
    document.querySelectorAll("[data-i18n-content]").forEach((element) => {
      element.setAttribute("content", translateFor(language, element.dataset.i18nContent));
    });
    document.querySelectorAll("[data-i18n-status]").forEach((element) => {
      element.textContent = translateFor(language, element.dataset.i18nStatus, readStatusReplacements(element));
    });

    const page = document.body.dataset.page || "home";
    document.title = translateFor(language, `meta.${page}.title`);
    syncLanguageControls();
    syncLanguageFormFields();
  }

  function setWebsiteLanguage(language) {
    const selectedLanguage = normalizeLanguageCode(language);
    if (!selectedLanguage) return;

    writeCurrentLanguage(selectedLanguage);
    updateTranslatedContent();
    if (document.body.dataset.page === "story") {
      renderStoryPage({ useProfileLanguage: false });
    }
  }

  function initializeLanguageSelectors() {
    document.querySelectorAll("[data-language-select]").forEach((select) => {
      select.addEventListener("change", () => setWebsiteLanguage(select.value));
    });

    document.querySelectorAll(".language-button").forEach((button) => {
      button.addEventListener("click", () => setWebsiteLanguage(button.dataset.language));
    });
  }

  function trackEvent(eventName, details) {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, details || {});
    }
    console.log(`[MoonTale analytics] ${eventName}`, details || {});
  }

  window.trackCTAClick = function () {
    trackEvent("cta_click", { location: "landing_hero", language: getCurrentLanguage() });
  };

  window.trackStoryBuilderStart = function () {
    trackEvent("story_builder_start", { language: getCurrentLanguage() });
  };

  window.trackStoryGenerated = function (profile) {
    trackEvent("story_generated", {
      character: profile.character,
      mood: profile.mood,
      targetLanguage: profile.targetLanguage,
      websiteLanguage: profile.websiteLanguage || getCurrentLanguage(),
      goal: profile.goal,
      readingTime: profile.readingTime,
      newWordsCount: profile.newWordsCount,
    });
  };

  window.trackWaitlistSubmission = function (source) {
    trackEvent("waitlist_submission", { location: source || "story-preview", language: getCurrentLanguage() });
  };

  function initializeRevealElements() {
    document.querySelectorAll(".reveal").forEach((item) => item.classList.add("is-visible"));
  }

  function initializeLandingPage() {
    document.querySelectorAll("[data-track='cta']").forEach((link) => {
      link.addEventListener("click", window.trackCTAClick);
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
      return JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY));
    } catch (error) {
      return null;
    }
  }

  function writeStoredProfile(profile) {
    try {
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
    } catch (error) {
      return;
    }
  }

  function getFormProfile(form) {
    const formData = new FormData(form);
    const storyLanguage = getCurrentLanguage();
    return {
      childName: String(formData.get("childName") || "").trim(),
      childAge: formData.get("childAge"),
      currentLanguage: languageNameFromCode(storyLanguage),
      targetLanguage: formData.get("targetLanguage"),
      character: formData.get("character"),
      mood: formData.get("mood"),
      interest: String(formData.get("interest") || "").trim(),
      goal: formData.get("goal"),
      readingTime: formData.get("readingTime"),
      newWordsCount: formData.get("newWordsCount"),
      parentEmail: formData.get("email"),
      storyLanguage,
      websiteLanguage: storyLanguage,
    };
  }

  async function postFormToFormspree(form, options) {
    const timeoutMs = options && options.timeoutMs ? options.timeoutMs : 0;
    const controller = timeoutMs ? new AbortController() : null;
    const timeoutId = controller ? window.setTimeout(() => controller.abort(), timeoutMs) : null;

    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
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

  function initializeFormspreeForms() {
    document.querySelectorAll(".formspree-form").forEach((form) => {
      const status = form.querySelector(".waitlist-status");
      const submitButton = form.querySelector("button[type='submit']");
      if (!submitButton) return;

      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (!form.reportValidity()) return;

        submitButton.disabled = true;
        submitButton.textContent = translate("form.status.submitting");
        clearElementMessage(status);

        try {
          await postFormToFormspree(form);
          const source = form.elements.source ? form.elements.source.value : "waitlist";
          window.trackWaitlistSubmission(source);
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

  function setFieldError(field, key) {
    const wrapper = field.closest(".field");
    const error = wrapper ? wrapper.querySelector(".field-error") : null;
    field.setAttribute("aria-invalid", "true");
    setElementMessage(error, key);
  }

  function clearStepErrors(step) {
    step.querySelectorAll("[aria-invalid='true']").forEach((field) => {
      field.removeAttribute("aria-invalid");
    });
    step.querySelectorAll(".field-error, .group-error").forEach(clearElementMessage);
  }

  function validateStep(step) {
    clearStepErrors(step);
    let isValid = true;

    step.querySelectorAll("input:not([type='radio']):not([type='checkbox']), select").forEach((field) => {
      if (!field.checkValidity()) {
        setFieldError(field, field.type === "email" && field.value ? "form.error.email" : "form.error.required");
        isValid = false;
      }
    });

    const radioNames = new Set(
      Array.from(step.querySelectorAll("input[type='radio'][required]")).map((input) => input.name),
    );

    radioNames.forEach((name) => {
      if (!step.querySelector(`input[name="${name}"]:checked`)) {
        setElementMessage(step.querySelector(`[data-error-for="${name}"]`), "form.error.choice");
        isValid = false;
      }
    });

    const requiredCheckbox = step.querySelector("input[type='checkbox'][required]");
    if (requiredCheckbox && !requiredCheckbox.checked) {
      setElementMessage(step.querySelector('[data-error-for="consent"]'), "form.error.consent");
      isValid = false;
    }

    if (!isValid) {
      const firstInvalid = step.querySelector("[aria-invalid='true'], input:invalid");
      if (firstInvalid) firstInvalid.focus();
    }

    return isValid;
  }

  function fillFormFromProfile(form, profile) {
    if (!profile) return;
    Object.entries(profile).forEach(([name, value]) => {
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
    const currentLanguageField = form.elements.currentLanguage;
    let currentStep = 0;

    if (currentLanguageField) {
      currentLanguageField.addEventListener("change", () => {
        const selectedWebsiteLanguage = languageCodeFromName(currentLanguageField.value);
        if (selectedWebsiteLanguage) setWebsiteLanguage(selectedWebsiteLanguage);
      });
    }

    fillFormFromProfile(form, readStoredProfile());
    syncLanguageFormFields();

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
      clearElementMessage(formStatus);

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
      writeStoredProfile(profile);
      window.trackStoryGenerated(profile);

      generateButton.disabled = true;
      generateButton.textContent = translate("builder.status.creating");

      try {
        await postFormToFormspree(form, { timeoutMs: 2500 });
        window.trackWaitlistSubmission("story-builder");
      } catch (error) {
        console.warn("MoonTale waitlist submission failed.", error);
      }

      const encodedProfile = encodeProfile(profile);
      setElementMessage(formStatus, "builder.status.ready");
      window.setTimeout(() => {
        window.location.href = `./story.html?story=${encodeURIComponent(encodedProfile)}`;
      }, 300);
    });

    showStep(0);
  }

  function normalizeCanonicalLanguage(language) {
    if (VOCABULARY[language]) return language;
    if (LANGUAGE_NAME_BY_CODE[language]) return LANGUAGE_NAME_BY_CODE[language];
    return "Spanish";
  }

  function languageLabel(canonicalLanguage, language) {
    return translateFor(language, `language.${normalizeCanonicalLanguage(canonicalLanguage)}`);
  }

  function optionLabel(group, value, language) {
    return translateFor(language, `option.${group}.${value}`);
  }

  function cleanProfileText(value, fallback) {
    const text = String(value || "").trim();
    return text || fallback;
  }

  function clampWordCount(value) {
    const parsed = Number.parseInt(value, 10);
    if (Number.isNaN(parsed)) return 3;
    return Math.min(5, Math.max(1, parsed));
  }

  function buildWordPhrase(vocabulary, language) {
    const words = vocabulary.map((item) => `${item.word} (${item.meaning})`);
    if (words.length <= 1) return words[0] || "";
    if (words.length === 2) return `${words[0]} ${translateFor(language, "list.and")} ${words[1]}`;
    return `${words.slice(0, -1).join(", ")} ${translateFor(language, "list.and")} ${words[words.length - 1]}`;
  }

  function selectVocabulary(targetLanguage, count, language) {
    const vocabulary = VOCABULARY[normalizeCanonicalLanguage(targetLanguage)] || VOCABULARY.Spanish;
    return vocabulary.slice(0, count).map((item) => ({
      word: item.word,
      meaning: item.meanings[language] || item.meanings.en,
    }));
  }

  function resolveProfileLanguage(profile) {
    return resolveStoryLanguage(profile);
  }

  function generateStory(profile, selectedLanguage) {
    const language = resolveStoryLanguage(profile, selectedLanguage);
    const childName = cleanProfileText(profile.childName, translateFor(language, "story.defaults.childName"));
    const interest = cleanProfileText(profile.interest, translateFor(language, "story.defaults.interest"));
    const targetLanguage = normalizeCanonicalLanguage(profile.targetLanguage);
    const wordCount = clampWordCount(profile.newWordsCount);
    const vocabulary = selectVocabulary(targetLanguage, wordCount, language);
    const targetLanguageLabel = languageLabel(targetLanguage, language);
    const siteLanguageLabel = languageLabel(LANGUAGE_NAME_BY_CODE[language], language);
    const goal = optionLabel("goal", profile.goal || "Language learning", language);
    const lesson = translateFor(language, `story.lesson.${profile.goal || "Language learning"}`);
    const replacements = {
      childName,
      interest,
      character: optionLabel("character", profile.character || "Astronaut", language),
      mood: optionLabel("mood", profile.mood || "Magical", language),
      wordPhrase: buildWordPhrase(vocabulary, language),
      targetLanguage: targetLanguageLabel,
      siteLanguage: siteLanguageLabel,
      goal,
      lesson,
    };
    const newWordsKey = vocabulary.length === 1 ? "story.newWords.one" : "story.newWords.many";
    const wordsLabel = translateFor(language, newWordsKey, { count: vocabulary.length });

    return {
      languageCode: language,
      languageName: languageNameFromCode(language),
      title: translateFor(language, "story.generated.title", replacements),
      readingTime: translateFor(language, "story.readingTime", { minutes: profile.readingTime || "5" }),
      languageMeta: translateFor(language, "story.languageMeta", {
        language: targetLanguageLabel,
        words: wordsLabel,
      }),
      vocabularyIntro: translateFor(language, "story.generated.vocabIntro", replacements),
      learningGoal: translateFor(language, "story.generated.goalLine", replacements),
      parentTip: translateFor(language, "story.generated.parentTip", replacements),
      vocabulary,
      paragraphs: [
        translateFor(language, "story.generated.paragraph1", replacements),
        translateFor(language, "story.generated.paragraph2", replacements),
        translateFor(language, "story.generated.paragraph3", replacements),
        translateFor(language, "story.generated.paragraph4", replacements),
      ],
    };
  }

  window.MoonTaleStories = {
    generateStory,
    resolveStoryLanguage,
  };

  function createStoryParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  }

  function saveGeneratedStory(story, profile) {
    try {
      const savedStories = JSON.parse(localStorage.getItem(SAVED_STORIES_KEY) || "[]");
      const nextStories = [
        {
          title: story.title,
          language: story.languageCode || getCurrentLanguage(),
          targetLanguage: profile.targetLanguage,
          createdAt: new Date().toISOString(),
          profile,
        },
        ...savedStories,
      ].slice(0, 8);
      localStorage.setItem(SAVED_STORIES_KEY, JSON.stringify(nextStories));
    } catch (error) {
      return;
    }
  }

  function renderStoryPage(options) {
    const storyContent = document.querySelector("#story-content");
    if (!storyContent) return;

    const profile = readStoredProfile();
    if (!profile) {
      window.location.replace("./story-builder.html");
      return;
    }

    const profileLanguage = resolveProfileLanguage(profile);
    if ((!options || options.useProfileLanguage !== false) && profileLanguage) {
      writeCurrentLanguage(profileLanguage);
      updateTranslatedContent();
    }

    const story = generateStory(profile, getCurrentLanguage());
    const storyTitle = document.querySelector("#story-title");
    const readingTime = document.querySelector("#story-reading-time");
    const storyLanguage = document.querySelector("#story-language");
    const vocabularyIntro = document.querySelector("#vocabulary-language");
    const learningGoal = document.querySelector("#learning-goal");
    const parentTip = document.querySelector("#parent-tip");
    const vocabularyList = document.querySelector("#vocabulary-list");

    document.title = `${story.title} - MoonTale`;
    if (storyTitle) storyTitle.textContent = story.title;
    if (readingTime) readingTime.textContent = story.readingTime;
    if (storyLanguage) storyLanguage.textContent = story.languageMeta;
    if (vocabularyIntro) vocabularyIntro.textContent = story.vocabularyIntro;
    if (learningGoal) learningGoal.textContent = story.learningGoal;
    if (parentTip) parentTip.textContent = story.parentTip;

    storyContent.replaceChildren();
    story.paragraphs.forEach((paragraph) => {
      storyContent.appendChild(createStoryParagraph(paragraph));
    });

    if (vocabularyList) {
      vocabularyList.replaceChildren();
      story.vocabulary.forEach((item) => {
        const row = document.createElement("div");
        const term = document.createElement("dt");
        const definition = document.createElement("dd");
        term.textContent = item.word;
        definition.textContent = item.meaning;
        row.append(term, definition);
        vocabularyList.appendChild(row);
      });
    }

    const waitlistEmail = document.querySelector("#waitlist-email");
    if (waitlistEmail && profile.parentEmail) waitlistEmail.value = profile.parentEmail;
    saveGeneratedStory(story, profile);
  }

  document.addEventListener("DOMContentLoaded", () => {
    initializeLanguageSelectors();
    updateTranslatedContent();
    initializeRevealElements();
    initializeLandingPage();
    initializeFormspreeForms();

    const page = document.body.dataset.page;
    if (page === "builder") initializeBuilderPage();
    if (page === "story") renderStoryPage({ useProfileLanguage: true });
  });
})();
