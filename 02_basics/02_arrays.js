const marvel_heros = ["thor","ironman"]
const dc = ["superman","flash"]

marvel_heros.push(dc)

console.log(marvel_heros); //this does not merge arrays rather creates aan array within an array, the array of dc is pushed as a 2nd Element

//to access the value of 2nd element(array of dc) and a value inside that array we have to do:
console.log(marvel_heros[2][0]);

const allHeros= marvel_heros.concat(dc) //this is one way of combining 2 arrays
console.log(allHeros);


//an easier way to combine is spread operator
//the dots spread each of the elements in the array all new heros

const allnew_Heros= [...marvel_heros,...dc]
console.log(allnew_Heros);


const new_Arr = [1,2,3,[1,2,3],7,[8,9,[3,4]]]

const real_new_arr = new_Arr.flat(Infinity) //okay what this flat basically does it goes to the depth mentioned as an argument(Infinity here) and removes those brackets
console.log(real_new_arr);


const Misbah = [];
console.log(Array.isArray(Misbah));
console.log(Array.isArray("Misbah")); //here misbah is a string not an array that's why gives false

//we can also conver the string to an array here like this:

console.log(Array.from("Misbah"));


//now if i try to convert an object into an array, it'll return an empty array in the below example because object is a combo of 2 things, keys and values so we need to specify if we want an array of keys or values

console.log(Array.from({
    name:"Misbah"
}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
//of return a new array with a combo of elements, arrays etc
