var doc = document;



function swapClass(el){
	
	div1bottom.classList = "";
	
	switch(el.id) {
		case "btn1":
			console.log("first");
			div1bottom.classList.add('useKeyframes');
			div1bottom.style.visibility = "visible";
			
			setTimeout(function() {
				div1top.classList = "";
				div1top.classList.add('useKeyframes');	
				div1top.style.visibility = "visible";

			}, 300);

			break;
		case "btn2":
			console.log("second");
			div1bottom.classList.add('useKeyframes2');
			div1bottom.style.visibility = "visible";
			
			setTimeout(function() {
				div1top.classList = "";
				div1top.classList.add('useKeyframes2');	
				div1top.style.visibility = "visible";

			}, 300);
			break;
		case "btn3":
			console.log("third");
			div1bottom.classList.add('useKeyframes3');
			div1bottom.style.visibility = "visible";
			
			setTimeout(function() {
				div1top.classList = "";
				div1top.classList.add('useKeyframes3');	
				div1top.style.visibility = "visible";

			}, 300);
			break;
		case "btn4":
			console.log("fourth");
			div1bottom.classList.add('useKeyframes4');
			div1bottom.style.visibility = "visible";
			
			setTimeout(function() {
				div1top.classList = "";
				div1top.classList.add('useKeyframes4');	
				div1top.style.visibility = "visible";

			}, 300);
			break;
	}
	
	
	
		
	var kids = el.parentElement.children;
	
	for(var i = 0; i < kids.length; i++){
		
        kids[i].className = "one";
    }
	el.className = "two";	
}

function startBallAnimation() {
	var ballArray = doc.getElementsByClassName("ball");
	var ball = ballArray[0];
	ball.style.animation = "jump 10s linear infinite";
}

function startLeavesAnimation() {
	/*
	var one = doc.getElementById("one");
	var two = doc.getElementById("two");
	var three = doc.getElementById("three");
	var four = doc.getElementById("four");
	var five = doc.getElementById("five");
	*/
	var div = doc.getElementById("height");
	div.style.visibility = "visible";
	var leaves = div.children;
	leaves[0].style.animationName = "fall2, move2";
	leaves[0].style.animationDuration = "7s, 5s";
	
	for (i = 1; i < leaves.length; i++) {
		leaves[i].style.animationName = "fall, move";
		leaves[i].style.animationDuration = "9s, 10s";
	} 
	
	
	console.log(leaves);
}