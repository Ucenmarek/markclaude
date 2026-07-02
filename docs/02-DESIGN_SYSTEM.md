# markclaude.sk Design System

## 1. Farby

- background: `#09090B`
- surface: `#121317`
- surface-soft: `#17181D`
- border: `rgba(255,255,255,0.08)`
- orange: `#FF7A1A`
- text primary: `#FFFFFF`
- text secondary: `#9CA3AF`

## 2. Typografia

- Hlavné nadpisy: veľké, sebavedomé, `56-96px` desktop.
- Sekčné nadpisy: `40-64px` desktop.
- Text: `16-18px`.
- Line-height má byť vzdušný a čitateľný.
- Font: Inter alebo Sora.

## 3. Layout

- Max-width: `1200px` až `1280px`.
- Veľa priestoru.
- Section padding desktop: `120px 0`.
- Section padding mobile: `72px 0`.
- Žiadne preplnené sekcie.

## 4. Komponenty

Základné reusable komponenty:

- `Section.tsx`
- `Container.tsx`
- `SectionHeader.tsx`
- `Button.tsx`
- `Glow.tsx`
- `NoiseOverlay.tsx`

## 5. Pravidlá štýlu

- Žiadne generické gradientové karty.
- Oranžová iba ako akcent.
- Jemné bordery.
- Tmavé panely.
- Hover len decentný: glow, border, translateY max `4px`.
