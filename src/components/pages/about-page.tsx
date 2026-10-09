import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import portrait from "../../portrait-stephanie_2.jpg";
import { content, PATHS, type Lang } from "../../content";

// ===========================================================================
// UEBER MICH
// Texte aendern: src/content/de.ts bzw. src/content/en.ts
// ===========================================================================

export function AboutPage({ lang }: { lang: Lang }) {
  const t = content(lang).about;
  const p = PATHS[lang];

  return (
    <>
      <section className="border-b border-border/60">
        <div className="container-prose py-24 md:py-32">
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            {t.eyebrow}
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-ink md:text-7xl">
            {t.h1.pre}
            <br />
            <span className="italic text-ochre">{t.h1.accent}</span> {t.h1.post}
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
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>
                {t.p3.pre}{" "}
                <a
                  href="https://www.linkedin.com/in/wieck/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink underline underline-offset-4 hover:text-ochre"
                >
                  {t.p3.link}
                </a>
                {t.p3.post}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-prose grid gap-12 py-24 md:grid-cols-3 md:py-32">
          {t.blocks.map((b) => (
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
          <h2 className="max-w-xl font-display text-3xl text-ink md:text-4xl">{t.ctaH2}</h2>

          <Link
            to={p.contact}
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm text-cream transition hover:bg-ink/90"
          >
            {t.ctaButton}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
