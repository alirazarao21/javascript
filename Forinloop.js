// object py loop lagany k liay hum for in loop ka use krty hain

const myobj= {
    js:"javascript",
    cpp : "c++",
    rb:"ruby",
    swift:"swift by apple"
}
// this method is for printing keys of object
for (const key in myobj) {
// console.log(key);
}
// for printing both keys and values 
for (const key in myobj) {
//console.log(`${key} shortcut is for ${myobj[key]}`);
}

const myarray = ["js","php","ruby","cpp","swift"]

for (const key in myarray) {
   //console.log(key); for in loop array k liay sirf humy keys print kr k deta hai aagr humy keys maloom hain to hum direct values b ly sakty hain
   //console.log(myarray[key]);
}

const map = new Map()
map.set('Pak',"Pakistan")
// map.set('Pak',"Pakistan")  map does not print the repeated values 
map.set('Rus',"Russia")
map.set('UAE',"United Arab Emirates")
map.set('Eng',"England")

for (const key in map) {
    console.log(key);
}
//map method iterabale ni ha is laiy is py forin loop apply i hota 


