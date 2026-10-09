import { Link } from "@tanstack/react-router";

import { content, PATHS, useLang } from "../content";

// ===========================================================================
// FUSSZEILE
//
// Impressum und Datenschutz bleiben auf Deutsch. Das ist rechtlich die
// massgebliche Fassung, deshalb sind sie in der englischen Navigation als
// "(German)" gekennzeichnet.
// ===========================================================================

export function SiteFooter() {
  const lang = useLang();
  const t = content(lang).footer;
  const nav = content(lang).nav;
  const p = PATHS[lang];

  return (
    <footer className="mt-32 border-t border-border/60 bg-cream">
      <div className="container-prose py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {t.navigation}
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to={p.home} className="hover:text-ochre">{nav.home}</Link></li>
              <li><Link to={p.about} className="hover:text-ochre">{nav.about}</Link></li>
              {/* Leistungen ist vorübergehend nicht verlinkt. Zum Wiedereinblenden
                  die naechste Zeile wieder aktivieren. */}
              {/* <li><Link to="/leistungen" className="hover:text-ochre">Leistungen</Link></li> */}
              <li><Link to={p.contact} className="hover:text-ochre">{nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {t.contact}
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="mailto:mail@stephanie-wieck.com" className="hover:text-ochre">
                  mail@stephanie-wieck.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/wieck/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-ochre"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {t.legal}
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/impressum" className="hover:text-ochre">{t.imprint}</Link></li>
              <li><Link to="/datenschutz" className="hover:text-ochre">{t.privacy}</Link></li>
              {/*
                Pflicht: Die Einwilligung muss so leicht widerrufbar sein, wie
                sie erteilt wurde. Dieser Link oeffnet den Cookiebot-Dialog
                erneut. Er funktioniert erst, wenn Cookiebot geladen ist,
                deshalb die optionale Verkettung.
              */}
              <li>
                <button
                  type="button"
                  onClick={() => window.Cookiebot?.renew()}
                  className="text-left hover:text-ochre"
                >
                  {t.cookies}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 border-t border-border/60 pt-12">
          <img
            src="/Logo_Wide_Transparent.svg"
            alt="Wieck Marketing Strategy"
            className="h-24 w-auto md:h-28"
          />
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Stephanie Wieck. {t.rights}
          </div>
        </div>
      </div>
    </footer>
  );
}
