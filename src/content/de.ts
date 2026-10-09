// ===========================================================================
// DEUTSCHE TEXTE
//
// Hier stehen ALLE deutschen Texte der Website. Wenn du etwas umformulieren
// willst, aenderst du es hier und sonst nirgends. Die englische Entsprechung
// liegt in en.ts und hat genau denselben Aufbau.
//
// "pre", "accent" und "post" gehoeren zu einer Ueberschrift:
//   pre = normaler Text davor
//   accent = das gelbe, kursive Wort
//   post = normaler Text danach
// ===========================================================================

export const de = {
  // Kopfzeile und Navigation
  nav: {
    home: "Home",
    about: "Über mich",
    contact: "Kontakt",
    cta: "Erstgespräch buchen",
    menu: "Menü",
    switchLabel: "Switch to English",
  },

  // Startseite
  home: {
    meta: {
      title: "Stephanie Wieck | Marketing und Kommunikation, Berlin",
      description:
        "Freiberufliche Marketing- und Kommunikationsstrategin in Berlin: Positionierung und Botschaft, Content und Media Relations, Performance-Kampagnen und Reporting. Als Projekt, laufendes Mandat oder Leitung auf Zeit.",
      ogDescription:
        "Ich verstärke Marketing- und Kommunikationsteams oder übernehme ihre Führung, wenn Strukturen fehlen. Von der Botschaft über Paid-Kampagnen bis zum Reporting.",
    },
    hero: {
      eyebrow: "Kommunikation · Content · Performance",
      h1: { pre: "Klar in der", accent: "Botschaft", post: "Sauber in der Umsetzung." },
      lead: "Ich verstärke Marketing- und Kommunikationsteams oder übernehme ihre Führung, wenn Strukturen fehlen. Von der Botschaft über Paid-Kampagnen bis zum Reporting: strategisch klar und hands‑on umgesetzt.",
      cta: "Kostenloses Erstgespräch buchen",
    },
    about: {
      eyebrow: "Über mich",
      h2: { pre: "Marketing, das", accent: "wirkt", post: "." },
      p1: "Seit über 15 Jahren arbeite ich an der Schnittstelle von Marketing, Kommunikation und digitalem Wachstum. Dabei denke ich strategisch und setze hands‑on maßgeschneiderte Prozesse um.",
      p2: "Mein Fokus liegt auf der Entwicklung passgenauer Botschaften, auf Content und Media Relations sowie auf datengetriebenen Kampagnen in bestehenden Teams und Strukturen.",
      link: "Mehr über meine Arbeit",
    },
    capabilities: {
      eyebrow: "Typische Einsatzbereiche",
      h2: "Wo Botschaft und Reichweite zusammenkommen.",
      items: [
        "Positionierung, Messaging und Narrativ",
        "PR und Media Relations",
        "Content-Strategie und Redaktionsplanung",
        "Performance Marketing & Paid Ads",
        "SEO und organische Sichtbarkeit",
        "Newsletter und CRM",
        "Social Media & Kampagnenproduktion",
        "Reporting und Analyse",
      ],
    },
    cta: {
      eyebrow: "Der erste Schritt kostet nichts",
      h2: { pre: "Lasst uns über euer", accent: "Marketing", post: "sprechen." },
      p: "30 Minuten reichen, um zu sehen, wo der größte Hebel liegt: In der Botschaft, im Funnel oder im Prozess. Pragmatisch und ohne unnötige Komplexität.",
      button: "Termin vereinbaren",
    },
  },

  // Über mich
  about: {
    meta: {
      title: "Über mich | Stephanie Wieck",
      description:
        "Über 15 Jahre Marketing und Kommunikation: Positionierung und Botschaft, Content und Media Relations, Performance-Kampagnen und Reporting.",
      ogDescription:
        "Marketing- und Kommunikationsstrategin: von der Botschaft über Content und Media Relations bis zur datengetriebenen Kampagne.",
    },
    eyebrow: "Über mich",
    h1: { pre: "Strategisch denken.", accent: "Hands‑on", post: "umsetzen." },
    p1: "Es gibt Menschen, die starke Botschaften entwickeln. Und Menschen, die Tracking mit Dashboard aufsetzen. Ich mache seit über 15 Jahren beides und habe gelernt: Das Ergebnis stimmt erst, wenn Botschaft und Messbarkeit zusammen gedacht werden.",
    p2: "Mein Fokus liegt auf Positionierung und Botschaft, auf Content und Media Relations sowie auf datengetriebenen Kampagnen. Wo es sinnvoll ist, baue ich Abläufe, die eurem Team Arbeit abnehmen.",
    p3: {
      pre: "Weitere Informationen zu meiner über 15‑jährigen Erfahrung in Management und Marketing findest du in meinem",
      link: "LinkedIn-Profil",
      post: ".",
    },
    blocks: [
      {
        k: "01",
        t: "Strategie",
        d: "Ich analysiere eure Prozesse und finde die Hebel, an denen ein Change wirklich einen Unterschied macht.",
      },
      {
        k: "02",
        t: "Umsetzung",
        d: "Von der Redaktionsplanung bis zur Kampagne: konkrete Abläufe, die euer Team sofort nutzen kann.",
      },
      {
        k: "03",
        t: "Enablement",
        d: "Workshops und Begleitung, damit Prozesse kein Nebenprojekt bleiben, sondern Teil eures Alltags werden.",
      },
    ],
    ctaH2: "Lass uns über Marketing und Kommunikation sprechen.",
    ctaButton: "Kontakt aufnehmen",
  },

  // Kontakt
  contact: {
    meta: {
      title: "Kontakt | Stephanie Wieck",
      description:
        "Kontakt zu Stephanie Wieck, Marketing- und Kommunikationsstrategin in Berlin. Kostenloses Erstgespräch buchen.",
      ogDescription:
        "Schreib mir oder buche direkt ein kostenloses 30‑Minuten Erstgespräch zu Kommunikation, Content und Marketing.",
    },
    eyebrow: "Kontakt",
    h1: { pre: "Kurzes Gespräch,", accent: "klare", post: "Einschätzung." },
    lead: "Ob Positionierung und Botschaft, Content und Kampagnen oder Reporting: Schreib mir kurz, worum es geht. Im Gespräch klären wir, wie ich am besten unterstütze, als Projekt, laufendes Mandat oder Leitung auf Zeit.",
    cardTitle: "Direkter Draht",
    mailLabel: "E‑Mail",
    linkedinLabel: "LinkedIn",
    callLabel: "Erstgespräch",
    callText: "30 Minuten, kostenlos und unverbindlich.",
    button: "Termin über Calendly buchen",
  },

  // Fußzeile
  footer: {
    navigation: "Navigation",
    contact: "Kontakt",
    legal: "Rechtliches",
    imprint: "Impressum",
    privacy: "Datenschutz",
    cookies: "Cookie-Einstellungen",
    rights: "Alle Rechte vorbehalten.",
  },
};
