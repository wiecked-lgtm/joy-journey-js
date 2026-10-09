import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "../components/pages/about-page";
import { altLinks, content, pageMeta } from "../content";

export const Route = createFileRoute("/ueber-mich")({
  head: () => ({
    meta: pageMeta(content("de").about.meta),
    links: altLinks("/ueber-mich", "/en/about"),
  }),
  component: () => <AboutPage lang="de" />,
});
