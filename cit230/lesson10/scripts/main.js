var currentDate = new Date();
var currentDateString = new Date();

// get day of the week
var weekDayNumber = currentDate.getDay();

var daysOfWeek = [
    'Sunday','Monday','Tuesday','Wednesday',
    'Thursday','Friday','Saturday',

];
currentDateString = weekDay + ' ,';

var weekDay = daysOfWeek[weekDayNumber];
currentDateString = weekDay + ', ';
currentDateString += currentDate.getDate();
var months = [
    'January','February','March','April','May','June','July','August',
    'September','October', 'November', 'December',
];

var monthNumber = currentDate.getMonth();
var month = months[monthNumber];

currentDateString += ' ' + month;
currentDateString += ' ' + currentDate.getFullYear();
document.getElementById('currentDate').innerHTML = currentDateString;
//debugging

// create 5 day forcats

let currentDay = weekDayNumber;
for (let i =1; i < 6; i++) {
    // add one day to current day
    currentDay++;


// if current day is greater than 6 (Saturday), reset it to zero

if (currentDay > 6) {
    currentDay = 0;
}
const element = document.getElementById(`day${i}`);
element.innerHTML = daysOfWeek[currentDay];
}
//assign value to placeholder in HTML

if (weekDayNumber === 5){
    document.getElementById("pancake").removeAttribute("class","hidden");
} 

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
                if(forecast.dt_txt.includes(dateString) &&
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

function getDateString(date) {
    let dateString = date.getFullYear() + '-' +
     (date.getMonth() + 1) + '-' + 
     date.getDate();
    return dateString;
}