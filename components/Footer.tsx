import Image from "next/image";
import Link from "next/link";
import { FOOTER_NAV, SITE } from "@/lib/content";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Link href="/" className="footer-logo" aria-label="Arton Dachdeckerei – Startseite">
            <Image
              src="/images/logo-arton.png"
              alt="arton Dachdeckerei – Dach & Photovoltaik"
              width={230}
              height={203}
            />
          </Link>
          <h2 className="footer-name">{SITE.name}</h2>
          <p>
            {SITE.addressLines[0]}
            <br />
            {SITE.addressLines[1]}
          </p>
          <p>
            <a href={SITE.phoneHref}>{SITE.phone}</a>
            <br />
            {SITE.fax}
            <br />
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
        </div>
        <div>
          <h3>Navigation</h3>
          <div className="footer-nav">
            {FOOTER_NAV.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3>Ihr Fachbetrieb</h3>
          <p>
            Vertreten durch
            <br />
            {SITE.representatives}
          </p>
        </div>
      </div>
      <div className="wrap copyright">
        <span>{SITE.copyright}</span>
        <Link href="/impressum">Impressum</Link>
      </div>
    </footer>
  );
}
