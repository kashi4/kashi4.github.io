var d = new Date();
var day = d.getDay();

if (day == 0) {
    var dayname = "Sunday";
}
else if (day == 1) {
    var dayname = "Monday";
}
else if (day == 2) {
    var dayname = "Tuesday";
}
else if (day == 3) {
    var dayname = "Wednesday";
}
else if (day == 4) {
    var dayname = "Thursday";
}
else if (day == 5) {
    var dayname = "Friday";
}
else if (day == 6) {
    var dayname = "Saturday";
}
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

var monthname = month[d.getMonth()];

document.getElementById("date").innerHTML = dayname + ", " + d.getDate() + " " + " " + monthname + " " + d.getFullYear();