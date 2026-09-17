// ===========================================================================
// COOKIE-ERKLAERUNG FUER DIE DATENSCHUTZSEITE
//
// Cookiebot scannt deine Seite monatlich und pflegt daraus eine Tabelle aller
// gesetzten Cookies mit Zweck und Laufzeit. Diese Tabelle bindest du in
// src/routes/datenschutz.tsx ein, an der Stelle, an der es um Cookies geht.
// Sie aktualisiert sich dann von selbst, du musst sie nie nachpflegen.
//
// Ein reines <script>-Tag im JSX wird von React nicht ausgefuehrt, wenn es
// nachtraeglich eingehaengt wird. Deshalb dieser kleine Wrapper, der das
// Script beim Mounten selbst erzeugt.
// ===========================================================================

import { useEffect, useRef } from "react";

const COOKIEBOT_ID = "1333175c-a959-4c1c-a8ef-3a36a204fae2";

export function CookieErklaerung() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = container.current;
    if (!el || el.querySelector("#CookieDeclaration")) return;

    const script = document.createElement("script");
    script.id = "CookieDeclaration";
    script.src = `https://consent.cookiebot.com/${COOKIEBOT_ID}/cd.js`;
    script.type = "text/javascript";
    script.async = true;
    el.appendChild(script);
  }, []);

  return <div ref={container} className="mt-8" />;
}

// Verwendung in src/routes/datenschutz.tsx:
//
//   import { CookieErklaerung } from "../components/cookie-erklaerung";
//
//   ... im Abschnitt zu Cookies:
//   <CookieErklaerung />
//
// Datei ablegen als: src/components/cookie-erklaerung.tsx
