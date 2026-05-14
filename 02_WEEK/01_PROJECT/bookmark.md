# Bookmark Saver

A simple browser-based bookmark manager that lets users save, view, and remove bookmarks — with persistence via `localStorage`.

---

## Features

- Add bookmarks with a custom name and URL
- Validates that both fields are filled and that the URL starts with `http://` or `https://`
- Removes individual bookmarks from the list and storage
- Persists bookmarks across page refreshes using `localStorage`
- Automatically loads saved bookmarks on page load

---

## Project Structure

```
01_PROJECT/
├── bookmark.html   # App markup and layout
├── bookmark.css    # Styles (external)
└── bookmark.js     # App logic
```

---

## How It Works

### On Page Load

```js
document.addEventListener("DOMContentLoaded", loadBookmarks)
```

When the DOM is ready, `loadBookmarks()` reads all saved entries from `localStorage` and renders them into the list.

### Adding a Bookmark

1. User fills in the **Bookmark Name** and **Bookmark URL** inputs.
2. Clicks the **Add Bookmark** button.
3. The click handler validates input:
   - Both fields must be non-empty.
   - URL must start with `http://` or `https://`.
4. If valid:
   - `addBookmark(name, url)` — renders a new `<li>` with a link and a Remove button.
   - `saveBookmark(name, url)` — persists the entry to `localStorage`.
   - Input fields are cleared.

### Removing a Bookmark

Each bookmark item has a **Remove** button. Clicking it:

- Removes the `<li>` element from the DOM.
- Calls `removeBookmarkFromStorage(name, url)` to filter it out of `localStorage`.

---

## Functions

| Function | Description |
|---|---|
| `addBookmark(name, url)` | Creates and appends a bookmark `<li>` to the list |
| `saveBookmark(name, url)` | Pushes a new `{ name, url }` object to `localStorage` |
| `loadBookmarks()` | Reads `localStorage` and renders all saved bookmarks |
| `getBookmarksFromStorage()` | Returns the parsed bookmarks array from `localStorage` (or `[]`) |
| `removeBookmarkFromStorage(name, url)` | Filters out the matching bookmark and updates `localStorage` |

---

## Storage Format

Bookmarks are stored under the key `"bookmarks"` in `localStorage` as a JSON array:

```json
[
  { "name": "Google", "url": "https://google.com" },
  { "name": "GitHub", "url": "https://github.com" }
]
```

---

## Validation Rules

| Rule | Behavior |
|---|---|
| Empty name or URL | `alert("Please enter both name and url")` |
| URL missing `http://` or `https://` | `alert("Please enter a valid url starting with http:// or https://")` |

---

## Usage

1. Open `bookmark.html` in a browser (served via a local server or file path matching the `/02_WEEK/01_PROJECT/` route).
2. Enter a bookmark name and a full URL.
3. Click **Add Bookmark**.
4. Bookmarks persist after closing and reopening the browser tab.
5. Click **Remove** next to any bookmark to delete it.

---

## Dependencies

No external libraries required. Uses vanilla HTML, CSS, and JavaScript with the native browser `localStorage` API.