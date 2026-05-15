// form
const converterForm = document.getElementById("converter-form");
//currency amount
const amountInput = document.getElementById("amount");
// from currency
const fromCurrency = document.getElementById("from-currency");
//to currency
const toCurrency = document.getElementById("to-currency");
// result of the conversion
const resultDiv = document.getElementById("result")

window.addEventListener("load", fetchCurrencies);

converterForm.addEventListener("submit", convertCurrency);

// fetch currencies from an api
async function fetchCurrencies() {
    const response = await fetch("https://open.er-api.com/v6/latest/USD");
    const data = await response.json();

    console.log(data);
    const currencyOptions = Object.keys(data.rates);

    currencyOptions.forEach((currency) =>{
        const option1 = document.createElement("option");
        option1.value = currency;
        option1.textContent = currency;
        fromCurrency.appendChild(option1);

        const option2 = document.createElement("option");
        option2.value = currency;
        option2.textContent = currency;
        toCurrency.appendChild(option2);
    })
}

async function convertCurrency(e){
    e.preventDefault();

    const amount = parseFloat(amountInput.value)
    const fromCurrencyValue = fromCurrency.value;
    const toCurrencyValue = toCurrency.value;

    if (amount < 0){
        alert("please enter a valid amount");
        return;
    }

    const response = await fetch(`https://open.er-api.com/v6/latest/${fromCurrencyValue}`);

    const data = await response.json();
    const rate = data.rates[toCurrencyValue];
    const convertedAmount = (amount * rate).toFixed(2);

    resultDiv.textContent = `${amount} ${fromCurrencyValue} = ${convertedAmount} ${toCurrencyValue}`;
}