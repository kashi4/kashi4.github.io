/*var body = document.getElementById('body');
body.addEventListener('touchstart',touchFunction,false);

function touchFunction(addEventListener){
    var touch = addEventListener.changeTouches;
    var i = 0;
    var x = event.changeTouches[i].pageX;
    var x = event.changeTouches[i].pageY;
    document.getElementById("outputDiv").innerHTML = "You see this because a touch triggered a touch event!<br>" + " X position: " + x + "<br> Y position:" + y;
}*/


function clicky(){
    document.getElementById("barca").classList.toggle("hide");
    console.log("button");
}

function barca(){
    document.getElementById("barcaDiv").classList.toggle("color");
    console.log("barca");
}

function myFunction() {
    alert("Page is loaded");
  }