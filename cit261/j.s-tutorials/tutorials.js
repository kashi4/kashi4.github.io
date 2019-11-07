
/*let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

// Data types: Primitive/Value types

let name = 'Julius'; // string literal
let age = 39; // number literal
let isStillYoung = true; // boolean literal

let firstName = undefined;
*/

/*let firstName = 'Julius';
let lasName = 'Kashihakumwa';
let age ='39'
let isMale = true;*/

//creating an object

/*let person = {
firstName:'Julius',lastName:'Kashihakumwa',age:39,isMale:true
};
 dot notation or brackets noation allows us to access properties of an object.
person.age=30;

console.log(person.firstName,person.isMale,person.lastName);*/
/*
const s = 'hello world';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(1,5).toUpperCase());
console.log(s.split(''));*/

// Arrays - variables that hold multple values
//constructor uses the 'new'

/*const transportMode = ['cars','train','plane','ship'];
console.log(transportMode[3]);
console.log(transportMode);
transportMode[3] = 'ship';
transportMode.push('other')
console.log()*/
/*
let person = {
    firstName:'Julius',
    lastName:'Kashihakumwa',
    Age: 39,
    Hobbies:['soccer','chess','barbacue','movies'],
    
    Address: {
        street: '111 W 7 S',
        Number: '1308',State:'ID'
    }
}

console.log(person.Hobbies[3],person.Address.State);

person.emailAddress = 'kas@gmail.com';
console.log(person.emailAddress);*/

/*const toDoList = [{
    id:1,
    text: 'take a shower',
    isCompleted: true,
},
{
    id: 2,
    text: 'Go to school',
    isCompleted: true,
},
{
    id:3,
    text: 'take lunch at 1pm',
    isCompleted: false
},
]

console.log(toDoList[1].text);*/

//JASON

const toDoList = [{
    id:1,
    text: 'take a shower',
    isCompleted: true,
},
{
    id: 2,
    text: 'Go to school',
    isCompleted: true,
},
{
    id:3,
    text: 'take lunch at 1pm',
    isCompleted: false
},
]

const toDoListJSON = JSON.stringify(toDoList);
console.log(toDoListJSON);

