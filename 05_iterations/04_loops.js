const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb:'ruby'
}

//for in loop for object but NOT ONLY for object, can be used for others too

for (const key in myObject) {
    console.log(`${key} shortcut for ${myObject[key]}`);
    
    
}

/*
But if you write:

myObject.key

JS literally looks for:

myObject["key"]

NOT:

myObject["js"]

because dot notation treats key as fixed text.

Visual:

myObject.key
↓
lookup property named "key"

myObject[key]
↓
lookup property whose name is stored inside variable key
*/

//for in on arrays

// const programming = ["js","ruby","java"]

// for (const key in programming) {
//     console.log(programming[key]);
    
// }

const map = new Map()
map.set('IN',"INDIA")
for (const key in map) {
   console.log(key);
   //outputs nothing because not iterable   
}


