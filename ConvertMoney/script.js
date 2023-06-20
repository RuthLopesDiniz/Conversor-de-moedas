const convertButton = document.querySelector(".convert-Button")
const currencySelector = document.querySelector(".currency-selector")
const currencyImg = document.querySelector('.currency-img')
const changeNameCurrency = document.getElementById('currency-name')

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")//valor em real
    const currencyValueConverted = document.querySelector(".currency-value")//outras moedas
   
    const dolarToday = 5.00
    const euroToday = 6.00

    if (currencySelector.value == "Dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelector.value == "Euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }
    
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeName(){
    const changeNameCurrency = document.getElementById('currency-name')

    if (currencySelector.value == "Dolar") {
        changeNameCurrency.innerHTML = "US$ Dólar Americano"
        currencyImg.src= './assets/dolar.png'
    }
    if (currencySelector.value == "Euro") {
        changeNameCurrency.innerText = "€ Euro"
        currencyImg.src= './assets/euro.png'
    }
    convertValues()
}

currencySelector.addEventListener("change", changeName)
convertButton.addEventListener("click", convertValues)
