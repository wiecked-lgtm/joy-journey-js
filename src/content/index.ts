// ===========================================================================
// SPRACHUMSCHALTUNG
//
// Diese Datei verbindet die Texte aus de.ts und en.ts mit den Seiten.
// Im Normalfall musst du hier nichts aendern. Texte stehen in de.ts / en.ts.
// ===========================================================================

import { useRouterState } from "@tanstack/react-router";

import { de } from "./de";
import { en } from "./en";

export type Lang = "de" | "en";

// Deutsch ist die Vorlage. Englisch muss genau denselben Aufbau haben,
// sonst meldet TypeScript das beim Bearbeiten von en.ts.
export type Content = typeof de;

const BY_LANG: Record<Lang, Content> = { de, en };

// Welche Adresse gehoert zu welcher Seite in welcher Sprache.
// Wird fuer die Navigation und fuer den DE/EN-Umschalter gebraucht.
export const PATHS = {
  de: { home: "/", about: "/ueber-mich", contact: "/kontakt" },
  en: { home: "/en", about: "/en/about", contact: "/en/contact" },
} as const;

export const SITE_URL = "https://www.stephanie-wieck.com";

/** Liefert die Texte der gewuenschten Sprache. */
export function content(lang: Lang): Content {
  return BY_LANG[lang];
}

/**
 * Ermittelt die Sprache aus der Adresse: alles unter /en ist englisch,
 * alles andere deutsch.
 */
export function useLang(): Lang {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "de";
}

/**
 * Die gleiche Seite in der jeweils anderen Sprache. Wird vom Umschalter
 * im Seitenkopf benutzt.
 */
export function otherLangHref(pathname: string): string {
  const map: Record<string, string> = {
    "/": PATHS.en.home,
    "/ueber-mich": PATHS.en.about,
    "/kontakt": PATHS.en.contact,
    "/en": PATHS.de.home,
    "/en/": PATHS.de.home,
    "/en/about": PATHS.de.about,
    "/en/contact": PATHS.de.contact,
  };
  const clean = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  return map[clean] ?? (clean.startsWith("/en") ? "/" : "/en");
}

/**
 * hreflang-Angaben fuer eine Seite. Damit versteht Google, dass die
 * deutsche und die englische Fassung dasselbe Dokument sind, und spielt
 * jedem Suchenden die passende aus.
 */
export function altLinks(dePath: string, enPath: string) {
  return [
    { rel: "alternate", hrefLang: "de", href: `${SITE_URL}${dePath}` },
    { rel: "alternate", hrefLang: "en", href: `${SITE_URL}${enPath}` },
    { rel: "alternate", hrefLang: "x-default", href: `${SITE_URL}${dePath}` },
  ];
}

/** Baut den kompletten meta-Block einer Seite. */
export function pageMeta(m: { title: string; description: string; ogDescription: string }) {
  return [
    { title: m.title },
    { name: "description", content: m.description },
    { property: "og:title", content: m.title },
    { property: "og:description", content: m.ogDescription },
  ];
}
