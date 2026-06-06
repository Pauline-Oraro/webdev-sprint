# 🍽️ Recipe Finder App

A clean, responsive web app that lets users search for recipes from around the world using the free [TheMealDB API](https://www.themealdb.com/api.php).

---

## ✨ Features

- **Search recipes** by meal name or keyword
- **Browse results** displayed as cards with meal images and categories
- **View full recipe details** including:
  - Ingredients and measurements
  - Step-by-step cooking instructions
  - A YouTube video link (when available)
- **Error handling** for empty searches, no results, and network failures
- **Keyboard support** — press `Enter` to search
- **Back navigation** to return to search results from meal details

---

## 🗂️ Project Structure

```
02_PROJECT/
├── index.html   # App markup and layout
├── index.css    # Styles
└── index.js     # App logic and API calls
```

---

## 🚀 Getting Started

No installation or build step needed — this is a plain HTML/CSS/JS project.

1. Clone or download the repository.
2. Open `index.html` in your browser directly, or serve it with a local dev server (e.g. VS Code Live Server).

> **Note:** The `<script>` and `<link>` tags use absolute paths (`/05_WEEK/02_PROJECT/...`). If you're not serving from the project root, update those paths to relative ones (`./index.css`, `./index.js`).

---

## 🔌 API

Data is sourced from **[TheMealDB](https://www.themealdb.com/api.php)** — a free, public meal database.

| Endpoint | Purpose |
|---|---|
| `search.php?s={term}` | Search meals by name |
| `lookup.php?i={id}` | Fetch full details for a meal |

No API key is required for the free tier.

---

## 🛠️ How It Works

1. The user types a search term and clicks **Search** (or presses `Enter`).
2. The app fetches matching meals from TheMealDB and renders them as cards.
3. Clicking a meal card fetches its full details (ingredients, instructions, video).
4. The detail view scrolls into view; the **Back to recipes** button hides it.

---

## 📦 Dependencies

- [Font Awesome 6.7.2](https://fontawesome.com/) — icons (loaded via CDN, no install needed)

---

## 🌐 Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge). Uses `async/await` and `fetch`, so IE is not supported.

---

## 📄 License

Free to use for personal and educational projects.
