import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";

// Display face — used for headlines and the logotype. Geometric and
// confident, kept out of body copy so it stays a deliberate accent.
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

// Body face — everything you actually read.
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

// Utility face — small data labels, stats, and eyebrows (FEDERAL / STATE / LGA,
// "36+1", "774"). Nods to the register of official civic documents.
export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});
