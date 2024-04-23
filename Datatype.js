// console.log(2<1);
// console.log(2<=1);
// console.log(2>1);  
// //   their results will be in boolean value means ture or false
// console.log(2>=1);

console.log("2" > 1);
console.log(null > 0);
console.log(null == 0);
console.log(null <= 0);
console.log(null >= 0);


// the comparsion of different datatypes dosnt give you the accurate value .so wwe  use typescript , which do not allow the  comparison of two different datatypes..

// = assigning the value to variable 
// == putting the value equal to the variable 
// === strict mood or strict check. it compare and also check the datatype of the giving data

console.log("2" === 2);

console.log( typeof null );


// Youtube reel puzzle
let a = 10 
let b = 10
let c = 10

if(a==b==c) 
{
 console.log("hello");
    
} else {
    console.log("Bye");
}


/* ***************************************************** Memory Allocation *******************************/

// Stack (primitive  {string, num, boolean , null etc} ),    Heap  (non-primitive    {Array , objects , function})
// example 
 
let name = " chai and code "

let anothername = name 

anothername = " ali raza rao"

console.log( name);
console.log(anothername);

let  userone = {
    email: "google@gmail.com",
    name: "ali"
}

let userTwo = userone

// console.log(userone);
console.log(userTwo);

console.log(userTwo.email);
console.log(userone.email);