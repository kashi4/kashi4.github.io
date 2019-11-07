
let myRequest = new XMLHttpRequest();
myRequest.open('GET','https://raw.githubusercontent.com/kashi4/kashi4.github.io/master/cit261/topic3/topic3.js');
myRequest.onload = function() {
let myData = JSON.parse(myRequest.responseText);
  console.log(myData[0]);
};
myRequest.send();