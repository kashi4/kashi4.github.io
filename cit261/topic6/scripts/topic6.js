// creatin a virtual DOM: the object representation of the DOM
var DOMobject = document.createElement('main');


//modifying the element created by adding some css
DOMobject.id = "myMain";
DOMobject.style.width = "300px";
DOMobject.style.height = "300px";
DOMobject.style.background = "lightgrey";
DOMobject.style.textDecorationColor = "solid blue";
DOMobject.innerText = "Javascript Object representing an HTML element";

// we will now append our object we created 

document.body.appendChild(DOMobject);

var spanElement = createElement("span");
spanElement.innerText = "This is the span within my main";
spanElement.style.textDecorationColor ="solid blue";
document.getElementById("myMain").appendChild(spanElement);

