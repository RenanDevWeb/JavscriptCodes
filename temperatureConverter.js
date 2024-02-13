
let resultadoConversão;


function converterFahrenheitToCelsius(temperatureInFahrenheit){
   resultadoConversão = (temperatureInFahrenheit -32) * (5/9)
   console.log(resultadoConversão.toFixed(2))
}

function converterCelsiusToFahrenheit(temperatureCelsius){
   resultadoConversão = (temperatureCelsius * (9/5) ) +32 
   console.log(resultadoConversão.toFixed(2))
}


function converter(temperature, option){
  if(option == "Fahrenheit"){
    let resultadoConversão = (temperature * (9/5) ) +32 
    console.log(resultadoConversão.toFixed(2))
  }

  if(option =="Celsius" ){
    let resultadoConversão = (temperature -32) * (5/9)
    console.log(resultadoConversão.toFixed(2))
  }


}


converter(72,"Fahrenheit")