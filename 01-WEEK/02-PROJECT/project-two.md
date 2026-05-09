# 🗂️ Simple Kanban Board

**Week 1 · Project 02** &nbsp;|&nbsp; webdev-sprint

---

## 📌 About

A lightweight drag-and-drop Kanban board with three columns — **To Do**, **In Progress**, and **Done**. Cards can be freely dragged between columns to track task status.

---

## ✨ Features

- **Drag & drop cards** — move tasks across columns using the HTML5 Drag and Drop API
- **Visual drop feedback** — columns highlight when a card is dragged over them
- **Zero dependencies** — built with pure HTML, CSS, and JavaScript, no libraries

---

## 🛠️ Built With

| Technology | Usage |
|------------|-------|
| HTML5 | Board structure, draggable card elements |
| CSS3 | Board layout, column styling, drag-over highlight |
| JavaScript | Drag and Drop API event handling |

---

## 💡 What I Learned

- How the **HTML5 Drag and Drop API** works — `dragstart`, `dragend`, `dragover`, `dragenter`, `dragleave`, and `drop` events
- Using `dataTransfer.setData()` and `getData()` to pass the dragged element's ID between events
- Why `e.preventDefault()` is required in `dragover` and `dragenter` to allow dropping
- Using `classList.add/remove` to toggle a visual highlight class on valid drop targets
- Event delegation vs. attaching individual listeners with `for...of` loops

---

## 📁 File Structure

```
project-02/
├── index.html   ← board structure & draggable cards
├── index.css    ← layout & drag-over styles
└── index.js     ← drag and drop event logic
```

---
