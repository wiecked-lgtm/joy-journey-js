import { Link } from "@tanstack/react-router";
import wideLogo from "../assets/logo-wms-footer.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-cream">
      <div className="container-prose py-16">
        <div className="grid gap-12 md:grid-cols-3">
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

          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Rechtliches
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/impressum" className="hover:text-ochre">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:text-ochre">Datenschutz</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 border-t border-border/60 pt-12">
          <img
            src={wideLogo.url}
            alt="Wieck Marketing Strategy"
            className="h-28 w-auto md:h-32"
          />
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Stephanie Wieck. Alle Rechte vorbehalten.
          </div>
        </div>
      </div>
    </footer>
  );
}

