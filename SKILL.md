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

## Hard rules

- **No emoji. Anywhere.** The product seriousness depends on it.
- **No gradients on backgrounds.** Flat solids only. (`background_gradient` is empty in production.)
- **No drop shadows on cards.** Use 1px borders for depth. The one allowed shadow (`--trs-shadow-sm`) is for sticky/modal surfaces only.
- **CTAs are UPPERCASE**, with `letter-spacing: -0.02em` and 16px Aeonik 700. Primary CTA fills are `--trs-red` (`#cf2437`) with a `--trs-red-dark` border.
- **Sharp corners by default.** Radii are `0` (default), `2px` (CTA softening), `8px` (pricing packs), `9999px` (capsule pills + badges). Don't invent new radii.
- **Stars are red, never yellow.** Five filled stars in `#cf2437`.
- **Title Case for H1s, sentence case below, ALL CAPS for buttons + badges.** Don't title-case a button or sentence-case a badge.
- **Every benefit is outcome-led.** Don't write "Revolutionary technology" — write "Eliminate your slice forever".

## Type rules

- Display: **Aeonik** 500 / 700, letter-spacing `-0.02em`.
- Body: 14px Aeonik 400, line-height 1.5.
- Eyebrow / mono labels: **Suisse Int'l** 11px, `letter-spacing: 0.04em`, UPPERCASE.
- Use the helpers: `--trs-h1` (28px/500), `--trs-h2` (24/500), `--trs-h3` (20/500), `--trs-body-lg` (16/400), `--trs-body` (14/400), `--trs-eyebrow` (11/700).

## Component vocabulary

- **Primary CTA:** `<button class="btn btn-primary">` — red fill, UPPERCASE.
- **Secondary CTA:** `.btn-secondary` — black outline on white.
- **Dark CTA:** `.btn-dark` — for "SHOP NOW" patterns over imagery.
- **Variant pills:** `<button class="pill" aria-checked="…">` — capsule, fills black when selected.
- **Badges:** `<span class="badge">MOST POPULAR</span>` (red) / `.badge--dark` (black).
- **Pricing packs:** see `preview/pricing-packs.html` and `ui_kits/shop/PricingPacks.jsx`. Selected = 2px red border + `#fff8f9` fill + capsule badge floating above the top edge.
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
