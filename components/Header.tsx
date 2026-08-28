"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className={`header${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
        <div className="header-bar">
          <Link href="/" className="logo" aria-label="Arton Dachdeckerei – Startseite">
            <Image
              src="/images/logo-arton.png"
              alt="arton Dachdeckerei – Dach & Photovoltaik"
              width={230}
              height={203}
              priority
            />
          </Link>
          <div className="nav-wrap desktop-nav" id="site-nav-desktop">
            <nav className="nav" aria-label="Hauptnavigation">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="header-actions">
            <a className="phone-cta header-phone" href={SITE.phoneHref}>
              {SITE.phone}
            </a>
            <button
              className="menu-toggle"
              type="button"
              aria-expanded={open}
              aria-controls="site-nav"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      <div className={`mobile-nav${open ? " is-open" : ""}`} id="site-nav">
        <nav className="nav" aria-label="Mobilnavigation">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="phone-cta nav-phone" href={SITE.phoneHref}>
          {SITE.phone}
        </a>
      </div>
    </>
  );
}
