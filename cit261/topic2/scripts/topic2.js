/*4 pillars of OOP in java Scripts : basically put all functions together
Object: is a combination of variables and functions
functions : Method
Variables : properities

Example 1: Car is an OBJECTS
        - make, color,model are PROPERTIES
        - start, stop, move, reverse are all METHODS
Example 2: localStorage (0bject)
        - length = 0; is the PROPERTY
        - getItem, removeItem,setItem are all METHODS
    


*/
/* Encapsulation, Abstraction,Inheritance, Polymorphism */

/*let firstName = 'Julius';
let lastName = 'Kashihakumwa';
let age = 30;
let isMale = true;

let person = {
    firstName:'Julius', lastName:'Kashihakumwa',age:30,isMale:'true'
};
console.log(person.firstName,person.isMale);

// Encapsulation: Grouping related variables & functions that operate on them as objects
//procedural example:



let employee = {
    annualIncome:60_000,
    bonuses: 1050,
    rate:0.15,
    getWage: function(){
        return this.annualIncome + (this.bonuses * this.rate); 
    }
};
employee.getWage();

// ABSTRACTIONS: many things are hidden from you , you only need to know what you need to know
//Example dvd player:

function multiply(p1,p2){
    return (p1*p2);
}

console.log(3 * 12); */

/* ############################
console.log('Hello guys');
console.log(3 * 25);
#################################################
console.log('Julius Kashihakumwa is 39 years old');

console.log('Theopolina Kashihakumwa is 35 years old'); */

// function to tell us their name and age
////function person(name, age){
    //console.log(name + " " + 'is'+ " " + age + " " + 'years old.' );
//}
/*
let juliusK = 'Julius Kashihakumwa';
let juliusAge = 39;

person('Julius Kashihakumwa',39);
person('Theopolina Kashihakumwa',35);*/


// Function constructor, Julius object

/*var julius = {
    name:'Julius',
    yearOfBirth:1981,
    profession:'teacher'
};
// function constructor is making a blue-print to create many objects [make a function]

var Person = function(name, yearOfBirth,profession){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.profession = profession;*/
    // add an inheritance
    
    

// now that we have a function constructor, we can use it to create a Julius object (instantiation)

/*var julius = new Person('Julius',1981,'teacher');

//inheritance: setting a prototype

Person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth);
};

Person.prototype.lastName = 'Kashihakumwa';
var Nafimane = new Person('Nafimane',1982,'electrician');
var hafeni = new Person('Hafeni',1995,'lawyer');
var tangeni = new Person('Tangeni',1997,'engineer');

julius.calculateAge();
Nafimane.calculateAge();
hafeni.calculateAge();
tangeni.calculateAge();

console.log(julius.lastName);
console.log(Nafimane.lastName);
console.log(hafeni.lastName);
console.log(tangeni.lastName);*/


//Create an object
var person = {
    name: "Sese seko",
    gender: "malee",
    age: "74"
};

var dictator = {
    country: "Zaire",
    period: "25 years",
    
};
//Display person and dictator object values
function displayObject() {
    var output = Object.values(person) + "<br>" + Object.values(dictator);
    document.getElementById("displayobj").innerHTML=output;
}

// add a method to display name and country together
function createMethod() {
    person.display = function(){return this.name + " " + this.name;};
    country.display = function(){return this.country + " " + this.country;};
}

// display object with new method
function addMethod() {
    createMethod();
    output = person.display() + "<br>" + dictator.display();
    document.getElementById("methoddiv").innerHTML=output;
}

//Display all objects
function displayAllObjects() {
    output = Object.values(person) + "<br>" + Object.values(dictator);
    document.getElementById("displayalldiv").innerHTML=output;
}