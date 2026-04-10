'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GemDivider from '@/components/GemDivider';

const roses = [
  { number: 1, name: 'Tatay Lito', nickname: 'Tatay Lito' },
  { number: 2, name: '-----', nickname: '-------' },
  { number: 3, name: 'Junior Bendebel', nickname: 'Uncle Junior' },
  { number: 4, name: 'Joseph Bendebel', nickname: 'Uncle Joseph' },
  { number: 5, name: 'Christian Dave Bendebel', nickname: 'Kuya Christian' },
  { number: 6, name: 'Kent Aldrich Bendebel', nickname: 'Kuya Kent' },
  { number: 7, name: 'John Mark Bendebel', nickname: 'Dodong' },
  { number: 8, name: 'Zane Joseph Bendebel', nickname: 'Zane' },
  { number: 9, name: 'Alfonso Miguel Formoso', nickname: 'Fonzie' },
  { number: 10, name: 'Jekh Xander Cabatos', nickname: 'Xan' },
  { number: 11, name: 'Reez Ryan Climaco', nickname: 'Reez' },
  { number: 12, name: 'Dane Reeve Patino', nickname: 'Dane' },
  { number: 13, name: 'Ethan Santino Navarro', nickname: 'Ethan' },
  { number: 14, name: 'John Michael Peñas', nickname: 'Mike' },
  { number: 15, name: 'Zabrielle Roy Cereño', nickname: 'Zab' },
  { number: 16, name: 'Roy Naethan Cereño', nickname: 'Roy' },
  { number: 17, name: 'Angelou B. Sereño', nickname: 'Gelou' },
  { number: 18, name: 'Adrian B. Sereño', nickname: 'Adrian' },
];

const candles = [
  { number: 1, name: 'Chinkee Venice Bayno', nickname: 'Ching' },
  { number: 2, name: 'Jamaica Pearl Bendebel', nickname: 'Jam' },
  { number: 3, name: 'Allysa Cereño', nickname: 'Lai' },
  { number: 4, name: 'Donna Kimberly Bayno', nickname: 'Kim' },
  { number: 5, name: 'Bebilona Siembra', nickname: 'Luna' },
  { number: 6, name: 'Precious Angel Bendebel', nickname: 'Angel' },
  { number: 7, name: 'Glaiza Jaye Cereño', nickname: 'Glai' },
  { number: 8, name: 'Athena Kristia Agua', nickname: 'Tina' },
  { number: 9, name: 'Princess Daffodel Buhion', nickname: 'Daff' },
  { number: 10, name: 'Suzanne Nichole Pasco', nickname: 'Zane' },
  { number: 11, name: 'Triesha Lauronal', nickname: 'Triesh' },
  { number: 12, name: 'Andrea Glenn Kaese Margaja', nickname: 'Andy' },
  { number: 13, name: 'Querl Mabini', nickname: 'Kerl' },
  { number: 14, name: 'Daniellah Candice Tipdas', nickname: 'Dan' },
  { number: 15, name: 'Ruffia Annie Clarin', nickname: 'Fia' },
  { number: 16, name: 'Chelsea Romagos', nickname: 'Chels' },
  { number: 17, name: 'Athena Leigh Betito', nickname: 'Tina' },
  { number: 18, name: 'Mary Alexi Quibilan', nickname: 'Mer' },
];

const blueBills = [
  { number: 1, name: 'Wivelyn Bayno', nickname: '' },
  { number: 2, name: 'Jonabel Bendebel', nickname: '' },
  { number: 3, name: 'Rosa Obeso', nickname: '' },
  { number: 4, name: 'Rosalie Cereño', nickname: '' },
  { number: 5, name: 'Lilian Siembra', nickname: '' },
  { number: 6, name: 'Irish Bendebel', nickname: '' },
  { number: 7, name: 'Joselito Banate', nickname: '' },
  { number: 8, name: 'Lady Shane Nemezo', nickname: '' },
  { number: 9, name: 'CJ Bustamante', nickname: '' },
  { number: 10, name: 'Rhea Christy Cereño', nickname: '' },
  { number: 11, name: 'Lucelle Agua', nickname: '' },
  { number: 12, name: 'Kharen Cabatos', nickname: '' },
  { number: 13, name: 'Jesilyn Climaco', nickname: '' },
  { number: 14, name: 'Thyssen Recla', nickname: '' },
  { number: 15, name: 'Angelou Sereño', nickname: '' },
  { number: 16, name: 'Jamaica Pearl Bendebel', nickname: '' },
  { number: 17, name: 'Chinkee Venice Bayno', nickname: '' },
  { number: 18, name: 'Donna Kimberly Bayno', nickname: '' },
];

