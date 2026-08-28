import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/content";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.shortName,
    template: `%s – ${SITE.shortName}`,
  },
  description: SITE.metaDescription,
  keywords: SITE.keywords,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE.url,
    siteName: SITE.shortName,
    title: SITE.shortName,
    description: SITE.metaDescription,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: `${SITE.shortName} – ${SITE.tagline}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.shortName,
    description: SITE.metaDescription,
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${manrope.variable} ${syne.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Zum Inhalt
        </a>
        <JsonLd />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
