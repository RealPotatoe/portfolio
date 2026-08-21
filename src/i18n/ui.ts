export const languages = {
    en: "EN",
    de: "DE",
} as const;

export const defaultLang = "en" as const;

export type Lang = keyof typeof languages;

export const ui = {
    en: {
        title: "Moritz Bengel | Full Stack Developer",
        "meta.description": "Moritz Bengel is a Full Stack Developer based in Darmstadt, Germany.",
        skip: "Skip to content",
        "nav.home": "MB, Moritz Bengel, back to home",
        "lang.label": "Language",
        "theme.label": "Toggle dark mode",

        "hero.hi": "Hi, I'm",
        "hero.name": "Moritz Bengel",
        "hero.role": "Full Stack Developer",
        "hero.tagline":
            "I craft modern web applications with clean code and emerging technologies&nbsp;...<br>&nbsp;... fueled by curiosity and coffee&nbsp;☕",
        "hero.cta": "See what I've built",
        "hero.resume": "Résumé (PDF)",
        "hero.location": "Darmstadt, DE",

        "about.title": "About Me",
        "about.text":
            "I'm a Full Stack Developer working as a Software Engineer at Deutsche Telekom, where I build backend services with Java and Spring Boot, work with a hint of Go, get hands-on with DevOps practices, and mentor a trainee. In my free time, I like to explore Go and Python, and enjoy self-hosting my own services.",
        "about.bridge":
            "The same instinct that has me chasing new frameworks shows up off-screen too, whether that means hiking a new trail, learning a new deck, or dialing in a new brew.",
        "about.fact.location": "Location",
        "about.fact.locationValue": "Darmstadt, DE",
        "about.fact.role": "Currently",
        "about.fact.roleValue": "Software Engineer, Deutsche Telekom",
        "about.fact.focus": "Focus",
        "about.fact.focusValue": "Go · Java · Python",
        "about.fact.grad": "Graduated",
        "about.fact.gradValue": "March 2026",
        "about.hobby1.title": "Coffee",
        "about.hobby1.text": "Always chasing the perfect pour-over.",
        "about.hobby2.title": "Hiking",
        "about.hobby2.text": "Happiest on a trail, rain or shine.",
        "about.hobby3.title": "Trading Card Games",
        "about.hobby3.text":
            'Deep into Commander deckbuilding. <a class="font-semibold text-coral-text" href="#projects">See below ↓</a>',
        "about.hobby4.title": "Self-Hosting",
        "about.hobby4.text": "Running my own services at home, from media to monitoring.",

        "skills.title": "Skills",
        "skills.favoriteTools": "Daily Drivers",
        "skills.otherSkills": "Also Comfortable With",

        "projects.title": "Things I've Built",
        "projects.viewCode": "View code",
        "projects.viewSite": "Visit site",

        "experience.title": "Experience &amp; Education",
        "experience.present": "Present",

        "contact.title": "Contact Me",
        "contact.text": "You can reach me via email or find me on social media.",
        "contact.button": "Email Me",
        "contact.signoff": "Say hi, I don't bite ☕",

        "footer.location": "Based in Darmstadt, Germany",
        "footer.copyright": "Moritz Bengel • Crafted with ❤️ and ☕",
    },
    de: {
        title: "Moritz Bengel | Full-Stack-Entwickler",
        "meta.description": "Moritz Bengel ist Full-Stack-Entwickler aus Darmstadt, Deutschland.",
        skip: "Zum Inhalt springen",
        "nav.home": "MB, Moritz Bengel, zur Startseite",
        "lang.label": "Sprache",
        "theme.label": "Dunkelmodus umschalten",

        "hero.hi": "Hi, ich bin",
        "hero.name": "Moritz Bengel",
        "hero.role": "Full-Stack-Entwickler",
        "hero.tagline":
            "Ich entwickle moderne Webanwendungen mit sauberem Code und neuen Technologien&nbsp;...<br>&nbsp;... angetrieben von Neugier und Kaffee&nbsp;☕",
        "hero.cta": "Meine Projekte",
        "hero.resume": "Lebenslauf (PDF)",
        "hero.location": "Darmstadt, DE",

        "about.title": "Über mich",
        "about.text":
            "Ich bin Full-Stack-Entwickler und arbeite als Software Engineer bei der Deutschen Telekom, wo ich Backend-Services mit Java und Spring Boot entwickle, mich mit einem Schuss Go beschäftige, DevOps-Praktiken anwende und einen Auszubildenden betreue. In meiner Freizeit beschäftige ich mich gerne mit Go und Python und betreibe eigene Self-Hosting-Projekte.",
        "about.bridge":
            "Der gleiche Antrieb, der mich neue Frameworks entdecken lässt, zeigt sich auch abseits des Bildschirms: beim Wandern, beim Kartenspiel oder beim perfekten Kaffee.",
        "about.fact.location": "Standort",
        "about.fact.locationValue": "Darmstadt, DE",
        "about.fact.role": "Aktuell",
        "about.fact.roleValue": "Software Engineer, Deutsche Telekom",
        "about.fact.focus": "Fokus",
        "about.fact.focusValue": "Go · Java · Python",
        "about.fact.grad": "Abschluss",
        "about.fact.gradValue": "März 2026",
        "about.hobby1.title": "Kaffee",
        "about.hobby1.text": "Immer auf der Suche nach dem perfekten Pour-over.",
        "about.hobby2.title": "Wandern",
        "about.hobby2.text": "Am liebsten auf dem Trail, bei jedem Wetter.",
        "about.hobby3.title": "Sammelkartenspiele",
        "about.hobby3.text":
            'Tief im Commander-Deckbuilding. <a class="font-semibold text-coral-text" href="#projects">Siehe unten ↓</a>',
        "about.hobby4.title": "Self-Hosting",
        "about.hobby4.text": "Betreibe eigene Dienste zuhause, von Medien bis Monitoring.",

        "skills.title": "Skills",
        "skills.favoriteTools": "Bevorzugte Tools",
        "skills.otherSkills": "Weitere Kenntnisse",

        "projects.title": "Was ich gebaut habe",
        "projects.viewCode": "Code ansehen",
        "projects.viewSite": "Seite besuchen",

        "experience.title": "Werdegang &amp; Ausbildung",
        "experience.present": "Aktuell",

        "contact.title": "Kontakt",
        "contact.text": "Du erreichst mich per E-Mail oder über soziale Medien.",
        "contact.button": "E-Mail senden",
        "contact.signoff": "Schreib mir, ich beiße nicht ☕",

        "footer.location": "Ansässig in Darmstadt, Deutschland",
        "footer.copyright": "Moritz Bengel • Mit ❤️ und ☕ gemacht",
    },
} as const;

export type UiKey = keyof (typeof ui)[typeof defaultLang];
