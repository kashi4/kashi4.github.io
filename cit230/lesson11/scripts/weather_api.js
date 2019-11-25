const apiURL ='https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=4382ef58145d424ca7ee8af38e82d6d6&units=imperial';

fetch(apiURL)
.then(
    (Response) => Response.json()
        
)

.then(
    (currentWeather) => {
        console.log(currentWeather);

        let currentTemp =currentWeather.main.temp;
        let currentImageIcon = currentWeather.weather[0].icon;
        let currentImage = 
        'https://openweathermap.org/img/w' + currentImageIcon +

        document.querySelector('#current-temp').textContent = currentTemp;
    }
);



