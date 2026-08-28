import { NextResponse } from "next/server";
import { SITE } from "@/lib/content";

type Payload = {
  name?: string;
  mail?: string;
  website?: string;
  comment?: string;
};

const FALLBACK_ERROR_MSG = `Die Nachricht konnte nicht gesendet werden. Bitte rufen Sie uns unter ${SITE.phone} an oder schreiben Sie an ${SITE.email}.`;

export async function POST(request: Request) {
  let body: Payload = {};
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ info: "error", msg: "Ungültige Anfrage." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const mail = (body.mail || "").trim();
  const phone = (body.website || "").trim();
  const comment = (body.comment || "").trim();

  if (!name || !mail || !comment) {
    return NextResponse.json(
      { info: "error", msg: "Bitte füllen Sie alle Pflichtfelder aus." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
    return NextResponse.json(
      { info: "error", msg: "Bitte geben Sie eine gültige E-Mail-Adresse ein." },
      { status: 400 },
    );
  }

  // All contact form submissions are delivered straight to the business
  // inbox via FormSubmit's relay — no dependency on the old PHP host, which
  // sits behind a bot-challenge that blocks server-to-server requests.
  const recipient = process.env.CONTACT_RECIPIENT || SITE.email;
  const referer = request.headers.get("origin") || SITE.url;

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Referer: `${referer}/kontakt`,
      },
      body: JSON.stringify({
        name,
        email: mail,
        phone: phone || "-",
        message: comment,
        _subject: `Neue Kontaktanfrage von ${name} – ${SITE.shortName}`,
        _template: "table",
      }),
    });

    const json = await res.json().catch(() => null);
    if (res.ok && json && String(json.success) !== "false") {
      return NextResponse.json({
        info: "success",
        msg: "Vielen Dank. Ihre Nachricht wurde gesendet.",
      });
    }
  } catch {
    // fall through to error response below
  }

  return NextResponse.json({ info: "error", msg: FALLBACK_ERROR_MSG }, { status: 502 });
}
