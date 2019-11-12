
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

function displayNumber(){
    let a = 10, b = 20;
    if (a > b) {
        display = 'a is greater than b';
     } else if (a < b) {
        display = 'a is less than b';
     } else {
        display = 'a is equal to b';
     }
}
    
    document.getElementById("demo").innerHTML = display;
                   
               
		   