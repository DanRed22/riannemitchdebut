'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Reusable staggered fade-up wrapper
function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Gem({ size = 8, opacity = 0.7 }: { size?: number; opacity?: number }) {
  return (
    <div
      className="bg-[#7a4fa8] rotate-45 shrink-0"
      style={{ width: size, height: size, opacity }}
    />
  );
}

function DivLine({ width = 60 }: { width?: number }) {
  return <div className="h-px bg-[#b09ac8]" style={{ width }} />;
}

function DividerRow() {
  return (
    <div className="flex items-center gap-[10px] my-1.5 w-full justify-center">
      <DivLine />
      <Gem />
      <DivLine />
    </div>
  );
}

export default function InvitationSection() {
  return (
    <section
      id="invitation"
      className="min-h-screen flex items-center justify-center px-6 pt-20 pb-12"
    >
      {/* card entrance */}
      <motion.div
        className="relative w-[90vw] md:w-[80vw] min-h-[820px] overflow-hidden flex flex-col items-center px-10 md:px-20 pt-10 pb-8 border border-[#c9b8d8]"
        style={{
          background:
            'linear-gradient(160deg, rgba(255,255,255,0.55) 0%, rgba(253,251,255,0.45) 50%, rgba(249,245,253,0.5) 100%)',
          boxShadow:
            '0 4px 40px rgba(112,64,168,0.08), 0 1px 8px rgba(112,64,168,0.06)',
        }}
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* baroque corner images */}
        {[
          { src: '/images/corner_elements/TL.png', cls: 'top-0 left-0' },
          { src: '/images/corner_elements/TR.png', cls: 'top-0 right-0' },
          { src: '/images/corner_elements/BL.png', cls: 'bottom-0 left-0' },
          { src: '/images/corner_elements/BR.png', cls: 'bottom-0 right-0' },
        ].map(({ src, cls }) => (
          <Image
            key={src}
            src={src}
            alt=""
            width={110}
            height={110}
            className={`absolute ${cls} w-[110px] h-[110px] opacity-[0.72] pointer-events-none`}
          />
        ))}

        {/* top diamond */}
        <FadeUp delay={0.3}>
          <svg
            className="mt-0.5 mb-1.5"
            width="40"
            height="20"
            viewBox="0 0 40 20"
          >
            <path
              d="M20 2 L38 10 L20 18 L2 10Z"
              fill="none"
              stroke="#7040a8"
              strokeWidth="0.8"
              opacity="0.7"
            />
            <rect
              x="17"
              y="7"
              width="6"
              height="6"
              fill="#4a2080"
              transform="rotate(45 20 10)"
              opacity="0.7"
            />
          </svg>
        </FadeUp>

        {/* mask — entrance → float → hover (three separate layers) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* float layer — only animates y */}
          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
              delay: 1.4,
            }}
          >
            <motion.img
              src="/images/mask_transparent.png"
              alt="Masquerade Mask"
              className="w-[200px] h-auto my-2 mb-4 cursor-pointer"
              style={{ opacity: 0.88 }}
              whileHover={{
                scale: 1.1,
                rotate: 4,
                opacity: 1,
                filter: 'drop-shadow(0 6px 22px rgba(112,64,168,0.55))',
                transition: { duration: 0.2, ease: 'easeOut' },
              }}
            />
          </motion.div>
        </motion.div>

        {/* cordially text */}
        <FadeUp delay={0.6} className="flex flex-col items-center">
          <p
            className="text-[15px] text-[#5a4068] text-center leading-[1.7] tracking-[0.01em] mb-0.5 italic"
            style={{ fontFamily: 'var(--font-im-fell), serif' }}
          >
            You are cordially invited to a
          </p>
          <p
            className="text-[21px] text-[#3d2459] text-center mb-0.5 italic"
            style={{ fontFamily: 'var(--font-im-fell), serif' }}
          >
            Masquerade Debut
          </p>
          <p
            className="text-[15px] text-[#5a4068] text-center leading-[1.7] tracking-[0.01em] mt-0.5 italic"
            style={{ fontFamily: 'var(--font-im-fell), serif' }}
          >
            In honor of
          </p>
        </FadeUp>

        {/* name — letter-by-letter glow wave */}
        <FadeUp delay={0.8}>
          <div
            className="text-[58px] font-light text-center leading-[1.05] tracking-[-0.01em] mt-1 mb-3 italic text-[#1a0d2e]"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            {(() => {
              const fullName = 'Rianne Mitch Sereño';
              const chars = fullName.split('');
              const totalChars = chars.length;
              let charIndex = 0;
              return fullName.split(' ').map((word, wordIdx, words) => (
                <span key={wordIdx} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                  {word.split('').map((char) => {
                    const i = charIndex++;
                    return (
                      <span
                        key={i}
                        className="name-glow"
                        style={{
                          animationDelay: `${(i / totalChars) * 1.6}s`,
                          animationDuration: '3.5s',
                          display: 'inline-block',
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}
                  {wordIdx < words.length - 1 && (
                    <span style={{ display: 'inline-block' }}>&nbsp;</span>
                  )}
                </span>
              ));
            })()}
          </div>
        </FadeUp>

        {/* divider + date */}
        <FadeUp delay={0.95} className="w-full flex flex-col items-center">
          <DividerRow />
          <p
            className="text-[13.5px] tracking-[0.12em] text-[#3d2459] text-center my-0.5"
            style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            April 17, 2026
          </p>
          <p
            className="text-[13.5px] tracking-[0.12em] text-[#3d2459] text-center my-0.5"
            style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            4:30 P.M. – 8:00 P.M.
          </p>
        </FadeUp>

        {/* venue */}
        <FadeUp delay={1.1} className="flex flex-col items-center w-full">
          <div className="flex items-center gap-[10px] mt-3 mb-1.5 w-full justify-center">
            <DivLine width={40} />
            <Gem size={5} opacity={0.4} />
            <DivLine width={40} />
          </div>
          <p
            className="text-[11px] tracking-[0.18em] text-[#9a7ab8] text-center mt-3 mb-0.5 uppercase"
            style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            Venue
          </p>
          <p
            className="text-[13px] text-[#5a4068] text-center leading-[1.7] italic mb-0"
            style={{ fontFamily: 'var(--font-im-fell), serif' }}
          >
            West Cebu Guest House
          </p>
          <p
            className="text-[10px] tracking-[0.15em] text-[#9a7ab8] text-center mt-0.5"
            style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            Formerly known as...
          </p>
          <p
            className="text-[38px] font-light text-[#2d1545] text-center leading-[1.1] my-0.5 tracking-[0.04em] italic"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            Elron Hotel
          </p>
          <p
            className="text-[10.5px] tracking-[0.22em] text-[#5a3d75] text-center mt-0.5 uppercase"
            style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            Aliwanay, Balamban, Cebu
          </p>
        </FadeUp>

        {/* motif + swatches */}
        <FadeUp delay={1.25} className="flex flex-col items-center w-full">
          <div className="flex items-center gap-[10px] mt-3.5 mb-1.5 w-full justify-center">
            <DivLine />
            <Gem />
            <DivLine />
          </div>
          <p
            className="text-[12.5px] text-[#7a5a90] text-center mt-4 mb-2 italic tracking-[0.04em]"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            Motif: Shining Shimmering
            <br />
            <span className="text-[11px] tracking-[0.08em]">
              (masquerade mask is optional)
            </span>
          </p>
          <img
            src="/images/color_pallete.png"
            alt="Color Palette"
            className="mt-1 w-[160px] h-auto opacity-90"
          />
        </FadeUp>

        {/* personal invite note */}
        <FadeUp delay={1.35} className="flex flex-col items-center w-full mt-4">
          <div className="flex items-center gap-[8px] mb-2 w-full justify-center">
            <DivLine width={30} />
            <Gem size={4} opacity={0.3} />
            <DivLine width={30} />
          </div>
          <p
            className="text-[11px] text-[#9a7ab8] text-center leading-[1.75] italic tracking-[0.03em]"
            style={{ fontFamily: 'var(--font-im-fell), serif' }}
          >
            Invitations are personally given
            <br />
            by the celebrant and her organizers.
          </p>
        </FadeUp>

        {/* side gems */}
        {['left-3', 'right-3'].map((side) => (
          <div
            key={side}
            className={`absolute top-1/2 -translate-y-1/2 flex flex-col gap-[14px] opacity-50 ${side}`}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-[6px] h-[6px] bg-[#7040a8] rotate-45"
                animate={{ opacity: [0.5, 0.15, 0.5] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.4,
                }}
              />
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
