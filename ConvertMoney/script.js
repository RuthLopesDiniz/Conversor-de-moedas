const convertButton = document.querySelector(".convert-Button") 

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const CurrencyValueToConvert = document.querySelector(".currency-value-to-convert")//valor em real
    const CurrencyValueConverted = document.querySelector(".currency-value")//outras moedas

    const dolarToday = 5.00

    const convertedValue = inputCurrencyValue / dolarToday

    CurrencyValueToConvert.innerHTML = inputCurrencyValue
    CurrencyValueConverted.innerHTML = convertedValue

}

convertButton.addEventListener("click", convertValues)