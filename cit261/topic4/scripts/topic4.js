// Making a XMLHTTPRequest
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(xhr.readyState = 4){
        console.log(xhr.responseText);
    }
    else if(xhr.status == 404){
        console.log('file or response was not found');
    }
}

// Making the request

xhr.open('get',"document.txt",true);
xhr.send();

//summary: make a file you want to read data from e.g doc.txt
//make a new XMLHTTP request to read the content of the file
// make a function that will be called once the xhr.readyState changes
// the status can change  from 0-4, 4 being ready  and the status =200
//0 being status not ready and 404 being  not reasy somehow.
//when making the request you need to use the  xhr.open(P1,P2,true)
// as well as the last step of xhr.open();

// the text from the document.txt will be read by asynchronous javacsrpt
// xml  into the console.

