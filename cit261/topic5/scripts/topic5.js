 //Local storage is the storage of data locally without using any outside open sources
 //Local storage is done inside the web browser , it is stored to the domain
 // and the protocol being used

 // LocalStorage.setItem("name","Julius"); // takes in a key pair value
    //console.log(localStorage);

// LocalStorage.clear() // clears the console but does not remove data
// data in local storage does not expires, unless you use the localStorage.RemoveItem("name");

 //   localStorage.removeItem('name');
//console.log(localStorage);


// Local storage setItem(). local storage store satff as "strings" even the numbers
// you can access the keys by means of index (localStorage.key(1);)
//localStorage.setItem('age',"38");
//localStorage.setItem('name',"Julius");
//console.log(localStorage.getItem("age","name"));

const inpKey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpValue");

const btnInsert =document.getElementById("btnInsert");
const lsOutput = document.getElementById("lsOutput");

btnInsert.onclick = function() {
    const key = inpKey.value;
    const value = inpValue.value;

       
    
    if(key && value){
        localStorage.setItem(key,value);
        location.reload();
    }
};

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    lsOutput.innerHTML += `${key}: ${value}<br />`;  
}
