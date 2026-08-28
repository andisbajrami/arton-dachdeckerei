"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HERO_SLIDES, SITE } from "@/lib/content";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="hero" aria-label="Start">
      <div className="hero-slides">
        {HERO_SLIDES.map((slide, i) => (
          <div className={`hero-slide${i === index ? " is-active" : ""}`} key={slide.src}>
            <Image src={slide.src} alt={slide.alt} fill sizes="100vw" priority={i === 0} />
          </div>
        ))}
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="kicker" style={{ color: "#9be0a8" }}>
          {SITE.tagline}
        </p>
        <h1>{SITE.heroTitle}</h1>
        <p className="sub">{SITE.heroText}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="/kontakt">
            Kontakt aufnehmen
          </a>
          <a className="btn btn-ghost" href="/dienstleistungen">
            Unsere Leistungen
          </a>
        </div>
      </div>
    </section>
  );
}
