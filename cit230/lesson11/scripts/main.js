
// get day of the week
var weekDayNumber = currentDate.getDay();

var daysOfWeek = [
    'Sunday','Monday','Tuesday','Wednesday',
    'Thursday','Friday','Saturday',

];

// Fetch the data
// function getWeather()

const apiForecastURL = 'http://api.openweathermap.org/data/2.5/forecast/?id=5604473&appid=4382ef58145d424ca7ee8af38e82d6d6&units=imperial';
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
                if(//forecast.dt_txt.includes(dateString) &&
                forecast.dt_txt.includes(hourString)) {
                
                    const element = document.getElementById(`temp${counter}`);
                    element.innerHTML = forecast.main.temp + '&deg';

                    // increment variables
                    counter += 1;
                    nextDate.setDate(nextDate.getDate() + 1);
                    dateString = getDateString(nextDate);
                }
            } 
        );
    }
);

