import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "../components/pages/home-page";
import { altLinks, content, pageMeta } from "../content";

// Deutsche Startseite. Inhalt: src/components/pages/home-page.tsx
// Texte: src/content/de.ts
export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta(content("de").home.meta),
    links: altLinks("/", "/en"),
  }),
  component: () => <HomePage lang="de" />,
});
