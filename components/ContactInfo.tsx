import { SITE } from "@/lib/content";

export function ContactInfo({ title = "Kontakt", fachbetrieb = false }: { title?: string; fachbetrieb?: boolean }) {
  return (
    <div className="contact-info">
      <h2>{title}</h2>
      <ul className="info-list">
        <li>
          <span>Adresse</span>
          {fachbetrieb && (
            <>
              Ihr Fachbetrieb:
              <br />
            </>
          )}
          {SITE.name}
          <br />
          {SITE.addressLines[0]}
          <br />
          {SITE.addressLines[1]}
        </li>
        <li>
          <span>Telefon</span>
          <a href={SITE.phoneHref}>{SITE.phone}</a>
        </li>
        <li>
          <span>Telefax</span>
          {SITE.fax}
        </li>
        <li>
          <span>E-Mail</span>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </li>
      </ul>
    </div>
  );
}
