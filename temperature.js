// Compulsory Task1

//Variables that store different unicodes
const celciusSymbol = "\u2103"
const fahrenheitSymbol = "\u2109"
const kelvinSymbol = "\u212A"


//The program asks the user to input the metric they are converting from
let currentMetric = prompt(`In which metric is the temperature you are converting? 
C-Celcius
F-fahrenheit
K-Kelvin`).toLowerCase()

//The program asks the user for the number they want to convert
//The program will calculate the new metric using this number 
let userNumber = parseFloat(parseInt(prompt("Please input the number that you want to convert")))

//The program then asks user to input the metric they want to convert to
let newMetric = prompt(`To which metric would you like to convert the temperature?
C - Celcius
F - Fahrenheit
K - Kelvin`).toLowerCase()


//The program will compare the input with the newMetric variable and then output the new temperature metric
    if(currentMetric === "celcius" && newMetric === "fahrenheit" || currentMetric === "c" && newMetric === "f" ) {
        let celciusToFaherenheit = (userNumber * 9/5) + 32
        console.log(`${userNumber}${celciusSymbol} is ${celciusToFaherenheit}${fahrenheitSymbol}`)
    } else if (currentMetric === "celcius" && newMetric === "kelvin" || currentMetric ==="c" && newMetric ==="k"){
        let celciusToKelvin = (userNumber + 273.15)
        console.log(`${userNumber}${celciusSymbol} is ${celciusToKelvin}${kelvinSymbol}`)
    } else if(currentMetric === "fahrenheit" && newMetric === "celcius" || currentMetric === "f" && newMetric === "c"){
        let fahrenheitToCelcius = (userNumber -32) * (5/9)
        console.log(`${userNumber}${fahrenheitSymbol} is ${fahrenheitToCelcius}${celciusSymbol}`)
    }  else if(currentMetric === "fahrenheit" && newMetric === "kelvin" || currentMetric === "f" && newMetric ==="k"){
        let fahrenheitToKelvin = (userNumber + 459.67) * (5/9)
            console.log(`${userNumber}${fahrenheitSymbol} is ${fahrenheitToKelvin}${kelvinSymbol}`)
    } else if(currentMetric === "kelvin" && newMetric === "celcius" || currentMetric === "k" && newMetric === "c"){
        let kelvinToCelcius = userNumber - 273.15
        console.log(`${userNumber}${kelvinSymbol} is ${kelvinToCelcius}${celciusSymbol}`)
    } else if(currentMetric === "kelvin" && newMetric === "fahrenheit" || currentMetric ==="k" && newMetric === "f"){
        let kelvinToFahrenheit = (userNumber * 9/5 )- 459.67
        console.log(`${userNumber}${kelvinSymbol} is ${kelvinToFahrenheit}${fahrenheitSymbol}`)
    } else{
        console.log("please enter the correct temperature")
    }
    