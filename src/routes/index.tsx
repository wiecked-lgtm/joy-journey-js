import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import birdsHero from "../birds-flock.png";
import teamWorkshop from "../team-workshop.png";

export const Route = createFileRoute("/")({
  component: Home,
});

const capabilities = [
  "KI-gestützte Content-Workflows",
  "Performance Marketing & Paid Ads",
  "SEO- und Content-Systeme",
  "Newsletter- und CRM-Automatisierungen",
  "KI-gestützte Research- und Analyseprozesse",
  "Reporting-Automatisierungen",
  "Funnel- und Conversion-Optimierung",
  "Social Media & Kampagnenproduktion",
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
              Marketing · Strategie · KI
            </div>
            <h1 className="mt-8 font-display text-5xl leading-[1.05] text-ink md:text-7xl lg:text-[5.5rem]">
              Intelligentes{" "}
              <span className="italic text-ochre">Marketing</span>,
              <br />
              das Zeit spart und
              <br />
              Ergebnisse liefert.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/75 md:text-xl">
              Von Content und Kampagnen bis zu Automatisierungen und Performance-Prozessen:
              Gemeinsam entwickeln wir Systeme, die Zeit sparen, Teams entlasten und
              messbare Ergebnisse liefern.
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
              gleichzeitig hands-on maßgeschneiderte Prozesse um.
            </p>
            <p>
              Ich unterstütze Unternehmen dabei, KI strategisch und praxisnah in ihr
              Marketing zu integrieren. Mein Fokus liegt auf datengetriebenem Marketing,
              Performance-Kampagnen und der Integration moderner KI- und
              Automatisierungsprozesse in bestehende Teams und Workflows.
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

      {/* CAPABILITIES */}
      <section className="border-t border-border/60">
        <div className="container-prose py-24 md:py-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Typische Einsatzbereiche
              </div>
              <h2 className="mt-6 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
                Wo KI und Automation in eurem Marketing sofort wirken.
              </h2>
            </div>
            <Sparkles className="h-8 w-8 text-ochre" />
          </div>

          <ul className="mt-16 grid divide-y divide-border border-y border-border md:grid-cols-2 md:divide-y-0 md:[&>li:nth-child(even)]:border-l md:[&>li]:border-border">
            {capabilities.map((item, i) => (
              <li
                key={item}
                className="group flex items-center justify-between gap-6 py-6 md:py-8"
              >
                <div className="flex items-center gap-6 pl-0 md:pl-8">
                  <span className="font-display text-xl text-ochre md:text-2xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg text-foreground/85 md:text-xl">{item}</span>
                </div>
                <ArrowUpRight className="mr-0 h-5 w-5 text-muted-foreground transition group-hover:text-ochre md:mr-8" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* IMAGE BAND - team workshop */}
      <section aria-hidden>
        <div
          className="h-[36vh] min-h-[280px] w-full bg-cover bg-center md:h-[48vh]"
          style={{ backgroundImage: `url(${teamWorkshop})` }}
        />
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
                Bereit für <span className="italic text-ochre">effizienteres</span>{" "}
                Marketing?
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-cream/75">
                30 Minuten reichen, um zu sehen, ob KI eure Marketingprozesse wirklich
                voranbringen kann. Pragmatisch und ohne unnötige Komplexität.
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
