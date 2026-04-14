'use client';

import { motion } from 'framer-motion';
import GemDivider from '@/components/GemDivider';

// ─── Replace these with real photo paths once available ───
// Place photos in /public/images/gallery/ and update src values below.
const photos: { src: string | null; caption: string }[] = [
  {
    src: 'https://i.ibb.co/jvhgHDK1/IMG-6862.png',
    caption: 'Photo 1',
  },
  { src: 'https://i.ibb.co/zhTzybjD/IMG-6861.jpg', caption: 'Photo 2' },
  {
    src: 'https://i.ibb.co/hJt0DFR8/Screenshot-2026-04-14-at-10-58-52-PM.png',
    caption: 'Photo 3',
  },
  { src: null, caption: 'Photo 4' },
  { src: null, caption: 'Photo 5' },
  { src: null, caption: 'Photo 6' },
];

export default function GallerySection() {
  return (
    <section id="gallery" style={{ padding: '6rem 1.5rem' }}>
      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '3.5rem' }}
      >
        <GemDivider />
        <p
          style={{
            fontFamily: 'var(--font-cinzel), serif',
            fontSize: '12px',
            letterSpacing: '0.22em',
            color: '#9a7ab8',
            textTransform: 'uppercase',
            marginBottom: '0.6rem',
          }}
        >
          The Story of our Journey
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontStyle: 'italic',
            fontSize: '52px',
            fontWeight: 300,
            color: '#1a0d2e',
            lineHeight: 1.1,
          }}
        >
          Gallery
        </h2>
      </motion.div>

      {/* grid */}
      <div
        style={{
          maxWidth: '960px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
        }}
        className="grid-cols-2 sm:grid-cols-3"
      >
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.93 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.6,
              delay: i * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ position: 'relative', overflow: 'hidden' }}
          >
            {photo.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={photo.src}
                alt={photo.caption}
                style={{
                  width: '100%',
                  aspectRatio: '3/4',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            ) : (
              /* placeholder */
              <div
                style={{
                  aspectRatio: '3/4',
                  background:
                    'linear-gradient(145deg, #f0e8f8 0%, #e8dff5 100%)',
                  border: '1px solid #ddd0ee',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                {/* decorative mask icon */}
                <svg width="36" height="20" viewBox="0 0 200 90" opacity="0.25">
                  <path
                    d="M20 50 Q10 30 20 18 Q35 5 55 8 Q70 10 80 22 Q90 35 100 35 Q110 35 120 22 Q130 10 145 8 Q165 5 180 18 Q190 30 180 50 Q175 62 165 62 Q150 62 140 52 Q130 42 118 40 Q110 38 100 35 Q90 32 82 40 Q70 52 60 62 Q50 72 35 62 Q20 62 20 50Z"
                    fill="none"
                    stroke="#7040a8"
                    strokeWidth="3"
                  />
                  <ellipse
                    cx="65"
                    cy="32"
                    rx="18"
                    ry="13"
                    fill="none"
                    stroke="#7040a8"
                    strokeWidth="2"
                  />
                  <ellipse
                    cx="135"
                    cy="32"
                    rx="18"
                    ry="13"
                    fill="none"
                    stroke="#7040a8"
                    strokeWidth="2"
                  />
                </svg>
                <p
                  style={{
                    fontFamily: 'var(--font-cinzel), serif',
                    fontSize: '9px',
                    letterSpacing: '0.18em',
                    color: '#a888c8',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                  }}
                >
                  Photo Coming Soon
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
