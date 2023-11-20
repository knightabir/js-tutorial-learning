let score = true

console.log(typeof score);
console.log(score);

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber)

// while coverting a number the value was converted in the number
// but when we are gowing to convert a alphabet then the integer value should be Nan
// if the value is true then the integer value is going to be 1 for false it should be 0;


let isLoggedIn = 0

let boolenConvert = Boolean(isLoggedIn)

console.log(boolenConvert);

// in the case of boolean the value is true for 1 and false for 0

// time to convert something in to String value

let someNumber = 332

let someBoolean = false

let convertedValue = String(someBoolean)

console.log(convertedValue+" " + typeof convertedValue);


// in this case the values are getting converted normally if i convert a number then the numbers are converted to string value but when i converted the boolean value to the string the value is getting converted not in the integer form it converted in the form of true and false But in string format
