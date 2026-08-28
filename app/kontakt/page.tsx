import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontakt zu ${SITE.name}, ${SITE.addressLines[0]}, ${SITE.addressLines[1]}. Telefon ${SITE.phone}.`,
  alternates: { canonical: "/kontakt" },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">Erreichbarkeit</p>
          <h1>Kontakt</h1>
        </div>
      </section>
      <iframe
        className="map"
        title={`Karte – ${SITE.mapsQuery}`}
        src={SITE.mapsEmbed}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <section className="section">
        <div className="wrap contact-grid">
          <ContactInfo fachbetrieb />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
