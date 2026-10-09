// ===========================================================================
// ENGLISCHE TEXTE
//
// Gleicher Aufbau wie de.ts. Wenn du hier etwas hinzufuegst, muss es auch in
// de.ts stehen, sonst fehlt der Text in der anderen Sprache.
// ===========================================================================

import type { Content } from "./index";

export const en: Content = {
  nav: {
    home: "Home",
    about: "About",
    contact: "Contact",
    cta: "Book a call",
    menu: "Menu",
    switchLabel: "Auf Deutsch ansehen",
  },

  home: {
    meta: {
      title: "Stephanie Wieck | Marketing and Communications, Berlin",
      description:
        "Freelance marketing and communications strategist in Berlin: positioning and messaging, content and media relations, performance campaigns and reporting. As a project, an ongoing mandate or interim leadership.",
      ogDescription:
        "I strengthen marketing and communications teams, or lead them when structures are missing. From the message through paid campaigns to reporting.",
    },
    hero: {
      eyebrow: "Communications · Content · Performance",
      h1: { pre: "Clear in the", accent: "message", post: "Solid in the delivery." },
      lead: "I strengthen marketing and communications teams, or lead them when structures are missing. From the message through paid campaigns to reporting: strategically clear and delivered hands-on.",
      cta: "Book a free intro call",
    },
    about: {
      eyebrow: "About me",
      h2: { pre: "Marketing that", accent: "works", post: "." },
      p1: "For more than 15 years I have worked at the intersection of marketing, communications and digital growth. I think strategically and build tailored processes hands-on.",
      p2: "My focus is on developing precise messaging, on content and media relations, and on data-driven campaigns inside existing teams and structures.",
      link: "More about my work",
    },
    capabilities: {
      eyebrow: "Where I usually come in",
      h2: "Where message and reach come together.",
      items: [
        "Positioning, messaging and narrative",
        "PR and media relations",
        "Content strategy and editorial planning",
        "Performance marketing & paid ads",
        "SEO and organic visibility",
        "Newsletter and CRM",
        "Social media & campaign production",
        "Reporting and analytics",
      ],
    },
    cta: {
      eyebrow: "The first step is free",
      h2: { pre: "Let us talk about your", accent: "marketing", post: "." },
      p: "Thirty minutes are enough to see where the biggest lever sits: in the message, in the funnel or in the process. Pragmatic, without unnecessary complexity.",
      button: "Schedule a call",
    },
  },

  about: {
    meta: {
      title: "About | Stephanie Wieck",
      description:
        "More than 15 years in marketing and communications: positioning and messaging, content and media relations, performance campaigns and reporting.",
      ogDescription:
        "Marketing and communications strategist: from the message through content and media relations to the data-driven campaign.",
    },
    eyebrow: "About me",
    h1: { pre: "Think strategically.", accent: "Deliver", post: "hands-on." },
    p1: "Some people build strong messages. Others build tracking and dashboards. I have done both for more than 15 years, and I have learned this: the result only adds up when message and measurability are thought through together.",
    p2: "My focus is on positioning and messaging, on content and media relations, and on data-driven campaigns. Where it makes sense, I build routines that take work off your team.",
    p3: {
      pre: "You can find more on my 15-plus years in management and marketing on my",
      link: "LinkedIn profile",
      post: ".",
    },
    blocks: [
      {
        k: "01",
        t: "Strategy",
        d: "I look at how you work today and find the levers where a change really makes a difference.",
      },
      {
        k: "02",
        t: "Delivery",
        d: "From editorial planning to the campaign: concrete routines your team can use right away.",
      },
      {
        k: "03",
        t: "Enablement",
        d: "Workshops and guidance, so new routines stop being a side project and become part of everyday work.",
      },
    ],
    ctaH2: "Let us talk about marketing and communications.",
    ctaButton: "Get in touch",
  },

  contact: {
    meta: {
      title: "Contact | Stephanie Wieck",
      description:
        "Get in touch with Stephanie Wieck, marketing and communications strategist in Berlin. Book a free intro call.",
      ogDescription:
        "Write to me or book a free 30-minute intro call on communications, content and marketing.",
    },
    eyebrow: "Contact",
    h1: { pre: "Short call,", accent: "clear", post: "answer." },
    lead: "Whether it is positioning and messaging, content and campaigns or reporting: tell me briefly what it is about. In the call we work out how I can best support you, as a project, an ongoing mandate or interim leadership.",
    cardTitle: "Direct line",
    mailLabel: "Email",
    linkedinLabel: "LinkedIn",
    callLabel: "Intro call",
    callText: "30 minutes, free and without obligation.",
    button: "Book a slot via Calendly",
  },

  footer: {
    navigation: "Navigation",
    contact: "Contact",
    legal: "Legal",
    imprint: "Imprint (German)",
    privacy: "Privacy policy (German)",
    cookies: "Cookie settings",
    rights: "All rights reserved.",
  },
};
