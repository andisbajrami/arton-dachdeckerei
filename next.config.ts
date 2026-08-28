import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
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
