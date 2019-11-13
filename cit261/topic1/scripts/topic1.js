
//loops - for loop, variables and arrays

function defineLoop()
{
    var daysOfWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    
    var string1 = [];
    
    for(i = 0; i < daysOfWeek.length; i++)
        {
            string1.push(daysOfWeek[i]);
            document.getElementById("loop").innerHTML += "The value of index #" + i + " in the array is: " + string1[i] + "<br>";
        }
    document.getElementById("loopBtn").style = "display:none;";
    document.getElementById("showLoop").style = "display:inline;";
    document.getElementById("hideLoop").style = "display:inline;";
}
function displayLoop()
{
    document.getElementById("loop").style = "display:block;";
}
function hideLoop()
{
    document.getElementById("loop").style = "display:none;";
}
// conditional statement
function clickMe() {
    let myNum = document.getElementById("num").value;//prompt("Please enter your lucky number");
    //document.getElementById("clickMe").value = "display:none;";

    if(myNum == 7){
        alert("Congratulations you won!");
        }
     else if(myNum < 7 ){
         alert("Sorry better luck next time");
     }   
    else{	
        alert("Please try again");
        
    }


   
}
    

                   
               
		   