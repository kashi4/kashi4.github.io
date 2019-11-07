// The tempreture in kelvin for today
const kelvin = 310;
//converting kelvin to celsius
const celsius = kelvin - 273;
// The equation to calclute fahrenheit from celcius
let fahrenheit = (celsius * (9/5) + 32);
//using the .floor math to get rid of the decimal number
fahrenheit = Math.floor(fahrenheit);
console.log(`The tempreture is ${fahrenheit} degrees Fahrenheit.`);

//loops - for loop

for(let i = 0; i <= 10; i++){
    console.log(`count the number of times:${i}`);
}
