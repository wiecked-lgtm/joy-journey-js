import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — Stephanie Wieck" },
      { name: "description", content: "Impressum und Anbieterkennzeichnung." },
      { property: "og:title", content: "Impressum — Stephanie Wieck" },
      { property: "og:description", content: "Impressum und Anbieterkennzeichnung." },
    ],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <section>
      <div className="container-prose max-w-3xl py-24 md:py-32">
        <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Rechtliches
        </div>
        <h1 className="mt-6 font-display text-5xl text-ink md:text-6xl">Impressum</h1>

        <div className="mt-12 space-y-8 text-foreground/85">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Anbieterin
            </div>
            <div className="mt-2 space-y-1 text-lg">
              <div>Stephanie Wieck</div>
              <div>Weserstraße 217</div>
              <div>12047 Berlin</div>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Kontakt
            </div>
            <div className="mt-2">
              <a
                href="mailto:mail@stephanie-wieck.com"
                className="text-lg text-ink underline underline-offset-4 hover:text-ochre"
              >
                mail@stephanie-wieck.com
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Bildnachweis
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Carlos Muza auf Unsplash, Christin Hume auf Unsplash.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
