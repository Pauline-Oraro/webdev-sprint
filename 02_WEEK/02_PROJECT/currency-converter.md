# Currency Converter

A simple browser-based currency converter that fetches live exchange rates from the [Open Exchange Rates API](https://open.er-api.com) and converts between any two supported currencies.

---

## Project Structure

```
02_PROJECT/
├── index.html
├── index.css
└── index.js
```

---

## How It Works

### On Page Load

When the page loads, `fetchCurrencies()` is called automatically. It hits the Open Exchange Rates API to retrieve all available currency codes and populates both the **From** and **To** `<select>` dropdowns dynamically.

### On Form Submit

When the user submits the form, `convertCurrency()`:

1. Reads the entered amount and selected currencies.
2. Validates that the amount is a positive number.
3. Fetches the latest rates for the selected **From** currency.
4. Calculates the converted amount using the target currency's rate.
5. Displays the result in the `#result` div.

---

## HTML Structure

```html
<div class="container">
  <h1>Currency Converter</h1>

  <form id="converter-form">
    <div class="form-group">
      <label for="amount">Amount</label>
      <input type="number" id="amount" placeholder="Enter amount" required />
    </div>

    <div class="form-group">
      <label for="from-currency">From</label>
      <select id="from-currency"></select>
    </div>

    <div class="form-group">
      <label for="to-currency">To</label>
      <select id="to-currency"></select>
    </div>

    <button type="submit">Convert</button>
  </form>

  <div id="result"></div>
</div>
```

---

## JavaScript

### DOM References

| Variable        | Element              | Purpose                            |
|-----------------|----------------------|------------------------------------|
| `converterForm` | `#converter-form`    | Listens for the submit event       |
| `amountInput`   | `#amount`            | Reads the user-entered amount      |
| `fromCurrency`  | `#from-currency`     | Stores the source currency value   |
| `toCurrency`    | `#to-currency`       | Stores the target currency value   |
| `resultDiv`     | `#result`            | Displays the conversion result     |

### Event Listeners

```javascript
window.addEventListener("load", fetchCurrencies);
converterForm.addEventListener("submit", convertCurrency);
```

### `fetchCurrencies()`

```javascript
async function fetchCurrencies() {
    const response = await fetch("https://open.er-api.com/v6/latest/USD");
    const data = await response.json();

    const currencyOptions = Object.keys(data.rates);

    currencyOptions.forEach((currency) => {
        const option1 = document.createElement("option");
        option1.value = currency;
        option1.textContent = currency;
        fromCurrency.appendChild(option1);

        const option2 = document.createElement("option");
        option2.value = currency;
        option2.textContent = currency;
        toCurrency.appendChild(option2);
    });
}
```

Fetches the full list of available currencies from the API and populates both dropdown menus.

### `convertCurrency(e)`

```javascript
async function convertCurrency(e) {
    e.preventDefault();

    const amount = parseFloat(amountInput.value);
    const fromCurrencyValue = fromCurrency.value;
    const toCurrencyValue = toCurrency.value;

    if (amount < 0) {
        alert("please enter a valid amount");
        return;
    }

    const response = await fetch(`https://open.er-api.com/v6/latest/${fromCurrencyValue}`);
    const data = await response.json();

    const rate = data.rates[toCurrencyValue];
    const convertedAmount = (amount * rate).toFixed(2);

    resultDiv.textContent = `${amount} ${fromCurrencyValue} = ${convertedAmount} ${toCurrencyValue}`;
}
```

Prevents the default form submission, fetches the exchange rate for the selected base currency, and renders the converted result.

---

## API Reference

**Endpoint:** `https://open.er-api.com/v6/latest/{base_currency}`

**Example response:**
```json
{
  "base_code": "USD",
  "rates": {
    "EUR": 0.91,
    "GBP": 0.78,
    "KES": 129.50,
    ...
  }
}
```

---

## Dependencies

- [Poppins Font](https://fonts.google.com/specimen/Poppins) via Google Fonts
- [Open Exchange Rates API](https://open.er-api.com) (free tier, no API key required)

---
