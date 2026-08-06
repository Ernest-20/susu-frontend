# Susu — Frontend

A responsive web app for daily, weekly, and monthly group and individual savings, with admin-approved soft credit purchases from partner shops. Works across mobile, tablet, and desktop.

🔗 **Live demo:** https://susu-frontend-roan.vercel.app/
> Backend repo: `susu-backend` (link once created) — this repo is frontend-only and talks to it over REST.

---

## Features

- Register/login as an **individual** or a **group**
- Choose a **daily, weekly, or monthly** savings plan with live projection calculations
- Track deposits, streaks, and full transaction history
- **Group dashboards** — manage multiple groups from one account, view member credit scores
- **Admin approval flow** for soft-credit purchase requests
- **Credit marketplace** — browse partner shop products (electronics, appliances, furniture) eligible for soft credit
- **Identity verification (KYC)** — ID, selfie, and address proof upload
- Fully responsive — mobile-first, scales to tablet and desktop
- Client-side routing with React Router, global state via Zustand

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React (Vite) |
| Styling | Tailwind CSS v4 |
| Routing | React Router |
| State | Zustand |
| HTTP client | Axios (mock service layer for now) |
| Forms/validation | React Hook Form + Zod |
| Deployment | Vercel |

---

## Getting Started

### 1. Clone the repository
\`\`\`bash
git clone https://github.com/Ernest-20/susu-frontend.git
cd susu-frontend
\`\`\`

### 2. Install dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Configure environment variables
Copy \`.env.example\` to \`.env\`:
\`\`\`env
VITE_API_BASE_URL=http://localhost:5000/api
\`\`\`

### 4. Start the development server
\`\`\`bash
npm run dev
\`\`\`

---

## Status

✅ Frontend phase complete (Weeks 1–2) — now moving into backend development (\`susu-backend\`) to replace the mock API layer with real endpoints.