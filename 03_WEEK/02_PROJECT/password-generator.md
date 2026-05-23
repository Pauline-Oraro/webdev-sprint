# Password Generator (Week 3 — Project 2)

## Project Overview

A simple, client-side Password Generator implemented for Week 3, Project 2. This small app lets users generate secure, random passwords by choosing length and character sets (lowercase, uppercase, numbers, symbols).

## Files

- [index.html](03_WEEK/02_PROJECT/index.html) — UI and markup
- [index.css](03_WEEK/02_PROJECT/index.css) — Styles for the UI
- [index.js](03_WEEK/02_PROJECT/index.js) — Main generator logic and event handlers
- [password-generator.md](03_WEEK/02_PROJECT/password-generator.md) — Project notes and instructions

## Features

- Choose password length
- Toggle inclusion of lowercase, uppercase, numeric and symbol characters
- Generate and copy password to clipboard
- Basic validation of user input

## Usage

1. Open the project folder and open the `index.html` file in your browser. The simplest options are:

```powershell
# From the project folder, open directly (double-click) or run a local server:
python -m http.server 8000
# then open http://localhost:8000/03_WEEK/02_PROJECT/index.html
```

2.On the page:

- Select the desired password length.
- Toggle which character sets to include (lowercase, uppercase, numbers, symbols).
- Click the "Generate" button to create a password.
- Use the copy button (if available) to copy the generated password to your clipboard.

## Options & Controls

- Length: controls how many characters the generated password contains.
- Lowercase / Uppercase / Numbers / Symbols: include or exclude those character sets.
- Generate: creates a new password using selected options.
- Copy: copies the generated password to the clipboard.

## How it works (high level)

1. The UI collects user preferences (length and which character sets to include).
2. The script compiles a character pool from selected sets and draws random characters until the requested length is reached.
3. The password is displayed to the user and can be copied to the clipboard.

Note: Implementation details (for example: guaranteeing at least one character from each selected set) live in `index.js`.

## Development

- Edit `index.js`, `index.html`, and `index.css` to modify behavior or appearance.
- Use a local static server for testing (example above) or open `index.html` directly in a modern browser.

## Accessibility & Testing

- Verify keyboard navigation works for form controls.
- Check that generated passwords are readable by screen readers if the app exposes the value in a text field.
- Test edge cases: minimum/maximum lengths, no character sets selected (app should show validation/error).

## Deployment

- This is a static web project — it can be hosted on GitHub Pages, Netlify, Vercel, or any static-hosting provider.

## Next Steps / Improvements

- Add an entropy indicator to show password strength.
- Ensure at least one character from each selected group is present in the generated password.
- Add tests for the generator logic.
- Improve styling and responsive layout.

## Credits

Built as part of Week 3, Project 2 (Password Generator) in the web development sprint.

## License

This project is provided as-is for learning purposes. Add a license file if you intend to reuse or publish it.
