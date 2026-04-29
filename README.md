# TRS Golf — Design System

> Tour-proven training aids for the everyday player.

TRS Golf is a UK direct-to-consumer brand selling golf training aids — the **TRS Slider**, balls, gloves, alignment sticks and rotation aids — designed in collaboration with **Robert Rock**, coach to multiple Major champions. The flagship product (the Slider) is endorsed and used by Tommy Fleetwood, Cam Smith, Justin Rose and 50+ touring pros, and sold under a 60-day "lower your score or your money back" guarantee.

The brand voice is **authoritative but plainspoken** — confident enough to call something tour-proven, friendly enough to call it a "guesswork-free" practice tool. Visuals are **black, white, and signal-red** with sharp corners, photographic product shots, and a mostly-utilitarian e-commerce layout that gets out of the way of the conversion.

---

## Sources used to build this system

| Source | What we pulled from it |
| --- | --- |
| **Figma file** *(uploaded as `Untitled.fig`, mounted VFS)* — `/Page-1/PDP` (mobile PDP frame, 360×11114) | Type ramp, exact red values, button + variant pill geometry, star rating geometry, quantity-pack card layout, stock-indicator pattern |
| **GitHub repo** `edhodge/trs-golf-theme` *(Shopify theme, branch `main`)* | `config/settings_data.json` colour schemes, `assets/Ship_Icon.svg` + `Stock_Icon.svg`, SuisseIntl webfont (used in production CSS as a fallback), `templates/product.pdp_slider.json` (live PDP copy), font choices (Assistant body, Aeonik display) |
| **Uploads** | `Aeonik Bold/Medium/Regular.ttf` (the display family), `TRS-Logo-Transparent.svg`, `TRS-Logo-Rectangle.svg`, `TRS-Logo-Square.svg` |

The Figma frame is the **mobile PDP** for the TRS Slider. The codebase is the production Shopify theme. They agree on colours, typography, and component geometry — where they disagreed (e.g. font fallback chain), the Figma values win for visual specs and the codebase wins for behaviour.

---

## Index

```
TRS Golf Design System/
├── README.md                ← you are here
├── SKILL.md                 ← Agent-skill manifest (use anywhere)
├── colors_and_type.css      ← CSS variables: palette, type, spacing, radii, shadows
├── fonts/                   ← Aeonik TTFs (display family)
├── assets/                  ← logos, icons, photography, key Figma exports
├── preview/                 ← design-system preview cards (registered for the DS tab)
└── ui_kits/
    └── shop/
        ├── README.md
        ├── index.html       ← interactive PDP recreation (mobile)
        ├── Header.jsx
        ├── ProductGallery.jsx
        ├── PricingPacks.jsx
        ├── VariantPicker.jsx
        ├── BuyBox.jsx
        ├── TrustList.jsx
        ├── ReviewBar.jsx
        ├── FAQ.jsx
        └── Footer.jsx
```

---

## Content fundamentals

> *"We use an authoritative tone whilst also speaking the common tongue."*

### Voice
- **Authoritative, never timid.** The product is presented as a tool tour pros already use — copy treats that as a fact, not a claim. *"The viral training aid designed by Robert Rock that forces your swing path into the correct impact position."*
- **Plain. British. Direct.** Short sentences, active verbs, no marketing adjective stacks. *"Designed by tour legend Robert Rock. Built around one of the purest swings in the game, to help you find yours."*
- **Outcome-led.** Every benefit is something the golfer will *feel on the course*: "Eliminate Your Slice Forever", "Gain Extra Distance Instantly", "Hit More Greens in regulation", "Swing Changes That Actually Last".
- **Honest about effort, confident about result.** *"Most golfers notice improved contact and ball flight within a few sessions."*

### Casing
- **Headlines: Title Case** for big H1s ("The Numbers Behind Better Golf"), **Sentence case** for sub-heads and body. Mixed within the system — don't fight it.
- **CTAs: ALL CAPS.** `ADD TO CART`, never "Add to cart". Same for badges: `MOST POPULAR`, `BEST VALUE`, `SAVE UP TO 30%`.
- **Numbers in copy** stay as digits: "82%", "50,000+", "60 days", "1,000+". They're the proof.

### Person
- **Second person, you-led.** *"Get your swing into the correct impact position every time."* The brand and the golfer are on the same side of the table.
- We use "we" sparingly, mostly in the policy/refund voice. *"We offer a 60-day risk-free return."*

### Emoji & ornament
- **No emoji anywhere.** Not in copy, not in CTAs, not in nav. The seriousness of the product depends on it.
- **Stars (★)** are the one ornament — drawn as red SVG glyphs, only ever for ratings.
- **Em-dashes are fine.** Trailing slashes and pipes are fine in eyebrow text. Smart quotes preferred (`'`, `"`).

