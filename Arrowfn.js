function chai (){
    console.log(this);
}
// chai()

const addtwo = (num1,num2)=>{
    return num1+num2
}

//console.log(addtwo(3,4)); // simple arrow function

// implecit return function 

const three = (num1, num2)=> num1 + num2

// console.log(three(44,55))

// hum aik or tariky sy implecit function ko likh sakty hain...
// const four = (num1, num2)=> (num1 + num2)

// console.log(four(44,55))

// agr humy implecit ma koi object return krna ho to

const five = ()=>({username:"ali"}) // agr hum is k ander {} ye ni use kry gaye to print undefined ho ga

console.log(five());


