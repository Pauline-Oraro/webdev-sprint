# Gender Predictor

A lightweight web app that predicts the gender of a name using the [Genderize.io](https://genderize.io) public API.

## Features

- Predicts gender (male/female) from any first name
- Displays confidence percentage and number of data points behind the prediction
- Handles unknown names gracefully
- Supports keyboard input — press **Enter** to predict
- Disables the button during the API call to prevent duplicate requests

## How It Works

1. The user types a name into the input field and clicks **Predict** (or presses Enter).
2. The app sends a `GET` request to `https://api.genderize.io/?name={name}`.
3. The API returns a JSON object with the predicted gender, probability, and sample count.
4. The result is displayed with a gender icon (♂️ / ♀️), confidence level, and data source size.

### Example API Response

```json
{
  "name": "james",
  "gender": "male",
  "probability": 0.98,
  "count": 12345
}
```

## Getting Started

No installation or build step required — it runs entirely in the browser.

1. Clone or download the project files.
2. Open `index.html` in your browser directly
3. Enter any first name and click **Predict**.

## API Reference

This project uses the free [Genderize.io API](https://genderize.io).

| Field         | Type   | Description                          |
|---------------|--------|--------------------------------------|
| `name`        | string | The queried name                     |
| `gender`      | string | `"male"`, `"female"`, or `null`      |
| `probability` | float  | Confidence score between 0 and 1     |
| `count`       | int    | Number of records used in prediction |

> **Note:** The free tier allows up to 100 requests per day per IP address.

## Browser Support

Works in all modern browsers that support the `fetch` API (Chrome, Firefox, Safari, Edge).

## License

This project is open source and free to use.
