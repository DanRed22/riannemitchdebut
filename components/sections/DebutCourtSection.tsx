'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GemDivider from '@/components/GemDivider';

const roses = [
  { number: 1, name: 'Joseph Bendebel' },
  { number: 2, name: 'Joselito Banate' },
  { number: 3, name: 'Zane Joseph Bendebel' },
  { number: 4, name: 'Rolando Junior Bendebel' },
  { number: 5, name: 'Kent Bendebel' },
  { number: 6, name: 'Orwel Nipaya' },
  { number: 7, name: 'Roy Naethan Cereño' },
  { number: 8, name: 'Aldric Enurables' },
  { number: 9, name: 'Angelus Cereño' },
  { number: 10, name: 'Ryle Salvador' },
  { number: 11, name: 'Steven Salvador' },
  { number: 12, name: 'Chris Kobe Benito' },
  { number: 13, name: 'Jekh Xander Cabatos' },
  { number: 14, name: 'Reez Ryan Climaco' },
  { number: 15, name: 'Alfonso Miguel Formoso' },
  { number: 16, name: 'Dane Reeve Patino' },
  { number: 17, name: 'John Michael Peñas' },
  { number: 18, name: 'Angelou B. Sereño' },
];

const candles = [
  { number: 1, name: 'Chinkee Venice Bayno' },
  { number: 2, name: 'Jamaica Pearl Bendebel' },
  { number: 3, name: 'Allyssa Cereño' },
  { number: 4, name: 'Donna Kimberly Bayno' },
  { number: 5, name: 'Bebilona Siembra' },
  { number: 6, name: 'Precious Angel Bendebel' },
  { number: 7, name: 'Glaiza Jaye Cereño' },
  { number: 8, name: 'Athena Kristia Agua' },
  { number: 9, name: 'Princess Daffodel Buhion' },
  { number: 10, name: 'Triesha Lauronal' },
  { number: 11, name: 'Suzanne Nichole Pasco' },
  { number: 12, name: 'Daniellah Candice Tipdas' },
  { number: 13, name: 'Querl Mabini' },
  { number: 14, name: 'Andrea Glenn Kaese Margaja' },
  { number: 15, name: 'Ruffia Annie Clarin' },
  { number: 16, name: 'Athena Leigh Betito' },
  { number: 17, name: 'Mary Alexi Quibilan' },
  { number: 18, name: 'Chelsea Romagos' },
];

const blueBills = [
  { number: 1, name: 'Wivelyn Bayno' },
  { number: 2, name: 'Jonabel Bendebel' },
  { number: 3, name: 'Rosie Obeso' },
  { number: 4, name: 'Rosalie Cereño' },
  { number: 5, name: 'Lilian Siembra' },
  { number: 6, name: 'Irish Bendebel' },
  { number: 7, name: 'Joselito Banate' },
  { number: 8, name: 'Lady Shane Nemenzo' },
  { number: 9, name: 'Cyra Joriel Bustamante' },
  { number: 10, name: 'Rhea Christy Cereño' },
  { number: 11, name: 'Lucelle Agua' },
  { number: 12, name: 'Kharen Cabatos' },
  { number: 13, name: 'Jesilyn Climaco' },
  { number: 14, name: 'Thyssen Recla' },
  { number: 15, name: 'Angelou Sereño' },
  { number: 16, name: 'Jamaica Pearl Bendebel' },
  { number: 17, name: 'Chinkee Venice Bayno' },
  { number: 18, name: 'Donna Kimberly Bayno' },
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
  members: { number: number; name: string }[];
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
          All of the debutante’s batchmates bringing gifts
          <br /> will be asked to line up and share a short message.
          <br /> And for those who also wish to share, they may also line up.
          <br />
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
