import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import portrait from "../portrait-stephanie_2.jpg";

export const Route = createFileRoute("/ueber-mich")({
  head: () => ({
    meta: [
      { title: "Über mich | Stephanie Wieck" },
      {
        name: "description",
        content:
          "Über 15 Jahre Marketing-Strategin mit Fokus auf datengetriebene Kampagnen, KI und Automatisierung.",
      },
      { property: "og:title", content: "Über mich | Stephanie Wieck" },
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
        <div className="container-prose py-24 md:py-32">
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Über mich
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-ink md:text-7xl">
            Strategisch denken.
            <br />
            <span className="italic text-ochre">Hands-on</span> umsetzen.
          </h1>

          <div className="mt-16 grid gap-12 md:mt-20 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <img
                src={portrait}
                alt="Stephanie Wieck"
                width={800}
                height={800}
                loading="lazy"
                className="aspect-square w-40 rounded-2xl object-cover sm:w-52 lg:w-full"
              />
            </div>

            <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-foreground/80 lg:col-span-8 lg:col-start-5">
              <p>
                Es gibt Leute, die starke Botschaften entwickeln. Und Leute, die
                Tracking mit Dashboard aufsetzen. Ich mache seit über 15 Jahren beides
                und habe gelernt: Das Ergebnis stimmt erst, wenn Botschaft und
                Messbarkeit zusammen gedacht werden.
              </p>

              <p>
                Mein Fokus liegt auf datengetriebenem Marketing,
                Performance-Kampagnen und der Integration moderner KI- und
                Automatisierungsprozesse in bestehende Teams und Workflows.
                Ich unterstütze Unternehmen auch dabei, KI strategisch und
                praxisnah in ihr Marketing zu integrieren.
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
