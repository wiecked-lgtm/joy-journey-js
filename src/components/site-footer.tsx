import { Link } from "@tanstack/react-router";
import logo from "../assets/logo-wms.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-cream">
      <div className="container-prose py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <img src={logo.url} alt="Wieck Marketing Strategy" className="h-12 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Intelligentes Marketing. Strategie, Content, KI &amp; Automatisierung —
              pragmatisch umgesetzt.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Navigation
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="hover:text-ochre">Home</Link></li>
              <li><Link to="/ueber-mich" className="hover:text-ochre">Über mich</Link></li>
              <li><Link to="/leistungen" className="hover:text-ochre">Leistungen</Link></li>
              <li><Link to="/kontakt" className="hover:text-ochre">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Kontakt
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
              <li className="text-muted-foreground">Weserstraße 217, 12047 Berlin</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Stephanie Wieck. Alle Rechte vorbehalten.</div>
          <div className="flex gap-6">
            <Link to="/impressum" className="hover:text-ink">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-ink">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
