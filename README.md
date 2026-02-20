# 🚀 DevFolio — Experiment 4

A modern **Single Page Application (SPA) Portfolio Website** built using **React.js**, **React Router DOM**, **Vite**, and advanced React hooks.

---

## 📌 Project Overview

Personal portfolio website with 5 pages and global state management using React's Context API and useReducer pattern.

**Deployment:** `{uid}-4-deval-garg.vercel.app`

---

## ✨ Experiment 4 Changes

### 🆕 New Page — Skills & Experience (`/skills`)
The main Experiment 4 addition — demonstrates all three required hooks in one cohesive page:
- Live skill proficiency bars with endorse/un-endorse interaction
- Category filter (Frontend, Backend, Database, DevOps)
- Analytics summary cards (total skills, avg proficiency, endorsements, top skill)
- Category breakdown sidebar with visual bars

### ✅ useContext
- `PortfolioContext` wraps the entire app via `PortfolioProvider`
- **Used in:** Navbar (theme toggle + bookmark count badge), Home (live code card), Skills (filter + endorse), Projects (bookmark add/remove), Footer (current theme display)
- Stores: `theme`, `bookmarks[]`, `skills[]`, `activeSkillFilter`

### ✅ useReducer
**6 action types defined in `PortfolioContext.jsx`:**

| Action | Effect |
|--------|--------|
| `TOGGLE_THEME` | Switches dark ↔ light theme globally |
| `ADD_BOOKMARK` | Adds project to bookmarks |
| `REMOVE_BOOKMARK` | Removes project from bookmarks |
| `CLEAR_BOOKMARKS` | Clears all bookmarks |
| `ENDORSE_SKILL` | Toggles endorsed state of a skill |
| `SET_SKILL_FILTER` | Updates active category filter on Skills page |

### ✅ useMemo
**Three useMemo usages:**

1. **`Skills.jsx`** — `filteredSkills`: Recomputes filtered skills array only when `state.skills` or `state.activeSkillFilter` changes
2. **`Skills.jsx`** — `analytics`: Derives endorsed count, avg proficiency, top skill, and per-category breakdown from skills array
3. **`Projects.jsx`** — `filteredProjects`: Filters projects by category + search term; only recalculates when filter/search changes
4. **`Projects.jsx`** — `stats`: Pre-computes project category counts

### ✅ React Router (from Exp 3, extended)
5 pages total:
- `/` — Home
- `/about` — About Me
- `/projects` — Projects with bookmarks
- `/skills` — **NEW: Skills & Experience (Exp 4 page)**
- `/contact` — Contact Form

---

## 🗂️ Folder Structure

```
src/
├── context/
│   └── PortfolioContext.jsx   ← useContext + useReducer
├── components/
│   ├── Navbar.jsx / Navbar.css
│   └── Footer.jsx / Footer.css
├── pages/
│   ├── Home.jsx / Home.css
│   ├── About.jsx / About.css
│   ├── Projects.jsx / Projects.css
│   ├── Skills.jsx / Skills.css   ← NEW (Exp 4)
│   └── Contact.jsx / Contact.css
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🛠️ Tech Stack

- React 18
- Vite
- React Router DOM v6
- Context API + useReducer + useMemo
- Vanilla CSS (custom design system)
- Google Fonts: Syne + Space Mono

---

## 📸 Screenshots

See `/screenshots` folder.

---

## 🚀 Running Locally

```bash
npm install
npm run dev
```
