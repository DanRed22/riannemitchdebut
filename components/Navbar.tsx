'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Invitation', href: '#invitation' },
  { label: 'Program', href: '#program' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Court', href: '#court' },
  { label: 'Dress Code', href: '#dresscode' },
  { label: 'Venue', href: '#venue' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled || open ? 'bg-white/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1100px] mx-auto px-6 h-[60px] flex items-center justify-between">
        {/* wordmark */}
        <span className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/favicon.ico"
            alt=""
            width={48}
            height={48}
            style={{ objectFit: 'contain', opacity: 0.85 }}
            className="hover:background-pink-100 rounded transition-opacity duration-200 hover:opacity-100"
          />
          <span
            className="text-[20px] italic font-light tracking-[0.02em] text-[#3d2459]"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            Rianne Mitch
          </span>
        </span>

        {/* desktop links — visible sm and up, hidden on mobile */}
        <ul className="hidden sm:flex gap-8 list-none m-0 p-0">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[10px] uppercase tracking-[0.18em] text-[#7040a8] no-underline transition-colors duration-200 hover:text-[#3d2459]"
                style={{ fontFamily: 'var(--font-cinzel), serif' }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* hamburger — visible on mobile only, hidden sm and up */}
        <button
          className="flex sm:hidden flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className="block w-[22px] h-px bg-[#7040a8]" />
          <span className="block w-[22px] h-px bg-[#7040a8]" />
          <span className="block w-[22px] h-px bg-[#7040a8]" />
        </button>
      </nav>

      {/* decorative divider border */}
      <div
        className="w-full flex items-center justify-center px-6"
        style={{ height: '28px' }}
      >
        {/* left line + gems — beads pulse left→right */}
        <div className="flex items-center gap-2 flex-1">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#b09ac8]" />
          {[
            { size: 4, color: '#b09ac8', delay: 0 },
            { size: 6, color: '#7040a8', delay: 0.25 },
            { size: 4, color: '#b09ac8', delay: 0.5 },
          ].map((b, i) => (
            <motion.div
              key={i}
              className="rotate-45 shrink-0"
              style={{ width: b.size, height: b.size, background: b.color }}
              animate={{ opacity: [0.6, 0.15, 0.6] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: b.delay,
              }}
            />
          ))}
        </div>

        {/* center ornament — SVG beads each animated */}
        <svg
          viewBox="0 0 80 24"
          width="80"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0 mx-1"
        >
          {/* flourish strokes — static */}
          <path
            d="M2 12 Q8 6 14 12 Q8 18 2 12Z"
            fill="none"
            stroke="#7040a8"
            strokeWidth="0.8"
            opacity="0.65"
          />
          <path
            d="M6 12 Q10 8 14 12"
            fill="none"
            stroke="#9060c8"
            strokeWidth="0.6"
            opacity="0.45"
          />
          <path
            d="M78 12 Q72 6 66 12 Q72 18 78 12Z"
            fill="none"
            stroke="#7040a8"
            strokeWidth="0.8"
            opacity="0.65"
          />
          <path
            d="M74 12 Q70 8 66 12"
            fill="none"
            stroke="#9060c8"
            strokeWidth="0.6"
            opacity="0.45"
          />

          {/* animated dots — left to right across center */}
          <motion.circle
            cx="20"
            cy="12"
            r="1.2"
            fill="#b09ac8"
            animate={{ opacity: [0.6, 0.1, 0.6] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.7,
            }}
          />
          <motion.rect
            x="25"
            y="10.5"
            width="4"
            height="4"
            fill="#7040a8"
            transform="rotate(45 27 12.5)"
            animate={{ opacity: [0.5, 0.1, 0.5] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.95,
            }}
          />
          <motion.rect
            x="37"
            y="9"
            width="6"
            height="6"
            fill="#4a2080"
            transform="rotate(45 40 12)"
            animate={{ opacity: [0.75, 0.2, 0.75] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.2,
            }}
          />
          <motion.rect
            x="51"
            y="10.5"
            width="4"
            height="4"
            fill="#7040a8"
            transform="rotate(45 53 12.5)"
            animate={{ opacity: [0.5, 0.1, 0.5] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.45,
            }}
          />
          <motion.circle
            cx="60"
            cy="12"
            r="1.2"
            fill="#b09ac8"
            animate={{ opacity: [0.6, 0.1, 0.6] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.7,
            }}
          />
        </svg>

        {/* right line + gems — continue the wave right */}
        <div className="flex items-center gap-2 flex-1">
          {[
            { size: 4, color: '#b09ac8', delay: 1.95 },
            { size: 6, color: '#7040a8', delay: 2.2 },
            { size: 4, color: '#b09ac8', delay: 2.45 },
          ].map((b, i) => (
            <motion.div
              key={i}
              className="rotate-45 shrink-0"
              style={{ width: b.size, height: b.size, background: b.color }}
              animate={{ opacity: [0.6, 0.15, 0.6] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: b.delay,
              }}
            />
          ))}
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#b09ac8]" />
        </div>
      </div>

      {/* mobile dropdown — hidden on sm and up */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="sm:hidden bg-white/97 border-t border-[#e8dff5] px-6 pb-2"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-[11px] uppercase tracking-[0.18em] text-[#7040a8] no-underline border-b border-[#f0eaf8] last:border-0 hover:text-[#3d2459] transition-colors duration-200"
                style={{ fontFamily: 'var(--font-cinzel), serif' }}
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
