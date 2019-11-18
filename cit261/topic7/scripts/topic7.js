function changeClass(id)
               {
                   if(id == "classA")
                       {
                          var cA = document.getElementsByClassName("A1")[0].style.fontWeight= "bold";
                       }
                   if(id == "classB")
                       {
                          var cB = document.getElementsByClassName("B1")[0].style.fontSize = "2em";
                       }
                   if(id == "classC")
                       {
                        var cC = document.getElementsByClassName("C1")[0].style.color = "goldenrod";
                       }
               }
            function reset()
               {
                   document.getElementsByClassName("A1")[0].style.fontWeight = "normal";
                   document.getElementsByClassName("B1")[0].style.fontSize = "1em";
                   document.getElementsByClassName("C1")[0].style.color = "black";  
               }