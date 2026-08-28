import { SITE } from "@/lib/content";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    faxNumber: SITE.fax,
    image: `${SITE.url}/images/logo-arton.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.addressLines[0],
      postalCode: "71334",
      addressLocality: "Waiblingen",
      addressCountry: "DE",
    },
    founder: SITE.representatives,
    areaServed: "DE",
    description: SITE.metaDescription,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
