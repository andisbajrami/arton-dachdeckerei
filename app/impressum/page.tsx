import type { Metadata } from "next";
import { ContactInfo } from "@/components/ContactInfo";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum der ${SITE.name}.`,
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">Rechtliches</p>
          <h1>Impressum</h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap contact-grid">
          <ContactInfo />
          <article className="legal">
            <h2>Angaben gemäß § 5 DDG</h2>
            <p>
              <em>{SITE.name}</em>
              <br />
              {SITE.addressLines[0]}
              <br />
              {SITE.addressLines[1]}
              <br />
              Deutschland
            </p>
            <h3>Büro | Verwaltung</h3>
            <p>
              {SITE.office.lines[0]}
              <br />
              {SITE.office.lines[1]}
              <br />
              Deutschland
            </p>
            <h2>Vertretungsberechtigte Gesellschafter</h2>
            <p>
              Arton Rexhepaj
              <br />
              Ahmet Rexhepaj
            </p>
            <h2>Kontakt</h2>
            <p>
              <em>Telefon:</em> {SITE.phone}
              <br />
              <em>Telefax:</em> {SITE.fax}
              <br />
              <em>E-Mail:</em> <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
            <h2>Zuständige Kammer</h2>
            <p>
              {SITE.chamber.name}
              <br />
              {SITE.chamber.lines[0]}
              <br />
              {SITE.chamber.lines[1]}
            </p>
            <h2>Umsatzsteuer</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
              <br />
              <em>{SITE.vatId}</em>
            </p>
            <h2>Verbraucherstreitbeilegung</h2>
            <p>
              Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich.
            </p>
            <p>
              Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
              erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
            </p>
            <p>Bei Bekanntwerden entsprechender Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
            <h2>Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Daher können wir für diese fremden Inhalte keine Gewähr übernehmen.
            </p>
            <p>
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
              der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung
              auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zu diesem Zeitpunkt
              nicht erkennbar.
            </p>
            <p>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete
              Anhaltspunkte für eine Rechtsverletzung nicht zumutbar.
            </p>
            <p>Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht.
            </p>
            <p>
              Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb
              der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen
              Autors bzw. Erstellers.
            </p>
            <p>Downloads und Kopien dieser Website sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
            <p>
              Soweit Inhalte auf dieser Website nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
              gekennzeichnet.
            </p>
            <p>
              Sollten Sie dennoch auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um
              einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir
              derartige Inhalte umgehend entfernen.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
