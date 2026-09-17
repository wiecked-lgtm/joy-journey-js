import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

// ===========================================================================
// TRACKING & CONSENT
//
// Reihenfolge im <head> ist entscheidend:
//   1. Cookiebot  (setzt die Consent-Signale)
//   2. GTM        (laedt immer, feuert Tags aber nur bei Einwilligung)
//
// EINMALIG IN COOKIEBOT EINSTELLEN:
// Cookiebot Admin -> Einstellungen -> "Google Consent Mode" aktivieren.
// Ohne diesen Schalter setzt Cookiebot keine Consent-Signale, und GA4
// wuerde ungefragt messen. Deshalb bitte zuerst dort nachsehen.
// ===========================================================================
const COOKIEBOT_ID = "1333175c-a959-4c1c-a8ef-3a36a204fae2";
const GTM_ID = "GTM-XXXXXXX";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    Cookiebot?: { renew: () => void; show: () => void };
  }
}

// Hinweis: Der Consent-Default (alles auf "denied") wird von Cookiebot
// gesetzt, sobald der Google Consent Mode dort aktiviert ist. Deshalb steht
// hier bewusst kein eigener gtag('consent','default',...)-Block: zweimal
// gesetzt fuehrt zu Fehlern, die man spaeter kaum findet.

const gtmSnippet = `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
`;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-ink">404</h1>
        <h2 className="mt-4 text-xl text-foreground">Seite nicht gefunden</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Die gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm text-cream transition hover:bg-ink/90"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-ink">Diese Seite konnte nicht geladen werden</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Bitte versuche es erneut oder kehre zur Startseite zurück.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm text-cream transition hover:bg-ink/90"
          >
            Erneut versuchen
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm text-foreground transition hover:bg-secondary"
          >
            Zur Startseite
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Stephanie Wieck – Marketing, Kommunikation & Performance | Berlin" },
      {
        name: "description",
        content:
          "Freiberufliche Marketing- und Kommunikationsstrategin in Berlin: Positionierung, Performance Marketing (Meta, Google, GA4) und KI-gestützte Prozesse. Als Projekt, laufendes Mandat oder Leitung auf Zeit.",
      },
      { name: "author", content: "Stephanie Wieck" },
      {
        property: "og:title",
        content: "Stephanie Wieck – Marketing, Kommunikation & Performance | Berlin",
      },
      {
        property: "og:description",
        content:
          "Ich verstärke Marketing- und Kommunikationsteams oder übernehme ihre Führung, wenn Strukturen fehlen. Von der Botschaft über Paid-Kampagnen bis zum Reporting.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        {/* 1. Cookiebot. Muss das erste Script im head sein, sonst greift
              das automatische Blockieren nicht zuverlaessig. */}
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid={COOKIEBOT_ID}
          data-blockingmode="auto"
          data-culture="DE"
          type="text/javascript"
        />

        {/* 2. Google Tag Manager. data-cookieconsent="ignore" ist wichtig:
              GTM selbst soll immer laden, sonst kommen die Consent-Signale
              nie an. Welche Tags feuern duerfen, entscheidet der Consent
              Mode innerhalb von GTM. */}
        <script
          data-cookieconsent="ignore"
          dangerouslySetInnerHTML={{ __html: gtmSnippet }}
        />

        <HeadContent />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

/**
 * Seitenaufrufe bei Navigation innerhalb der Seite melden.
 *
 * Hintergrund: Bei einer Single Page Application laedt der Browser beim
 * Seitenwechsel nichts neu. GA4 wuerde daher nur den ersten Aufruf zaehlen.
 * Dieser Hook schiebt bei jedem Routenwechsel ein Event in den dataLayer.
 * In GTM baust du darauf einen GA4-Event-Tag mit dem Trigger "spa_page_view"
 * (siehe Anleitung).
 */
function useSpaPageViews() {
  const router = useRouter();
  const lastPath = useRef<string>("");

  useEffect(() => {
    const push = () => {
      const path = window.location.pathname + window.location.search;
      if (path === lastPath.current) return;
      lastPath.current = path;

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "spa_page_view",
        page_path: path,
        page_location: window.location.href,
        page_title: document.title,
      });
    };

    // Erster Aufruf. Kleiner Aufschub, damit der Seitentitel schon gesetzt ist.
    const initial = window.setTimeout(push, 0);
    const unsubscribe = router.subscribe("onResolved", () => {
      window.setTimeout(push, 0);
    });

    return () => {
      window.clearTimeout(initial);
      unsubscribe();
    };
  }, [router]);
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useSpaPageViews();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
