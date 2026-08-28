"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Item = { src: string; alt: string };

export function Gallery({ items, masonry = false }: { items: Item[]; masonry?: boolean }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const show = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + items.length) % items.length), [items.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % items.length), [items.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  useEffect(() => {
    if (!open) return;
    let startX = 0;
    const onStart = (e: TouchEvent) => {
      startX = e.changedTouches[0].clientX;
    };
    const onEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (dx > 50) prev();
      if (dx < -50) next();
    };
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend", onEnd);
    };
  }, [open, prev, next]);

  return (
    <>
      <div className={`gallery${masonry ? " masonry" : ""}`}>
        {items.map((item, i) => (
          <button type="button" key={item.src} onClick={() => show(i)} aria-label={`${item.alt} vergrößern`}>
            <Image src={item.src} alt={item.alt} width={800} height={600} loading="lazy" />
          </button>
        ))}
      </div>
      <div className={`lightbox${open ? " is-open" : ""}`} role="dialog" aria-modal="true" aria-label="Bildansicht">
        {open && (
          <>
            <button type="button" className="lightbox-close" onClick={close} aria-label="Schließen">
              ×
            </button>
            <button type="button" className="lightbox-nav prev" onClick={prev} aria-label="Vorheriges Bild">
              ‹
            </button>
            <Image src={items[index].src} alt={items[index].alt} width={1600} height={1200} />
            <button type="button" className="lightbox-nav next" onClick={next} aria-label="Nächstes Bild">
              ›
            </button>
          </>
        )}
      </div>
    </>
  );
}
