
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

// variables Naming Rules

/*var fullAge = true;
var fullAge = 38;
console.log(fullAge);

var firstName = "Julius";
var lastName = "Kashihakumwa";
console.log(firstName,lastName,fullAge);

let person =
    */

    // variables and type coersion(joining strings) 
    var fullAge = 38;
    console.log(fullAge);
    
    var firstName, lastName, isMarried,hasKids;
    firstName = "Julius";
    lastName = "Kashihakumwa";
    isMarried = true;
    hasKids =true;


    
    /*
    first Name is a string, but full age is a integer, but java script will 
    convert it into a sring so that it can be printed out onna console
    as a string as well */
    console.log(firstName +" " + lastName + " "+ "black Male who is"+ " "+fullAge +"years old"+ "and is "+ " " + hasKids +" "+ "he is married");
    

                   
               
		   