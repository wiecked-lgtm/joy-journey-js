import { Mail, Linkedin, Calendar, ArrowRight } from "lucide-react";

import { content, type Lang } from "../../content";

// ===========================================================================
// KONTAKT
// Texte aendern: src/content/de.ts bzw. src/content/en.ts
// ===========================================================================

export function ContactPage({ lang }: { lang: Lang }) {
  const t = content(lang).contact;

  return (
    <section>
      <div className="container-prose grid gap-16 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-6">
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            {t.eyebrow}
          </div>
          {/*
            Fester Umbruch nach dem Komma. Ohne ihn umbricht der Satz je nach
            Fensterbreite mitten im Satzteil und die Zeilen laufen treppenartig
            auseinander. Mit dem Umbruch stehen beide Haelften sauber
            untereinander, in beiden Sprachen.
          */}
          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-ink md:text-7xl">
            {t.h1.pre}
            <br />
            <span className="italic text-ochre">{t.h1.accent}</span> {t.h1.post}
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-foreground/80">{t.lead}</p>
        </div>

        <div className="md:col-span-5 md:col-start-8">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {t.cardTitle}
            </div>

            <div className="mt-8 space-y-6">
              <a
                href="mailto:mail@stephanie-wieck.com"
                className="group flex items-start gap-4 border-b border-border pb-6"
              >
                <Mail className="mt-1 h-5 w-5 text-ochre" />
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {t.mailLabel}
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
                    {t.linkedinLabel}
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
                    {t.callLabel}
                  </div>
                  <div className="mt-1 text-foreground/85">{t.callText}</div>
                </div>
              </div>
            </div>

            <a
              href="https://calendly.com/stephanie-wieck/"
              target="_blank"
              rel="noreferrer"
              className="group mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3.5 text-sm text-cream transition hover:bg-ink/90"
            >
              {t.button}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
