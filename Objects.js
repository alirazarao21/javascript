// objects literls

const symbol = Symbol("Rajpoot")

const Jsuser = {
    name: "Ali",
    age: 22,
    [symbol]:"Rajpoot", // this is the syntax to call the symbol 
    height: 5.9,
    passion: "coding",
    email:"raoa62253@gmail.com",
    address: "Pakpattan",

}

// console.log(Jsuser.address);  // this method is good but can not call the key when it is written in string 
// console.log(Jsuser["address"]); // this method will call all the keys wether they are written in shting or inn normal ways
// console.log(Jsuser[symbol]);
// console.log(typeof Jsuser.symbol);
// console.log(Jsuser);


Jsuser.name = "Ali Raza Rao "

Jsuser.passion = "Cricket"
// Object.freeze(Jsuser)
// Jsuser.name = "qqqqq"
Jsuser.email="mnadkacjc"

console.log(Jsuser);

Jsuser.hello = function(){
    console.log("hello Jsuser");
}
Jsuser.greeting =function(){
    console.log("assalam o alaikum");
}
Jsuser.greetingtwo=function(){
    console.log(`Hello this is user ${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());