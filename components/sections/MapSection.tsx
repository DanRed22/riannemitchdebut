'use client';

import { motion } from 'framer-motion';
import GemDivider from '@/components/GemDivider';

export default function MapSection() {
  return (
    <section id="venue" style={{ padding: '6rem 1.5rem' }}>
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
          Where the Celebration Unfolds
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
          Venue
        </h2>
      </motion.div>

      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        {/* venue details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '2.5rem' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-im-fell), serif',
              fontStyle: 'italic',
              fontSize: '15px',
              textAlign: 'center',
              color: '#7a5a90',
              marginBottom: '0.2rem',
            }}
          >
            West Cebu Guest House
          </p>
          <p
            style={{
              fontFamily: 'var(--font-cinzel), serif',
              fontSize: '9px',
              letterSpacing: '0.15em',
              color: '#b09ac8',
              marginBottom: '0.4rem',
            }}
          >
            FORMERLY KNOWN AS
          </p>
          <p
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontStyle: 'italic',
              fontSize: '38px',
              fontWeight: 300,
              color: '#2d1545',
              lineHeight: 1.1,
            }}
          >
            Elron Hotel
          </p>
          <p
            style={{
              fontFamily: 'var(--font-cinzel), serif',
              fontSize: '10px',
              letterSpacing: '0.22em',
              color: '#7a5a90',
              textTransform: 'uppercase',
              marginTop: '0.4rem',
            }}
          >
            Aliwanay, Balamban, Cebu
          </p>
        </motion.div>

        {/* venue photo with motif overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            marginBottom: '1.5rem',
            overflow: 'hidden',
            border: '1px solid #ddd0ee',
            position: 'relative',
          }}
        >
          {/* photo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://i.ibb.co/W4w4Dskh/unnamed.webp"
            alt="West Cebu Guesthouse"
            style={{
              width: '100%',
              height: '280px',
              objectFit: 'cover',
              display: 'block',
            }}
          />

          {/* purple gradient wash */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(160deg, rgba(74,32,128,0.18) 0%, rgba(112,64,168,0.08) 50%, rgba(45,21,69,0.22) 100%)',
              pointerEvents: 'none',
            }}
          />

          {/* corner motif images */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/corner_elements/TL.png"
            alt=""
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 80,
              height: 80,
              opacity: 0.6,
              pointerEvents: 'none',
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/corner_elements/TR.png"
            alt=""
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: 80,
              height: 80,
              opacity: 0.6,
              pointerEvents: 'none',
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/corner_elements/BL.png"
            alt=""
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: 80,
              height: 80,
              opacity: 0.6,
              pointerEvents: 'none',
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/corner_elements/BR.png"
            alt=""
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: 80,
              height: 80,
              opacity: 0.6,
              pointerEvents: 'none',
            }}
          />

          {/* center venue name overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-cinzel), serif',
                fontSize: '10px',
                letterSpacing: '0.22em',
                color: 'rgba(255,255,255,0.75)',
                textTransform: 'uppercase',
                marginBottom: '0.3rem',
              }}
            >
              Venue
            </p>
            <p
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontStyle: 'italic',
                fontSize: '32px',
                fontWeight: 300,
                color: '#ffffff',
                lineHeight: 1.1,
                textShadow: '0 2px 12px rgba(45,21,69, 0.8)',
              }}
            >
              {`West Cebu Guest House (formerly Elron Hotel)`}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-cinzel), serif',
                fontSize: '9px',
                letterSpacing: '0.2em',
                color: 'rgba(255,255,255,0.65)',
                textTransform: 'uppercase',
                marginTop: '0.3rem',
              }}
            >
              Aliwanay, Balamban, Cebu
            </p>
          </div>
        </motion.div>

        {/* map embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            border: '1px solid #ddd0ee',
            overflow: 'hidden',
            boxShadow: '0 4px 30px rgba(112,64,168,0.08)',
          }}
        >
          <iframe
            title="Venue Map"
            src="https://maps.google.com/maps?q=10.4981419,123.7152786&output=embed&z=19"
            width="100%"
            height="420"
            style={{
              display: 'block',
              border: 'none',
              filter: 'grayscale(20%) contrast(0.95)',
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* date reminder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            textAlign: 'center',
            marginTop: '2.5rem',
            padding: '1.5rem',
            borderTop: '1px solid #ede5f8',
            borderBottom: '1px solid #ede5f8',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-cinzel), serif',
              fontSize: '12px',
              letterSpacing: '0.18em',
              color: '#7040a8',
              textTransform: 'uppercase',
            }}
          >
            April 17, 2026 &nbsp;·&nbsp; 4:30 PM – 8:00 PM
          </p>
        </motion.div>

        {/* closing note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            fontFamily: 'var(--font-im-fell), serif',
            fontStyle: 'italic',
            fontSize: '15px',
            color: '#9a7ab8',
            textAlign: 'center',
            marginTop: '2rem',
            lineHeight: 1.9,
          }}
        >
          We look forward to celebrating this beautiful evening with you.
        </motion.p>

        {/* closing gem row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '2rem',
            alignItems: 'center',
          }}
        >
          <div
            style={{ height: '0.5px', width: '40px', background: '#c9b8d8' }}
          />
          <div
            style={{
              width: '5px',
              height: '5px',
              background: '#7a4fa8',
              transform: 'rotate(45deg)',
              opacity: 0.5,
            }}
          />
          <div
            style={{
              width: '8px',
              height: '8px',
              background: '#7040a8',
              transform: 'rotate(45deg)',
              opacity: 0.6,
            }}
          />
          <div
            style={{
              width: '5px',
              height: '5px',
              background: '#7a4fa8',
              transform: 'rotate(45deg)',
              opacity: 0.5,
            }}
          />
          <div
            style={{ height: '0.5px', width: '40px', background: '#c9b8d8' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
