import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import birdsHero from "../../birds-flock.png";
import { content, PATHS, type Lang } from "../../content";

// ===========================================================================
// STARTSEITE
//
// Dieser Baustein wird von der deutschen und der englischen Startseite
// gemeinsam benutzt. Hier steht nur das Aussehen, kein Text.
// Texte aendern: src/content/de.ts bzw. src/content/en.ts
// ===========================================================================

export function HomePage({ lang }: { lang: Lang }) {
  const t = content(lang).home;
  const p = PATHS[lang];

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
              {t.hero.eyebrow}
            </div>
            <h1 className="mt-8 font-display text-5xl leading-[1.05] text-ink md:text-7xl lg:text-[5.5rem]">
              {t.hero.h1.pre}{" "}
              <span className="italic text-ochre">{t.hero.h1.accent}</span>.
              <br />
              {t.hero.h1.post}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/75 md:text-xl">
              {t.hero.lead}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to={p.contact}
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm text-cream transition hover:bg-ink/90"
              >
                {t.hero.cta}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
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
              {t.about.eyebrow}
            </div>
            <h2 className="mt-6 font-display text-4xl leading-[1.1] text-ink md:text-5xl">
              {t.about.h2.pre} <span className="italic text-ochre">{t.about.h2.accent}</span>
              {t.about.h2.post}
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/80 md:col-span-7 md:col-start-6">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <div>
              <Link
                to={p.about}
                className="group inline-flex items-center gap-2 text-sm text-ink underline-offset-4 hover:underline"
              >
                {t.about.link}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-t border-border/60">
        <div className="container-prose py-24 md:py-32">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {t.capabilities.eyebrow}
            </div>
            <h2 className="mt-6 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
              {t.capabilities.h2}
            </h2>
          </div>

          <ul className="mt-16 grid divide-y divide-border border-y border-border md:grid-cols-2 md:divide-y-0 md:[&>li:nth-child(even)]:border-l md:[&>li]:border-border">
            {t.capabilities.items.map((item, i) => (
              <li
                key={item}
                className="flex items-center gap-6 py-6 pl-0 pr-0 md:py-8 md:pl-8 md:pr-8"
              >
                <span className="font-display text-xl text-ochre md:text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg text-foreground/85 md:text-xl">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-ink text-cream">
        <div className="container-prose py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <div className="text-xs uppercase tracking-[0.22em] text-cream/60">
                {t.cta.eyebrow}
              </div>
              <h2 className="mt-6 font-display text-4xl leading-tight text-cream md:text-6xl">
                {t.cta.h2.pre} <span className="italic text-ochre">{t.cta.h2.accent}</span>{" "}
                {t.cta.h2.post}
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-cream/75">{t.cta.p}</p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <a
                href="https://calendly.com/stephanie-wieck/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-ochre px-6 py-3.5 text-sm text-ink transition hover:bg-ochre/90"
              >
                {t.cta.button}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
