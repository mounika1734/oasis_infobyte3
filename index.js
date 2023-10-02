let CelciusInput = document.querySelector('#Celsius > input')
let FahrenheitInput = document.querySelector('#Fahrenheit > input')
let KelvinInput = document.querySelector('#Kelvin > input')

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

/*celsius to fahrenheit and kelvin*/
CelciusInput.addEventListener('input',function(){
    let CTemp = parseFloat(CelciusInput.value)
    let FTemp = (CTemp*(9/5)) + 32
    let KTemp = CTemp + 273.15 

    FahrenheitInput.value = roundNumber(FTemp)
    KelvinInput.value = roundNumber(KTemp)
})

/*fahrenheit to celsius and kelvin*/
FahrenheitInput.addEventListener('input',function(){
    let FTemp = parseFloat(FahrenheitInput.value)
    let CTemp = (FTemp - 32) * (5/9)
    let KTemp = (FTemp - 32) * (5/9) + 273.15

    CelciusInput.value = roundNumber(CTemp)
    KelvinInput.value = roundNumber(KTemp)
})

/*kelvin to celsius and fahrenheit*/
KelvinInput.addEventListener('input',function(){
    let KTemp = parseFloat(KelvinInput.value)
    let CTemp = KTemp - 273.15
    let FTemp = (KTemp - 273.15) * (9/5) + 32


    CelciusInput.value = roundNumber(CTemp)
    FahrenheitInput.value = roundNumber(FTemp)
})

btn.addEventListener('click', ()=>{
    CelciusInput.value = ""
    FahrenheitInput.value = ""
    KelvinInput.value = ""
})

