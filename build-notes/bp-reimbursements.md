# Blueprint Reimbursements: build notes

Source: GitHub `GauravShah123/reimburement-app-v2` (server + Vite frontend) and `GauravShah123/reimbursement-app` (earlier Next.js version). Live site (`bp-reimbursements-preview.vercel.app`) could not be opened from this environment (network blocked), so everything below comes from the code.

## One-liner
Scan a receipt, confirm the details, sign, done. Finance gets one merged PDF. Homepage claim: "Getting $5k+ in spending reimbursed 10x faster."

## Problem (from the existing page)
Members paid out of pocket and claimed back from the university: hand-filled form, attached receipts, email to finance.

## User flow (frontend: Vite + vanilla JS, no framework)
1. Sign in with Google (restricted to `@uwblueprint.org` accounts).
2. Name, student number and department are prefilled from the member roster.
3. Upload up to 3 receipts (PDF or image). Each is scanned; amount and date are extracted and checked.
4. Fill in the claim details (reason, mailing address, receipt lines). The UI forces CAD.
5. Sign on a canvas (PNG signature embedded in the PDF).
6. Submit. Finance gets the merged PDF by email; the member gets a confirmation email.

## How it works (backend: Express on Node 20+)
- **Auth:** Google Sign-In, then a signed session cookie (`bp_session`). Same-origin `/api` routing.
- **Roster:** Google Sheets API read-only, via a service account. Matches on BP email. Header row is matched flexibly (aliases). Optional in-memory cache with a TTL.
- **Receipt scan:** PDFs use embedded text (`pdf-parse`). Images go through `sharp` then `tesseract.js` (English model bundled in the repo). Known gap noted in code: image-only PDFs return empty text (no OCR fallback).
- **Heuristic validation** (`receipt-analyze.mjs`, plain text only, no AI): minimum text length, "looks like a receipt" score, rejects card statements, requires itemization, picks the total (prefers lines with total/paid/due, last match wins, rejects OCR outliers), parses dates (day-first by default for Canada), rejects receipts older than a staleness window. Error codes: `insufficient_text`, `not_receipt`, `likely_card_statement`, `not_itemized`, `amount_unclear`, `receipt_too_old`.
- **Claim PDF:** HTML template rendered to PDF by Playwright (headless Chromium, Letter size), then `pdf-lib` appends receipts (images rasterized to PNG and fit to a page).
- **Email:** `nodemailer` sends two emails: finance (PDF attached) and claimant confirmation. Distinct failure codes (`email_send_failed`, `confirmation_email_failed`) so a half-failure is safe to retry.
- **Validation:** `zod` schema on the submit payload.

## Business rules encoded
A red `[FLAG: ...]` line is added to the finance email when any of these hold:
- Claimant not on the roster
- Role not in the lead-role allowlist (co-president, internal/external director, director lead, product manager, project lead, VP product/engineering/design)
- Total over $100 CAD
- Any non-CAD line

## Earlier version (`reimbursement-app`)
Next.js + Prisma (SQLite) + Claude Vision (Haiku) for receipt OCR, plus a VP Finance dashboard to approve and forward to the university. Replaced by the roster + heuristic-OCR version above.

## Things the case study should reconcile (I could not verify)
- The current page copy says OCR runs **in the browser** (`tesseract.js`, `pdf.js`), uploads go to **blob storage**, and the preview is **fully static on Vercel**. The repo I found does OCR and PDF generation **server-side** (Express + Playwright). The Vercel preview is presumably a separate static build. Confirm which is the "real" architecture and which is the public demo.
- The "$5k+" and "10x faster" figures are not in the code. Need the source and baseline (how long a claim took before vs after).
- Number of members/claims, finance team feedback, any error-rate or rework numbers.
- Why heuristics instead of AI for validation (cost, determinism, privacy?). The repo shows you tried Claude Vision first and moved off it.

## Screens worth capturing for the page
Sign-in, prefilled details, receipt scan result (pass and a flagged example), signature step, the final merged PDF, the flagged finance email.
