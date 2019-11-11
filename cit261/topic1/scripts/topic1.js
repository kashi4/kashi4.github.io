
//loops - for loop

function simpleLoop()
               {
                   var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
                   
                   var string1 = [];
                   
                   for(i = 0; i < alphabet.length; i++)
                       {
                           string1.push(alphabet[i]);
                           document.getElementById("loop").innerHTML += "The value of index #" + i + " in the array is: " + string1[i] + "<br>";
                       }
                   document.getElementById("loopBtn").style = "display:none;";
                   document.getElementById("showLoop").style = "display:inline;";
                   document.getElementById("hideLoop").style = "display:inline;";
               }
            function showLoop()
               {
                   document.getElementById("loop").style = "display:block;";
               }
            function hideLoop()
               {
                   document.getElementById("loop").style = "display:none;";
               }
