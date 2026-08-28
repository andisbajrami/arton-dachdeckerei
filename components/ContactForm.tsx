"use client";

import { FormEvent, useState } from "react";

type Status = { type: "idle" } | { type: "success"; message: string } | { type: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const mail = String(data.get("mail") || "").trim();
    const website = String(data.get("website") || "").trim();
    const comment = String(data.get("comment") || "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Bitte geben Sie Ihren Namen an.";
    if (!mail) nextErrors.mail = "Bitte geben Sie Ihre E-Mail-Adresse an.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) nextErrors.mail = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    if (!comment) nextErrors.comment = "Bitte geben Sie eine Nachricht ein.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus({ type: "error", message: "Bitte prüfen Sie die markierten Felder." });
      return;
    }

    setPending(true);
    setStatus({ type: "idle" });
    try {
      const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "/api/contact";
      const isPhpEndpoint = endpoint.endsWith(".php");
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": isPhpEndpoint ? "application/x-www-form-urlencoded" : "application/json",
        },
        body: isPhpEndpoint
          ? new URLSearchParams({ name, mail, website, comment }).toString()
          : JSON.stringify({ name, mail, website, comment }),
      });
      const json = await res.json();
      if (json.info === "error") {
        setStatus({ type: "error", message: json.msg });
      } else {
        form.reset();
        setErrors({});
        setStatus({ type: "success", message: json.msg });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Die Nachricht konnte nicht gesendet werden. Bitte rufen Sie uns an oder schreiben Sie uns per E-Mail.",
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <form className="form" id="contact-form" onSubmit={onSubmit} noValidate>
      <h2>Kontakt Formular</h2>
      <div className="fields">
        <div className={`field${errors.name ? " has-error" : ""}`}>
          <label htmlFor="name">
            Name <span className="req">*</span>
          </label>
          <input id="name" name="name" type="text" autoComplete="name" required aria-invalid={!!errors.name} />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className={`field${errors.mail ? " has-error" : ""}`}>
          <label htmlFor="mail">
            E-Mail <span className="req">*</span>
          </label>
          <input id="mail" name="mail" type="email" autoComplete="email" required aria-invalid={!!errors.mail} />
          {errors.mail && <span className="error">{errors.mail}</span>}
        </div>
        <div className="field">
          <label htmlFor="website">Telefon</label>
          <input id="website" name="website" type="tel" autoComplete="tel" />
        </div>
        <div className={`field full${errors.comment ? " has-error" : ""}`}>
          <label htmlFor="comment">
            Nachricht <span className="req">*</span>
          </label>
          <textarea id="comment" name="comment" required aria-invalid={!!errors.comment} />
          {errors.comment && <span className="error">{errors.comment}</span>}
        </div>
      </div>
      <button className="btn btn-dark" type="submit" id="submit_contact" disabled={pending}>
        {pending ? "Wird gesendet…" : "Senden"}
      </button>
      {status.type !== "idle" && (
        <div className={`form-status ${status.type}`} role="status">
          {status.message}
        </div>
      )}
    </form>
  );
}
