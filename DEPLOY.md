# Deploy: Mexpat Safe client proposal

Static page. No build step, no server code. Everything is plain files served over HTTPS.

Repo: `dibeq/mexpatsafe-site` · branch `main`

---

## 1. What ships

Copy these from the design project into the site repo, preserving the folder structure:

| Source | Destination in repo | Notes |
| --- | --- | --- |
| `Proposal.dc.html` | `proposal.html` | rename to `proposal.html`; it is a normal HTML file |
| `support.js` | `support.js` | runtime the page loads; must sit next to `proposal.html` |
| `ds-base.js` | `ds-base.js` | loads the design system CSS + bundle |
| `_ds/mexpat-safe-design-system-2de3b4b8-5f26-4b5d-aff1-001e1e03020e/` | same path | design tokens, styles, `_ds_bundle.js` |
| `assets/logos/` | `assets/logos/` | Mexpat Safe marks + carrier logos |
| `assets/images/` | `assets/images/` | Diego's photo + hero and CTA photography |
| `assets/icons/` | `assets/icons/` | the 7 self hosted Lucide line icons the page masks |
| `p/sample-a7f3.json` | `p/sample-a7f3.json` | structure reference; safe to keep, it holds no real client data |

All references inside `proposal.html` are relative, so the four folders must keep the same
relative position as the page. If `proposal.html` is moved into a subfolder, everything above
moves with it.

Do not commit `Proposal-standalone.html` (a multi MB single file build, only used for offline review).

## 2. One proposal per client

The page reads a `?q=` slug and fetches `p/<slug>.json`.

```
mexpatsafe.com/proposal.html?q=alex-morgan-a7f3   ->   p/alex-morgan-a7f3.json
```

With no `?q=`, or when the file is missing, the page falls back to the sample data in
`proposal.html` and logs a warning. It never renders blank.

Per client, the only change is one new JSON file in `p/`. No edit to `proposal.html`.

Rules for the slug:
- lowercase letters, numbers, dots, dashes, underscores; max 80 characters
- always end with a random suffix (`-a7f3`, `-9k2m`): the link has no login, so the
  unguessable filename IS the privacy. Never `p/alex.json`.

`p/sample-a7f3.json` documents every field. `client`, `plans`, `members`, `hospitals`,
`comparisonRows`, `waitingRows`, `accordions` and `perks` come from the quote;
`carrierKey` is `redbridge`, `bupa` or `nyl`; `scope` is `individual` or `family`
(`members` is only read when `scope` is `family`).

## 3. Server configuration

- Serve `p/*.json` as `application/json`. Most hosts do this by default.
- The page requests the JSON with `cache: 'no-store'`, so a corrected quote is live on reload.
  If a CDN sits in front, purge `p/<slug>.json` after replacing it.
- The page sets `noindex, nofollow, noarchive` in its head. Also add `Disallow: /p/` to
  `robots.txt` so quote files never surface in search.

## 4. Analytics

GA4 is wired in the page: measurement ID `G-F5ZNZMM6CY`, loaded by the page itself.

The Download PDF button fires `download_proposal_pdf` with `carrier`, `plan`, `deductible`,
`premium_value`, `currency` and `client_ref`, pushed to `dataLayer` and to `gtag`.

Two follow ups, both outside the code:
1. GA4 > Admin > Events: mark `download_proposal_pdf` as a key event.
2. Google Ads: import it as a conversion, then paste the conversion label into
   `CONFIG.analytics.adsConversionLabel` in `proposal.html` (format `AW-XXXXXXXXX/AbCdEfGhIj`).

If the site already runs Google Tag Manager, set `ga4Id` and `adsId` to `null` in
`CONFIG.analytics` and trigger from the `dataLayer` event instead, to avoid loading gtag twice.

## 5. Push

```bash
git checkout -b proposal-page
git add proposal.html support.js ds-base.js _ds assets p
git commit -m "Add client proposal page with per client JSON quotes"
git push -u origin proposal-page
```

Then open the PR against `main`.

For a routine new quote, a single file is enough:

```bash
git add p/alex-morgan-a7f3.json
git commit -m "Add quote for Alex Morgan"
git push
```

## 6. Check after deploy

- `/proposal.html` loads, shows the loading screen briefly, then the sample proposal.
- `/proposal.html?q=sample-a7f3` shows Bupa, premiums in MXN, and Jamie listed as a dependent.
- Plan and deductible buttons update the hero figures, the sticky bar and the comparison table.
- Download PDF opens the print dialog showing the one page summary sheet, not the whole page.
- No 404 in the network panel, in particular for `_ds/`, `assets/` and `support.js`.
