// // conditions , i else etc

// const isloggeedin= true

// if (isloggeedin) {
//     console.log("executed");
// } else {
//     console.log("pending");
// }

// if (2 === "2") {
//     console.log("ok");
// } else{
//     console.log("nope");
// }

// const temperature = 50

// if (temperature === 50) {
//     console.log(" temperature is greater than 40");
// } else {
//     console.log(" temperature is less than 50");
// };

// const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }
// // console.log(`user power`);


// const balaance = 1000

//if (balaance> 700) console.log("test");  // implicit return jo k ak hi line ma execute htoa hai jesa k hum ny fucntions ma kiya tha

// nested conditions 

const balamce = 2000

// if (balamce < 1500) {
//     console.log("less then 1500");
// } else if (balamce< 1700) {
//     console.log("less then 1700");

// } else if (balamce<1900) {
//     console.log("less then 1900");

// } else {
//     console.log("less then 2200");
// }

const userloggedin = true
const debitcard =true
// and operation , is ma dono condtion true honi chiye ... tab hi if condition execute ho gi

if (userloggedin && debitcard && 2==2) {
    console.log("successfully logged in");
    
}

const loggedinbyGoogle = false
const loggedinbyemail = true
// or opertion ma koi ak condition true honi chiye, to code execute ho jayr ga 
if (loggedinbyGoogle || loggedinbyemail) {
    console.log("plz login");
}

