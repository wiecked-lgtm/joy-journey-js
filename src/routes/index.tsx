import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import birdsHero from "../birds-flock.png";

export const Route = createFileRoute("/")({
  component: Home,
});

const fields = [
  {
    title: "Positionierung & Kommunikation",
    sub: "Was ihr sagt, und warum es jemanden interessiert.",
    items: [
      "Positionierung, Narrativ, Messaging",
      "PR & Media Relations (DE)",
      "Kampagnen um Schlüsselmomente",
      "Sprecher:innen-Briefing, Krisenkommunikation",
    ],
  },
  {
    title: "Performance & Wachstum",
    sub: "Wie aus Reichweite Leads und Kund:innen werden. Einmalig aufgebaut oder laufend betreut.",
    items: [
      "Paid Media (Meta, Google)",
      "Tracking & Reporting (GA4, GTM, Looker Studio)",
      "Funnel- und Conversion-Optimierung",
      "Newsletter- und CRM-Strecken",
    ],
  },
  {
    title: "KI & Automatisierung",
    sub: "Wie das alles auch mit wenig Zeit läuft.",
    items: [
      "KI-gestützte Content-Workflows",
      "Research- und Analyseprozesse",
      "Reporting-Automatisierungen",
      "Enablement: Workshops & Playbooks",
    ],
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-multiply"
          style={{
            backgroundImage: `url(${birdsHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container-prose relative pt-24 pb-32 md:pt-36 md:pb-44">
          <div className="max-w-4xl animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-ochre" />
              Marketing · Kommunikation · KI
            </div>
            <h1 className="mt-8 font-display text-5xl leading-[1.05] text-ink md:text-7xl lg:text-[5.5rem]">
              Klar in der{" "}
              <span className="italic text-ochre">Botschaft</span>.
              <br />
              Sauber in der Umsetzung.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/75 md:text-xl">
              Ich verstärke Marketing- und Kommunikationsteams oder übernehme ihre Führung,
              wenn Strukturen fehlen. Von der Botschaft über Paid-Kampagnen bis zum Reporting:
              strategisch klar, hands-on umgesetzt und bei Bedarf KI-gestützt.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/kontakt"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm text-cream transition hover:bg-ink/90"
              >
                Kostenloses Erstgespräch buchen
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/leistungen"
                className="group inline-flex items-center gap-2 text-sm text-foreground/80 underline-offset-4 hover:text-ink hover:underline"
              >
                Pakete ansehen
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="border-t border-border/60 bg-cream">
        <div className="container-prose grid gap-16 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Über mich
            </div>
            <h2 className="mt-6 font-display text-4xl leading-[1.1] text-ink md:text-5xl">
              Marketing, das <span className="italic text-ochre">wirkt</span>.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/80 md:col-span-7 md:col-start-6">
            <p>
              Seit über 15 Jahren arbeite ich an der Schnittstelle von Marketing,
              Kommunikation und digitalem Wachstum. Dabei denke ich strategisch und setze
              hands-on maßgeschneiderte Prozesse um.
            </p>
            <p>
              Mein Fokus liegt auf der Entwicklung passgenauer Botschaften,
              datengetriebenem Marketing und bei Bedarf der Integration
              von Automatisierungsprozessen in bestehende Teams und Workflows.
            </p>
            <div>
              <Link
                to="/ueber-mich"
                className="group inline-flex items-center gap-2 text-sm text-ink underline-offset-4 hover:underline"
              >
                Mehr über meine Arbeit
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DREI FELDER */}
      <section className="border-t border-border/60">
        <div className="container-prose py-24 md:py-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Drei Felder, ein Ansatz
              </div>
              <h2 className="mt-6 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
                Botschaft, Wachstum, <span className="italic text-ochre">Tempo</span>.
              </h2>
            </div>
            <Sparkles className="h-8 w-8 text-ochre" />
          </div>

          <div className="mt-16 grid gap-12 border-t border-border pt-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-border">
            {fields.map((field) => (
              <div
                key={field.title}
                className="md:px-8 md:first:pl-0 md:last:pr-0"
              >
                <h3 className="font-display text-2xl leading-snug text-ink">
                  {field.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/70 md:min-h-[3.75rem]">
                  {field.sub}
                </p>
                <ul className="mt-6 divide-y divide-border border-t border-border">
                  {field.items.map((item) => (
                    <li key={item} className="py-3 text-base text-foreground/85">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZWEI ARTEN ZUSAMMENZUARBEITEN */}
      <section className="border-t border-border/60 bg-cream">
        <div className="container-prose py-24 md:py-32">
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Zwei Arten zusammenzuarbeiten
          </div>
          <h2 className="mt-6 font-display text-4xl leading-tight text-ink md:text-5xl">
            Ein Projekt oder eine <span className="italic text-ochre">Rolle</span>.
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="flex flex-col rounded-2xl border border-border bg-background p-8 md:p-10">
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Pakete
              </div>
              <h3 className="mt-4 font-display text-2xl leading-snug text-ink md:text-3xl">
                KI-Pakete mit festem Umfang
              </h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/75">
                Ein konkreter Use Case, ein vollständiger Aufbau oder laufende
                Optimierung. Klarer Scope, klarer Preis, klares Ergebnis. Für Teams,
                die mit KI anfangen oder es endlich sauber machen wollen.
              </p>
              <Link
                to="/leistungen"
                className="group mt-auto inline-flex items-center gap-2 self-start rounded-full border border-border px-6 py-3.5 text-sm text-ink transition hover:border-ink/40"
              >
                Pakete ansehen
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="flex flex-col rounded-2xl border border-ink bg-ink p-8 text-cream md:p-10">
              <div className="text-xs uppercase tracking-[0.22em] text-cream/60">
                Freelance & Interim
              </div>
              <h3 className="mt-4 font-display text-2xl leading-snug text-cream md:text-3xl">
                Performance Marketing oder Marketingleitung auf Zeit
              </h3>
              <p className="mt-4 text-base leading-relaxed text-cream/75">
                Wenn ihr jemanden braucht, der eure Paid-Kampagnen und das Tracking
                laufend verantwortet, oder die Marketingleitung übernimmt, solange die
                Position offen ist oder ein Markteintritt ansteht. Tageweise, für
                Monate, hands-on.
              </p>
              <Link
                to="/leistungen"
                className="group mt-auto inline-flex items-center gap-2 self-start rounded-full bg-ochre px-6 py-3.5 text-sm text-ink transition hover:bg-ochre/90"
              >
                Formate ansehen
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-ink text-cream">
        <div className="container-prose py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <div className="text-xs uppercase tracking-[0.22em] text-cream/60">
                Der erste Schritt kostet nichts
              </div>
              <h2 className="mt-6 font-display text-4xl leading-tight text-cream md:text-6xl">
                Lasst uns über euer <span className="italic text-ochre">Marketing</span>{" "}
                sprechen.
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-cream/75">
                30 Minuten reichen, um zu sehen, wo der größte Hebel liegt: In der
                Botschaft, im Funnel oder im Prozess. Pragmatisch und ohne unnötige
                Komplexität.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <a
                href="https://calendly.com/stephanie-wieck/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-ochre px-6 py-3.5 text-sm text-ink transition hover:bg-ochre/90"
              >
                Termin vereinbaren
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
