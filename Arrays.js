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


// console.log("a " ,arr);

const newar = arr.slice(1,3)

// console.log("b ", newar);

const newa = arr.splice(1,3)
// console.log("c",newa);
// console.log(arr);



/***************************Part 2 *******************************/
const marvelheros =["thor", "ironman", "captainamerica"]
const dcheros = ["superman", "batman","aquaman"]
//marvelheros.push(dcheros) // this push method combines an array and give a array in a array
// console.log(marvelheros); 
 const allheros = marvelheros.concat(dcheros) // the concat method merge the two arrays without giving an array inside the array
//  console.log(allheros);


 const newheros  = [...marvelheros,...dcheros,...["ali","raza","rao"]] // ... the 3 dots are spread operator ,which is used to merge two or more arrays
//  console.log(newheros);

const anotherarray = [1,2,3,[4,5],6,[7,8,[9,11,12]]]
const otherarray = anotherarray.flat(Infinity)  // this method flat all the arrays in a single array and merge them all....
// console.log(otherarray);



let scre1 = 100
let scre2 = 200
let scre3 = 300 

console.log(Array.of(scre1,scre2,scre3));

console.log(Array.isArray("Ali")); //ask the question of wether the is it array or not 

console.log(Array.from("ALI"));

console.log(Array.from({name:"Ali"})); // this will give an empty array