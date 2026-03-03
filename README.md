# z-portfolio

Portfolio website scaffold for Jakob Krogh Petersen.

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Pages
- `/` Home (intro + featured projects)
- `/projects` Project list with case-style cards
- `/about` About + background + contact

## Project content source
Edit:
- `src/data/projects.ts`

This is where you add new projects over time.

## Run locally
```bash
npm install
npm run dev
```

## Deploy (free)
### Option A: Vercel (recommended)
1. Push this repo to GitHub
2. Import repo at https://vercel.com/new
3. Deploy (defaults should work)

### Option B: GitHub Pages
Possible, but requires extra config for Next.js static export.

## Next edits to make
- Add real GitHub + LinkedIn links on About page
- Replace placeholder project links (`#`) with real URLs
- Add concrete metrics in project results
