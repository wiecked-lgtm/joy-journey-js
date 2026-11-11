import { useEffect, useRef } from "react";

// ===========================================================================
// CALENDLY, EINGEBETTET
//
// Warum eingebettet und nicht verlinkt:
// Die Buchung laeuft dadurch auf deiner eigenen Seite ab. Calendly meldet per
// JavaScript, wenn ein Termin zustande gekommen ist. Dieses Signal schieben
// wir in den dataLayer, und der Google Tag Manager macht daraus eine
// Conversion. Bei einem Link auf calendly.com waere das nicht moeglich, weil
// die Person deine Seite verlassen wuerde.
//
// Cookiebot: Das Calendly-Script traegt data-cookieconsent="necessary".
// Ohne diese Angabe wuerde die automatische Blockierung das Buchungsfenster
// zurueckhalten, bis jemand das Banner akzeptiert, und wer ablehnt, koennte
// gar keinen Termin buchen. Die Terminbuchung ist der Zweck, zu dem die
// Person diese Seite aufgerufen hat, deshalb ist die Einstufung vertretbar.
// ===========================================================================

// Profiladresse, zeigt alle Terminarten zur Auswahl.
// Wenn du direkt zum 30-Minuten-Termin springen willst, haeng den Kurznamen
// der Terminart an, zum Beispiel ".../stephanie-wieck/30min". Probier die
// Adresse vorher einmal im Browser aus, damit sie wirklich existiert.
const CALENDLY_URL = "https://calendly.com/stephanie-wieck";
const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

export function CalendlyEmbed({ className = "" }: { className?: string }) {
  const pushed = useRef(false);

  useEffect(() => {
    // 1. Script einmalig laden
    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const s = document.createElement("script");
      s.src = SCRIPT_SRC;
      s.async = true;
      s.setAttribute("data-cookieconsent", "necessary");
      document.body.appendChild(s);
    }

    // 2. Auf die Rueckmeldung von Calendly hoeren
    const onMessage = (e: MessageEvent) => {
      if (typeof e.origin !== "string" || !e.origin.includes("calendly.com")) return;
      const data = e.data as { event?: string; payload?: Record<string, unknown> };
      if (data?.event !== "calendly.event_scheduled") return;
      if (pushed.current) return; // doppelte Meldungen ignorieren
      pushed.current = true;

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "calendly_booking",
        booking_page: window.location.pathname,
      });
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div
      className={`calendly-inline-widget ${className}`}
      data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=f9fafb&text_color=0c0d0f&primary_color=e6d14a`}
      style={{ minWidth: 320, height: 700 }}
    />
  );
}
