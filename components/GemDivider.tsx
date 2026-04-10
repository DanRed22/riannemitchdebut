'use client';

import { motion } from 'framer-motion';

export default function GemDivider() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        justifyContent: 'center',
        marginBottom: '1rem',
      }}
    >
      {/* left line — draws in from right */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          height: '0.5px',
          width: '50px',
          background: '#b09ac8',
          transformOrigin: 'right',
        }}
      />

      {/* gem — entrance wrapper */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        style={{ flexShrink: 0 }}
      >
        {/* pulse loop */}
        <motion.div
          animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.3, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '7px',
            height: '7px',
            background: '#7a4fa8',
            transform: 'rotate(45deg)',
          }}
        />
      </motion.div>

      {/* right line — draws in from left */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          height: '0.5px',
          width: '50px',
          background: '#b09ac8',
          transformOrigin: 'left',
        }}
      />
    </div>
  );
}
