import type { Metadata } from "next";
import Image from "next/image";
import { ContactInfo } from "@/components/ContactInfo";
import { ABOUT, ABOUT_IMAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Vor einigen Jahren gründeten die Gebrüder Rexhepaj das Unternehmen Arton Dachdeckerei GbR mit der Mission die Kunden zu führen und zu begeistern.",
  alternates: { canonical: "/uber-uns" },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">Unternehmen</p>
          <h1>Über uns</h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap contact-grid">
          <ContactInfo />
          <div>
            <p className="lede">{ABOUT.text}</p>
            <h2 style={{ marginTop: 40, fontSize: "1.8rem" }}>{ABOUT.whyTitle}</h2>
            <ul className="benefit-list">
              {ABOUT.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="frame-pair" style={{ marginTop: 40 }}>
              {ABOUT_IMAGES.map((img) => (
                <Image key={img.src} src={img.src} alt={img.alt} width={700} height={900} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
