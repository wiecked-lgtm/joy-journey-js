import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-wms.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/ueber-mich", label: "Über mich" },
  { to: "/leistungen", label: "Leistungen" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-prose flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="Wieck Marketing Strategy — Startseite">
          <img
            src={logo.url}
            alt="Wieck Marketing Strategy"
            className="h-10 w-auto md:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="text-sm tracking-wide text-foreground/70 transition hover:text-foreground data-[status=active]:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/kontakt"
            className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm text-cream transition hover:bg-ink/90"
          >
            Erstgespräch buchen
          </Link>
        </div>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
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
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm text-cream"
            >
              Erstgespräch buchen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
