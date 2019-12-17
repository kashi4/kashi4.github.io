var weatherRequestSe = new XMLHttpRequest();
var apiURLSe = "https://api.openweathermap.org/data/2.5/weather?lat=47.608013&lon=-122.335167&units=imperial&APPID=3e190a6d0cb252fbd664ea03280af468";


weatherRequestSe.open("GET", apiURLSe, true);
weatherRequestSe.responseType = "text";
weatherRequestSe.send();


weatherRequestSe.onload = function () {
    var weatherDataSe = JSON.parse(weatherRequestSe.response);
    console.log(weatherDataSe);
    weatherSummarySe(weatherDataSe);   
}

function weatherSummarySe(weatherDataSe) {
    
    var currentSe = weatherDataSe['weather'];
    var temperatureSe = weatherDataSe['main'];
    var humidSe = weatherDataSe['main'];
    var windSe = weatherDataSe['wind']
   
    console.log(currentSe);
    console.log(temperatureSe);
    console.log(humidSe);
    console.log(windSe);
 

    document.getElementById("tempSe").innerHTML = (temperatureSe.temp.toFixed(0));
    document.getElementById("currentlySe").innerHTML = currentSe[0].main;
    document.getElementById("humiditySe").innerHTML = humidSe.humidity;
    document.getElementById("windspeedSe").innerHTML = windSe.speed;
}

var weatherRequestSp = new XMLHttpRequest();
var apiURLSp = "https://api.openweathermap.org/data/2.5/weather?lat=47.6588&lon=-117.4260&units=imperial&APPID=3e190a6d0cb252fbd664ea03280af468";

weatherRequestSp.open("GET", apiURLSp, true);

weatherRequestSp.responseType = "text";
weatherRequestSp.send();


weatherRequestSp.onload = function () {
    var weatherDataSp = JSON.parse(weatherRequestSp.response);
    console.log(weatherDataSp);
    weatherSummarySp(weatherDataSp);
}
    
function weatherSummarySp(weatherDataSp) {
    
    var currentSp = weatherDataSp['weather'];
    var temperatureSp = weatherDataSp['main'];
    var humidSp = weatherDataSp['main'];
    var windSp = weatherDataSp['wind']
   
    console.log(currentSp);
    console.log(temperatureSp);
    console.log(humidSp);
    console.log(windSp);
 

    document.getElementById("tempSp").innerHTML = (temperatureSp.temp.toFixed(0));
    document.getElementById("currentlySp").innerHTML = currentSp[0].main;
    document.getElementById("humiditySp").innerHTML = humidSp.humidity;
    document.getElementById("windspeedSp").innerHTML = windSp.speed;
}

var weatherRequestCr = new XMLHttpRequest();
var apiURLCr = "https://api.openweathermap.org/data/2.5/weather?lat=46.2804&lon=-119.2752&units=imperial&APPID=3e190a6d0cb252fbd664ea03280af468";

weatherRequestCr.open("GET", apiURLCr, true);
weatherRequestCr.responseType = "text";
weatherRequestCr.send();


weatherRequestCr.onload = function () {
    var weatherDataCr = JSON.parse(weatherRequestCr.response);
    console.log(weatherDataCr);
    weatherSummaryCr(weatherDataCr);
   
}
function weatherSummaryCr(weatherDataCr) {
    
    var currentCr = weatherDataCr['weather'];
    var temperatureCr = weatherDataCr['main'];
    var humidCr = weatherDataCr['main'];
    var windCr = weatherDataCr['wind']
   
    console.log(currentCr);
    console.log(temperatureCr);
    console.log(humidCr);
    console.log(windCr);
 

    document.getElementById("tempCr").innerHTML = (temperatureCr.temp.toFixed(0));
    document.getElementById("currentlyCr").innerHTML = currentCr[0].main;
    document.getElementById("humidityCr").innerHTML = humidCr.humidity;
    document.getElementById("windspeedCr").innerHTML = windCr.speed;
}

var weatherRequestPo = new XMLHttpRequest();
var apiURLPo = "https://api.openweathermap.org/data/2.5/weather?lat=45.5122&lon=-122.6587&units=imperial&APPID=3e190a6d0cb252fbd664ea03280af468";


weatherRequestPo.open("GET", apiURLPo, true);
weatherRequestPo.responseType = "text";
weatherRequestPo.send();


weatherRequestPo.onload = function () {
    var weatherDataPo = JSON.parse(weatherRequestPo.response);
    console.log(weatherDataPo);
    weatherSummaryPo(weatherDataPo);
}

function weatherSummaryPo(weatherDataPo) {
    
    var currentPo = weatherDataPo['weather'];
    var temperaturePo = weatherDataPo['main'];
    var humidPo = weatherDataPo['main'];
    var windPo = weatherDataPo['wind']
   
    console.log(currentPo);
    console.log(temperaturePo);
    console.log(humidPo);
    console.log(windPo);
 

    document.getElementById("tempPo").innerHTML = (temperaturePo.temp.toFixed(0));
    document.getElementById("currentlyPo").innerHTML = currentPo[0].main;
    document.getElementById("humidityPo").innerHTML = humidPo.humidity;
    document.getElementById("windspeedPo").innerHTML = windPo.speed;
}