### Specific copy patterns to imitate
| Pattern | Example |
| --- | --- |
| Stat + outcome | *"50,000+ golfers rate this product 4.8/5.0"* |
| Social proof + names | *"Used by **PGA Pros** — Tommy Fleetwood, Cam Smith, Justin Rose & 50+ more"* |
| Number-first benefit row | *"82% reduced their slice within 7 days"* |
| Plain promise | *"Lower your score in 60 days, or your money back"* |
| Warm authority | *"Built around one of the purest swings in the game, to help you find yours."* |

### What NOT to do
- ❌ "Revolutionary, game-changing, elevates your golf to the next level" — adjective slop.
- ❌ "Are you tired of your slice? 😩" — interrogative + emoji = wrong brand.
- ❌ "Click here" / "Learn more" — every CTA is a verb on the outcome.
- ❌ Title-casing UPPERCASE buttons or sentence-casing them. Pick one (UPPERCASE for primary actions).

---

## Visual foundations

### Colour
The palette is **monochrome plus signal red**. Almost every screen is white or off-white, the typography is near-black, and red is reserved for things that *want a click* or rating-style endorsements.

| Token | Hex | Use |
| --- | --- | --- |
| `--trs-red` | `#cf2437` | Primary brand red. Stars, badges, primary buttons (Figma-canonical). |
| `--trs-red-bright` | `#fc364c` | Theme button red (slightly brighter). The CSS variable used in production. |
| `--trs-red-dark` | `#9c1827` | Border/shadow under red buttons. |
| `--trs-red-tint` | `#fff8f9` | Soft pink-red surface (selected pack card, alert background). |
| `--trs-ink` | `#161616` | Primary text. |
| `--trs-ink-2` | `#222222` | Body alt / Shopify "scheme-1" text. |
| `--trs-ink-3` | `#212121` | Less-prominent ink. |
| `--trs-grey-700` | `#5f5f5f` | Captions, secondary copy. |
| `--trs-grey-500` | `#969696` | Borders on active controls. |
| `--trs-grey-300` | `#e4e4e4` | Default borders. |
| `--trs-surface` | `#ffffff` | Page. |
| `--trs-surface-2` | `#f7f7f7` | Subtle section background. |
| `--trs-surface-3` | `#f3f3f3` | Shopify "scheme-2" background. |
| `--trs-success` | `#5cd33f` | "In stock" dot. |
| `--trs-info` | `#5794ee` | Generic info pill (rare). |
| `--trs-blue` | `#334fb4` | Shopify "scheme-5" accent (rare). |

Backgrounds are **flat solids**. The codebase exposes a `background_gradient` slot in every colour scheme but it's set empty in production — **do not introduce gradients** unless the user asks. Imagery does the heavy lifting of texture.

### Typography
- **Aeonik** is the display family — Bold for headlines, Medium for product names, Regular for body. Weights 400 / 500 / 700.
- **Suisse Int'l** ships in the theme as a body fallback (woff2 imported into `assets/`) but the Figma file uses Aeonik throughout. We follow Figma and treat Aeonik as primary.
- **Roboto** appears 5× in the Figma file — we treat that as legacy / system-font fallback and don't include it in the ramp.
- Letter-spacing is consistently **-0.020em** (-2%) on display sizes and CTAs. Line-height is tight: `100%` on most display sizes, `18/16px` on buttons.
- Body sits at 14/14 on mobile; H1 is 28px Medium, sub-heads 16px Medium.

### Spacing & layout
- **Page width**: 1340px on desktop (Shopify setting), 360px design unit on mobile.
- **Grid gutter**: 8px horizontal & vertical (Shopify setting). All other spacing is multiples of 4: `4 / 8 / 12 / 16 / 24 / 32 / 40 / 50`.
- **Section padding**: 50px top/bottom desktop, 39–40px mobile. The repeat of 50/50 is intentional and worth keeping.
- **Component padding** inside cards: 16–20px.

### Corner radii
The brand is **sharp**. The Shopify theme sets `buttons_radius: 0`, `inputs_radius: 0`, `card_corner_radius: 0`. The only places radius shows up:
- **Variant pills**: `40px` (capsule).
- **Badge corners**: `40px` (capsule).
- **Buttons in Figma**: 2px (a near-zero softening — we keep this on primary CTAs).
- **Quantity-pack cards**: 8px (a slight softening to read as cards).

### Borders
- `1px solid #e4e4e4` is the default UI border.
- Active states get `1px solid #969696` or `2px solid #cf2437` (selected pack).
- Buttons carry a `1px solid` border in their own colour family — red button gets `--trs-red-dark` border.

