## The problem

Blueprint members pay for things out of pocket and claim them back from the university. That used to mean filling in a form by hand, attaching receipts, and emailing finance.

## Implementation

Receipts are scanned on the member's own device, not the server, using `tesseract.js` for photos and `pdf.js` for PDFs, with a heuristic pass to pull out the total and date. OCR is the slowest step, so running it in the browser avoids function time limits and means an abandoned claim costs nothing. Member details (name, student number, department) are prefilled from a Google Sheet roster read through a read-only service account.

On submit, files upload straight from the browser to blob storage using a short-lived, scoped token, past the 4.5 MB serverless function body limit. A function then converts currency, applies finance's rules, builds the claim PDF, and merges the receipts into it. The claim is written as "processing" before that work happens, so a failure halfway leaves a traceable record instead of a silent loss. A claim gets flagged for finance (claimant not on the roster, not in a lead role, total over $100 CAD, or a line in another currency) as data stored on the claim, not typed into an email.

## The solution

Three steps instead of a form, a spreadsheet, and an email thread: scan, confirm, submit. Finance gets one clean, merged PDF; the member gets a confirmation. The public preview below is fully static (no server, credentials, or stored data) — receipt scanning, extraction, and PDF generation are the real code running in your browser; sign-in, the roster, storage, and the email to finance are simulated.
