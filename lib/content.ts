export const SITE = {
  name: "Arton Dachdeckerei GbR",
  shortName: "Arton Dachdeckerei",
  url: "https://arton-dachdeckerei.de",
  tagline: "Ihr Fachbetrieb",
  heroTitle: "Das Dach ist die Krone Ihres Hauses.",
  heroText:
    "Es ist entsprechend für das Erscheinungsbild, die Schönheit und die Werthaltung Ihres Gebäudes.",
  addressLines: ["Meisenweg 36", "71334 Waiblingen"] as const,
  mapsQuery: "Meisenweg 36, 71334 Waiblingen, Germany",
  mapsEmbed:
    "https://maps.google.com/maps?q=Meisenweg%2036%2C%2071334%20Waiblingen%2C%20Germany&hl=de&z=16&output=embed",
  phone: "07151 278 1670",
  phoneHref: "tel:+4971512781670",
  fax: "07151 278 1671",
  email: "info@arton-dachdeckerei.de",
  copyright: "© Copyright 2020 Arton Dachdeckerei GbR. All rights reserved.",
  office: {
    title: "Buro I Verwaltung",
    lines: ["Magirus-Deutz-StraBe 12", "89077 Ulm"] as const,
  },
  representatives: "Arton & Ahmet Rexhepaj",
  chamber: {
    name: "Handwerkskammer Region Stuttgart",
    lines: ["Heilbronner Strasse 43", "70191 Stuttgart"] as const,
  },
  vatId: "DE 90488/63903",
  metaDescription:
    "Das Dach ist die Krone Ihres Hauses. Es ist entsprechend für das Erscheinungsbild, die Schönheit und die Werthaltung Ihres Gebäudes.",
  keywords:
    "Arton Dachdeckerei, Dachumdeckung, Dachreparatur, Dachwärmedämmung, Dachrinnen, Kaminsanierung, Asbestentsorgung - Nach TRGS 519, Eigener Gerüstbau, Umdeckungen, Schnell – Reparaturen, Flaschnerarbeiten",
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/dienstleistungen", label: "Dienstleistungen" },
  { href: "/uber-uns", label: "Über uns" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const FOOTER_NAV = [
  { href: "/", label: "Startseite" },
  { href: "/dienstleistungen", label: "Dienstleistungen" },
  { href: "/uber-uns", label: "Über uns" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/impressum", label: "Impressum" },
] as const;

export const ABOUT = {
  text: "Vor einigen Jahren gründeten die Gebrüder Rexhepaj das Unternehmen Arton Dachdeckerei GbR mit der Mission die Kunden zu führen und zu begeistern. Wir bieten all unsere Angebote in mehreren Grossstädten an.",
  whyTitle: "Warum sich die Zusammenarbeit mit uns auszahlt:",
  benefits: [
    "Erfahrenes, eingespieltes Team aus der Region",
    "Spitzenfachleute in verschiedenen Bereichen",
    "Intensive Beratung und Projektbegleitung von Anfang an",
    "Faire Konditionen, flexible Arbeitsplanung",
    "Umfassende, moderne Infrastruktur",
    "Freude an guter Arbeit und besten Ergebnissen!",
  ],
};

export const RENOVATION = [
  "Dachumdeckung",
  "Dachreparatur",
  "Dachwärmedämmung",
  "Dachrinnen",
  "Kaminsanierung",
  "Asbestentsorgung - Nach TRGS 519",
] as const;

export const PERFORMANCE = [
  "Eigener Gerüstbau",
  "Umdeckungen",
  "Schnell – Reparaturen",
  "Flaschnerarbeiten",
] as const;

export const ALL_SERVICES = [...RENOVATION, ...PERFORMANCE];

export const SERVICES_PAGE = {
  introLead: "Ihr Dach ist der am stärksten beanspruchte Gebäudeteil.",
  intro:
    "Regnet es so werden Sie nicht nass, schneit es so trägt es dich Ganze Last. Sorgfältige Pflege und Wartung sind daher nicht nur aus optischen Gründen erforderlich. Sie dienen auch dem Werterhalt ihres Gebäudes. Mit einem individuellen Service- und Wartungsvertrag werden regelmässige Instandhaltungs- und Servicearbeiten vereinbart. Das schafft Kostensicherheit, verlängert die Lebensdauer ihres Daches und dient dem Werterhalt ihrer Immobilie.",
  check:
    "Eine regelmässige Überprüfung bringt ihnen die Sicherheit und somit entstehen aus kleinen Ursachen keine grossen Schäden.",
  allInOne: "Alles aus einer Hand",
  insulationTitle: "Wärmedämmung",
  insulation:
    "Eine gute Isolation des Daches ist goldwert, wo die Heizkosten heute immer weiter steigen. Ausserdem erhalten Sie durch eine effektive Wärmedämmung ein ausgeglichenes Raumklima und schonen durch den geringeren Heizölverbrauch die Umwelt.",
  scaffoldTitle: "Gerüstbau",
  scaffold:
    "Für ein komplettes Dachkonzept, bieten wir Ihnen auch den Service, das Objekt einzurüsten.",
  metalTitle: "Flaschnerarbeiten",
  metal: [
    "Wir liefern und montieren alle für den Bau erforderlichen Abdeckungen und Verkleidungen.",
    "Neben den traditionellen Materialien wie Kupfer oder Titan-Zink verarbeiten wir dabei selbstverständlich auch beschichtetes Material. Zum Beispiel: Aluminium, Edelstahl, Alu-Zink-Legierungen.",
    "Kupfer wird jedoch aufgrund der Optik und der langen Haltbarkeit vielfach bevorzugt.",
  ],
};

export const HERO_SLIDES = [
  { src: "/images/hero/slide1.jpg", alt: "Steildach mit Kupferkaminen und Dachrinnen – Arton Dachdeckerei" },
  { src: "/images/hero/slide2.jpg", alt: "Dacharbeiten von Arton Dachdeckerei" },
  { src: "/images/hero/slide3.jpg", alt: "Dachsanierung – Arton Dachdeckerei" },
  { src: "/images/hero/slide4.jpg", alt: "Dachdeckerei-Projekt – Arton Dachdeckerei" },
];

export const HOME_IMAGES = {
  renovation: { src: "/images/home/home_1.jpg", alt: "Renovierprogramm – Dacharbeiten" },
  performance: { src: "/images/home/home_2.jpg", alt: "Leistungsprogramm – Gerüst und Dach" },
  about: { src: "/images/home/home_3.jpg", alt: "Arton Dachdeckerei – Über uns" },
};

export const ABOUT_IMAGES = [
  { src: "/images/about/uberuns1.jpg", alt: "Arton Dachdeckerei – Team und Arbeit vor Ort" },
  { src: "/images/about/uberuns2.jpg", alt: "Arton Dachdeckerei – Dachprojekt" },
];

export const SERVICE_IMAGES = {
  overview: { src: "/images/services/dienstleistungen2.jpg", alt: "Dacharbeiten – Dienstleistungen" },
  extra: { src: "/images/services/dienstleistungen.jpg", alt: "Dachdeckerei – Arbeiten am Dach" },
};

/** Homepage teaser gallery (original referenzen/home images). */
export const HOME_REFERENCES = Array.from({ length: 8 }, (_, i) => ({
  src: `/images/referenzen-home/${i + 1}.jpg`,
  alt: `Arton Dachdeckerei – Referenz ${i + 1}`,
}));

/**
 * Full reference gallery. Includes 5.jpg and 6.jpg which exist on the
 * original server even though they were skipped in the old HTML markup.
 */
export const REFERENCES = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/referenzen/${i + 1}.jpg`,
  alt: `Arton Dachdeckerei – Referenzprojekt ${i + 1}`,
}));

export const SERVICE_CARDS = [
  { title: "Dachumdeckung", image: HERO_SLIDES[0].src, href: "/dienstleistungen" },
  { title: "Dachreparatur", image: HOME_IMAGES.renovation.src, href: "/dienstleistungen" },
  { title: "Dachwärmedämmung", image: SERVICE_IMAGES.extra.src, href: "/dienstleistungen#waermedaemmung" },
  { title: "Dachrinnen", image: HERO_SLIDES[1].src, href: "/dienstleistungen" },
  { title: "Kaminsanierung", image: HERO_SLIDES[2].src, href: "/dienstleistungen" },
  { title: "Asbestentsorgung - Nach TRGS 519", image: HOME_IMAGES.performance.src, href: "/dienstleistungen" },
  { title: "Eigener Gerüstbau", image: SERVICE_IMAGES.overview.src, href: "/dienstleistungen#geruestbau" },
  { title: "Umdeckungen", image: HERO_SLIDES[3].src, href: "/dienstleistungen" },
  { title: "Schnell – Reparaturen", image: ABOUT_IMAGES[0].src, href: "/dienstleistungen" },
  { title: "Flaschnerarbeiten", image: ABOUT_IMAGES[1].src, href: "/dienstleistungen#flaschnerarbeiten" },
] as const;