### Shadows
**Almost never used.** All Shopify shadow sliders ship at opacity 0; the only shadow in the system is a subtle 0/4/5 dropshadow on buttons (also turned off by default). When you need depth, use **borders, not shadows.** A single utility token is provided (`--trs-shadow-sm`) for the rare moment something sticks (sticky CTA bar, modal).

### Animation
- The theme sets `animations_hover_elements: "none"` and `animations_reveal_on_scroll: true`. Translation: **no playful hovers**, but content fades up on scroll.
- Hover states: opacity drop to 0.85 on links, fill darkens by ~10% on buttons.
- Press states: scale shrinks to 0.98 (subtle), no colour flash.
- Standard easing: `cubic-bezier(0.4, 0, 0.2, 1)` (material standard) at 200–250ms for in/out, 400ms for scroll reveals.
- No bouncy spring curves anywhere. The brand isn't bouncy.

### Imagery
- **Photographic, warm-but-natural.** Lots of action shots of pros mid-swing on real courses (greens, blue sky, tour signage in the background — Rolex, Morgan Stanley caps).
- **Product cutouts** on plain backgrounds for pack/variant imagery.
- **No grain, no heavy filters, no monochrome treatments.** Colour is true, contrast is high, exposure is bright.
- **Hand-drawn illustration**: none. Stay away.
- **Icons inside circles** (white circle on photo) appear for "play video" — translucent backdrop blur (41px), white fill, black play triangle.

### Cards
- Square corners (or 8px on pricing packs).
- Flat white fill, 1px grey border. **No drop shadow.**
- Selected state: 2px red border, light-red `#fff8f9` fill, "MOST POPULAR" capsule badge floating above the top edge.

### Layout rules
- Sticky **add-to-cart** bar appears on mobile after the user scrolls past the buy box.
- Announcement bar at the very top is full-bleed red (`#cf2437`) with white text.
- The header logo is an SVG wordmark + the red underline; it left-aligns.
- Section heads are centred for marketing rows, left-aligned for editorial/explanation rows.
- Star-rating clusters always sit *above* the H1, never below.

### Transparency & blur
- Used **once**: the play-button overlay on videos (white circle, ~80% alpha, `backdrop-filter: blur(41px)`).
- Otherwise, **no glassy panels, no frosted overlays.** The brand is opaque.

### Vibe summary in one line
**Pro-shop confidence on a clean white wall.** Black, white, signal-red. Sharp corners, real photography, statements not adjectives.

---

## Iconography

The brand uses **two parallel icon vocabularies**:

1. **Inline SVGs** dropped into Liquid templates ad-hoc. The production Shopify theme inlines an SVG every time it needs a glyph — stars, info circles, play triangles, checkmarks. They share these traits:
   - Stroke weight ~1.3px on outline icons (info "ⓘ", checkbox circle).
   - Solid fills for symbolic icons (stars, play triangle).
   - 14–24px viewbox, no fixed style — colour comes from the surrounding text.
   - Filled stars in `#cf2437` (the brand red).

2. **PNG/WEBP icon assets** in the Shopify CDN for content blocks: `pdpv3_pdt_check.webp`, `pdp_pdt_fast.webp`, `pdp_pdt_flag.webp`, `pdp_pdt_day.webp`, `pdp_bar1_icon...webp`. These are bespoke flat illustrations (a check mark, a delivery van, a flag, a calendar) — black-on-transparent, ~32–48px, no system unity beyond "flat black mark on a plain background".

We have copied:
- `assets/star.svg` — the canonical 5-pointed star used across ratings (filled `#cf2437`).
- `assets/Ship_Icon.svg` and `assets/Stock_Icon.svg` — the two SVG icons sitting in the production `assets/` folder.
- The Figma `Vector.svg` exports — kept for reference but not used in cards.

**No icon font.** **No emoji.** **No unicode glyphs as icons** in production. When a glyph is needed, it's drawn inline as SVG.

For UI surfaces that need a broader icon set (cart, search, hamburger, chevrons), we substitute **[Lucide](https://lucide.dev)** — its 1.5–2px stroke weight and rounded line-caps are the closest visual match to the inline SVGs the theme already uses. **This is a substitution; flag it to the user.** When the user provides the production icon set, swap Lucide out.

---

## Caveats & substitutions

- **Icons (Lucide CDN)** are a substitution. The production theme inlines bespoke SVGs per use; we don't have a centralised set to copy.
- **Body font fallback** — the Shopify theme uses "Assistant" (a Google font) as the body and Aeonik for display. The Figma file uses Aeonik throughout. We follow Figma; if you need to match production exactly, swap body → Assistant.
- **Photography** is borrowed straight from the Figma exports for demonstration. Real production imagery lives on Shopify's CDN and isn't included here.
