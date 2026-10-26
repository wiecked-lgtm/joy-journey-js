import { createFileRoute } from "@tanstack/react-router";

import page from "../content/etsy-werbe-check.html?raw";

// Liefert den Etsy-Werbe-Check als eigenständige Seite unter /etsy-werbe-check aus.
// Der Inhalt liegt in src/content/etsy-werbe-check.html.
export const Route = createFileRoute("/etsy-werbe-check")({
  server: {
    handlers: {
      GET: () =>
        new Response(page, {
          headers: {
            "content-type": "text/html; charset=utf-8",
            "cache-control": "public, max-age=300",
          },
        }),
    },
  },
});
