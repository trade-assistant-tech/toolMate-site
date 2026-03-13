# ToolMate — Brand Guidelines

## The idea

Tradespeople take pride in their expertise. A plasterer who's been skimming for 20 years, a spark who can wire a board in their sleep — they are highly skilled professionals who happen to run a small business. ToolMate respects that completely. This brand bridges trade heritage with genuine technological capability, without condescending to either.

The aesthetic is bold and confident — not the sleek neutrality of SaaS, but something with more texture and presence. Think of how premium tool brands (Snap-on, Bahco, Fluke) look: considered, purposeful, uncompromising. Now give that the intelligence of AI.

**Brand essence:** *Skilled. Sharp. Uncompromising.*

**Target feeling:** The right tool for the job — chosen with care, built to last, works every time.

---

## Colours

| Role | Name | Hex | Usage |
|---|---|---|---|
| Primary | Volt | `#EAB308` | Primary accent — high-visibility, energetic |
| Primary Dark | Deep Volt | `#CA8A04` | Hover states |
| Background | Forge Black | `#0C0C0B` | Primary dark background |
| Surface | Carbon | `#141413` | Cards, elevated surfaces |
| Surface Alt | Graphite | `#1E1E1C` | Hover states, secondary surfaces |
| Text Primary | Warm White | `#F5F3EE` | Primary text on dark |
| Text Secondary | Chalk | `#A09C96` | Secondary text, descriptions |
| Text Muted | Ash | `#5A5752` | Labels, placeholders |
| Accent Teal | Active | `#0D9488` | Success, confirmations, live states |
| Light BG | Off White | `#F5F3EE` | Light mode sections only |
| Light Border | Hairline | `rgba(255,255,255,0.07)` | Borders on dark surfaces |

**Colour notes:**
- Volt yellow (`#EAB308`) references safety-critical, high-visibility industrial contexts — it connects to the physical world of trade work without being literal
- The near-black background is warmer than a blue-black — it feels like a forge-lit workspace, not a corporate dark mode
- Teal (`#0D9488`) as a secondary accent adds a modern, technological contrast to the volt yellow. Together they read as "precision instrument" rather than "startup app"
- **Light mode variant:** When light mode is needed, use off-white `#F5F3EE` background with carbon text `#141413` and volt as accent. The warmth of the palette holds in both themes.

---

## Typography

**Display / Headings: Barlow Semi Condensed**
- Source: Google Fonts
- Weights: 600, 700
- Character: Semi-condensed grotesque. More presence per line than a standard-width typeface — lets headings read powerfully without running too wide. Associated with engineering, sport, and industrial contexts. Notably NOT stretched — it is designed to be this width.
- Letter spacing: `-0.01em` — its native proportions need minimal adjustment
- Line height: `1.05` for hero, `1.15` for sections

**Body: Inter**
- Source: Google Fonts
- Weights: 400, 500
- The functional workhorse. Barlow Semi Condensed makes a strong statement in headings; Inter keeps body copy clean and legible without competing.
- Body line height: `1.65`

**Labels: Barlow Condensed**
- Source: Google Fonts
- Weight: 600
- Used for: section labels, step numbers, stat captions, badges
- Uppercase, generous letter-spacing (`0.12em`) — reads as a technical specification label

**Type scale:**
```
Hero headline:     clamp(3rem, 5.5vw, 5.5rem)    Barlow Semi Condensed 700
Section heading:   clamp(2rem, 3.5vw, 3.2rem)    Barlow Semi Condensed 700
Card heading:      1.1rem                          Barlow Semi Condensed 600
Body:              0.9rem                           Inter 400
Label:             0.65rem                          Barlow Condensed 600 (uppercase, +0.12em)
Stat number:       clamp(2.5rem, 4vw, 4rem)        Barlow Semi Condensed 700
```

**Critical note on Barlow Semi Condensed:** This font is not stretched — it is a purpose-designed condensed typeface. The semi-condensed variant sits between regular and condensed width and renders crisply at all sizes. Do not artificially widen or compress any typeface.

---

## Tone of voice

**Personality:** The expert who knows exactly what they're talking about and doesn't need to prove it. Matter-of-fact, bold, no padding. Respects the intelligence and experience of its audience.

**Principles:**
- **Bold and brief.** Short sentences used for emphasis, not default rhythm. Strong verbs. No hedging.
- **Trade-literate.** Understands the work. Never explains what a tradesperson already knows.
- **Straight-talking, never crude.** Confident directness without trying to be laddish.
- **Technology in service of craft.** The AI is the tool. The tradesperson is the expert. Always.

**Examples:**

| Avoid | Use instead |
|---|---|
| "Revolutionise the way you manage your trade business" | "Twelve hours of admin every week. ToolMate takes care of it." |
| "Friendly, easy-to-use AI assistant" | "Picks up every enquiry. Drafts every quote. You approve before anything is sent." |
| "We're passionate about helping tradespeople succeed" | "Built for people who are good with their hands, not spreadsheets." |
| "Get started today and see the difference" | "First message sorted before you're in the van." |

**Tagline:**
- *"Your craft. Our admin."*

---

## Logo direction

**Wordmark:** "TOOLMATE" in Barlow Semi Condensed 700, all caps. Set at a size where the letterforms feel bold and deliberate. No lowercase — this mark is confident, not casual.

**Mark:** A hexagonal badge (referencing industrial markings, nut-and-bolt geometry) containing a stylised spark or circuit path. The hexagon has become a recognised motif in technical/engineering contexts. Works well as an embossed badge on workwear and tool cases.

**Colours:** Volt yellow mark, warm white wordmark on forge-black for primary use. All-black on volt for high-visibility contexts (PPE, workwear, van). All-white on dark surfaces.

---

## Imagery & visual style

- **Photography:** Dramatic, high-contrast. Tools in use. Close-up detail of skilled hands. Materials and textures — copper pipe, cable, plaster. The craft is beautiful.
- **Background treatment:** Dark backgrounds throughout with volt/teal accents. The page should feel like a workshop lit from within.
- **Blueprint grid overlay:** Very subtle — a fine grid in the background referencing engineering drawings and precision measurement.
- **Cards:** Sharp corners on outer containers (`border-radius: 6-8px`). Inner elements have modest rounding. Borders are rendered as fine lines at `rgba(255,255,255,0.07)`.
- **Stats:** Large Barlow Semi Condensed numbers in volt yellow. Function as visual anchors — the eye goes to the number first.
- **Section labels:** Barlow Condensed uppercase labels with a short rule preceding them — like annotation on a technical drawing.
- **Icons:** Thin outline style, 1.5px stroke. Crisp, precise. Reference actual tool forms where possible.
- **Animations:** Purposeful only. Scroll reveals with a slight upward translate. No decorative motion.

---

## Do / Don't

| Do | Don't |
|---|---|
| Use Barlow Semi Condensed at full impact in headings | Use standard-width fonts to imitate condensed — they will look stretched |
| Use dark backgrounds as the dominant experience | Apply this brand to light-mode-first layouts — it loses its power |
| Let volt yellow appear sparingly — one clear accent per section | Use yellow everywhere — it loses its punch |
| Use photography that shows real craft and skill | Use generic stock images of people in hard hats |
| Write short, declarative sentences for impact | Use short abrupt sentences as the default — vary rhythm |
