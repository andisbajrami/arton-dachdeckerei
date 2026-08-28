import type { Metadata } from "next";
import Image from "next/image";
import { ContactInfo } from "@/components/ContactInfo";
import { PERFORMANCE, RENOVATION, SERVICE_IMAGES, SERVICES_PAGE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Dienstleistungen",
  description:
    "Dachumdeckung, Dachreparatur, Dachwärmedämmung, Dachrinnen, Kaminsanierung, Asbestentsorgung nach TRGS 519, Gerüstbau und Flaschnerarbeiten.",
  alternates: { canonical: "/dienstleistungen" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">Angebot</p>
          <h1>Dienstleistungen</h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap contact-grid">
          <ContactInfo />
          <div className="service-detail">
            <div>
              <p>
                <strong>{SERVICES_PAGE.introLead}</strong> {SERVICES_PAGE.intro}
              </p>
              <p>{SERVICES_PAGE.check}</p>
            </div>
            <div className="two-col">
              <div>
                <h2 style={{ fontSize: "1.6rem", marginBottom: 16 }}>{SERVICES_PAGE.allInOne}</h2>
                <ul className="pill-list">
                  {RENOVATION.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ul className="pill-list" style={{ marginTop: 24 }}>
                  {PERFORMANCE.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="frame">
                <Image
                  src={SERVICE_IMAGES.overview.src}
                  alt={SERVICE_IMAGES.overview.alt}
                  width={900}
                  height={700}
                />
              </div>
            </div>
            <div className="detail-block" id="waermedaemmung">
              <h2>{SERVICES_PAGE.insulationTitle}:</h2>
              <p>{SERVICES_PAGE.insulation}</p>
            </div>
            <div className="detail-block" id="geruestbau">
              <h2>{SERVICES_PAGE.scaffoldTitle}:</h2>
              <p>{SERVICES_PAGE.scaffold}</p>
              <div className="frame" style={{ marginTop: 24 }}>
                <Image src={SERVICE_IMAGES.extra.src} alt={SERVICE_IMAGES.extra.alt} width={1200} height={700} />
              </div>
            </div>
            <div className="detail-block" id="flaschnerarbeiten">
              <h2>{SERVICES_PAGE.metalTitle}:</h2>
              {SERVICES_PAGE.metal.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
