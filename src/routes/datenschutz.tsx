import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz — Stephanie Wieck" },
      {
        name: "description",
        content: "Informationen zur Datenverarbeitung auf dieser Website.",
      },
      { property: "og:title", content: "Datenschutz — Stephanie Wieck" },
      {
        property: "og:description",
        content: "Informationen zur Datenverarbeitung auf dieser Website.",
      },
    ],
  }),
  component: Datenschutz,
});

function Datenschutz() {
  return (
    <section>
      <div className="container-prose max-w-3xl py-24 md:py-32">
        <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Rechtliches
        </div>
        <h1 className="mt-6 font-display text-5xl text-ink md:text-6xl">
          Datenschutzerklärung
        </h1>

        <div className="mt-12 space-y-8 text-foreground/85 leading-relaxed">
          <div>
            <h2 className="font-display text-2xl text-ink">
              Hinweise zur Datenverarbeitung
            </h2>
            <p className="mt-3">
              Der Schutz deiner persönlichen Daten ist mir wichtig. Diese Website
              verarbeitet personenbezogene Daten nur im technisch notwendigen Umfang und
              gemäß den Vorschriften der Datenschutz-Grundverordnung (DSGVO).
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink">Kontaktaufnahme</h2>
            <p className="mt-3">
              Bei einer Kontaktaufnahme per E-Mail werden die übermittelten Angaben
              (Name, E-Mail-Adresse, Nachricht) ausschließlich zur Bearbeitung deiner
              Anfrage gespeichert und verwendet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
              bzw. lit. f DSGVO.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink">Analyse &amp; Cookies</h2>
            <p className="mt-3">
              Diese Website kann Analyse-Tools einsetzen, um die Nutzung anonymisiert
              auszuwerten und Inhalte zu verbessern. Cookies werden nur mit deiner
              Einwilligung gesetzt; diese kann jederzeit widerrufen werden.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink">Deine Rechte</h2>
            <p className="mt-3">
              Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch.
              Kontakt:{" "}
              <a
                href="mailto:mail@stephanie-wieck.com"
                className="text-ink underline underline-offset-4 hover:text-ochre"
              >
                mail@stephanie-wieck.com
              </a>
              .
            </p>
          </div>

          <p className="text-sm text-muted-foreground">
            Verantwortlich im Sinne der DSGVO: Stephanie Wieck, Weserstraße 217, 12047
            Berlin.
          </p>
        </div>
      </div>
    </section>
  );
}
