import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: "export" as const,
        images: { unoptimized: true },
        // Folder + index.html output (e.g. /dienstleistungen/index.html) so
        // Apache/static hosts serve clean pretty URLs without extra rewrites.
        trailingSlash: true,
      }
    : {}),
  async redirects() {
    // Static export doesn't support next.config redirects — the equivalent
    // rules live in public/.htaccess for that build instead.
    if (isStaticExport) return [];
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/uberuns.html", destination: "/uber-uns", permanent: true },
      { source: "/dienstleistungen.html", destination: "/dienstleistungen", permanent: true },
      { source: "/referenzen.html", destination: "/referenzen", permanent: true },
      { source: "/kontakt.html", destination: "/kontakt", permanent: true },
      { source: "/impressum.html", destination: "/impressum", permanent: true },
    ];
  },
};

export default nextConfig;
