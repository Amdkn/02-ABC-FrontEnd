/**
 * ABC Childcare Portal — Design Tokens
 *
 * Centralized source of truth for color, typography, spacing, radius and
 * motion values. Mirrors the COLORS palette in the legacy prototype
 * (`_legacy/prototype-2026-06-07/screens.jsx`) plus tokens from `landing.jsx`,
 * `ios-frame.jsx`. Components should reference tokens from this file rather
 * than hardcoding hex/rgb values.
 */

export const COLORS = {
  bg: '#121110',
  bgAlt: '#181614',
  card: '#221f1c',
  cardHi: '#2a2622',
  line: 'rgba(245,242,235,0.08)',
  text: '#f5f2eb',
  textMute: '#a89c8a',
  textDim: '#6b6258',
  green: '#10b981',
  greenDeep: '#059669',
  terracotta: '#e15f41',
  terracottaDeep: '#d95436',
  blue: '#5b8bb7',
} as const;

export const colors = {
  ...COLORS,
  textSoft: '#cfc4b3',
  textMid: '#d8cdbb',
  gold: '#d4b042',
  pink: '#c47a96',
} as const;

export type ColorToken = keyof typeof colors;

export const typography = {
  sans: 'var(--font-manrope), -apple-system, "Segoe UI", system-ui, sans-serif',
  serif: 'var(--font-instrument-serif), "Iowan Old Style", Georgia, serif',
  mono: 'var(--font-geist-mono), ui-monospace, SFMono-Regular, monospace',
  size: {
    eyebrow: '11px',
    micro: '10.5px',
    body: '15px',
    bodyLg: '16px',
    h3: '36px',
    h2: '52px',
    h1: '78px',
    display: '120px',
  },
  weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  letterSpacing: {
    tight: '-0.02em',
    snug: '-0.015em',
    wide: '0.18em',
    ultraWide: '0.24em',
    eyebrow: '0.28em',
  },
  leading: {
    tight: '0.94',
    snug: '1.0',
    normal: '1.5',
    relaxed: '1.55',
  },
} as const;

export const spacing = {
  pageX: 'clamp(1rem, 0.5rem + 2vw, 1.5rem)',
  pageMax: '1200px',
  sectionY: 'clamp(4rem, 3rem + 4vw, 6rem)',
  cardPad: 'clamp(1.5rem, 1rem + 1.5vw, 2.5rem)',
  radius: {
    sm: '14px',
    md: '20px',
    lg: '28px',
    xl: '36px',
    pill: '9999px',
  },
} as const;

export const motion = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
  ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
  marqueeDuration: '35s',
  pulseGlow: '2.4s ease-out infinite',
  float: '6s ease-in-out infinite',
} as const;

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1440,
} as const;

export const layers = {
  base: 0,
  decor: 1,
  content: 2,
  nav: 40,
  navSticky: 50,
  overlay: 80,
  modal: 100,
} as const;

export const palette = {
  pillar: {
    community: colors.terracotta,
    learn: colors.green,
    build: colors.gold,
    brand: colors.pink,
  },
} as const;
