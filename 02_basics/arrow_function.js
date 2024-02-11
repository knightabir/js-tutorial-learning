//This is the normal function. Asin old style function
let add = function(x,y){
    return x + y;
}

// this following function is represented in the form of arrow function
let add2 = (x,y) => x + y;

//we can wwrite this arrow function in the curly brackates.

let add3 = (x , y) => {return x + y}


// console.log(add3(5,10))
// console.log(typeof(add3));
// console.log(add instanceof Function);


// this is the arrow function for multiplication
let multiply = (x ,y) => x * y;
console.log(multiply(2,5))

// This is the divie arrow function
let divide = (x,y) => x / y;
console.log(divide(10 , 2));