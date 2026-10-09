import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { content, otherLangHref, PATHS, useLang } from "../content";

// ===========================================================================
// SEITENKOPF
//
// Die Navigation richtet sich nach der Sprache der aufgerufenen Seite.
// Rechts steht der Umschalter DE/EN, er fuehrt immer auf dieselbe Seite
// in der anderen Sprache.
//
// Leistungen ist vorübergehend nicht verlinkt. Zum Wiedereinblenden die
// auskommentierte Zeile unten wieder aktivieren.
// ===========================================================================

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const lang = useLang();
  const t = content(lang);
  const p = PATHS[lang];
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const switchHref = otherLangHref(pathname);

  const nav = [
    { to: p.home, label: t.nav.home },
    { to: p.about, label: t.nav.about },
    // { to: "/leistungen", label: "Leistungen" },
    { to: p.contact, label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-prose flex h-20 items-center justify-between">
        <Link to={p.home} className="flex items-center" aria-label="Wieck Marketing Strategy">
          <img
            src="/svg-logo_neu.svg"
            alt="Wieck Marketing Strategy"
            className="h-10 w-auto md:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === p.home }}
              className="text-sm tracking-wide text-foreground/70 transition hover:text-foreground data-[status=active]:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          {/*
            Sprachumschalter. Bewusst ein normaler Link und kein Link-Baustein:
            So laedt die Seite einmal komplett neu und die Sprachangabe im
            Browser stimmt sofort.
          */}
          <a
            href={switchHref}
            className="text-xs uppercase tracking-[0.18em] text-muted-foreground transition hover:text-ink"
            aria-label={t.nav.switchLabel}
          >
            {lang === "de" ? "EN" : "DE"}
          </a>

          <Link
            to={p.contact}
            className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm text-cream transition hover:bg-ink/90"
          >
            {t.nav.cta}
          </Link>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <a
            href={switchHref}
            className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
            aria-label={t.nav.switchLabel}
          >
            {lang === "de" ? "EN" : "DE"}
          </a>
          <button
            className="-mr-2 p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label={t.nav.menu}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="container-prose flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base text-foreground/80 hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to={p.contact}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm text-cream"
            >
              {t.nav.cta}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
