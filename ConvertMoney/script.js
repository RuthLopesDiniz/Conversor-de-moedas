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
    const libraToday = 6.08
    const bitcoinToday =  142846.54

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

    if (currencySelector.value == "Libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelector.value == "Bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
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
    if(currencySelector.value == "Libra" ){
        changeNameCurrency.innerText = "£ Libra Esterlina"
        currencyImg.src= './assets/libra.png'
    }
    if(currencySelector.value == "Bitcoin" ){
        changeNameCurrency.innerText = "₿ Bitcoin"
        currencyImg.src= './assets/bitcoin 1.png'
    }
   /* if (currencySelector.value == "real") {
        changeNameCurrency.innerHTML = "R$ Real brasileiro"
        currencyImg.src= './assets/real.png'
    }*/
    convertValues()
}

currencySelector.addEventListener("change", changeName)
convertButton.addEventListener("click", convertValues)