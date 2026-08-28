import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import {
  ABOUT,
  HOME_IMAGES,
  HOME_REFERENCES,
  PERFORMANCE,
  RENOVATION,
  SERVICE_CARDS,
  SITE,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="kicker">Arton Dachdeckerei</p>
            <h2>Über uns</h2>
            <p className="lede" style={{ marginTop: 18 }}>
              {ABOUT.text}
            </p>
            <p style={{ marginTop: 24 }}>
              <Link className="btn btn-line" href="/uber-uns">
                Mehr über uns
              </Link>
            </p>
          </div>
          <div className="frame">
            <Image src={HOME_IMAGES.about.src} alt={HOME_IMAGES.about.alt} width={900} height={700} />
          </div>
        </div>
      </section>

      <section className="section section-sand" id="leistungen">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">Leistungen</p>
              <h2>Alles aus einer Hand</h2>
            </div>
            <Link className="more" href="/dienstleistungen">
              Alle Dienstleistungen
            </Link>
          </div>
          <div className="card-grid two">
            <article className="service-card">
              <div className="media">
                <Image src={HOME_IMAGES.renovation.src} alt={HOME_IMAGES.renovation.alt} width={800} height={520} />
              </div>
              <div className="body">
                <h3>
                  <Link href="/dienstleistungen">Unser Renovierprogramm:</Link>
                </h3>
                <ul>
                  {RENOVATION.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link className="more" href="/dienstleistungen">
                  Mehr erfahren
                </Link>
              </div>
            </article>
            <article className="service-card">
              <div className="media">
                <Image src={HOME_IMAGES.performance.src} alt={HOME_IMAGES.performance.alt} width={800} height={520} />
              </div>
              <div className="body">
                <h3>
                  <Link href="/dienstleistungen">Unser Leistungsprogramm:</Link>
                </h3>
                <ul>
                  {PERFORMANCE.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link className="more" href="/dienstleistungen">
                  Mehr erfahren
                </Link>
              </div>
            </article>
            <article className="service-card">
              <div className="media">
                <Image src={HOME_IMAGES.about.src} alt={HOME_IMAGES.about.alt} width={800} height={520} />
              </div>
              <div className="body">
                <h3>
                  <Link href="/uber-uns">Über uns</Link>
                </h3>
                <p>{ABOUT.text}</p>
                <Link className="more" href="/uber-uns">
                  Mehr erfahren
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">Dienstleistungen</p>
              <h2>Unser Angebot</h2>
            </div>
          </div>
          <div className="card-grid">
            {SERVICE_CARDS.map((card) => (
              <article className="service-card" key={card.title}>
                <div className="media">
                  <Image src={card.image} alt={card.title} width={700} height={480} />
                </div>
                <div className="body">
                  <h3>{card.title}</h3>
                  <Link className="more" href={card.href}>
                    Zur Leistung
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-sand">
        <div className="wrap split reverse">
          <div className="split-copy">
            <p className="kicker">Zusammenarbeit</p>
            <h2>{ABOUT.whyTitle}</h2>
            <ul className="benefit-list">
              {ABOUT.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="frame">
            <Image src="/images/about/uberuns1.jpg" alt="Dacharbeiten von Arton Dachdeckerei" width={900} height={1100} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">Projekte</p>
              <h2>
                <Link href="/referenzen">Unsere Referenzen</Link>
              </h2>
            </div>
            <Link className="more" href="/referenzen">
              Alle Referenzen
            </Link>
          </div>
          <Gallery items={HOME_REFERENCES} />
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap cta-band">
          <div>
            <p className="kicker" style={{ color: "#9be0a8" }}>
              Kontakt
            </p>
            <h2>Planen Sie Ihr Dachprojekt?</h2>
            <p style={{ maxWidth: "46ch", color: "rgba(255,252,247,0.78)" }}>
              {SITE.heroText}
            </p>
          </div>
          <div className="cta-contacts">
            <a href={SITE.phoneHref}>{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <Link className="btn btn-primary" href="/kontakt" style={{ marginTop: 12, width: "fit-content" }}>
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap contact-grid">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
