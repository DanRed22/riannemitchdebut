"use client";

import { motion } from "framer-motion";
import GemDivider from "@/components/GemDivider";

const events = [
  { time: "4:30 PM", title: "Cocktail Hour",              desc: "Guest arrival & welcome drinks" },
  { time: "5:00 PM", title: "Grand Entrance",              desc: "The debutante makes her entrance" },
  { time: "5:10 PM", title: "18 Roses",                    desc: "The ceremony of eighteen roses" },
  { time: "5:35 PM", title: "18 Candles",                  desc: "The ceremony of eighteen candles" },
  { time: "5:55 PM", title: "18 Blue Bills",               desc: "Blessings and abundance for the debutante's journey ahead" },
  { time: "6:15 PM", title: "Cotillion de Honor",          desc: "The grand debut waltz" },
  { time: "6:50 PM", title: "Dinner is Served",            desc: "A celebration feast" },
  { time: "7:05 PM", title: "🗝️ Surprise Quiz",           desc: "How well do you know the debutante? Guests take the hot seat!" },
  { time: "7:20 PM", title: "Singing Performance",         desc: "A special song from the heart — performed by the celebrant herself" },
  { time: "7:30 PM", title: "🗝️ Treasures",              desc: "Guests bearing gifts share a single word describing their present" },
  { time: "7:45 PM", title: "Toast & Messages",            desc: "Heartfelt words for the debutante" },
  { time: "8:00 PM", title: "Grand Finale",                desc: "End of a magical evening" },
];


export default function ProgramSection() {
  return (
    <section
      id="program"
      style={{ padding: "6rem 1.5rem", position: "relative", overflow: "hidden" }}
    >
      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: "4rem" }}
      >
        <GemDivider />
        <p style={{ fontFamily: "var(--font-cinzel), serif", fontSize: "10.5px", letterSpacing: "0.22em", color: "#9a7ab8", textTransform: "uppercase", marginBottom: "0.6rem" }}>
          The Evening
        </p>
        <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "52px", fontWeight: 300, color: "#1a0d2e", lineHeight: 1.1 }}>
          Program
        </h2>
      </motion.div>

      {/* timeline */}
      <div style={{ maxWidth: "680px", margin: "0 auto", position: "relative" }}>
        {/* vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: "calc(50% - 0.5px)",
            top: 0,
            bottom: 0,
            width: "1px",
            background: "linear-gradient(to bottom, transparent, #c9b8d8 10%, #c9b8d8 90%, transparent)",
            transformOrigin: "top",
          }}
        />

        {events.map((event, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: "flex",
                justifyContent: isLeft ? "flex-end" : "flex-start",
                paddingRight: isLeft ? "calc(50% + 28px)" : 0,
                paddingLeft:  isLeft ? 0 : "calc(50% + 28px)",
                marginBottom: "2.2rem",
                position: "relative",
              }}
            >
              {/* center dot */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "10px",
                  height: "10px",
                  background: "#7040a8",
                  borderRadius: "50%",
                  border: "2px solid #ffffff",
                  boxShadow: "0 0 0 1.5px #c9b8d8",
                }}
              />

              {/* card */}
              <div
                style={{
                  background: "#fdfbff",
                  border: "1px solid #ede5f8",
                  padding: "0.85rem 1.2rem",
                  maxWidth: "220px",
                  width: "100%",
                  textAlign: isLeft ? "right" : "left",
                }}
              >
                <p style={{ fontFamily: "var(--font-cinzel), serif", fontSize: "9.5px", letterSpacing: "0.15em", color: "#9a7ab8", marginBottom: "0.25rem", textTransform: "uppercase" }}>
                  {event.time}
                </p>
                <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "21px", fontWeight: 300, color: "#2d1545", lineHeight: 1.15 }}>
                  {event.title}
                </p>
                <p style={{ fontFamily: "var(--font-im-fell), serif", fontStyle: "italic", fontSize: "12px", color: "#7a5a90", marginTop: "0.2rem", lineHeight: 1.5 }}>
                  {event.desc}
                </p>
              </div>
            </motion.div>
          );
        })}

        {/* end diamond */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{ display: "flex", justifyContent: "center", marginTop: "0.5rem" }}
        >
          <div style={{ width: "10px", height: "10px", background: "#7040a8", transform: "rotate(45deg)", opacity: 0.6 }} />
        </motion.div>
      </div>
    </section>
  );
}
