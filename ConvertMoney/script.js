const convertButton = document.querySelector(".convert-Button")
const currencySelector = document.querySelector(".currency-selector")
const currencySelectorFirst = document.querySelector(".currency-selector-first")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")//valor em real
    const currencyValueConverted = document.querySelector(".currency-value")//outras moedas

    const dolarToday = 5.00
    const euroToday = 6.00
    const libraToday = 6.08
    const bitcoinToday = 142846.54

    if(currencySelectorFirst.value == "R"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }
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

    if(currencySelector.value == "Real" && currencySelectorFirst.value == "R"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }
    if(currencySelector.value == "Dolar" && currencySelectorFirst.value == "D"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }
     if(currencySelector.value == "Euro" && currencySelectorFirst.value == "E"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }
    if(currencySelector.value == "Libra" && currencySelectorFirst.value == "L"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }
    if(currencySelector.value == "Bitcoin" && currencySelectorFirst.value == "B"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-GB", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-GB", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }

    /*============= Do dolar para outras moedas */
    else if (currencySelectorFirst.value == "D" && currencySelector.value =="Euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * 0.82) 
    }
    else if (currencySelectorFirst.value == "D" && currencySelector.value =="Libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue*0.78)
    }
    else if (currencySelectorFirst.value == "D" && currencySelector.value =="Bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue*0.0000327574)
        }
    

    /*============= Do euro para outras moedas */
    if(currencySelectorFirst.value == "E" && currencySelector.value == "Dolar"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue*1.08)  
    }
    else if(currencySelectorFirst.value == "E" && currencySelector.value == "Libra"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue*0.85)  
    }
    else if(currencySelectorFirst.value == "E" && currencySelector.value == "Bitcoin"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue*0.0000356850)  
    }
    else if(currencySelectorFirst.value == "E" && currencySelector.value == "Real"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue*5.21)  
    }

    /*============= Do libra para outras moedas */
    if(currencySelectorFirst.value == "L" && currencySelector.value == "Real"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue*6.08033)  
    }
    else if(currencySelectorFirst.value == "L" && currencySelector.value == "Dolar"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue*1.27)  
    }
    else if(currencySelectorFirst.value == "L" && currencySelector.value == "Euro"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue*1.16)  
    }
    else if(currencySelectorFirst.value == "L" && currencySelector.value == "Bitcoin"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue*0.000041701702752)  
    }

    /*============= Do bitcoin para outras moedas */
    if(currencySelectorFirst.value == "B" && currencySelector.value == "Real"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue*0.00000686187)  
    }
    else if(currencySelectorFirst.value == "B" && currencySelector.value == "Dolar"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue*30435,84)  
    }
    else if(currencySelectorFirst.value == "B" && currencySelector.value == "Euro"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue*27796.53)  
    }
    else if(currencySelectorFirst.value == "B" && currencySelector.value == "Libra"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue*23932.58)  
    }
}

function changeNameFirst() {
    const changeNameCurrencyFirst = document.querySelector('.currency')
    const currencyImgFirst = document.querySelector(".currency-img-first")
    /* primeiro seletor*/

    if (currencySelectorFirst.value == "R") {
        changeNameCurrencyFirst.innerHTML = "R$ Real brasileiro"
        currencyImgFirst.src = './assets/real.png'
    }

    if (currencySelectorFirst.value == "D") {
        changeNameCurrencyFirst.innerHTML = "US$ Dólar Americano"
        currencyImgFirst.src = './assets/dolar.png'
    }

    if (currencySelectorFirst.value == "E") {
        changeNameCurrencyFirst.innerHTML = "€ Euro"
        currencyImgFirst.src = './assets/euro.png'
    }
    if (currencySelectorFirst.value == "L") {
        changeNameCurrencyFirst.innerHTML = "£ Libra Esterlina"
        currencyImgFirst.src = './assets/libra.png'
    }

    if (currencySelectorFirst.value == "B") {
        changeNameCurrencyFirst.innerHTML = "₿ Bitcoin"
        currencyImgFirst.src = './assets/bitcoin 1.png'
    }
    changeName()
    convertValues()
}

function changeName() {
    const changeNameCurrency = document.getElementById('currency-name')
    const currencyImg = document.querySelector('.currency-img')
    /* segundo seletor*/

    if (currencySelector.value == "Real") {
        changeNameCurrency.innerHTML = "R$ Real brasileiro"
        currencyImg.src = './assets/real.png'
    }
    if (currencySelector.value == "Dolar") {
        changeNameCurrency.innerHTML = "US$ Dólar Americano"
        currencyImg.src = './assets/dolar.png'
    }
    if (currencySelector.value == "Euro") {
        changeNameCurrency.innerText = "€ Euro"
        currencyImg.src = './assets/euro.png'
    }
    if (currencySelector.value == "Libra") {
        changeNameCurrency.innerText = "£ Libra Esterlina"
        currencyImg.src = './assets/libra.png'
    }
    if (currencySelector.value == "Bitcoin") {
        changeNameCurrency.innerText = "₿ Bitcoin"
        currencyImg.src = './assets/bitcoin 1.png'
    }
    convertValues()
}

function verificarVazio(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
if(inputCurrencyValue.value <= 0)
    console.log("digite algo para continuar")
}
convertButton.addEventListener("click", convertValues)
currencySelectorFirst.addEventListener("change", changeNameFirst)
currencySelector.addEventListener("change", changeName)
