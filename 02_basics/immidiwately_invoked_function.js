// This is the immediately Invoked Function Expressions (IIFE)
(function chai() {
  console.log("Database Connected...");
})();

(() => {
  console.log("Database two connected...");
})();

// How to get input parameters from an iife function
((name) => {
  console.log(`Database two connected... ${name}`);
})("abir sarkar");
// (Definationof the function)()

// end one function and write two or more function symultaniously we use semicolone to seperate these thwo function

// Why do we use this
// somethimes there are problems in global scope. To avoid this kind of problems we use this IFFE
