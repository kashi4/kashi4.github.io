function getFiveDayForcast(cityId) {

// create 5 day forcats
var daysOfWeek = [
    'Sunday','Monday','Tuesday','Wednesday',
    'Thursday','Friday','Saturday',

];

// Fetch the data
// function getWeather()

const apiForecastURL = 'http://api.openweathermap.org/data/2.5/forecast/?id= '+cityId +'&appid=4382ef58145d424ca7ee8af38e82d6d6&units=imperial';
fetch(apiForecastURL)
.then(
    (response) => response.json()

)
.then(
    (forecast) => {
        let nextDate = new Date();
        nextDate.setDate(nextDate.getDate() + 1);
        let dateString = getDateString(nextDate);
        let hourString = '18:00:00';
        let counter = 1;
     
        
        // loop through results
        forecast.list.forEach(
            (forecast) => {
                if(forecast.dt_txt.includes(hourString) ) {
               
                // add temp
                const tempElement = document.getElementById(`temp${counter}`);
                    tempElement.innerHTML = forecast.main.temp_max + '&deg';
                // add day of the week    
                let nextDate = new Date(forecast.dt_txt);

                const dayElement = document.getElementById(`day${counter}`);
                dayElement.innerHTML =daysOfWeek[nextDate.getDay()];

                // add image
                const imageElement = document.getElementById(`img${counter}`);
                imageElement.setAttribute('src','https://openweathermap.org/img/w/' +
                 forecast.weather[0].icon + '.png');
                 imageElement.setAttribute('alt',forecast.weather[0].description);

                    // increment variables
                    counter += 1;
                   
            } 
        ):
    }
);
}



    