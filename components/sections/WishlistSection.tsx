'use client';

import { motion } from 'framer-motion';
import GemDivider from '@/components/GemDivider';

const categories = [
  {
    icon: '✦',
    label: 'Make up Stuff',
    items: [
      'Lippie or lip balms',
      'Blush',
      'Centella serums (pink, white, or orange)',
      'Centella sunscreen',
      'Eyeshadow palette',
      'Eyeliner',
      'Brushes or applicators',
      'Anything from Flower Knows',
    ],
  },
  {
    icon: '✦',
    label: 'Fashion Stuff',
    note: 'Size S or XS — Bust 34 in · Waist 24 in · Hip 36 in',
    items: [
      'Corset / Girdle',
      'Skirt (miniskirt or maxi skirt)',
      'Lolita Fashion',
      'Gyaru Fashion',
      'Dress (bodycon, cutesy, coquette, or bold)',
      'Heatless Silk Curlers',
      'Claw clips / Hair accessories',
      'Fashion accessories',
      'Anything you feel suits me — I will graciously accept!',
    ],
  },
  {
    icon: '✦',
    label: 'Technology Stuff',
    items: [
      'Type-C wired earphones (di ko masaligan og earbuds)',
      'Ocean Wave Projector or Galaxy Projector',
      'Nightlight/Lamp',
    ],
  },
  {
    icon: '✦',
    label: 'Music Stuff',
    items: ['Guitar related items'],
  },
  {
    icon: '✦',
    label: 'Anime / Media Stuff',
    note: 'Faves: Sylus, Zayne & Rafayel (Love and Deepspace)',
    items: [
      'Figurines & plushies',
      'Manga',
      'Books (psychological, dystopian, greek/mythology, or medical)',
      'Love and Deepspace-related stuff',
      'Death Note · Toilet-Bound Hanako-kun · Spy x Family',
      'Genshin · Sailor Moon · Banana Fish · Omori',
      'Alien Stage · Sanrio · Jujutsu Kaisen',
      'The Summer Hikaru Died',
      'Anything you recommend or like!',
    ],
  },
  {
    icon: '✦',
    label: 'Other Stuff',
    note: '100% will keep it safe',
    items: ['Letters', 'Photos', 'Drawings'],
  },
];

// Corner diamond accent reused per card
function CornerAccents() {
  const positions: Array<{
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  }> = [
    { top: '-4px', left: '-4px' },
    { top: '-4px', right: '-4px' },
    { bottom: '-4px', left: '-4px' },
    { bottom: '-4px', right: '-4px' },
  ];
  return (
    <>
      {positions.map((pos, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            ...pos,
            width: '7px',
            height: '7px',
            background: '#7040a8',
            transform: 'rotate(45deg)',
            opacity: 0.35,
          }}
        />
      ))}
    </>
  );
}

export default function WishlistSection() {
  return (
    <section
      id="wishlist"
      style={{
        padding: '6rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '1rem' }}
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
          Gift Guide
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontStyle: 'italic',
            fontSize: '52px',
            fontWeight: 300,
            color: '#1a0d2e',
            lineHeight: 1.1,
            marginBottom: '1rem',
          }}
        >
          Wish List
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-im-fell), serif',
            fontStyle: 'italic',
            fontSize: '14px',
            color: '#9a7ab8',
            letterSpacing: '0.04em',
          }}
        >
          Feel free to go with any color that is pleasing to the eye.
        </p>
      </motion.div>

      {/* decorative top rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{
          maxWidth: '520px',
          margin: '2rem auto',
          height: '1px',
          background:
            'linear-gradient(to right, transparent, #c9b8d8 30%, #c9b8d8 70%, transparent)',
          transformOrigin: 'center',
        }}
      />

      {/* category grid */}
      <div
        style={{
          maxWidth: '860px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.6rem',
        }}
      >
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.6,
              delay: i * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              background: '#fdfbff',
              border: '1px solid #ede5f8',
              padding: '1.4rem 1.5rem 1.4rem',
              position: 'relative',
            }}
          >
            <CornerAccents />

            {/* category label */}
            <p
              style={{
                fontFamily: 'var(--font-cinzel), serif',
                fontSize: '9.5px',
                letterSpacing: '0.2em',
                color: '#9a7ab8',
                textTransform: 'uppercase',
                marginBottom: '0.3rem',
              }}
            >
              {cat.label}
            </p>

            {cat.note && (
              <p
                style={{
                  fontFamily: 'var(--font-im-fell), serif',
                  fontStyle: 'italic',
                  fontSize: '11px',
                  color: '#b09ac8',
                  marginBottom: '0.7rem',
                }}
              >
                ({cat.note})
              </p>
            )}

            {/* thin rule */}
            <div
              style={{
                height: '0.5px',
                background: '#ddd0ee',
                marginBottom: '0.85rem',
                marginTop: cat.note ? 0 : '0.5rem',
              }}
            />

            {/* items */}
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {cat.items.map((item, j) => (
                <li
                  key={j}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    marginBottom: '0.45rem',
                  }}
                >
                  <span
                    style={{
                      color: '#c9b8d8',
                      fontSize: '7px',
                      marginTop: '4px',
                      flexShrink: 0,
                    }}
                  >
                    ◆
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-im-fell), serif',
                      fontStyle: 'italic',
                      fontSize: '13px',
                      color: '#4a2d6e',
                      lineHeight: 1.5,
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Dear Guest note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          maxWidth: '580px',
          margin: '3.5rem auto 0',
          textAlign: 'center',
          border: '1px solid #ddd0ee',
          padding: '2rem 2.5rem',
          background: '#ffffff',
          position: 'relative',
        }}
      >
        <CornerAccents />
        <p
          style={{
            fontFamily: 'var(--font-cinzel), serif',
            fontSize: '10px',
            letterSpacing: '0.22em',
            color: '#9a7ab8',
            textTransform: 'uppercase',
            marginBottom: '0.8rem',
          }}
        >
          Dear Guest
        </p>
        <p
          style={{
            fontFamily: 'var(--font-im-fell), serif',
            fontStyle: 'italic',
            fontSize: '14px',
            color: '#5a3a7a',
            lineHeight: 1.9,
          }}
        >
          Optional as it is, your presence is your gift. But if you&apos;d like
          to give something, this list is here as a gentle guide. Anything from
          it — big or small — would truly be treasured.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontStyle: 'italic',
            fontSize: '18px',
            fontWeight: 300,
            color: '#9a7ab8',
            marginTop: '1.2rem',
          }}
        >
          — with love, Yan
        </p>
      </motion.div>

      {/* decorative bottom rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{
          maxWidth: '520px',
          margin: '3rem auto 0',
          height: '1px',
          background:
            'linear-gradient(to right, transparent, #c9b8d8 30%, #c9b8d8 70%, transparent)',
          transformOrigin: 'center',
        }}
      />
    </section>
  );
}
