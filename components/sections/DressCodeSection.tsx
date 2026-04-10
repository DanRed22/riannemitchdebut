'use client';

import { motion } from 'framer-motion';
import GemDivider from '@/components/GemDivider';

export default function DressCodeSection() {
  return (
    <section id="dresscode" style={{ padding: '6rem 1.5rem' }}>
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
          Attire
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
          Dress Code
        </h2>
      </motion.div>

      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        {/* motif name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            border: '1px solid #ddd0ee',
            padding: '2rem 2.5rem',
            background: '#ffffff',
            marginBottom: '2.5rem',
            position: 'relative',
          }}
        >
          {/* corner accents */}
          {[
            'top-0 left-0',
            'top-0 right-0',
            'bottom-0 left-0',
            'bottom-0 right-0',
          ].map((pos, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                [pos.includes('top') ? 'top' : 'bottom']: '-4px',
                [pos.includes('left') ? 'left' : 'right']: '-4px',
                width: '8px',
                height: '8px',
                background: '#7040a8',
                transform: 'rotate(45deg)',
                opacity: 0.4,
              }}
            />
          ))}

          <p
            style={{
              fontFamily: 'var(--font-cinzel), serif',
              fontSize: '10px',
              letterSpacing: '0.22em',
              color: '#9a7ab8',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
            }}
          >
            Motif
          </p>
          <p
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontStyle: 'italic',
              fontSize: '36px',
              fontWeight: 300,
              lineHeight: 1.15,
            }}
          >
            {'Shining Shimmering'.split('').map((char, i, arr) => (
              <span
                key={i}
                className="name-glow"
                style={{
                  animationDelay: `${(i / arr.length) * 1.6}s`,
                  animationDuration: '3.5s',
                  display: char === ' ' ? 'inline' : 'inline-block',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-im-fell), serif',
              fontStyle: 'italic',
              fontSize: '13px',
              color: '#9a7ab8',
              marginTop: '0.5rem',
            }}
          >
            Masquerade mask is optional
          </p>
        </motion.div>

        {/* color palette */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ textAlign: 'center' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-cinzel), serif',
              fontSize: '10px',
              letterSpacing: '0.22em',
              color: '#9a7ab8',
              textTransform: 'uppercase',
              marginBottom: '1.2rem',
            }}
          >
            Color Palette
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/color_pallete.png"
            alt="Color Palette"
            style={{
              display: 'block',
              width: '100%',
              maxWidth: '480px',
              height: 'auto',
              opacity: 0.92,
              margin: '0 auto',
            }}
          />
        </motion.div>

        {/* note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            fontFamily: 'var(--font-im-fell), serif',
            fontStyle: 'italic',
            fontSize: '1rem',
            color: '#b09ac8',
            marginTop: '2.5rem',
            lineHeight: 1.8,
            letterSpacing: '0.02em',
          }}
        >
          Guests are encouraged to dress in the motif colors.
          <br />
          Formal attire is kindly requested.
        </motion.p>
      </div>
    </section>
  );
}