type Tab = 'roses' | 'candles' | 'bluebills';

const tabs: { key: Tab; label: string }[] = [
  { key: 'roses', label: '18 Roses' },
  { key: 'candles', label: '18 Candles' },
  { key: 'bluebills', label: '18 Blue Bills' },
];

function CourtGrid({
  members,
}: {
  members: { number: number; name: string; nickname: string }[];
}) {
  return (
    <motion.div
      key="grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '0.75rem',
        maxWidth: '680px',
        margin: '0 auto',
      }}
    >
      {members.map((m, i) => (
        <motion.div
          key={m.number}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.35,
            delay: i * 0.03,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            border: '1px solid #ede5f8',
            background: '#ffffff',
            padding: '0.85rem 0.75rem',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-cinzel), serif',
              fontSize: '9px',
              letterSpacing: '0.2em',
              color: '#c9b8d8',
              marginBottom: '0.25rem',
            }}
          >
            {String(m.number).padStart(2, '0')}
          </p>
          {m.nickname ? (
            <>
              <p
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontStyle: 'italic',
                  fontSize: '20px',
                  fontWeight: 300,
                  color: '#2d1545',
                  lineHeight: 1.15,
                }}
              >
                {m.nickname}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-cinzel), serif',
                  fontSize: '8px',
                  letterSpacing: '0.1em',
                  color: '#9a7ab8',
                  marginTop: '0.2rem',
                  lineHeight: 1.4,
                }}
              >
                {m.name}
              </p>
            </>
          ) : (
            <p
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontStyle: 'italic',
                fontSize: '17px',
                fontWeight: 300,
                color: '#2d1545',
                lineHeight: 1.2,
              }}
            >
              {m.name}
            </p>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function DebutCourtSection() {
  const [active, setActive] = useState<Tab>('roses');

  const data =
    active === 'roses' ? roses : active === 'candles' ? candles : blueBills;

  return (
    <section id="court" style={{ padding: '6rem 1.5rem' }}>
      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '3rem' }}
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
          The Celebration
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
          Debut Court
        </h2>
      </motion.div>

      {/* tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '680px',
          margin: '0 auto 2.5rem',
        }}
      >
        {tabs.map((t) => (
          <button
            key={t.key}
            className="font-bold"
            onClick={() => setActive(t.key)}
            style={{
              flex: 1,
              padding: '0.75rem 0.5rem',
              background: 'none',
              border: 'none',
              borderBottom:
                active === t.key ? '1.5px solid #7040a8' : '1px solid #e8dff5',
              cursor: 'pointer',
              fontFamily: 'var(--font-cinzel), serif',
              fontSize: '1rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: active === t.key ? '#7040a8' : '#9a7ab8',
              transition: 'color 0.2s, border-color 0.2s',
            }}
          >
            {t.label}
          </button>
        ))}
      </motion.div>

      {/* grid */}
      <AnimatePresence mode="wait">
        <CourtGrid key={active} members={data} />
      </AnimatePresence>

      {/* treasures note */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{
          maxWidth: '680px',
          margin: '3rem auto 0',
          border: '1px solid #ede5f8',
          padding: '1.5rem 2rem',
          textAlign: 'center',
          background: '#fdfbff',
          position: 'relative',
        }}
      >
        {/* corner gems */}
        {[
          ['top', 'left'],
          ['top', 'right'],
          ['bottom', 'left'],
          ['bottom', 'right'],
        ].map(([v, h], i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              [v]: '-3px',
              [h]: '-3px',
              width: 6,
              height: 6,
              background: '#7040a8',
              transform: 'rotate(45deg)',
              opacity: 0.35,
            }}
          />
        ))}
        <p
          style={{
            fontFamily: 'var(--font-cinzel), serif',
            fontSize: '9px',
            letterSpacing: '0.22em',
            color: '#9a7ab8',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
          }}
        >
          🗝️ Treasures
        </p>
        <p
          style={{
            fontFamily: 'var(--font-im-fell), serif',
            fontStyle: 'italic',
            fontSize: '14px',
            color: '#5a4068',
            lineHeight: 1.8,
          }}
        >
          All dear guests bringing gifts will be asked to line up
          <br />
          and share a short message describing their gift in one word.
        </p>
      </motion.div>

      {/* invite-only note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          fontFamily: 'var(--font-im-fell), serif',
          fontStyle: 'italic',
          fontSize: '13px',
          color: '#b09ac8',
          textAlign: 'center',
          marginTop: '2rem',
          letterSpacing: '0.04em',
        }}
      >
        This is a private, invitation-only event.
      </motion.p>
    </section>
  );
}
