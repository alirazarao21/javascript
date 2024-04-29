// Dates 

const mydate = new Date()
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);


let createddate= new Date(2024, 3 ,29)
// console.log(createddate);
// console.log(createddate.toString());
// console.log(createddate.toLocaleDateString());

const timestamp = Date.now()

// console.log(timestamp);
// console.log(createddate.getTime());
// console.log(Date.now());
// console.log(Math.floor(Date.now()/1000));


const anotherdate = new Date()

// console.log(anotherdate.getDate());
// console.log(anotherdate.getMonth()+ 1); // hum ny 1 is liay add kiya hai q k JS ma months 0 sy shuru hoty hain .. 0 means january
// console.log(anotherdate.getFullYear());


console.log (anotherdate.toLocaleString('default', {
    weekday:"long",
    
}))

