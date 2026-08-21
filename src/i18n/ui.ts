export const languages = {
  en: 'EN',
  de: 'DE',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'title': 'Moritz Bengel | Full Stack Developer',
    'meta.description': 'Moritz Bengel is a Full Stack Developer based in Darmstadt, Germany.',
    'skip': 'Skip to content',
    'nav.home': 'Moritz Bengel, back to home',
    'lang.label': 'Language',
    'theme.label': 'Toggle dark mode',

    'hero.hi': "Hi, I'm",
    'hero.name': 'Moritz Bengel',
    'hero.role': 'Full Stack Developer',
    'hero.tagline':
      'I craft modern web applications with clean code and emerging technologies&nbsp;...<br>&nbsp;... fueled by curiosity and coffee&nbsp;☕',
    'hero.cta': "See what I've built",
    'hero.resume': 'Résumé (PDF)',
    'hero.location': 'Darmstadt, DE',

    'about.title': 'About Me',
    'about.text':
      "I'm a Full Stack Developer who thrives on exploring cutting-edge open source technologies with vibrant communities. Currently pursuing my Computer Science degree while working at Deutsche Telekom, I'm diving deep into Go while leveraging my strong Python foundation. I'm drawn to tools like Deno and Svelte because of their innovative approaches and active developer ecosystems.",
    'about.bridge':
      'The same instinct that has me chasing new frameworks shows up off-screen too, whether that means hiking a new trail, learning a new deck, or dialing in a new brew.',
    'about.fact.location': 'Location',
    'about.fact.locationValue': 'Darmstadt, DE',
    'about.fact.role': 'Currently',
    'about.fact.roleValue': 'Dual Student, Deutsche Telekom',
    'about.fact.focus': 'Focus',
    'about.fact.focusValue': 'Go · Svelte · Deno',
    'about.fact.grad': 'Graduating',
    'about.fact.gradValue': 'March 2026 (expected)',
    'about.hobby1.title': 'Coffee',
    'about.hobby1.text': 'Always chasing the perfect pour-over.',
    'about.hobby2.title': 'Hiking',
    'about.hobby2.text': 'Happiest on a trail, rain or shine.',
    'about.hobby3.title': 'Trading Card Games',
    'about.hobby3.text': 'Deep into Commander deckbuilding. <a class="font-semibold text-coral-text" href="#projects">See below ↓</a>',

    'skills.title': 'Skills',
    'skills.favoriteTools': 'Daily Drivers',
    'skills.otherSkills': 'Also Comfortable With',

    'projects.title': "Things I've Built",
    'projects.viewCode': 'View code',
    'projects.viewSite': 'Visit site',

    'experience.title': 'Experience &amp; Education',
    'experience.present': 'Present',
    'experience.milestone': 'Upcoming Milestone',

    'contact.title': 'Contact Me',
    'contact.text': 'You can reach me via email or find me on social media.',
    'contact.button': 'Email Me',
    'contact.signoff': "Say hi, I don't bite ☕",

    'footer.location': 'Based in Darmstadt, Germany',
    'footer.copyright': 'Moritz Bengel • Crafted with ❤️ and ☕',
  },
  de: {
    'title': 'Moritz Bengel | Full-Stack-Entwickler',
    'meta.description': 'Moritz Bengel ist Full-Stack-Entwickler aus Darmstadt, Deutschland.',
    'skip': 'Zum Inhalt springen',
    'nav.home': 'Moritz Bengel, zur Startseite',
    'lang.label': 'Sprache',
    'theme.label': 'Dunkelmodus umschalten',

    'hero.hi': 'Hi, ich bin',
    'hero.name': 'Moritz Bengel',
    'hero.role': 'Full-Stack-Entwickler',
    'hero.tagline':
      'Ich entwickle moderne Webanwendungen mit sauberem Code und neuen Technologien&nbsp;...<br>&nbsp;... angetrieben von Neugier und Kaffee&nbsp;☕',
    'hero.cta': 'Meine Projekte',
    'hero.resume': 'Lebenslauf (PDF)',
    'hero.location': 'Darmstadt, DE',

    'about.title': 'Über mich',
    'about.text':
      'Ich bin Full-Stack-Entwickler und begeistere mich für moderne Open-Source-Technologien mit aktiven Communities. Derzeit studiere ich Informatik und arbeite bei der Deutschen Telekom, wo ich mich intensiv mit Go beschäftige und dabei auf meine soliden Python-Kenntnisse zurückgreife. Tools wie Deno und Svelte begeistern mich durch ihre innovativen Ansätze und aktiven Communities.',
    'about.bridge':
      'Der gleiche Antrieb, der mich neue Frameworks entdecken lässt, zeigt sich auch abseits des Bildschirms: beim Wandern, beim Kartenspiel oder beim perfekten Kaffee.',
    'about.fact.location': 'Standort',
    'about.fact.locationValue': 'Darmstadt, DE',
    'about.fact.role': 'Aktuell',
    'about.fact.roleValue': 'Dualer Student, Deutsche Telekom',
    'about.fact.focus': 'Fokus',
    'about.fact.focusValue': 'Go · Svelte · Deno',
    'about.fact.grad': 'Abschluss',
    'about.fact.gradValue': 'März 2026 (voraussichtlich)',
    'about.hobby1.title': 'Kaffee',
    'about.hobby1.text': 'Immer auf der Suche nach dem perfekten Pour-over.',
    'about.hobby2.title': 'Wandern',
    'about.hobby2.text': 'Am liebsten auf dem Trail, bei jedem Wetter.',
    'about.hobby3.title': 'Sammelkartenspiele',
    'about.hobby3.text': 'Tief im Commander-Deckbuilding. <a class="font-semibold text-coral-text" href="#projects">Siehe unten ↓</a>',

    'skills.title': 'Skills',
    'skills.favoriteTools': 'Bevorzugte Tools',
    'skills.otherSkills': 'Weitere Kenntnisse',

    'projects.title': 'Was ich gebaut habe',
    'projects.viewCode': 'Code ansehen',
    'projects.viewSite': 'Seite besuchen',

    'experience.title': 'Werdegang &amp; Ausbildung',
    'experience.present': 'Aktuell',
    'experience.milestone': 'Nächster Meilenstein',

    'contact.title': 'Kontakt',
    'contact.text': 'Du erreichst mich per E-Mail oder über soziale Medien.',
    'contact.button': 'E-Mail senden',
    'contact.signoff': 'Schreib mir, ich beiße nicht ☕',

    'footer.location': 'Ansässig in Darmstadt, Deutschland',
    'footer.copyright': 'Moritz Bengel • Mit ❤️ und ☕ gemacht',
  },
} as const;

export type UiKey = keyof (typeof ui)[typeof defaultLang];
