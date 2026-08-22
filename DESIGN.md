---
name: Mainak Kumar Portfolio
description: The Research Terminal — a warm, editorial engineer's console in gold on ink-black.
colors:
  warm-gold: "#FBBE23"
  terminal-green: "#52D689"
  ink-black: "#070708"
  surface: "#0E0E10"
  surface-raised: "#1A1A1E"
  foreground: "#F3EFE7"
  muted-foreground: "#A9A59D"
  hairline: "#24242A"
  ink-on-gold: "#09090B"
  destructive: "#DE3B3B"
typography:
  display:
    fontFamily: "Space Grotesk, ui-sans-serif, sans-serif"
    fontSize: "clamp(1.875rem, 5vw, 3rem)"
    fontWeight: 700
    lineHeight: "1.05"
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Space Grotesk, ui-sans-serif, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)"
    fontWeight: 700
    lineHeight: "1.1"
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Space Grotesk, ui-sans-serif, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: "1.3"
    letterSpacing: "-0.01em"
  body:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.625rem"
    fontWeight: 500
    lineHeight: "1"
    letterSpacing: "0.2em"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: "1.5"
    letterSpacing: "normal"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  bezel-inner: "22px"
  bezel: "28px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "112px"
  section-lg: "144px"
components:
  button-primary:
    backgroundColor: "{colors.warm-gold}"
    textColor: "{colors.ink-on-gold}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "6px 6px 6px 24px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "6px 6px 6px 24px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.bezel-inner}"
    padding: "24px"
  chip:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.muted-foreground}"
    typography: "{typography.mono}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
  nav-pill:
    backgroundColor: "{colors.ink-black}"
    textColor: "{colors.muted-foreground}"
    typography: "{typography.mono}"
    rounded: "{rounded.pill}"
    padding: "6px 8px"
---

# Design System: Mainak Kumar Portfolio

## Overview

**Creative North Star: "The Research Terminal"**

This is an engineer's console reimagined as an editorial object. It borrows the vocabulary of a developer's terminal — a command prompt, a monospaced voice, a blinking cursor, a contribution graph — but treats that vocabulary with the calm, considered restraint of a print magazine rather than the loud theatrics of a "hacker" aesthetic. The result reads as the personal workstation of someone senior: precise, warm, and quietly confident. Warm Gold glows against Ink Black the way a good amber terminal once glowed against a dark room; everything else recedes so the content — the metrics, the systems, the work — carries the page.

Depth is handled as **soft ambient float**: cards are glass panels resting a few millimetres above the surface, held up by a wide, diffuse shadow and a single hairline of light along their top edge. Nothing is harsh; there are no hard black drop-shadows and no heavy chrome. Motion has real mass — a fluid, weighted easing that lets elements settle rather than snap. Components lean **warm and editorial**: generous padding, balanced headlines, comfortable reading measures, and pill-shaped controls that feel tactile without shouting.

The system deliberately rejects two neighbours. It is **not** the generic purple/blue SaaS gradient template with its symmetric three-column grids — the identity here is warm, monospaced, and asymmetric. And it is **not** the neon "matrix-rain" hacker cliché — the terminal motifs are a quiet organising metaphor, never a costume. Editorial calm is the tie-breaker in every decision.

**Key Characteristics:**
- Warm Gold as the single accent on Ink Black — rare, deliberate, luminous.
- A two-voice type system: Space Grotesk for human headlines, JetBrains Mono for the machine.
- Soft ambient float: glass panels, diffuse shadows, a hairline of top-light — never hard chrome.
- Terminal grammar (prompts, `cd ~/section` eyebrows, cursor) used with editorial restraint.
- Weighted, fluid motion; every claim anchored to a real number.

## Colors

A warm, low-key palette: a single amber accent and a supporting terminal green, floated on a near-black ground with warm-grey text. High contrast where it matters, quiet everywhere else.

