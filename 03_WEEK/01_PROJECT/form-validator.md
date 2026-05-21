# Form Validator

A lightweight, client-side registration form validator built with vanilla HTML, CSS, and JavaScript. It provides real-time validation feedback on user inputs — no libraries or frameworks required.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Validation Rules](#validation-rules)
- [How It Works](#how-it-works)
- [Functions Reference](#functions-reference)
- [Customization](#customization)

---

## Demo

Fill out the registration form and click **Register**. Each field is validated on submission, with inline error or success indicators displayed beneath each input.

---

## Features

- ✅ Required field checks for all inputs
- ✅ Username length validation (3–15 characters)
- ✅ Email format validation via regex
- ✅ Password length validation (6–25 characters)
- ✅ Password and confirm password match check
- ✅ Inline error messages per field
- ✅ Visual success/error state styling per field
- ✅ Form resets cleanly after successful submission
- ✅ Zero external dependencies

---

## Validation Rules

| Field            | Rule                                             |
|------------------|--------------------------------------------------|
| Username         | Required · Minimum 3 characters · Maximum 15 characters |
| Email            | Required · Must match standard email format (`x@x.x`) |
| Password         | Required · Minimum 6 characters · Maximum 25 characters |
| Confirm Password | Required · Must exactly match the Password field |

Validation runs in two phases on form submission:

1. **Phase 1 — Required check:** All fields must be non-empty. If any are empty, errors are shown and further validation stops.
2. **Phase 2 — Format/length check:** Only runs if all required fields pass. Each field is checked against its specific rule.

---

## How It Works

### HTML Structure

Each input field is wrapped in a `.form-group` div that holds three elements:

```html
<div class="form-group">
    <label for="fieldName">Field Label</label>
    <input type="text" id="fieldName" placeholder="..." />
    <small></small>   <!-- Error messages are injected here -->
</div>
```

### State Classes

JavaScript toggles CSS classes on `.form-group` to reflect validation state:

| Class                   | Meaning                        |
|-------------------------|--------------------------------|
| `form-group`            | Default (untouched)            |
| `form-group success`    | Field passed validation        |
| `form-group error`      | Field failed validation        |

Your CSS should define `.form-group.error` and `.form-group.success` styles (e.g. red/green borders and label colors).

### Submission Flow

```
User clicks Register
        │
        ▼
checkRequired([username, email, password, confirmPassword])
        │
   All filled?
   ┌────┴────┐
  No        Yes
   │         │
Show         ├── checkLength(username, 3, 15)
errors       ├── checkEmail(email)
             ├── checkLength(password, 6, 25)
             └── checkPasswordsMatch(password, confirmPassword)
                        │
                   All valid?
                ┌────┴────┐
               No        Yes
                │         │
           Show        Alert "Registration successful!"
          errors       Reset form + clear state classes
```

---

## Functions Reference

### `checkRequired(inputArray) → boolean`

Iterates over an array of input elements. Marks each empty field as an error and non-empty fields as successful.

```js
checkRequired([username, email, password, confirmPassword]);
```

---

### `checkLength(input, min, max) → boolean`

Validates that the input's value length falls within `[min, max]`. Shows an appropriate error if too short or too long, otherwise marks success.

```js
checkLength(username, 3, 15);
checkLength(password, 6, 25);
```

---

### `checkEmail(email) → boolean`

Tests the email value against the regex `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`. Marks success or shows an "Email is not valid" error.

```js
checkEmail(email);
```

---

### `checkPasswordsMatch(input1, input2) → boolean`

Compares the values of two inputs. If they differ, shows a "Passwords do not match" error on the second field.

```js
checkPasswordsMatch(password, confirmPassword);
```

---

### `showError(input, message)`

Sets the parent `.form-group` class to `"form-group error"` and injects the error message into the sibling `<small>` element.

---

### `showSuccess(input)`

Sets the parent `.form-group` class to `"form-group success"`, clearing any previous error state.

---

### `formatFieldName(input) → string`

Capitalizes the first letter of the input's `id` to produce a human-readable field name for error messages (e.g. `confirmPassword` → `"ConfirmPassword"`).

---
