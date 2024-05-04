//iterators or iterations  jis ko hum loop bolty hain
 for (let i = 5; i < 10; i++) {
     const element = i;
    // console.log("Ali");
    // console.log("raza");
    // console.log("rao");
 }


 for (let i = 1; i <=10; i++) {
  //  console.log(`outer loop is ${i}`);
   for (let j = 1; j<=5; j++) {
//    console.log(`inner lop ${j},and inner loop ${i}`);
 // console.log(i + "*"+ j + "=" + i*j );
   }    
 }

 let myarray=["Ali","Babar","Hamza","Usama","tehseen"]

 for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
 }

 // break and continue
 
// Break control flow ko tor deta hai or loop ko wahi py stop kr deta hai

//  for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("Detected 5");
//         break
//     }
// console.log(`value of i is ${index}`);    
//  }



// continue
// continue di gayi condition ko execute krta hai phr us k bad loop ko continue karta hai di gayi leght tak

 for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        continue
    }
console.log(`value of i is ${index}`);    
 }