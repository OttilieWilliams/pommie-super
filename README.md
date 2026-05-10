# PommieSuper

Helps UK nationals living in Australia answer one question: **what's the tax case for paying extra into your super?**

The app asks two questions (visa type and plans), then shows a tailored educational results page with the answer and the reasoning behind it. It is informational only — not financial advice.

## Running locally

### Prerequisites

- Ruby 4.0.3 — install via [rbenv](https://github.com/rbenv/rbenv): `rbenv install 4.0.3 && rbenv global 4.0.3`
- Node.js 22 — install via [nvm](https://github.com/nvm-sh/nvm) or [Homebrew](https://brew.sh)
- pnpm — `npm install -g pnpm`
- Docker — for Redis

### Setup

```bash
# Install dependencies
cd api && bundle install
cd web && pnpm install
```

### Running

Open three terminals:

```bash
# Terminal 1 — Redis
docker compose up

# Terminal 2 — Rails API (http://localhost:3000)
cd api && bundle exec rails server

# Terminal 3 — React frontend (http://localhost:5173)
cd web && pnpm dev
```

## Production

Deployment hasn't been set up yet. The plan is:

- **API** — [Fly.io](https://fly.io) via Docker (the `api/Dockerfile` is production-ready)
- **Frontend** — built to static files (`pnpm build`) and deployed to Vercel, Netlify, or Fly.io

## Disclaimer

PommieSuper is for general information only, not financial advice. The calculations are simplified and may not reflect your full situation. Consult a qualified adviser before making decisions about your super.
