# Flashcard Maker: build notes

Source: GitHub `GauravShah123/flashcard-app` (live at `gauravshah123.github.io/flashcard-app/`, which I could not open from this environment). Everything below is from the code.

## One-liner
A free, no-login flashcard tool built overnight for a friend whose study app went paid, 14 hours before an exam.

## Origin (from the existing page)
Midnight study room, friend cramming, Quizlet had gone paid. GPT-5 had just dropped, so you built a first version in minutes, then kept improving it over the next hour.

## What it is
Plain HTML, CSS and vanilla JavaScript. No framework, no build step, no backend, no account. Hosted on GitHub Pages. Data lives in `localStorage` (cards, and a separate key for preferences: sort order, direction, dark mode). About 600 lines of app code plus 155 for shortcuts and 43 for mobile nav. The only dependency is the Lucide icon set.

## Features (what the code actually does)
- **Spreadsheet-style editor:** a Term/Definition table; Enter moves to the next cell or adds a row, Tab moves across, Delete on an empty row removes it, Ctrl/Cmd+Backspace clears a cell.
- **Drag to reorder** rows via a handle.
- **Undo/redo** (Ctrl/Cmd+Z, Y or Shift+Z) with a history stack that groups typing by word so undo is not per-keystroke.
- **Autosave:** debounced (200 ms) to `localStorage`; Ctrl/Cmd+S forces a save and shows "saved".
- **Review mode:** flip cards (animated), next/previous (J/K or arrow keys), mark as learned, restart, Esc to return to editing.
- **Order and direction:** in order or shuffled (seeded shuffle, `mulberry32`), term-to-definition or definition-to-term.
- **CSV import and export.**
- **Dark mode**, remembered.
- **Mobile:** bottom nav (Edit / Review).
- **Keyboard shortcut discovery:** Ctrl/Cmd+Shift+/ opens a shortcuts sheet that tracks which shortcuts you have used and fires confetti when you have tried them all.

## Design decisions worth telling
- Solo-use tool, so `localStorage` instead of a backend: zero cost, zero login, instant load, works offline once loaded.
- Keyboard-first editing because the user is typing notes into it at speed.
- Rich text is kept in cells (HTML stored per card), not plain text only.

## Things I could not verify (ask before writing)
- Did the friend actually use it for the exam? Outcome, any quote.
- How long the first version really took, and which model/tool built it ("vibe coded" on the current page).
- Whether anyone else uses it (traffic, other users).
- Why the shortcut-discovery game: planned or a late add?
- Known limits: data is per-browser, no sync across devices, no sharing.

## Screens worth capturing
Edit table with real content, review mode mid-flip, shortcuts sheet, dark mode, mobile bottom nav.
