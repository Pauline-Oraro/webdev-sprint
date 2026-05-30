# 💳 Pricing Cards

A clean, responsive pricing page built with pure HTML and CSS. Features three pricing tiers, hover animations, a highlighted "Most Popular" card, and a customer testimonial section — all styled with a dark green-accented theme.

---

## 📁 Project Structure

```
project/
├── index.html      # Markup for the pricing page
└── index.css       # All styling and animations
```

---

## ✨ Features

- **Three pricing tiers** — Basic (KES 900/mo), Pro (KES 2,900/mo), and Enterprise (KES 7,900/mo)
- **Most Popular badge** — the Pro card is visually elevated and highlighted with a green border
- **Hover animations** — cards lift on hover with smooth transitions
- **Pulsing CTA button** — the Pro plan's "Get Started" button has a subtle pulse animation to draw attention
- **Feature checklist** — each card shows included and excluded features with check/cross icons (Font Awesome)
- **Testimonial section** — a customer quote card at the bottom of the page
- **Fully responsive** — single-column layout on screens 768px and below

---

## 🎨 Design System

The design uses CSS custom properties defined in `:root` for easy theming:

| Variable | Value | Purpose |
|---|---|---|
| `--primary-color` | `#4ade80` | Green accent (prices, icons, badges) |
| `--primary-dark` | `#22c55e` | Hover states |
| `--primary-light` | `#86efac` | Gradient highlights |
| `--bg-dark` | `#1a1a1a` | Page background |
| `--card-bg` | `#252525` | Card background |
| `--card-hover` | `#2e2e2e` | Card hover background |
| `--text-light` | `#f3f4f6` | Primary text |
| `--text-gray` | `#9ca3af` | Secondary/muted text |

**Font:** `Courier New, Courier, monospace`

---

## 🧱 Key Components

### Pricing Cards (`.card`)

- Built with CSS Grid (`auto-fit`, `minmax(300px, 1fr)`) for responsive layout
- Each card has a header (icon, name, price), body (feature list), and footer (CTA button)
- Hover effect: `translateY(-10px)` lift + deeper shadow

### Popular Card (`.popular`)

- Scaled up slightly (`scale(1.05)`) to visually stand out
- Green border (`--primary-color`) and absolute-positioned badge
- On mobile, scaling is removed for a cleaner stacked layout

### Buttons

- `.btn` — neutral ghost button (white border, transparent background)
- `.btn-accent` — filled green button with a `@keyframes pulse` glow animation (used on the Pro card)

### Testimonial (`.testimonial`)

- Centered quote card with a decorative quote icon, customer avatar (circular, green border), and role label

---

## 📱 Responsive Behavior

At `max-width: 768px`:

- The grid collapses to a single column (`grid-template-columns: 1fr`)
- Card scaling and the popular card elevation are reset
- Hover lift is reduced to `translateY(-5px)`
- Spacing and font sizes are slightly reduced

---

## 🔗 Dependencies

- [Font Awesome 6.7.2](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css) — icons (check, times, rocket, gem, building, quote-left)
- [Random User API](https://randomuser.me) — testimonial avatar image

No build tools or JavaScript required. Open `index.html` directly in any modern browser.

---
