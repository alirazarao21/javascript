const myobj = new Object()  // singleton objects

const myobject = {}

myobject.id = "bscs-1003"
myobject.name = "Ali raza rao"
myobject.isLoggedIn = false

// console.log(myobject);

// Nested Objects : creaating objects in objects

const user = {
    email : "ali@gmail.com",
    anotheruser: {
        fullname:{
            firstname: "ALi raza",
            lastName:"Rao"
        },
    newuser : {
        names: "Babar",
        id:"s20-1016"
    }   
    }
}
//  console.log(user.anotheruser.fullname.lastName);
//  console.log(user.anotheruser);

const obj1 = {
    1: 'a',
    2:"b"
}

const obj2 = {
    3:"c",
    4:"d"
}

const obj3 = {obj1,obj2}
// console.log(obj3);
const obj4=Object.assign({},obj1,obj2)
// console.log(obj4);

const obj5 = {...obj1,...obj2} // we can also use spread operator instead of assign method as same as we used in arrays.

// console.log(obj5);

const cstmr = [
    {
        email: "a@gmail.com"
    },
    {
        email: "b@gmail.com"
    }, 
    {
        email: "c@gmail.com"
    },
    {
        email: "d@gmail.com"
    },
    {
        email: "e@gmail.com"
    },
]
console.log(cstmr[3].email); 

console.log(myobject);
console.log(Object.keys(myobject)); // it returns the value in the array format ...  
console.log(Object.values(myobject));
console.log(Object.entries(myobject)); // convets the keys value pairs into arrays  nd returns the array of all the arrays of keys values pairs in a single arrays

console.log(myobject.hasOwnProperty('isLoggedIn')) // ye method value ko check krny k liay hota hai k value exist krti ha ya ni , ye ans kry ga ture or fasle ma


//    JSON  

// {
//     "Name": "Ali",
//     "Age":"22",
//     "Height":"5.9" 
// } // this is our json format.... 