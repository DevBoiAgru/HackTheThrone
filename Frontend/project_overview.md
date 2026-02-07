# HACKBEE Project Overview

## 1. Project Summary
**HackBee** is a gamified cybersecurity learning platform (similar to Duolingo). It features a "Lesson Map" interface where users progress through nodes (Mission Map) to unlock modules.

**Tech Stack**:
- **Framework**: React 19 + Vite
- **Language**: TypeScript
- **Styling**: CSS Modules + `clsx` for class management
- **Routing**: `react-router-dom` v7
- **Animations**: `framer-motion`
- **Icons**: `lucide-react`

---

## 2. Directory Structure (`src/`)

- **`assets/`**: Static images/media.
- **`components/`**: Reusable UI blocks.
    - **`layout/`**: Shell components (`Layout`, `Sidebar`, `TopBar`).
    - **`map/`**: Map-specific components (`LevelNode`).
    - **`quiz/`**: Lesson players (`LessonView`, `QuizView`).
- **`context/`**: Global state management (`GamificationContext` for XP, lives, streak).
- **`data/`**: Static content (`chapters.ts`).
- **`pages/`**: Main route views (`Home`, `LessonPage`).
- **`App.tsx`**: Main routing configuration.
- **`main.tsx`**: Entry point (renders `App`).

---

## 3. Routing & Navigation
Defined in `App.tsx`.

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Home` | The main Map view (Mission Map). |
| `/lesson/:id` | `LessonPage` | Dynamic route for specific lessons/quizzes. |
| `/leaderboard` | *Placeholder* | Future leaderboard feature. |
| `/practice` | *Placeholder* | Future practice terminal. |
| `/profile` | *Placeholder* | Future user profile. |

*All routes are wrapped in `Layout` which provides the Sidebar and TopBar.*

---

## 4. Key Components

### A. Layout (`components/layout`)
- **`Layout.tsx`**: The main wrapper. Uses `Outlet` to render the current page content. Contains `Sidebar` (left) and `TopBar` (top).
- **`Sidebar.tsx`**: Vertical navigation menu. Uses `react-router-dom`'s `Link` and `useLocation` for active state styling.
- **`TopBar.tsx`**: Displays user stats. Consumes `GamificationContext` to show **Lives** (Heart), **Streak** (Zap), and **XP** (Hexagon).

### B. Map (`components/map`)
- **`LevelNode.tsx`**: Represents a single "mission" hex on the home map.
    - Receives `chapter` data.
    - Handles locked/unlocked/completed visual states using CSS classes.
    - Animates hover/tap with `framer-motion`.

### C. Lesson & Quiz (`components/quiz`)
- **`LessonPage.tsx`** (Page): Logic router. Checks `chapter.type` ('lesson' vs 'quiz') and renders the appropriate view. Handles "404 Mission Not Found".
- **`LessonView.tsx`**:
    - For reading-based modules.
    - Shows title, description, and content.
    - Grants XP on completion via context.
- **`QuizView.tsx`**:
    - For interactive question modules.
    - Tracks `currentQIndex`, `selectedOption`, and `lives`.
    - Handles logic for correct/incorrect answers.
    - Deducts lives on wrong answers; navigates home if lives hit 0.
    - Grants XP on successful completion.

---

## 5. Data Flow
- **`data/chapters.ts`**: The source of truth for all content.
    - Exports `chapters` array.
    - Each chapter has `id`, `status` ('locked'/'available'/'completed'), `position` (x,y for map), and optional `questions`.
- **`GamificationContext`**: (Located in `context/`)
    - Manages global state: `lives`, `xp`, `streak`.
    - Provided at the root of `App.tsx` so it's accessible everywhere (`useGamification` hook).

## 6. Maintenance Notes
- **Adding a new Chapter**: Add an entry to `chapters.ts`. Ensure `id` is unique. Set `position` {x,y} carefully to fit on the SVG line path.
- **Modifying Styles**: Use the corresponding `*.module.css` file for scoped styling. Global variables (colors) are likely in `index.css`.
- **Game Logic**: Edit `QuizView.tsx` to change how scoring/lives work.
