/*

Javascript execution context: whatever js file you have made, how would javascript execute  it
js runs your programm in 2 phases
wheneever our code is given to js, 
1) global execution context in the form of this will always be there
in browse, the value of this is window object

js issingle threaded. everything is a process in it

2) function EC 
3) eval EC

js code runs in 2 phase 
1) memory creation phase (only allocates space for variable etc)
2) execution phase (rest of the tuff like operations add subtract etc is done here)



consider a coding example:

let val1 = 10
ley val2 = 5

function addNum(num1,num2){

let total = num1+num2

return total;
}

let result1=addNum(val1,val2);
let result2 = addNum(3,2);


Now let us study how does this execution actually happen

step 1:
Global execution context: 
your code would always first go through this phase with the this operator

step 2: Memory phase. at this stage only DEFINITION,DECLARATION HAPPENS SO
val1:undefined
val2 : undefined
addNum justtt defined 
resul1 is also : undefined
result2 : undefined


step 3: Executoon phase
at this stage val 1 :10 is assign
val2:5 assigned
addNum nothing happens b/c it sneither called or executed we can say
next result1, the addNum creates a NEW ENVIRONEMNT(the new variable environment+execution tread). in that new environ we again have the 2 phases memory phase and executin phase where again the same undefined val1,val2,total happenss then in the execution phase num1 :10 assigned. num2 5 assigned then addNum function executes, return 15 and the total THEN GOES BACK TO THE GLOBAL EXECUTION. rememberthat the NEEW ENVIRONMENT also deletes after this 

 this same stuff repeats for result2 too
 
 ===================================================================
 
 
 
 // JavaScript Execution Context
// Execution context means:
// How JavaScript executes and manages our code.

// JavaScript is single-threaded:
// It executes one operation at a time.

// There are mainly 3 execution contexts:

Global Execution Context (GEC)
Every JS program starts here.
The global object is created.
this is also created.
In browser: this → window
In Node.js: this → {}
Function Execution Context (FEC)
Created whenever a function is called.
Eval Execution Context
Created when using eval() (rarely used).

// JavaScript executes code in 2 phases:

Memory Creation Phase
Space is allocated.
Variables → undefined
Function declarations → entire function stored
No execution happens here
Execution Phase
Values are assigned
Operations execute
Functions are called

// Example

let val1 = 10
let val2 = 5

function addNum(num1, num2){
let total = num1 + num2
return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(3,2)




// Step 1: Global Execution Context created

this




// Step 2: Memory Creation Phase

val1 → undefined
val2 → undefined
addNum → function definition stored
result1 → undefined
result2 → undefined




// Step 3: Execution Phase

val1 = 10
val2 = 5

addNum
→ only defined earlier
→ executes only when called




// result1 = addNum(val1,val2)

Function Execution Context created

(New Variable Environment + Execution Thread)

Inside function again:

Memory Phase:
num1 → undefined
num2 → undefined
total → undefined

Execution Phase:
num1 = 10
num2 = 5

total = 15

return 15

result1 = 15

Function Execution Context destroyed




// result2 = addNum(3,2)

Again new Function Execution Context

Memory:
num1 → undefined
num2 → undefined
total → undefined

Execution:
num1 = 3
num2 = 2

total = 5

return 5

result2 = 5

Function context destroyed




Final values:

result1 = 15
result2 = 5

====================================================================
You're right — I compressed Global Execution Context too much. Since you're studying JS internals, here's a more complete version.

// JavaScript Execution Context
// Execution context means:
// How JavaScript executes and manages our code.

// JavaScript is single-threaded:
// It executes one operation at a time.

// TYPES OF EXECUTION CONTEXT

1. Global Execution Context (GEC)
2. Function Execution Context (FEC)
3. Eval Execution Context (rare)

// 1) GLOBAL EXECUTION CONTEXT (Most Important)

// Whenever a JS file starts running,
// JavaScript first creates the Global Execution Context.

// Think of it as:

JS Engine
↓
Creates environment
↓
Starts executing code

Global Execution Context mainly creates:

A) Global Object

* Browser → window
* Node → global object

B) this keyword

* Browser → this = window
* Node → this = {}

C) Memory Area

* stores variables/functions

D) Execution Thread

* executes line by line

Example:

let a = 10

function test(){}

console.log(a)

Before execution:

Global EC
{
Memory
Execution Thread
this
}

---

// JavaScript executes code in 2 phases

PHASE 1 → MEMORY CREATION PHASE
(also called Creation Phase)

Only memory allocation happens.

Variables:
undefined

Functions:
entire function stored

Nothing executes.

Example:

let val1 = 10
let val2 = 5

function addNum(num1,num2){
let total = num1+num2
return total
}

let result1 = addNum(val1,val2)
let result2 = addNum(3,2)

After Memory Phase:

val1 → undefined
val2 → undefined

addNum →
function definition stored

result1 → undefined
result2 → undefined

---

// PHASE 2 → EXECUTION PHASE

Now code runs line by line.

val1 = 10

val2 = 5

addNum
→ nothing happens yet
→ function only executes if called

result1 = addNum(val1,val2)

↓

NEW FUNCTION EXECUTION CONTEXT CREATED

(Function EC)

Contains:
Memory + Execution Thread

Inside Function again:

Memory Phase:

num1 → undefined
num2 → undefined
total → undefined

Execution Phase:

num1 = 10
num2 = 5

total = 15

return 15

Function EC destroyed

result1 = 15

---

// result2 = addNum(3,2)

Again new Function EC created

Memory:

num1 → undefined
num2 → undefined
total → undefined

Execution:

num1 = 3
num2 = 2

total = 5

return 5

Function EC destroyed

result2 = 5

---

// CALL STACK (Extra Important)

Global EC
↓

addNum()
↓

return

↓

addNum()

↓

return

↓

Global EC ends

Final values:

result1 = 15
result2 = 5

One important intuition:

```text
JS file starts
↓
Global EC created once
↓
Function called
↓
Function EC created
↓
Function finishes
↓
Function EC deleted
↓
Global EC remains
```

This is the mental model most JS courses are trying to teach.
===================================================================================================



CALL STACK:

e.g normally if we have1 method called one(), it does its work, runsand gets out of stack but if we have one() which in itself calls two then 3 then it would look like below:

|		|
|		|
|     three()	|
|      two()	|
|      one()	|
|  Global exec	|
-----------------


this stack follows the LIFOrule.the last one thatcomes in gets out first so three goes first






*/