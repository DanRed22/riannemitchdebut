import type { Metadata } from "next";
import { Cormorant_Garamond, Cinzel, IM_Fell_English } from "next/font/google";
import BackgroundLayer from "@/components/BackgroundLayer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-cinzel",
  display: "swap",
});

const imFell = IM_Fell_English({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-im-fell",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rianne Mitch — Masquerade Debut",
  description:
    "You are cordially invited to Rianne Mitch's Masquerade Debut on April 17, 2026",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${cinzel.variable} ${imFell.variable}`}
    >
      <body>
        <BackgroundLayer />
        {children}
      </body>
    </html>
  );
}
