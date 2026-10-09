import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "../../components/pages/about-page";
import { altLinks, content, pageMeta } from "../../content";

export const Route = createFileRoute("/en/about")({
  head: () => ({
    meta: pageMeta(content("en").about.meta),
    links: altLinks("/ueber-mich", "/en/about"),
  }),
  component: () => <AboutPage lang="en" />,
});
