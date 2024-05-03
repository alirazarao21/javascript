// Immediatly Invoked function expression

// function chai() {
//     console.log("DB connected");
// }
// chai()

// syntax of  iife function = (function logic)(funtion execution )

(function Teea() {
    console.log("DB connected");
})();
 
 // named iife q k is ka ak name declaration hai
(function Tea() {
    console.log("DB connected");
})();
// simple iife jis kakoi name na  ho ya jis ko kisi variable ki form ma declare na kiya ho
((person)=>{ 
    console.log(`the tea is ready made by ${person}`);
})("Ali raza rao")



//Note 
// jab b hum 2 iife function ak sath likhy gaye to beach ma semi colon(;) use kry gaye 