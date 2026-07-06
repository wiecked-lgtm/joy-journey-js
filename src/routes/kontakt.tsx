import { createFileRoute } from "@tanstack/react-router";
import { Mail, Linkedin, Calendar, ArrowRight } from "lucide-react";
import desk from "../assets/desk-keyboards.png";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt | Stephanie Wieck" },
      {
        name: "description",
        content:
          "Kontakt zu Stephanie Wieck, erfahrene Marketing-Strategin mit Fokus auf KI und Performance. Kostenloses Erstgespräch buchen.",
      },
      { property: "og:title", content: "Kontakt | Stephanie Wieck" },
      {
        property: "og:description",
        content:
          "Schreib mir oder buche direkt ein kostenloses 30-Minuten Erstgespräch.",
      },
    ],
  }),
  component: Kontakt,
});

function Kontakt() {
  return (
    <>
    <section>
      <div className="container-prose grid gap-16 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-6">
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Kontakt
          </div>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-ink md:text-7xl">
            Bereit für{" "}
            <span className="italic text-ochre">effizienteres</span> Marketing?
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-foreground/80">
            Du suchst eine erfahrene, hands-on Marketing-Strategin mit den richtigen
            Skills? Schreib mir, wir finden gemeinsam heraus, wie ich dich in deinem
            Projekt unterstützen kann.
          </p>
        </div>

        <div className="md:col-span-5 md:col-start-8">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Direkter Draht
            </div>

            <div className="mt-8 space-y-6">
              <a
                href="mailto:mail@stephanie-wieck.com"
                className="group flex items-start gap-4 border-b border-border pb-6"
              >
                <Mail className="mt-1 h-5 w-5 text-ochre" />
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    E-Mail
                  </div>
                  <div className="mt-1 font-display text-xl text-ink group-hover:text-ochre">
                    mail@stephanie-wieck.com
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/wieck/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4 border-b border-border pb-6"
              >
                <Linkedin className="mt-1 h-5 w-5 text-ochre" />
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    LinkedIn
                  </div>
                  <div className="mt-1 font-display text-xl text-ink group-hover:text-ochre">
                    /in/wieck
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <Calendar className="mt-1 h-5 w-5 text-ochre" />
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Erstgespräch
                  </div>
                  <div className="mt-1 text-foreground/85">
                    30 Minuten, kostenlos und unverbindlich.
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://calendly.com/stephanie-wieck/"
              target="_blank"
              rel="noreferrer"
              className="group mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3.5 text-sm text-cream transition hover:bg-ink/90"
            >
              Termin über Calendly buchen
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <section aria-hidden className="border-t border-border/60">
      <div
        className="h-[36vh] min-h-[280px] w-full bg-cover bg-center md:h-[52vh]"
        style={{ backgroundImage: `url(${desk-keyboards.png})` }}
      />
    </section>
    </>
  );
}
