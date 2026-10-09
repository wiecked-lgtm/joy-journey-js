import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "../../components/pages/home-page";
import { altLinks, content, pageMeta } from "../../content";

// Englische Startseite, erreichbar unter /en
export const Route = createFileRoute("/en/")({
  head: () => ({
    meta: pageMeta(content("en").home.meta),
    links: altLinks("/", "/en"),
  }),
  component: () => <HomePage lang="en" />,
});
