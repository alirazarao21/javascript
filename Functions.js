function myfn(){
    console.log("A");
    console.log("L");
    console.log("I");
    console.log("");
    console.log("R");
    console.log("A");
    console.log("Z");
    console.log("A");

}
// myfn()


function add(num1,num2){
    //  console.log(num1 + num2);
    // let result = num1+ num2
    // return result;
    return num1 + num2

}

 const result= add(2,4)
//  console.log("Results:", result);

function loggedIn (username){
    // if (username === undefined) {     
    //     console.log("plz enter your name"); // ye code is liay hai k agr hum ny koi argument pass hi ni kiya to kya print ho ga or wo hamesha undefined hi aye ga ...
    //     
    //     return
    // }
    if (!username) {
        // console.log("plz enter your name"); // exclaimatory mark hamesha ture value to false or false value ko true value ma badal deta hai
        return
    }
    return`${username} is logged In `
}
// console.log(loggedIn())


//                                         rest operators


// function calculateCartPrice(...numm1){
//     return numm1
// }
// console.log(calculateCartPrice(200,400,500,6000));


function calCartPrice(val1,val2,...numm1){
    return numm1
}
console.log(calCartPrice(200,400,5000,300000)); // is case ma 200 value val1 ko assign ho jaye gi or 400 value val2 ko,,, or baki bachy nums rest opertor k through array ki form ma return ho jaye gaye.....

// how to pass an object in a function
const user ={
    Name:"Glock",
    price:200000
}
 function userhandle (anyObject){
    console.log(`${anyObject.Name} is the  gun name  and ${anyObject.price} is the price of a gun`);
 }
//  userhandle(user)
// we can pass an object directly through the argument .... like below
userhandle({
    Name:"Ali Raza",
    price:200000
})


//how to pass an array in a function

const MyArray = [200,400,300,100]

function getMYArray (getTheArray){
    return getTheArray[2]
}

// console.log(getMYArray(MyArray));
console.log(getMYArray([2000,3000,4000,50000]));