import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "../../components/pages/contact-page";
import { altLinks, content, pageMeta } from "../../content";

export const Route = createFileRoute("/en/contact")({
  head: () => ({
    meta: pageMeta(content("en").contact.meta),
    links: altLinks("/kontakt", "/en/contact"),
  }),
  component: () => <ContactPage lang="en" />,
});
