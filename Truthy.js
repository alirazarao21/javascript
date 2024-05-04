const useremail = []

if (useremail.length===0) {
    console.log("Got user email");
}
else{
    console.log("Cant get the email");
}

//truthy values... jin ko true naam liya jata hai
// "0", " ", "false", [],{}

// falsey values ... jo k false naam liya jata hai

// false,"",0,-0,NaN,undefined,null,BigInt 0n,

const myobj ={}

if (Object.keys(myobj).length===0) {
    console.log("everything is vigiyan heeran");
}


// Nullish coalescing operator : deal with both  null and undefined  

let val1
val1 = 5?? 20
console.log(val1);

let val2 
val2= null ?? 444
console.log(val2);

let val3 
val3= undefined ?? 444
console.log(val3);


// terniary operators
// syntax
// condition ? true:false

const price = 100

price >= 80 ? console.log("price is less then 100"): console.log("price is greater THEN 100");