const coding = ["js","ruby","cpp","python","java"]


coding.forEach( function (item){
    console.log(item);
    

})
// for each gives a call back function which means give me a function telling me what to do. callback func does not have name. since its inside array, so it can take parameter by its own from array, we are just giving it name like item



// arrow function can also be used

coding.forEach( (item) => {

console.log(item)

})


// below is an example of how it can also execute functions


function printMe(item){
    console.log(item);
}

coding.forEach(printMe)


coding.forEach((element,index,arr) => {
    console.log(element,index,arr);
    
    
});




const my_coding = [
    {
        lang_name:"java",
        lang_file:"js"
    },
    {
        lang_name:"python",
        lang_file:"py"

    },
    {
        lang_name:"c++",
        lang_file:"cpp"
    }
]

my_coding.forEach((item) => {
    console.log(item.lang_name);
    
})