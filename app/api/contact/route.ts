import { NextResponse } from "next/server";
import { SITE } from "@/lib/content";

type Payload = {
  name?: string;
  mail?: string;
  website?: string;
  comment?: string;
};

export async function POST(request: Request) {
  let body: Payload = {};
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ info: "error", msg: "Ungültige Anfrage." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const mail = (body.mail || "").trim();
  const website = (body.website || "").trim();
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

  const form = new URLSearchParams({ name, mail, website, comment });
  const endpoint = process.env.CONTACT_ENDPOINT || `${SITE.url}/contact.php`;

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: form.toString(),
    });
    const text = await res.text();
    try {
      const json = JSON.parse(text);
      if (json.info && json.msg) {
        return NextResponse.json(json, { status: json.info === "error" ? 400 : 200 });
      }
    } catch {
      if (res.ok) {
        return NextResponse.json({
          info: "success",
          msg: "Vielen Dank. Ihre Nachricht wurde gesendet.",
        });
      }
    }
  } catch {
    // fall through
  }

  return NextResponse.json(
    {
      info: "error",
      msg: `Die Nachricht konnte nicht gesendet werden. Bitte rufen Sie uns unter ${SITE.phone} an oder schreiben Sie an ${SITE.email}.`,
    },
    { status: 502 },
  );
}
