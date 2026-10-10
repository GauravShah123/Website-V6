# Invoice Tracker: build notes

Source: GitHub `GauravShah123/Invoice-Tracker` (live at `gauravshah123.github.io/Invoice-Tracker/`, which I could not open from this environment). Everything below is from the code.

## One-liner
A personal time tracker and invoice generator for freelance consulting: log hours, cut a clean invoice, track what has been sent.

## Origin (from the existing page)
Time sheet in Excel worked, but invoice creation and tracking stayed manual. Built to be more organized.

## What it is
Plain HTML, CSS and vanilla JavaScript; no framework, no backend, no account. About 535 lines of app code, 450 of CSS. All data in `localStorage` (client, time entries, invoices, settings). Lucide icons. Hosted on GitHub Pages.

## Data model
- **Client:** name, contact, email, hourly rate
- **Time entry:** date, task, minutes (rounded), optional start/stop time, linked invoice
- **Invoice:** number, period start/end, total minutes, rate used, amount (CAD), due date, sent date
- **Settings:** your name, email, invoice prefix, running sequence number

## Behaviour (what the code actually does)
- **Spreadsheet-like time table:** editable cells, keyboard navigation between cells, click-drag selection across minutes cells with a live sum of the selection.
- **Start/stop to minutes:** enter times as HH:MM; handles overnight (wraps past midnight); **rounds to the nearest 15 minutes**.
- **Biweekly invoicing:** the next invoice covers a 14-day window starting the day after the last invoice ended (or the earliest entry for the first one). Only un-invoiced entries inside that window with positive minutes are included.
- **Invoice numbers:** `#<prefix><two client initials>-<sequence>`, e.g. `#GSAB-001`. Entries show their invoice number as a badge.
- **Amount:** total minutes / 60 x client rate, in CAD. Due date is 14 days from creation.
- **Print flow:** opens a print-ready invoice in a new window. A banner then offers: print again, **copy the email body**, and **mark as sent**.
- **Guardrails:** prompts for client details (name, rate) first if missing; alerts if nothing is in the window.
- **CSV export.**
- **Invoices tab:** list of past invoices and their status.

## Design decisions worth telling
- Single user, so `localStorage` over a backend. Trade-off: data is per-browser; no sync or backup beyond CSV export.
- Fixed 14-day cadence and 15-minute rounding encode your own billing habits rather than being configurable.

## Things I could not verify (ask before writing)
- Real usage: how many invoices, how much time it saves per cycle, which client(s).
- Whether the demo data on the page is fake (it appears to be).
- What you would add next (multiple clients, PDF export, reminders).
- Any lesson from building with AI assistance ("vibe coded" on the current page).

## Screens worth capturing
Time table with a multi-cell selection and sum, the invoice banner after printing, a printed invoice, the invoices tab.
