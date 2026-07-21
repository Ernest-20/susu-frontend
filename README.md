# Susu — Frontend

A responsive web app for daily, weekly, and monthly group and individual savings, with admin-approved soft credit purchases from partner shops. Works across mobile, tablet, and desktop.

> Backend repo: `susu-backend` (link once created) — this repo is frontend-only and talks to it over REST.

---

## Features

- Register/login as an **individual** or a **group**
- Choose a **daily, weekly, or monthly** savings plan
- Track deposits, streaks, and balance history
- **Group dashboards** — admins view member contributions and credit scores
- **Admin approval flow** for soft-credit purchase requests
- **Credit marketplace** — browse partner shop products (electronics, appliances, furniture) eligible for soft credit
- Fully responsive — mobile-first, scales to tablet and desktop

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React (Vite) |
| Styling | Tailwind CSS |
| Routing | React Router |
| State | Zustand (or React Context, TBD) |
| HTTP client | Axios |
| Forms/validation | React Hook Form + Zod |
| Deployment | Vercel |

---

## Project Structure

```text
.
├── src
│   ├── assets
│   ├── components      # reusable UI (Button, Input, Card, Toggle, etc.)
│   ├── layouts          # shared page shells (AppLayout, AuthLayout)
│   ├── pages
│   │   ├── auth          # Register, Login
│   │   ├── dashboard      # Individual dashboard
│   │   ├── plans          # Create / manage savings plan
│   │   ├── groups         # Group view + admin approval
│   │   └── marketplace    # Shop / soft credit
│   ├── services         # API layer (axios instances, endpoints)
│   ├── store             # global state
│   ├── hooks
│   ├── utils
│   ├── App.jsx
│   └── main.jsx
├── public
├── .env.example
├── index.html
├── package.json
└── vite.config.js
```

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Ernest-20/susu-frontend.git
cd susu-frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env` file in the project root:
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### 4. Start the development server
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

### 5. Build for production
```bash
npm run build
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## Design Reference

Wireframes for the 5 core screens (onboarding, dashboard, create plan, group/admin approval, marketplace) live in `/design/wireframes.html` — open in any browser, or import into Figma using the **html.to.design** plugin for an editable version.

---

## Wireframe Design



---

## Roadmap

See `ROADMAP.md` for the full day-by-day build plan (2 weeks frontend, 3 weeks backend).

---

## Status

🚧 In active development — built as a portfolio project demonstrating full-stack REST API design, responsive frontend architecture, and real-world fintech/credit-scoring logic.
