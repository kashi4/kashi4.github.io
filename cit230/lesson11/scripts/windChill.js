const apiURL ='https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=4382ef58145d424ca7ee8af38e82d6d6&units=imperial';

fetch(apiURL)
.then(
    (Response) => Response.json()
        
)

.then(
    (currentWeather) => {
       /* console.log(currentWeather);*/

/*let description = currentWeather.weather.description;*/
let currentTemp = currentWeather.main.temp;
let windSpeed = currentWeather.wind.speed;
let humidity = currentWeather.main.humidity;
let windChill;

if (currentTemp < 50 && windSpeed > 3) {
    windChill = 35.74 + 0.6215 * currentTemp - 35.75 * Math.pow(windSpeed,0.16)
                 + 0.427 * currentTemp * Math.pow(windSpeed);
}

document.getElementById("currentTemp").innerHTML = currentTemp + '&deg';
/*document.getElementById("description").innerHTML = description;*/
document.getElementById("humidity").innerHTML = humidity + '%';
document.getElementById("windSpeed").innerHTML = windSpeed + 'mph';
document.getElementById("windChill").innerHTML = windChill + '&deg';
if (windChill === 0) {
    document.getElementById("windChill").innerHTML = 'N/A';
}
else {
    document.getElementById("windChill").innerHTML = Math.round(windChill);
}

}
);