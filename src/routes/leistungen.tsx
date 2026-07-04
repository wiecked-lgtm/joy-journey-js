import { createFileRoute } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import dashboard from "../assets/laptop-dashboard.jpg.asset.json";

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: "Leistungen & Pakete | Stephanie Wieck" },
      {
        name: "description",
        content:
          "Starter, Growth und Retainer: drei Pakete für den strategischen und praxisnahen Einsatz von KI in eurem Marketing.",
      },
      { property: "og:title", content: "Leistungen & Pakete | Stephanie Wieck" },
      {
        property: "og:description",
        content:
          "Von KI-Potenzialanalyse bis laufender Optimierung: drei klare Pakete für effizienteres Marketing.",
      },
    ],
  }),
  component: Leistungen,
});

const packages = [
  {
    name: "Starter",
    price: "1.500 €",
    tagline: "Einstieg mit einem konkreten Use Case.",
    highlight: false,
    items: [
      "KI-Potenzialanalyse (wo lohnt sich KI in eurem Marketing?)",
      "1 Use Case vollständig umgesetzt (z. B. Content, Ads, E-Mail)",
      "Prompt-Set auf eure Brand zugeschnitten (10–15 Prompts)",
      "Tool-Empfehlungen mit konkreten Vergleichen",
      "Abschluss-Call mit Handlungsempfehlung",
    ],
  },
  {
    name: "Growth",
    price: "4.000 €",
    tagline: "Vollständiger Aufbau eures KI-Marketings.",
    highlight: true,
    items: [
      "Vollständiger Audit bestehender Marketing-Prozesse",
      "3–5 KI-Workflows aufgebaut und dokumentiert",
      "Prompt-Bibliothek (30–50 Prompts) inkl. Qualitätssicherung",
      "Team-Workshop: Wie arbeitet ihr mit KI? (2–3 h)",
      "4 Wochen Begleitung & Feintuning nach Übergabe",
      "Abschlussdokumentation: Euer KI-Marketing-Playbook",
    ],
  },
  {
    name: "Retainer",
    price: "1.800 €",
    priceSuffix: "/ Monat",
    tagline: "Laufende Begleitung und Optimierung.",
    highlight: false,
    items: [
      "Monatlicher Strategie-Call (60 min)",
      "Laufende Optimierung bestehender KI-Workflows",
      "Neue Tools & Trends direkt integriert",
      "Ad-hoc Unterstützung per Slack/E-Mail (1–2 h/Woche)",
      "Quartals-Review: Was bringt KI eurem Marketing konkret?",
    ],
  },
];

function Leistungen() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="container-prose py-24 md:py-32">
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Leistungen &amp; Angebot
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] text-ink md:text-7xl">
            Drei Wege zu effizienterem{" "}
            <span className="italic text-ochre">Marketing</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-foreground/75">
            Ob erster Use Case, vollständiger Aufbau oder laufende Optimierung: die
            Pakete lassen sich flexibel an eure Situation anpassen.
          </p>
        </div>
      </section>

      <section aria-hidden>
        <div
          className="h-[36vh] min-h-[280px] w-full bg-cover bg-center md:h-[48vh]"
          style={{ backgroundImage: `url(${dashboard.url})` }}
        />
      </section>

      <section className="bg-cream">
        <div className="container-prose grid gap-6 py-20 md:grid-cols-3 md:py-28">
          {packages.map((p) => (
            <div
              key={p.name}
              className={
                "relative flex flex-col rounded-2xl border p-8 transition " +
                (p.highlight
                  ? "border-ink bg-ink text-cream shadow-lg"
                  : "border-border bg-background hover:border-ink/40")
              }
            >
              {p.highlight && (
                <span className="absolute -top-3 left-8 rounded-full bg-ochre px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-ink">
                  Meist gewählt
                </span>
              )}
              <div
                className={
                  "text-xs uppercase tracking-[0.22em] " +
                  (p.highlight ? "text-cream/60" : "text-muted-foreground")
                }
              >
                Paket
              </div>
              <div className="mt-3 font-display text-3xl">{p.name}</div>
              <p
                className={
                  "mt-2 text-sm " +
                  (p.highlight ? "text-cream/75" : "text-muted-foreground")
                }
              >
                {p.tagline}
              </p>

              <div className="mt-8 flex items-baseline gap-1">
                <span className="font-display text-5xl">{p.price}</span>
                {p.priceSuffix && (
                  <span
                    className={
                      "text-sm " +
                      (p.highlight ? "text-cream/70" : "text-muted-foreground")
                    }
                  >
                    {p.priceSuffix}
                  </span>
                )}
              </div>

              <ul className="mt-8 space-y-3 text-sm">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <Check
                      className={
                        "mt-0.5 h-4 w-4 shrink-0 " +
                        (p.highlight ? "text-ochre" : "text-ochre")
                      }
                    />
                    <span
                      className={
                        p.highlight ? "text-cream/90" : "text-foreground/85"
                      }
                    >
                      {it}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://calendly.com/stephanie-wieck/"
                target="_blank"
                rel="noreferrer"
                className={
                  "group mt-10 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm transition " +
                  (p.highlight
                    ? "bg-ochre text-ink hover:bg-ochre/90"
                    : "bg-ink text-cream hover:bg-ink/90")
                }
              >
                Termin vereinbaren
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="container-prose py-20 text-center md:py-28">
          <h2 className="mx-auto max-w-2xl font-display text-3xl text-ink md:text-5xl">
            Weniger Aufwand, mehr Output.{" "}
            <span className="italic text-ochre">Fang heute damit an.</span>
          </h2>
        </div>
      </section>
    </>
  );
}
