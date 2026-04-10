"use client";

// Fixed background layer — sits behind all page content.
// Tile size (540×960) matches the original 9:16 image ratio.
// bgDrift animates background-position by exactly one tile so
// the repeat seam is invisible at every loop point.
export default function BackgroundLayer() {
  return (
    <div
      aria-hidden
      className="bg-drift"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
        backgroundImage: "url('/images/background.jpg')",
        backgroundRepeat: "repeat",
        backgroundSize: "540px 960px",
        opacity: 0.18,
      }}
    />
  );
}
