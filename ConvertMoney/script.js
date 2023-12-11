const convertButton = document.querySelector (".convert-Button");
const currencySelector = document.querySelector(".currency-selector");
const currencySelectorFirst = document.querySelector(".currency-selector-first");

    const convertValues = async () => {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");//valor em real
    const currencyValueConverted = document.querySelector(".currency-value");//outras moedas

    const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(response => response.json())
    /*arrow function. Aqui eu crio uma varíável para gardar as informações acessadas pelo fetch, ele vai acessar a url, pegar os dados, colocar a
    resposta no formato json e armazenar na variável */

    console.log(data)
    /*javaScript funciona  de forma linear, quando iniciamos uma aplicação ele vai seguindo de cima para baixo para funcionar, execulta linha após
     linha. Porém em caso de api que usa informação externa.
     
     Promises: simplificando, estamos pedindo para o java script esperar enquanto ele busca infromações em outro lugar, como um servidor ou api.
     Async await: estou avisando para o javaScript que vai ter uma requisição assincrona e que deverá esperar o retorno dos dados para continuar a
     execução
     Async await só funciona dentro de funções, toda vez que for usar um código assincrono tem que ser dentro de uma função. Precisa avisar ao javaScript
     que é uma função assincrona, fazemos isso colocando async() na decalaração da função, para ele saber onde esperar colocamos await.
     */
     const dolarToday = data.USDBRL.high
     const euroToday = data.EURBRL.high
     const bitcoinToday = data.BTCBRL.high

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
        }).format(inputCurrencyValue / dolarToday )
    }
    if (currencySelector.value == "Euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
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
        }).format(inputCurrencyValue * dolarToday/euroToday) 
    }
    
    else if (currencySelectorFirst.value == "D" && currencySelector.value =="Bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue*dolarToday/bitcoinToday)
        }
         if(currencySelectorFirst.value == "D" && currencySelector.value == "Real"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(dolarToday*inputCurrencyValue)  
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
        }).format(inputCurrencyValue*euroToday/dolarToday)  
    }
    
    else if(currencySelectorFirst.value == "E" && currencySelector.value == "Bitcoin"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue*euroToday/bitcoinToday)  
    }
    else if(currencySelectorFirst.value == "E" && currencySelector.value == "Real"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue*euroToday)  
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
        }).format(inputCurrencyValue*bitcoinToday)  
    }
    else if(currencySelectorFirst.value == "B" && currencySelector.value == "Dolar"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue*bitcoinToday/dolarToday)  
    }
    else if(currencySelectorFirst.value == "B" && currencySelector.value == "Euro"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue*bitcoinToday/euroToday)  
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

convertButton.addEventListener("click", convertValues)
currencySelectorFirst.addEventListener("change", changeNameFirst)
currencySelector.addEventListener("change", changeName)
