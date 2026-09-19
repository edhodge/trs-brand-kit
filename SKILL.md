# TRS Golf Design System — Skill

Use this skill whenever a user asks for design work in the **TRS Golf** brand: PDPs, marketing pages, slides, ads, emails, training-aid product surfaces, or anything that should match TRS Golf's tour-pro-confident, monochrome-plus-signal-red aesthetic.

## What this brand is

TRS Golf is a UK direct-to-consumer brand selling **golf training aids** (the TRS Slider, balls, gloves, alignment sticks). Designed in collaboration with **Robert Rock**, used by tour pros (Tommy Fleetwood, Cam Smith, Justin Rose), sold under a 60-day "lower your score or your money back" guarantee.

**Brand identity in one line:** *Pro-shop confidence on a clean white wall.* Black, white, signal-red. Sharp corners, real photography, statements not adjectives.

## How to start

1. Read `README.md` (top-level) — it has the whole content + visual system.
2. Link `colors_and_type.css` from any HTML file: it provides every CSS variable, every `.btn-*` / `.pill` / `.badge` class, the `@font-face` declarations for Aeonik + Suisse Int'l, and ready-to-use `--trs-*` tokens.
3. Browse `preview/` to see the system rendered: colour swatches, type ramp, buttons, pricing packs, badges, rating bar, spacing scale.
4. If the user wants e-commerce surfaces, **clone or extend `ui_kits/shop/`**. The PDP is broken into small JSX components (Header, ProductGallery, PricingPacks, VariantPicker, BuyBox, FAQ, Footer) — re-use them.

## Where the numbers live

**`tokens.json` is the single source of truth** (measured from the live site). It generates `colors_and_type.css` and the `DESIGN.md` frontmatter via `python3 gen_kit.py`. **Never hardcode a brand number** — link `colors_and_type.css` and use the CSS variables / classes. If a value needs to change, edit `tokens.json` and re-run the generator; every file updates together. This doc carries the *judgment* (what to do), not the raw values.

## Hard rules

- **No emoji. Anywhere.** The product seriousness depends on it. One exception: the 💥🎯✅ benefit triplet in Meta ad body copy (see `trs-fb-ad-copy`) — design/UI surfaces never.
- **No gradients on backgrounds.** Flat solids only.
- **ONE red.** `--trs-signal-red` is the only red — buttons, accents, stars, badges. The old brighter red is retired; never reintroduce a second red.
- **Cards carry the soft shadow** `--trs-shadow-card` (ratified from live home + PDP). The old "flat, borders only" rule is dead.
- **CTAs are UPPERCASE**, `--trs-ls-tight`, Aeonik medium (not bold). Primary fill `--trs-red` with a 1px `--trs-red-dark` border, `--trs-radius-cta` (renders square). Hover **dims to 88% opacity** — no colour change. Use `.btn.btn-primary`.
- **Radii come from the tokens:** `--trs-radius-cta` (CTA), `--trs-radius-control` (inputs/secondary), `--trs-radius-card` (cards), `--trs-radius-pill` (capsule pills + badges). Don't invent new radii.
- **Spacing is a 5px grid** — use `--trs-sp-1`…`--trs-sp-7`. Never a raw px gap.
- **Every interactive element gets a focus ring** (`.btn` ships `:focus-visible` with a red outline) — the live site is missing this and it's an a11y fault to carry forward.
- **Stars are red, never yellow.** Filled `--trs-signal-red`.
- **Casing:** Title Case for the display heading, sentence case below, ALL CAPS for buttons + badges. Don't title-case a button or sentence-case a badge.
- **Every benefit is outcome-led.** Don't write "Revolutionary technology" — write "Eliminate your slice forever".

## Type rules

Aeonik throughout (Suisse Intl is a fallback only; if it renders as the primary body face the page failed to load Aeonik). The site renders **five roles** — there is no distinct H3/H5. Sizes/weights live in `tokens.json`; use the classes:

- **`.display`** (or h1/h2) — the largest heading and every section title. Title Case.
- **`.subhead`** (or h3) — secondary heading. Sentence case.
- **`.eyebrow`** — uppercase kicker/label above a heading.
- **body** (`<p>`) — the copy default.
- **`.caption`** — fine print, `--trs-ink-caption`.

## Component vocabulary

- **Primary CTA:** `<button class="btn btn-primary">` — red fill, UPPERCASE.
- **Secondary CTA:** `.btn-secondary` — black outline on white.
- **Dark CTA:** `.btn-dark` — for "SHOP NOW" patterns over imagery.
- **Variant pills:** `<button class="pill" aria-checked="…">` — capsule, fills black when selected.
- **Badges:** `<span class="badge">MOST POPULAR</span>` (red) / `.badge--dark` (black).
- **Pricing packs:** see `preview/pricing-packs.html` and `ui_kits/shop/PricingPacks.jsx`. Selected = red border + `#fff8f9` fill + capsule badge floating above the top edge.
- **Card:** `<div class="card">` — white, `8px` radius, soft shadow `--trs-shadow-card`.
- **Rating bar:** see `preview/rating-stock.html`. Five red stars + bold count + bold rating, on one line.
- **Stock dot:** small green dot in a soft halo + delivery-promise sentence.

## Asset paths

- Logos (SVG, vector): `assets/trs-logo.svg` (transparent, white wordmark + red bar), `assets/trs-logo-rect.svg` (charcoal #3E3E3E, 2:1), `assets/trs-logo-square.svg` (charcoal #3E3E3E, 1:1).
- Production icons: `assets/Stock_Icon.svg`, `assets/Ship_Icon.svg`.
- Star: `assets/star.svg` (filled red).
- Photography: `assets/figma_pdp_main.png`, `figma_pdp_secondary.png`, `figma_action.jpg`, `figma_pack.png`, `figma_robert_rock.png` — borrowed Figma exports for placeholder use. Tell the user real production imagery should replace these.

## When to substitute

- For UI glyphs not in `assets/` (cart, search, hamburger, chevrons), use **Lucide** at 1.5–2px stroke weight. Tell the user Lucide is a substitution.
- For body type, the Shopify theme actually uses **Assistant** (Google font); the Figma file uses Aeonik throughout. We follow Figma — body = Aeonik 400. If the user wants production parity, swap the body family.

## Things this skill does NOT cover

- Cart drawer / cart page / checkout — only the PDP and supporting components are recreated.
- Loyalty / discount banner overlays.
- Multi-locale (UK / US contexts).
- A complete icon set — only the production SVGs and stars are included.

If the user asks for any of those, build them new in the brand's idiom (sharp corners, red CTAs, monochrome surfaces, Aeonik) and flag what you invented.
