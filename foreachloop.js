const coding =['js','php','cpp','ruby','python']
 

// by using normal function
coding.forEach(function (items){
//console.log(items);
})

// now with callback function

coding.forEach((item)=>{
    // console.log(item);
})

// by declaring a fucntion and then using its refernce 

function printme (item){
   // console.log(item);
}

coding.forEach(printme)

// for each loop also have access of index of array and the array to , with item too ... lets try

coding.forEach( (item,index,arr)=>{
    console.log(item,index,arr);
})

// using foreach for objects in array

const mycodding =[
    {
        languageName:"javascript",
        filename:"js"
    },
    {
        languageName:"python",
        filename:"py"
    },
    {
        languageName:"ruby",
        filename:"rb"
    },
]
mycodding.forEach((item)=>{
    console.log(item.languageName);
})