var content = document.getElementById("content");
var button = document.getElementById("display more");

button.onclick = function() {
    if (content.className == "open"){
        // shrink the box
        content.className = "";
        button.innerHTML = "display more";
    } else {
        // expand the box
        content.className = "open";
        button.innerHTML = "display less";
    }

};

