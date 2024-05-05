// for of loops


const arr = [1,2,3,4,5]

// iterators ka matlab hai k hum ny konsa name assign krna hai jesa k i , j hum krty thy
// or object ka matlab kis chez py hum loop laga rahy hain


for (const num of arr) {
    // console.log(num);
}

// forof loop for string

const greeting = "Hello babar"

for (const greet of greeting) {

  //  console.log(`each character of greetings are ${greet}`);
    
}

// Maps...ye unique value k liay hoty hain, dual ya copy value map ni rakhta ... or ye values ko usi order ma rakhty hain jo maps ko di gayi ho...


const map = new Map()
map.set('Pak',"Pakistan")
// map.set('Pak',"Pakistan")  map does not print the repeated values 
map.set('Rus',"Russia")
map.set('UAE',"United Arab Emirates")
map.set('Eng',"England")
// console.log(map);

for (const [keys,values] of map) {
    console.log(keys,":-",values);
}

const myobj ={
    'game1':"nfs",
    'game2':"igi",
    'game3':"cod",
    'game4':"saga"
}
for (const [keys,values] of myobj) {
    console.log(keys,values);
}

// forof loop ma object iterable ni hota , mtlb is pr forof loop work ni krta

//map function py forof loop work krta hai...