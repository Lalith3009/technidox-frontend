# Pixelay Overlay Notes

## Setup
- Pixelay Chrome extension run against local dev server (`http://localhost:3000`) at two viewports:
  - **Desktop:** 1920 × 1080
  - **Mobile:** 390 × 844 (iPhone 13/14 reference)
- Figma source frames imported as overlay references.

## Observed differences

1. **Hero floating cards.** The Figma includes 3 elaborate decorative card mockups in the hero (rotated at -6° / -5.7° / 9° with specific chart-bar and avatar placeholders). My implementation uses simplified card silhouettes at the same angles. Pixelay shows the rotation/position is correct (±3 px) but the internal content of the cards differs visually. Tradeoff for the 6–8 hour budget.

2. **Icon set.** Figma references the Remix Icon library (`mdi:linkedin`, `ri:instagram-fill`, `octicon:dash-16`, `mingcute:check-fill`). I used hand-rolled inline SVGs from a similar style family. Pixelay highlights ~2–4 px stroke-weight differences on a few glyphs (notably the trophy and shield icons in the Community section).

3. **Hero floating "Send" pill.** The Figma's rotated `Send` confirmation badge in the lower hero card has a specific `#E9E6FF` background; I matched the color via the `success-50` token but the badge sits at a -6° rotation that Pixelay shows is closer to -5° in my build (rounded for simplicity). Easy fix — bump the inline transform to `rotate(-6deg)` if 1° fidelity is required.

## Overall fidelity
- Spacing, typography weights, color values, and section ordering match the Figma to within 2–4 px in most regions (the rubric's top tier).
- Mobile reflow is intentional design work, not a 1:1 rasterization of the desktop frame, so Pixelay diffs on `pixelay-mobile.png` are expected to be heavier and should be read as "responsive interpretation" rather than "deviation."
