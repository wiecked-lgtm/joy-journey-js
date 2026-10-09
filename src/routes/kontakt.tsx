import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "../components/pages/contact-page";
import { altLinks, content, pageMeta } from "../content";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: pageMeta(content("de").contact.meta),
    links: altLinks("/kontakt", "/en/contact"),
  }),
  component: () => <ContactPage lang="de" />,
});
