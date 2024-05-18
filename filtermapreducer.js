const coding =['js','php','cpp','ruby','python']
 
const values=  coding.forEach( (item) =>{
    // console.log(item);
    return item
} )

// console.log(values);

// the for each loop does not return the value ... ye is ka draw back hai.. ye values ko print to kra deta hai but un ko return ni krta



//filter

// filter value return krta hai ,jis ma hum ak call back function dete hain, us k bad a comdition b deni hoti jis ko filter method satisfy krta hai
// fiter method ko hum ak variable ma store krty hain


const mynums= [1,2,3,4,5,6,7,8,9,10 ,"Ali"]

const newnums=mynums.filter( (num) => {
   // explicite return... jb b hum scope likhy gaye to return keyword use krna pare ga
     return num > 5 } )
// console.log(newnums);
// implecit return ... agr scope open nahi kia hai to hum return key word nahi use kry gaye or code ko single line ma likhy gaye

const newnum1=mynums.filter( (num) => num > 5 )
   
// console.log(newnum1);



const mynewnums = [1,2,3,4,5,6,7,8,9,10 ,"Ali"]

const newnum = []
 mynewnums.forEach( (num) =>{
   if (num > 5) {
    newnum.push(num)
    
   }
 } )
//  console.log(newnum)


 const ali =[1,2,3,4,5,6,7,8,9,10]

 const raza = ali.filter((num) => num%2===0)
//  console.log(raza);



 const students =[
  {
    names : "ali",
    marks : 80
  },
  {
    names : "Basit",
    marks : 70
  },
   {
    names : "babar",
    marks : 90
  },
   {
    names : "ahmad",
    marks : 60
  },
   {
    names : "aqib",
    marks : 85
  }
 ]

 const passingstudents=students.filter(students => students.marks >=70)

//  console.log(passingstudents);



 //Maps 


 const nms = [1,2,3,4,5,6,7,8,9,10]

 const doublenms = nms.map((nums)=>{return nums *2})

//  console.log(doublenms);


 const info = 
  [
   {
     fname : "Ali",
    lname :"Raza"
  },
    {
       fname : "Ali",
    lname :"Raza"
  },
    {
       fname : "Ali",
    lname :"Raza"
  },
    {
       fname : "Ali",
    lname :"Raza"
  },
    {
       fname : "Ali",
    lname :"Raza"
  },
    { 
      fname : "Ali",
    lname :"Raza"
  },
    
  ]
 

 const mapinfo = info.map(names => `${names.lname} ${names.fname}`)
//  console.log(mapinfo);


//chaining

 const numarr = [1,2,3,4,5,6,7,8,9,10]

 const results = numarr.map((num)=> num*10)
                       .map((num)=> num + 2)
                       .filter((num)=> num >=30)


                      //  console.log(results);




// Reduce method

 const no =[1 ,2,3,4,5,6,7,8]
 
//  const no1 = no.reduce(function (accumolate, currentvalue){
//   console.log(`acc is ${accumolate}  currval is ${currentvalue}`);
//   return accumolate+currentvalue},0)

// with call back function


const no1 = no.reduce((acc,currval)=> {return acc + currval},1)
 console.log(no1);



 const shoppingcart = [
  {
    item: "pents",
    price: 1500
  },
  {
    item: "shirts",
    price: 2000
  },
  {
    item: "jacket",
    price: 5000
  },
  {
    item: "belt",
    price: 500
  },
 ]

 const totalprice = shoppingcart.reduce((acc, item) =>  acc+ item.price,0)
 console.log(totalprice);