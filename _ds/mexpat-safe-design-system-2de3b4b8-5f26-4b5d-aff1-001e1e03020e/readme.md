# Mexpat Safe Design System

Mexpat Safe is a Bupa-certified health insurance brokerage for English-speaking expats living in Mexico, run by Diego Beltrán (CNSF-licensed advisor, Cédula A1 · Y40634). The brand sells one thing: peace of mind for people navigating a foreign healthcare system in a language that isn't Spanish. One product line today — a marketing/lead-gen website (`mexpatsafe.com`) that funnels visitors to a free Calendly consultation or WhatsApp chat, backed by exclusive access to Bupa's international plan portfolio and the Blue Cross Blue Shield network.

**Sources used to build this system**
- GitHub: [dibeq/mexpatsafe-site](https://github.com/dibeq/mexpatsafe-site) (branch `main`) — the live site's HTML/CSS source of truth. Explore it further for exact markup, the hero slideshow / mobile-drawer JS, and GA4 event wiring not reproduced here.
- Uploaded brand assets: MexPatSafe logo marks (blue, white, cross-only), Bupa / Blue Cross Blue Shield / Redbridge partner logos, Diego Beltrán's profile photo, the homepage OG image, and a social profile picture.
- Brand notes provided directly by the user: color palette, font pairing (Basic Sans/DM Sans + Lora), and a warm-but-professional "Mexican identity without clichés" design direction.

This repo is public for version-control convenience only — no reuse license implied. Do not recreate its distinctive branding for a different company.

## Index

- `styles.css` → `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/fonts.css`, `base.css`
- `assets/logos/` — MexpatSafe marks + `partners/` (Bupa, BCBS, Redbridge)
- `assets/images/` — Diego's photo, homepage OG image, social profile picture
- `components/core/` — Button, Badge
- `components/cards/` — StatCard, TestimonialCard, CredentialCard, ContactCard, ComparisonCard
- `components/navigation/` — Navbar, Footer
- `components/feedback/` — FAQItem
- `components/misc/` — WhatsAppFloat, SectionHeader
- `assets/images/stock/` — 20 licensed Adobe Stock photos for social content and future website sections: beach/couple/family lifestyle shots, Mexico landmarks (Oaxaca cathedral, Lake Chapala), golf/leisure (a recurring personal interest of Diego's, per his About-page bio), medical consult, talavera pottery, and a Bupa storefront shot. Use these instead of generating or sourcing new imagery — they match the brand's warm, candid, adventurous-people photography style described below.
- `ui_kits/website/` — click-through recreation of Home / About / Plans / Contact

### Components
Button, Badge, StatCard, TestimonialCard, CredentialCard, ContactCard, ComparisonCard, Navbar, Footer, FAQItem, WhatsAppFloat, SectionHeader.

**Intentional additions:** the live site has no formal component library — every primitive above (Button variants, StatCard, ContactCard, etc.) was extracted from repeated CSS class patterns across the 4 pages (`.btn-primary`, `.testimonial-card`, `.contact-card`, `.hstat`/`.mstat`, `.credential`, `.comp-card`, `.faq-*`, `.wa-float`), not invented from a generic UI-kit template.

## Content fundamentals

- **Voice:** direct, reassuring, plain-English. Short sentences, no insurance jargon left unexplained. First-person from Diego on About ("I've been working... my goal is simple"); "we" everywhere else.
- **Audience address:** speaks to "you" the expat directly in headlines and CTAs ("Health Insurance for Expats in Mexico", "Book a Free Consultation") — never "our customers" in third person.
- **Casing:** sentence case for body copy and headings; CTAs and eyebrow labels are uppercase with wide letter-spacing (`Book Free Consultation`, `Why Mexpat Safe`).
- **Tone markers:** "No pressure", "no jargon", "no middlemen, no surprises" — repeated anti-friction promises. Confidence stats used as trust signals (190+ countries, 100+ clients, $2M+ coverage) rather than sales pressure.
- **Emoji, not icon fonts:** 📅 (Calendly), 💬 (WhatsApp), 🏅📋🌐 (credentials), ✉️📱 (contact) — emoji stand in for icons throughout; there is no SVG icon system for UI chrome (WhatsApp's own brand mark is the one real SVG icon on the site). A line-icon set (Lucide) is available for proposals/presentations — see Iconography below.
- **Tone: indicative, not "smart."** Say what the thing is, plainly — "Health Insurance Proposal", not "A great proposal, designed just for you." No self-congratulatory copy, no rhetorical flourishes that announce themselves as marketing. Less is better: cut any sentence whose only job is to sound clever.
- **Never use a hyphen or dash in any generated text** (title case compounds like "Bupa-backed" excepted only in existing site copy being quoted) — a dash is the clearest tell of AI-written copy. Rephrase as two sentences or restructure instead.
- **Bilingual awareness:** English-first (the whole differentiator), but Spanish terms appear warmly, italicized, when culturally specific ("we might end up organizing a traditional *carne asada* together").
- **Legal precision where required:** license numbers, CNSF cédula, LFPDPPP compliance are stated plainly and exactly — never rounded or vague.

## Visual foundations

- **Palette:** navy (`#0F355B`) is the dominant brand color — headers, dark section backgrounds, buttons — with a deeper `#07233D` for nav/footer and gradients. Gold (`#D69828`) is the sole accent: CTAs, eyebrows, stat highlights, hover states. White and two light neutrals (`#F4F6F9`, `#E8EEF4`) carry body sections. WhatsApp green (`#25D366`) is reserved strictly for WhatsApp CTAs — never used as a general accent.
- **Type:** Lora (serif) for all headings, plan names, and large stat numbers — gives the brand warmth and a touch of editorial trust. DM Sans (sans) for everything else: body copy, nav, buttons, labels. Headline sizes are large and confident (`clamp(38px,5vw,64px)` hero).
- **Backgrounds:** alternates full-bleed navy sections (dark, for trust/CTA moments) with white/light-gray sections (for content/testimonials). Hero sections use a real photo with a strong navy gradient overlay (never a flat color or abstract gradient alone) — always warm, candid, adventurous travel/lifestyle photography of real people, not staged corporate stock.
- **Cards:** consistently 14px radius, white fill, a 3px solid gold top border (testimonials, comparison, response cards) or a 3px gold left border (credentials, plan highlight panel) — never a colored left border alone without the radius+shadow treatment. Shadow is a single soft navy-tinted `0 2px 12px rgba(15,53,91,0.06)` — subtle, never a drop shadow with black.
- **Buttons:** gold fill + navy-deep text for primary CTAs, uppercase, bold, wide letter-spacing, 8px radius. Outline buttons (navy or white border) for secondary actions. Hover = lighten to `--gold-light` + lift 1–2px, never a color inversion.
- **Motion:** scroll-reveal (`opacity 0 → 1`, `translateY(24px→0)`, staggered 0.1s delays) on section entry; otherwise no bounce, no elaborate easing — everything is a calm 0.2–0.6s ease transition.
- **Shape language:** soft rectangles throughout (8–16px radii); the one fully round shape is the floating WhatsApp pill and small stat/step-number badges. No hand-drawn illustration, no repeating pattern/texture, no "cliché Mexican" motifs (no papel picado, no sombrero iconography) — Mexican identity comes through in photography and bilingual warmth, not decorative cliché.
- **Transparency/blur:** used narrowly — glass-morphism stat chips (`backdrop-filter: blur(12px)`) sitting on top of the hero photo only; nowhere else.
- **Layout rules:** sticky top nav (68px, navy-deep); generous 80–90px section padding on desktop collapsing to 20–24px on mobile; content maxes out around 1100px inside full-bleed section backgrounds.

## Iconography

No icon font or SVG icon set exists in the source site. Icons are emoji (📅 💬 🏅 📋 🌐 ✉️ 📱 ⏱ 🛡 🔒 ✓ →) used inline at UI scale — keep using emoji for casual UI copy (nav, buttons, small labels); that's staying as-is. The single exception is WhatsApp's own brand SVG glyph on the floating chat button and footer link — copied verbatim (`components/misc/WhatsAppFloat.jsx`), never recreated as emoji or a generic chat icon, since it's a recognized third-party mark.

**Icon library for proposals and presentations:** more visual surfaces (client proposals, slide decks) need a proper line-icon set beyond emoji. Use **Lucide** (lucide.dev, MIT licensed, CDN: `https://unpkg.com/lucide-static@latest/icons/<name>.svg` or the `lucide` web font/JS bundle) — its clean single-weight outline style matches the brand's plain, uncluttered visual language and it's free to self-host. Default stroke color `var(--navy)` on light surfaces, `var(--gold)` for accent/highlight icons, white on navy. Default stroke width 1.5–2px, size 20–24px inline / 32–40px as a standalone feature icon. See `guidelines/icons.card.html` for a sample set (shield/checkmark/globe/calendar/heart/users — the concepts the emoji set already covers, for when a sharper line-icon fits proposals or decks better).

## Fonts

Both fonts (Lora, DM Sans) are loaded live from Google Fonts (`tokens/fonts.css` `@import`s the same `fonts.googleapis.com/css2` URL the live site uses) — no local font files were provided or needed. The brand brief mentions the logo wordmark itself was originally set in **Basic Sans** (Latinotype), with DM Sans as the sanctioned substitute for everything else; no Basic Sans files were supplied, so this system uses DM Sans throughout, matching the live site exactly.

## Caveats / open items

- No Figma file or component library was attached — components above were reverse-engineered from repeated CSS patterns in the 4 live HTML pages, not a design tool source of truth.
- The repo's own `CLAUDE.md` flags several assets referenced in HTML but missing from the clean export (hero slideshow images, plan-profile photos) — those aren't in this design system either; ask the user for them if hero/profile imagery is needed.
- `redbridge-insurance-logo.png` is a partner/disclosure-page logo (`redbridge-disclosure.html` in the repo), not a core brand asset — kept under `assets/logos/partners/` for that reason.
- Bupa/BCBS/Redbridge partner marks are kept as PNG (the user's own correctly-colored source files) rather than SVG — the originally uploaded partner SVGs had no fill data at all (pure black outlines), so PNG was used for color accuracy over file weight.
- Plans/pricing content in `ui_kits/website/Plans.jsx` (plan names, comparison copy) is illustrative — real copy lives in `plans.html`/`plans-data.json` in the repo and should be pulled in directly for production use.

**Ask:** tell me if anything above misreads the brand — especially tone, the emoji-icon choice, or the illustrative Plans copy — and I'll iterate.
