# 🎨 Color Palette Generator

**Week 1 · Project 01** &nbsp;|&nbsp; webdev-sprint

---

## 📌 About

A browser-based tool that generates a random 5-color palette at the click of a button. Each color can be copied to the clipboard by clicking either the color swatch or the copy icon.

---

## ✨ Features

- **Random palette generation** — produces 5 unique hex colors on each click
- **Click to copy** — click the swatch or the copy icon to copy the hex value to clipboard
- **Copy feedback** — icon briefly turns into a checkmark to confirm the copy
- **Responsive grid** — palette adjusts layout on smaller screens

---

## 🛠️ Built With

| Technology | Usage |
|------------|-------|
| HTML5 | Page structure & color boxes |
| CSS3 | Gradient background, grid layout, hover effects |
| JavaScript | Random color generation, clipboard API, DOM updates |
| Font Awesome 6 | Copy & check icons |
| Google Fonts (Poppins) | Typography |

---

## 💡 What I Learned

- Using `Math.random()` to generate random hex color codes
- Accessing and updating DOM elements dynamically with `querySelector`
- Working with the **Clipboard API** (`navigator.clipboard.writeText()`)
- Event delegation — one listener on the parent handles clicks on all child elements
- CSS Grid with `auto-fit` and `minmax()` for responsive layouts
- Providing UI feedback with `setTimeout` to reset icon state

---

## 📁 File Structure

```
project-01/
├── index.html   ← markup & color boxes
├── index.css    ← styles & responsive grid
└── index.js     ← palette logic & clipboard handling
```

---
