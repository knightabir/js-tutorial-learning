// "use strict"; // trests all the code as newer version of javascript code

// let foo = 42; // foo is now a number
// foo = "bar"; // foo is now a string
// foo = true; // foo is now a boolean

// console.log(foo);



//Stack memory (Primitive) ,Heap Memory (Non-Primitive)

let myName = "Abir Sarkar"

let anotherName = myName

anotherName = "Sarkar Abir"


console.log(anotherName);
console.log(myName);

let user1 = {
    email:"abirsarkar1999@gmail.com",
    upi:"9641598284@axl"
}

let user2 = user1

user2.email="newemail@gmail.com"

console.log(user2)
console.log(user1);