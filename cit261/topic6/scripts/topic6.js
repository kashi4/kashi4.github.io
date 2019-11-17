
// Parent Element


// New list Item(<li>)
// we have created a new list item by using the document.createElement('li)
// And appendChild(newListItem) it to the already exiting un-ordered list parent

//let newListItem =document.createElement("li");
//newListItem.textContent = "Ford";



//myCarList.appendChild(newListItem);

// Example, will convert an array of cars into  un-ordered list and append 

// all the cars  to the parent list, to do that I will need to put my array into a for loop

const myCarList = document.getElementById("myCarList");
const carList = ["Ford","Cadillac","Buick","GMC","Chrysler","Dodge","Jeep","Tesla"];

for (let cars of carList){
    let newListItem = document.createElement("li");
    newListItem.textContent = cars;

    myCarList.appendChild(newListItem);
    // now we should see a list of cars  with all of our cars in the parent ul list
}