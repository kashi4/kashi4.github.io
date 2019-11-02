let currentTemp = 41;
let windSpeed = 8;
let windChill = 35.74 + 0.6215 * currentTemp - 35.75 * Math.pow(windSpeed,0.16)
                 + 0.427 * currentTemp * Math.pow(windSpeed);
document.getElementById("currentTemp").innerHTML = currentTemp;
document.getElementById("windSpeed").innerHTML = windSpeed;
document.getElementById("windChill").innerHTML = windChill;