// //For of loop

// const arr = [1 , 2 , 3 , 4 , 5]

// for (const i of arr) {
//     // here object does not mean that THIS LOOP CAN ONLY BE APPPLIED TO OBJECTS. it can be applie d to arrays etc just like other loops

// console.log(i);

// }

// //apply to strings now

// const greet = "hello"
// for (const greeting of greet) {

//     console.log(`Each char is : ${greeting}`);
    
// }


// Maps
// Maps are a JavaScript data structure used to store key-value pairs.
// Similar to objects, but keys can be of any datatype.
// Unlike objects, Maps maintain insertion order and keys must be unique.
// Values can repeat.

const map = new Map()
    map.set('IN',"India")
    map.set('PK',"Pakistan")
    map.set('IN',"India")

    // console.log(map);

    //wont print india twice because unique keys and follows the order in which u wrote so first india then pakistan


for (const [key,value] of map) {
        console.log(key,':-',value);
        
        
    }


    const myObject = {
        'game1': 'NFS',
        'game2' : 'Spiderman'
    }

    for (const [key,value] of myObject) {
                console.log(key,':-',value);


    }
//maps iterable but objects are NOT iterable             

