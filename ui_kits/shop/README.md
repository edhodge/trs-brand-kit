# TRS Golf — Shop UI Kit

A pixel-honest recreation of the **TRS Slider PDP** (mobile, 360–430px frame), built by reading the production Shopify theme (`edhodge/trs-golf-theme`) and the supplied Figma frame in parallel.

## What's here

| File | What it is |
| --- | --- |
| `index.html` | An interactive PDP. Swipe gallery dots, change pack, change size, tap **ADD TO CART** for an in-line confirmation toast, expand the FAQ. |
| `Header.jsx` | Sticky red announcement bar + nav with hamburger / wordmark / search / cart-with-count. |
| `ProductGallery.jsx` | Square hero image with dot pagination and "Tour Proven" eyebrow badge. |
| `ReviewBar.jsx` | Five red stars + "50,000+ golfers rate this 4.8/5.0". |
| `TrustList.jsx` | Bulleted benefits with red filled-circle checks. |
| `PricingPacks.jsx` | 1 / 2 / 3 quantity selector with `MOST POPULAR` (red) and `BEST VALUE` (black) badges. Selected state is `#fff8f9` fill + 2px red border. |
| `VariantPicker.jsx` | Capsule pills (40px radius), filled black when selected. |
| `BuyBox.jsx` | Full-width red CTA with bullet-separated price + strike-through; stock dot + delivery promise underneath. |
| `FAQ.jsx` | Plus/minus accordion, 14px Aeonik Medium questions. |
| `Footer.jsx` | Dark `#121212` block with the TRS wordmark and link columns. |

## Things deliberately NOT recreated

- Multi-language locale switcher (the production theme has UK / US contexts) — out of scope for a UI kit.
- Embedded UGC reviews (Loox/Archive.com widget) — replaced by the stat-row + Robert Rock card.
- Cart drawer / cart page — only the count badge in the header is wired.
- Loyalty / discount banner overlays.

## Where the visuals come from

- **Pricing pack geometry, badges, variant pills, stock indicator** — direct from `/Page-1/PDP/index.jsx` in the Figma file.
- **Colour scheme + button geometry** — from `config/settings_data.json` colour schemes (`scheme-1` button = `#fc364c`; PDP red in Figma = `#cf2437`; we use `#cf2437` on the CTA to match the shipped Figma spec).
- **Copy** — lifted verbatim from `templates/product.pdp_slider.json`.
- **Robert Rock photo** — `/Page-1/PDP/assets/f4db158948e4.png` (Tommy Fleetwood image actually; left as-is for visual placeholder; user should swap with a real Robert Rock portrait).

## Caveats

- The hero photo of Justin Rose / Tommy Fleetwood is what was embedded in the Figma export — it'll likely need to be replaced with a real Robert Rock portrait + the TRS Slider product cutouts before this kit is used in production work.
- The stripe and pricing pack imagery are placeholders — the Figma file references `pdpv3_pdt_pack1/2/3.webp` on Shopify CDN which we don't have a copy of.
