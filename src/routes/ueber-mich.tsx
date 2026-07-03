import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import portrait from "../assets/portrait-stephanie.jpg.asset.json";
import handsLaptop from "../assets/hands-laptop.jpg.asset.json";

export const Route = createFileRoute("/ueber-mich")({
  head: () => ({
    meta: [
      { title: "Über mich — Stephanie Wieck" },
      {
        name: "description",
        content:
          "Über 15 Jahre Erfahrung an der Schnittstelle von Marketing, Kommunikation und digitalem Wachstum. Strategisch und hands-on.",
      },
      { property: "og:title", content: "Über mich — Stephanie Wieck" },
      {
        property: "og:description",
        content:
          "Marketing-Strategin mit Fokus auf datengetriebenes Marketing, Performance und KI-Integration.",
      },
    ],
  }),
  component: UeberMich,
});

function UeberMich() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="container-prose grid gap-12 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Über mich
            </div>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-ink md:text-6xl">
              Strategisch denken.{" "}
              <span className="italic text-ochre">Hands-on</span> umsetzen.
            </h1>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/80 md:col-span-6 md:col-start-7">
            <p>
              Seit über 15 Jahren arbeite ich an der Schnittstelle von Marketing,
              Kommunikation und digitalem Wachstum. Dabei denke ich strategisch und setze
              gleichzeitig hands-on maßgeschneiderte Prozesse um.
            </p>
            <p>
              Ich unterstütze Unternehmen dabei, KI strategisch und praxisnah in ihr
              Marketing zu integrieren. Mein Fokus liegt auf datengetriebenem Marketing,
              Performance-Kampagnen und der Integration moderner KI- und
              Automatisierungsprozesse in bestehende Teams und Workflows.
            </p>
            <p>
              Weitere Informationen zu meiner über 15-jährigen Erfahrung in Management
              und Marketing findest du in meinem{" "}
              <a
                href="https://www.linkedin.com/in/wieck/"
                target="_blank"
                rel="noreferrer"
                className="text-ink underline underline-offset-4 hover:text-ochre"
              >
                LinkedIn-Profil
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Portrait */}
      <section className="border-b border-border/60 bg-cream">
        <div className="container-prose py-16 md:py-24">
          <figure className="overflow-hidden rounded-2xl">
            <img
              src={portrait.url}
              alt="Stephanie Wieck"
              className="h-auto w-full object-cover"
              loading="lazy"
            />
          </figure>
        </div>
      </section>


      <section className="bg-cream">
        <div className="container-prose grid gap-12 py-24 md:grid-cols-3 md:py-32">
          {[
            {
              k: "01",
              t: "Strategie",
              d: "Ich analysiere eure Prozesse und finde die Hebel, an denen KI wirklich einen Unterschied macht.",
            },
            {
              k: "02",
              t: "Umsetzung",
              d: "Von Prompt-Bibliotheken bis Automatisierungen: konkrete Workflows, die euer Team sofort nutzen kann.",
            },
            {
              k: "03",
              t: "Enablement",
              d: "Workshops und Begleitung, damit KI kein Nebenprojekt bleibt, sondern Teil eures Alltags wird.",
            },
          ].map((b) => (
            <div key={b.k} className="border-t border-ink/20 pt-6">
              <div className="font-display text-2xl text-ochre">{b.k}</div>
              <div className="mt-4 font-display text-2xl text-ink">{b.t}</div>
              <p className="mt-3 text-foreground/75">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-hidden>
        <div
          className="h-[36vh] min-h-[280px] w-full bg-cover bg-center md:h-[48vh]"
          style={{ backgroundImage: `url(${handsLaptop.url})` }}
        />
      </section>

      <section className="border-t border-border/60">
        <div className="container-prose flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <h2 className="max-w-xl font-display text-3xl text-ink md:text-4xl">
            Lass uns über euer Marketing sprechen.
          </h2>
          <Link
            to="/kontakt"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm text-cream transition hover:bg-ink/90"
          >
            Kontakt aufnehmen
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
