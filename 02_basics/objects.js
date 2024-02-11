const JsUser = {
    firstName : "Abir",
    lastName: "Sarkar",
    email : "abirsarkar1999@gmail.com",
    phone: 9641598284,
    location: "kolkata",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

// console.log(JsUser);
// console.log(typeof(JsUser));

let person = {
    firstname: "John",
    lastName: "Doe"
};

person.greet = function() {
    console.log(`Hello ${this.firstname}`);
}


person.getFullName = function () {
    return `${this.firstname} ${this.lastName}`
}

// console.log(`Full name of the user is : ${JsUser.firstName} ${JsUser.lastName}`);
// console.log(JsUser);

// person.greet();
// console.log(person.getFullName());

function Person(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}




let person2 = new Person("Abir", "Sarkar")

console.log(person2);