### Primary
- **Warm Gold** (#FBBE23): The one accent. Used for primary CTAs, active navigation, key metrics, the `#` and prompt glyphs, badge outlines, and hover hairlines. Its scarcity is what makes it read as luxury rather than decoration.

### Secondary
- **Terminal Green** (#52D689): Reserved strictly for terminal/prompt glyphs (`$`), the traffic-light dot, "Live"/"Available" status pips, and the contribution-graph legend. It signals "system is live," never general emphasis.

### Neutral
- **Ink Black** (#070708): The page ground — a near-black with a faint cool cast. Also the text colour placed on Warm Gold.
- **Surface** (#0E0E10): The resting fill of glass cards (the inner core of a bezel), one step up from the ground.
- **Surface Raised** (#1A1A1E): Chips, inputs, and the raised inner fills that need to separate from a card.
- **Foreground** (#F3EFE7): Warm off-white for primary text and headlines — never pure white, to keep the page warm.
- **Muted Foreground** (#A9A59D): Warm grey for body copy, captions, metadata, and inactive nav.
- **Hairline** (#24242A): Borders and dividers; most often expressed as translucent white (`rgba(255,255,255,0.08–0.10)`) so it catches light rather than drawing a hard line.

### Named Rules
**The One-Gold Rule.** Warm Gold is the only accent and appears on ≤10% of any viewport. If a screen looks gold-heavy, demote something to Foreground or Muted. Terminal Green is not a second accent — it is a status colour with a narrow, literal job.

**The Warm-White Rule.** Text is never pure `#FFFFFF` and the ground is never pure `#000000`. Both carry a trace of warmth so the page feels lit, not printed.

## Typography

**Display Font:** Space Grotesk (with `ui-sans-serif, sans-serif` fallback)
**Body / Mono Font:** JetBrains Mono (with `ui-monospace, monospace` fallback)

**Character:** A geometric grotesk with just enough personality to feel designed, paired with a precise monospace that carries the terminal identity. Space Grotesk gives headlines a confident, slightly technical edge; JetBrains Mono makes labels, prompts, and metadata read as machine output. Headlines are tightened (`letter-spacing: -0.02em`) and balanced (`text-wrap: balance`).

### Hierarchy
- **Display** (700, `clamp(1.875rem, 5vw, 3rem)`, lh 1.05): The hero name inside the terminal. One per page.
- **Headline** (700, `clamp(1.875rem, 4vw, 2.25rem)`, lh 1.1): Section titles, preceded by a Mono `#`.
- **Title** (700, 1.125–1.25rem, lh 1.3): Card and role headings.
- **Body** (400, 0.9375rem, lh 1.6, JetBrains Mono): Paragraph copy and descriptions; keep the measure ≤ ~70ch with `text-wrap: pretty`.
- **Label** (500, 0.625rem, `letter-spacing: 0.2em`, UPPERCASE, Mono): Eyebrow tags and micro-labels.
- **Mono/meta** (400, 0.75rem, JetBrains Mono): Prompts, periods, tech chips, timestamps, terminal chrome.

### Named Rules
**The Two-Voice Rule.** Space Grotesk speaks for the human (headlines, prose); JetBrains Mono speaks for the machine (prompts, labels, metadata, code, chips). Never swap the roles — the tension between the two voices is the identity.

## Layout

A centred single-column reading spine, not a dashboard grid. Content sits in constrained containers (`max-w-3xl` for the hero and experience, `max-w-4xl`–`max-w-5xl` for wider sections) inside `px-4` gutters, so line-length and scan-rhythm stay controlled on every width.

Vertical rhythm is generous and editorial: sections breathe at `112px` (`py-28`) rising to `144px` (`py-36`) on desktop; headings clear the fixed nav via `scroll-mt-24`. Within sections, an **asymmetric bento** breaks monotony — the About stats are a 3/2 split of prose against a 2×2 metric grid; Projects lead with a full-width featured card then drop to a two-up; Skills are a responsive 1→2→3 column set of equal cards. Everything collapses to a single `w-full` column below `768px` with `gap-4`–`gap-6`. Full-height sections use `min-h-[100dvh]`, never `h-screen`.

## Elevation & Depth

The system is **soft ambient float**, not flat and not heavily shadowed. Every card is a glass panel lifted a few millimetres off the ground: a wide, low-opacity ambient shadow underneath implies the gap, and a 1px inset highlight along the top edge implies light catching glass. There are no hard, dark drop-shadows and no borders doing the depth work — light and diffusion do it. A faint gold radial mesh-glow behind the page and a film-grain overlay complete the "lit room" atmosphere.

### Shadow Vocabulary
- **Ambient card** (`box-shadow: inset 0 1px 1px rgba(255,255,255,0.08), 0 20px 40px -24px rgba(0,0,0,0.8)`): The default float for every glass panel — the inset highlight plus the diffuse lift.
- **Nav float** (`box-shadow: 0 8px 40px -12px rgba(0,0,0,0.7)`): The detached navigation pill hovering over content.
- **Hover lift** (`transform: translateY(-4px)` + `box-shadow: inset 0 0 0 1px rgba(251,190,35,0.28)`): On interactive cards, a small rise and a gold hairline replacing the neutral one.

### Named Rules
**The Floating Glass Rule.** Panels float on diffuse ambient shadow and a hairline of top-light — never on a hard `rgba(0,0,0,0.3)` drop-shadow and never on a solid grey border. If a surface needs to feel closer, raise it and warm its hairline to gold; don't darken the shadow.

## Shapes

Soft, generous squircle geometry. Cards use a nested **bezel** form: an outer shell (radius `28px`) padded `6px` around an inner core (radius `22px`), the concentric curves reading as a glass plate seated in a warm tray — but the tray is barely-there translucent white, not machined metal, keeping it editorial. Interactive controls and badges are fully rounded pills (`9999px`). Borders are hairlines expressed as translucent white (`rgba(255,255,255,0.08–0.10)`), never solid grey. Small UI radii step `4 / 6 / 8px`.

## Components

### Buttons
- **Shape:** Fully rounded pill (`9999px`).
- **Primary:** Warm Gold fill, Ink-on-Gold text, asymmetric padding (`6px 6px 6px 24px`) to seat a nested "button-in-button" icon circle (`28px`, `rgba(0,0,0,0.15)`) flush on the right.
- **Secondary / Ghost:** Transparent fill, Foreground text, `1px` translucent-white ring that warms to gold on hover; the nested icon circle is `rgba(255,255,255,0.05)` with a gold glyph.
- **Hover / Focus:** The nested icon circle translates diagonally (`translate-x-0.5 -translate-y-0.5`) and scales slightly; the whole button presses (`active:scale-0.98`). All transitions use `ease-fluid` over `500ms`. Focus shows a `2px` Warm Gold outline offset `2px`.

### Chips / Badges
- **Style:** Pill; two families. Neutral chips (tech tags, metadata) use Surface-Raised fill or a translucent-white border with Muted-Foreground Mono text. Accent chips (hero skills, active) use `rgba(251,190,35,0.07)` fill with Warm Gold text.
- **Eyebrow tag:** A special badge — `rgba(251,190,35,0.08)` fill, inset gold ring, `10px` UPPERCASE Mono at `0.2em` tracking, carrying the `cd ~/section` label.

### Cards / Containers
- **Corner Style:** Nested bezel (outer `28px`, inner `22px`).
- **Background:** Outer shell translucent white (`rgba(255,255,255,0.03)`); inner core Surface (#0E0E10) at ~90% opacity for glass.
- **Shadow Strategy:** Ambient card float (see Elevation); interactive cards add Hover lift.
- **Border:** None solid — the inset highlight and shell hairline stand in.
- **Internal Padding:** `24px` (`p-6`) rising to `32px` (`p-8`) on feature cards.

### Navigation
- **Style:** A floating glass pill detached `20px` from the top, centred, `background: rgba(7,7,8,0.6)` with `backdrop-blur`, `1px` translucent-white ring, Nav-float shadow.
- **Typography:** Mono, `12px`; links prefixed `./` in dimmed gold; brand as `~/mainak` with a green `~`.
- **States:** Links dim → Foreground on hover with a subtle white wash; résumé is a gold pill. Mobile: the hamburger's two bars fluidly rotate into an `X` and a full-screen `backdrop-blur` overlay reveals links with a staggered fade-up.

### Terminal Window (signature)
The hero is a terminal rendered as a bezel card: a title bar with three traffic-light dots (red / gold / green) and a `mainak@portfolio: ~` label, then a Mono body where green `$` prompts introduce `whoami`, `cat role.txt` (a typewriter animation), and `ls skills/` (gold chips), closed by a blinking gold cursor. It is the single most identity-carrying element; reuse its grammar (prompt + output) elsewhere sparingly.

## Do's and Don'ts

### Do:
- **Do** keep Warm Gold to ≤10% of any viewport — CTAs, active nav, key metrics, prompts, hairlines. Its rarity is the point (The One-Gold Rule).
- **Do** split the two type voices cleanly: Space Grotesk for headlines/prose, JetBrains Mono for prompts/labels/metadata (The Two-Voice Rule).
- **Do** float panels on the Ambient-card shadow with a `1px` top inset highlight; warm the hairline to gold on hover (The Floating Glass Rule).
- **Do** lead every section with a `cd ~/section` eyebrow tag and a Mono `#` before the headline.
- **Do** back every impact claim with a specific number pulled from the real profile.
- **Do** animate with `ease-fluid` (`cubic-bezier(0.32, 0.72, 0, 1)`) over `500–900ms`, transforming only `transform`/`opacity`, and honour `prefers-reduced-motion`.
- **Do** keep text warm-white (#F3EFE7) on ink-black (#070708) — never pure white on pure black (The Warm-White Rule).

### Don't:
- **Don't** introduce a third accent hue or use Terminal Green as general emphasis — it is a status colour only.
- **Don't** use purple/blue SaaS gradients, symmetric three-column template grids, or matrix-rain / neon "hacker" motifs.
- **Don't** use hard dark drop-shadows (`rgba(0,0,0,0.3)`) or solid grey `1px` borders for depth — use ambient float and translucent hairlines.
- **Don't** thicken icon strokes past `1.5`, and never animate `width`, `height`, `top`, or `left`.
- **Don't** let Warm Gold fill large areas; it is light, not paint.
