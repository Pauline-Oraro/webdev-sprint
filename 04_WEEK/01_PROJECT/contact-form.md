# 📬 Contact Form

A clean, responsive contact form built with vanilla HTML and CSS. Features a dark-themed UI, smooth animations, icon-enhanced inputs, and contact info display — no JavaScript required.

---

## ✨ Features

- **Dark theme** with a green accent color palette
- **Responsive layout** — adapts gracefully to mobile screens
- **Font Awesome icons** on every input field and contact info row
- **Fade-in animation** on page load
- **Focus states** with glowing green border on active inputs
- **Hover & active effects** on the submit button
- **Contact info section** displaying address, email, and phone number
- **No JavaScript** — pure HTML and CSS

---

## 🖥️ Preview

The form is centered on a dark (`#1a1a1a`) background. The card sits at a max width of `800px` and contains:

1. A heading and subtitle
2. A responsive grid of input fields (Name, Email, Phone, Subject)
3. A full-width message textarea
4. A "Send Message" submit button
5. A contact info footer with address, email, and phone

---

## 🎨 Design System

All design tokens are defined as CSS custom properties in `:root`:

| Variable          | Value       | Usage                          |
|-------------------|-------------|--------------------------------|
| `--primary-color`  | `#4ade80`   | Accent color (icons, borders, button) |
| `--primary-dark`   | `#22c55e`   | Button hover state             |
| `--bg-dark`       | `#1a1a1a`   | Page background                |
| `--text-light`    | `#f3f4f6`   | Primary text                   |
| `--text-gray`     | `#9ca3af`   | Placeholder & secondary text   |
| `--card-bg`       | `#252525`   | Form card background           |
| `--input-bg`      | `#333`      | Input field background         |
| `--border-radius` | `10px`      | Shared border radius           |

---

## 📐 Layout

- **Page layout:** Flexbox — vertically and horizontally centered
- **Input grid:** CSS Grid with `auto-fit` and a minimum column width of `240px`, creating a 2-column layout on wider screens and a single column on narrow ones
- **Message field & button:** Span the full grid width via natural flow
- **Contact info:** Flexbox column with consistent `15px` gaps

---

## 📱 Responsive Behaviour

| Breakpoint     | Behaviour                                          |
|----------------|----------------------------------------------------|
| > 600px        | 2-column input grid, `40px` card padding           |
| ≤ 600px        | Single-column input grid, reduced padding & heading size |

---

## 🔗 Dependencies

| Dependency    | Version | Source         |
|---------------|---------|----------------|
| Font Awesome  | 6.7.2   | cdnjs CDN      |

The Font Awesome stylesheet is loaded via CDN with SRI integrity verification:

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
  integrity="sha512-Evv84Mr4kqVGRNSgIGL/..."
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
```

---

## 🧩 Form Fields

| Field     | Type       | Icon                  | Required |
|-----------|------------|-----------------------|----------|
| Name      | `text`     | `fa-user`             | ✅ Yes   |
| Email     | `email`    | `fa-envelope`         | ✅ Yes   |
| Phone     | `tel`      | `fa-phone`            | ❌ No    |
| Subject   | `text`     | `fa-tag`              | ✅ Yes   |
| Message   | `textarea` | `fa-message`          | ✅ Yes   |

> The form uses native HTML5 validation via the `required` attribute. No custom validation logic is included.

---

## 📍 Contact Info Section

Displayed below the form, separated by a subtle horizontal rule:

| Icon                  | Detail                        |
|-----------------------|-------------------------------|
| `fa-map-marker-alt`   | 123 Main Street, City, Country |
| `fa-envelope`         | pauline@gmail.com             |
| `fa-phone`            | +254 7171717177               |

---

## ⚙️ Animations & Interactions

| Element         | Effect                                                   |
|-----------------|----------------------------------------------------------|
| `.form-container` | Fades in and slides up `20px` over `0.5s` on load     |
| `input`/`textarea` | Green border + soft glow on `:focus`                 |
| `button`        | Lifts `2px` and glows green on `:hover`                  |
| `button`        | Returns to original position on `:active`                |

---

## 🚀 Getting Started

1. **Clone or download** the project files.
2. Open `index.html` in any modern browser — no build tools or server required.
3. To link the CSS correctly, ensure the stylesheet path matches your directory structure:
   ```html
   <link rel="stylesheet" href="/04_WEEK/01_PROJECT/index.css" />
   ```
   If running locally from the project folder, update this to:
   ```html
   <link rel="stylesheet" href="index.css" />
   ```

---

## 🌐 Browser Support

Works in all modern browsers that support CSS Grid, CSS Custom Properties, and CSS animations (Chrome, Firefox, Safari, Edge).

---
