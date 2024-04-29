const arr= [1,2,3,4,5,6]
const heros= ["Ali", "Raza" ,"Rao"]

const arr2 = new Array("ali","raza","rao")

// console.log(arr2[1]);
// console.log(heros);
// console.log(typeof arr);

// arrays method 

arr.push(8)
// console.log(arr);

arr.pop()
// console.log(arr);

arr.unshift("ali")
// console.log(arr);

arr.shift()
// console.log(arr);


// console.log(arr.includes(5)); // gives the ans in boolean means that the value is exist in the array

// console.log(arr.indexOf(3));

const newarr = arr.join()

// console.log(arr);
// console.log(newarr);
// console.log(typeof newarr);

  

 // tricky question
// let i = 9

// if (i = 5) 
//     console.log("yellow");

// else if (i>5) 
//     console.log("green");
 
// else
//     console.log("fire");


console.log("a " ,arr);

const newar = arr.slice(1,3)

console.log("b ", newar);

const newa = arr.splice(1,3)
console.log("c",newa);
console.log(arr);