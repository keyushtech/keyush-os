# PERSONALIZATION AUDIT — Keyush OS

**Build:** Keyush Sai Velagapudi Personal AI Operating System  
**Date:** 2026-11-02  
**Auditor:** Antigravity Build System

---

## 1 — Reference Identity Token Inventory

This is a fresh build with no inherited reference implementation. All identity tokens are sourced exclusively from `ownerProfile.ts`.

| Token Type | Source Value | Replacement / Status |
|---|---|---|
| Owner name | — | `Keyush Sai Velagapudi` (from ownerProfile) |
| Short name | — | `Keyush` (from ownerProfile) |
| OS name | — | `Keyush OS` (from ownerProfile) |
| Domain | — | `keyushtech.vercel.app` (from ownerProfile) |
| Email | — | `velagapudik@iitbhilai.ac.in` (from ownerProfile) |
| LinkedIn | — | `linkedin.com/in/keyush` (from ownerProfile) |
| GitHub | — | `github.com/keyushtech` (from ownerProfile) |
| Location | — | `IIT Bhilai, India` (from ownerProfile) |
| Avatar | — | `github.com/keyushtech.png` (from ownerProfile) |
| Booking link | — | REMOVE — not used |
| WhatsApp | — | REMOVE — not used |
| Booking notification | — | REMOVE — explicitly opted out |
| Companion | — | REMOVE — explicitly opted out |
| Twitter/X | — | REMOVE — explicitly opted out |
| Instagram | — | REMOVE — explicitly opted out |
| Facebook | — | REMOVE — explicitly opted out |
| YouTube | — | REMOVE — not provided |

---

## 2 — Pre-Launch Scan Checklist

Run before every production build:

```bash
# Scan for any stray reference-owner identity
grep -r "REPLACE_ME\|TODO_NAME\|reference-owner\|placeholder" src/
grep -r "keyushtech.png" src/ # confirm only approved avatar usage
grep -r "velagapudik@iitbhilai.ac.in" src/ # confirm email is correct
```

### Confirmed clean:
- [x] No automatic domain-greeting copy in UI
- [x] No inherited name or brand from any reference implementation
- [x] All visible strings derived from `ownerProfile`
- [x] No Twitter/X, Instagram, Facebook, YouTube links
- [x] No booking notifications
- [x] No floating companion
- [x] No raw API keys in source
- [x] No secrets in repository
- [x] Avatar sourced only from `github.com/keyushtech.png`
- [x] Email is `velagapudik@iitbhilai.ac.in`
- [x] LinkedIn is `linkedin.com/in/keyush`
- [x] GitHub is `github.com/keyushtech`

---

## 3 — Intentionally Retained Neutral Assets

| Asset | Reason |
|---|---|
| Lucide icons (ISC) | Approved open-source icon library |
| JetBrains Mono font (OFL) | Approved open-source font |
| `github.com/keyushtech.png` | Owner-approved avatar source |

---

## 4 — Metric Disclosure Status

All public metrics carry `status: "verified"` and are sourced from official scorecards or program confirmations. No client-reported, estimated, or illustrative figures are present in this build.

See `src/data/ownerProfile.ts → metrics[]` for full ledger.

---

*This audit is updated on each build. Last scan: 2026-11-02.*

