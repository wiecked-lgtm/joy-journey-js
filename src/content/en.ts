// ===========================================================================
// ENGLISCHE TEXTE
//
// Uebersetzt mit DeepL, Quelle ist de.ts.
// Gleicher Aufbau wie de.ts. Wenn du hier etwas hinzufuegst, muss es auch in
// de.ts stehen, sonst fehlt der Text in der anderen Sprache.
// ===========================================================================

import type { Content } from "./index";

export const en: Content = {
  nav: {
    home: "Home",
    about: "About Me",
    contact: "Contact",
    cta: "Schedule a Consultation",
    menu: "Menu",
    switchLabel: "Auf Deutsch ansehen",
  },

  home: {
    meta: {
      title: "Stephanie Wieck | Marketing and Communications, Berlin",
      description:
        "Marketing and communications: positioning and messaging, content and media relations, campaigns and evaluation. Available for projects, ongoing engagements, or leadership roles.",
      ogDescription:
        "I support marketing and communications teams or take on a leadership role within them. From the message through to the evaluation.",
    },
    hero: {
      eyebrow: "Communication · Content · Campaigns",
      h1: { pre: "Clear", accent: "messaging", post: "Executed flawlessly." },
      lead: "I support marketing and communications teams or take on a leadership role within them. From the message to the evaluation: strategically clear and executed with a hands‑on approach.",
      cta: "Schedule a Free Initial Consultation",
    },
    about: {
      eyebrow: "About Me",
      h2: { pre: "Marketing that", accent: "works", post: "." },
      p1: "For over 15 years, I have been working at the intersection of marketing and communication. I think strategically and take a hands‑on approach to implementation.",
      p2: "My focus is on developing tailored messages, content, and media relations, as well as campaigns and their evaluation.",
      link: "More About My Work",
    },
    capabilities: {
      eyebrow: "Where I typically come in",
      h2: "Where message and reach come together.",
      items: [
        "Positioning, Messaging, and Narrative",
        "Public Relations and Media Relations",
        "Content Strategy and Editorial Planning",
        "Campaigns, Reporting, and Analysis",
      ],
    },
    cta: {
      eyebrow: "The first step is free",
      h2: { pre: "Let's talk about your", accent: "marketing", post: "." },
      p: "30 minutes is all it takes to see where the greatest leverage lies: in the message, the processes, or the evaluation. Pragmatic and without unnecessary complexity.",
      button: "Schedule an appointment",
    },
  },

  about: {
    meta: {
      title: "About Me | Stephanie Wieck",
      description:
        "Over 15 years of experience in marketing and communications: positioning and messaging, content and media relations, campaigns and evaluation.",
      ogDescription:
        "Marketing and Communications Strategist: from messaging to content and media relations to the evaluation of the campaign.",
    },
    eyebrow: "About Me",
    h1: { pre: "Think strategically.", accent: "Implement", post: "hands‑on." },
    p1: "For over 15 years I have been working on both: the message itself and whether it gets across. In my experience, one rarely works without the other.",
    p2: "My focus is on positioning and messaging, content and media relations, and campaigns and their evaluation. Where appropriate, I develop processes that take some of the workload off our team.",
    p3: {
      pre: "You can find more information about my more than 15 years of experience in management and marketing on my",
      link: "LinkedIn profile",
      post: ".",
    },
    blocks: [
      {
        k: "01",
        t: "Strategy",
        d: "I analyze processes and identify the levers where change can truly make a difference.",
      },
      {
        k: "02",
        t: "Implementation",
        d: "From editorial planning to campaigns: concrete workflows we can put to use right away.",
      },
      {
        k: "03",
        t: "Handover",
        d: "Documentation and handover, so that the work continues when my assignment ends.",
      },
    ],
    ctaH2: "Let's talk about marketing and communication.",
    ctaButton: "Get in touch",
  },

  contact: {
    meta: {
      title: "Contact | Stephanie Wieck",
      description:
        "Contact Stephanie Wieck, marketing and communications. Schedule a free initial consultation.",
      ogDescription:
        "Send me a message or book a free 30‑minute initial consultation on communication, content, and marketing.",
    },
    eyebrow: "Contact",
    h1: { pre: "A quick call,", accent: "a clear", post: "answer." },
    lead: "Whether it is positioning and messaging, content and campaigns, or reporting: Send me a quick note explaining what it is about. We will discuss how I can best support you, whether on a project, as an ongoing engagement, or in a leadership role.",
    cardTitle: "Direct Line",
    mailLabel: "Email",
    linkedinLabel: "LinkedIn",
    callLabel: "Initial Consultation",
    callText: "30 minutes, free of charge and with no obligation.",
    button: "Schedule an appointment via Calendly",
  },

  footer: {
    navigation: "Navigation",
    contact: "Contact",
    legal: "Legal Information",
    imprint: "Legal Notice (German)",
    privacy: "Privacy Policy (German)",
    cookies: "Cookie Settings",
    rights: "All rights reserved.",
  },
};
