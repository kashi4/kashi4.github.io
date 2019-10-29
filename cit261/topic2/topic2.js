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

let firstName = 'Julius';
let lastName = 'Kashihakumwa';
let age = 30;
let isMale = true;

let person = {
    firstName:'Julius', lastName:'Kashihakumwa',age:30,isMale:'true'
};
console.log(person.firstName,person.isMale);

// Encapsulation: Grouping related variables & functions that operate on them as objects
//procedural example:

let annualIncome = 60_000;
let bonuses = 1050;
let rate = 0.15;

function getWage(annualIncome,bonuses,rate){
    return annualIncome + (bonuses * rate);
}

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

