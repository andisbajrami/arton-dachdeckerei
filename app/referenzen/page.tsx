import type { Metadata } from "next";
import { Gallery } from "@/components/Gallery";
import { REFERENCES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Referenzen",
  description: "Referenzen und Projekte der Arton Dachdeckerei GbR.",
  alternates: { canonical: "/referenzen" },
};

export default function ReferencesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">Projekte</p>
          <h1>Referenzen</h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap-wide">
          <Gallery items={REFERENCES} masonry />
        </div>
      </section>
    </>
  );
}
