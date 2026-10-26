import { createFileRoute } from "@tanstack/react-router";

// Nimmt das Ergebnis des Etsy-Werbe-Checks entgegen und legt den Kontakt in Sender an.
// Der Kontakt landet zuerst in der Gruppe "Unbestätigt". Eine Sender-Automation schickt
// dort die Bestätigungsmail; erst der Klick darauf verschiebt ihn in die Gruppe "Werbe-Check".
//
// Benötigte Umgebungsvariablen (in Vercel unter Settings > Environment Variables):
//   SENDER_API_TOKEN          API-Schlüssel aus Sender (Settings > API access tokens)
//   SENDER_GROUP_UNBESTAETIGT ID der Sender-Gruppe "Unbestätigt"

const SENDER_API = "https://api.sender.net/v2";

const FIELD_KEYS = [
  "produkt",
  "ampel",
  "empfehl",
  "beroas",
  "roas",
  "gewinn",
  "monat",
  "steuer",
] as const;

function json(status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });
}

// eslint-disable-next-line no-control-regex
const UNSAFE_CHARS = /[\u0000-\u001f<>]/g;

function clean(value: unknown, max = 250): string {
  if (typeof value !== "string") return "";
  return value.replace(UNSAFE_CHARS, " ").trim().slice(0, max);
}

export const Route = createFileRoute("/api/werbe-check")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const token = process.env.SENDER_API_TOKEN;
        const group = process.env.SENDER_GROUP_UNBESTAETIGT;
        if (!token || !group) {
          console.error("werbe-check: SENDER_API_TOKEN oder SENDER_GROUP_UNBESTAETIGT fehlt");
          return json(500, { ok: false, error: "not_configured" });
        }

        let input: Record<string, unknown>;
        try {
          input = (await request.json()) as Record<string, unknown>;
        } catch {
          return json(400, { ok: false, error: "bad_json" });
        }

        // Honeypot: Bots füllen dieses unsichtbare Feld aus, Menschen nicht.
        if (clean(input.website)) return json(200, { ok: true });

        const email = clean(input.email, 254).toLowerCase();
        const firstname = clean(input.firstname, 80);
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !firstname) {
          return json(400, { ok: false, error: "invalid_input" });
        }

        const raw = (input.fields ?? {}) as Record<string, unknown>;
        const extra: Record<string, unknown> = {};
        for (const [k, v] of Object.entries(raw)) extra[k.toLowerCase()] = v;
        const fields: Record<string, string> = {};
        for (const key of FIELD_KEYS) fields[`{$${key}}`] = clean(extra[key]);

        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        };
        const payload = { firstname, groups: [group], fields, trigger_automation: true };

        // Neuer Kontakt anlegen; gibt es ihn schon, Felder und Gruppe aktualisieren.
        try {
          let res = await fetch(`${SENDER_API}/subscribers`, {
            method: "POST",
            headers,
            body: JSON.stringify({ email, ...payload }),
          });
          if (!res.ok) {
            res = await fetch(`${SENDER_API}/subscribers/${encodeURIComponent(email)}`, {
              method: "PATCH",
              headers,
              body: JSON.stringify(payload),
            });
          }
          if (!res.ok) {
            console.error("werbe-check: Sender antwortet", res.status, await res.text());
            return json(502, { ok: false, error: "sender_failed" });
          }
        } catch (error) {
          console.error("werbe-check: Sender nicht erreichbar", error);
          return json(502, { ok: false, error: "sender_unreachable" });
        }
        return json(200, { ok: true });
      },
    },
  },
});
