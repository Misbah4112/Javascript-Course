let random = parseInt(Math.random()*100 + 1)
const submit = document.querySelector('#subt')

const userInput = document.querySelector('#guessField')
 const guessSlot = document.querySelector('.guesses')
 const remaining = document.querySelector('.lastResult')
 const lowOrHi = document.querySelector('.lowOrHi')
 const startOver = document.querySelector('.result')


 const p = document.createElement('p')

 let prevGuess = []
 let numGuess = 1

 let playGame = true

 if(playGame){
    submit.addEventListener('click',function(e){
e.preventDefault();
const guess = parseInt(userInput.value);
console.log(guess);
validateGuess(guess);
    })
 }
 function validateGuess(guess){
   if(guess > 100 || guess < 1 || guess == '' || isNaN(guess)){
    alert('Please enter a valid number')

   }
   else{
    prevGuess.push(guess);
    if (numGuess > 10 ){
        displayGuess(guess);
        displayMsg(`Game over. Random number was ${random}`);
        endGame();
    }

    else{
        displayGuess(guess)
        checkGuess(guess)
    }
   }

 }

 function checkGuess(guess){
if(guess === random){
    displayMsg(`You guessed it right!`);
    endGame();
}

else if(guess < random){
    displayMsg(`The number is TOOOO LOW`)
}

else if(guess > random){
    displayMsg(`The number is TOOOO HIGH`)
}

 }

 function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML+=`${guess} , `
  numGuess++;
  remaining.innerHTML = `${11-numGuess}`

 }

 function displayMsg(msg)
 {
    lowOrHi.innerHTML = `<h2>${msg}</h2>`
 
 }


 function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML= `<h2 id = "newGame"> Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame();
 }


 function newGame(){
const newGameButton =  document.querySelector('#newGame')
newGameButton.addEventListener('click', function(e){
 random = parseInt(Math.random()*100 + 1)
 prevGuess= []
 numGuess = 1
 guessSlot.innerHTML = ''
  remaining.innerHTML = `${11-numGuess}`
   userInput.removeAttribute('disabled')
   startOver.removeChild(p);
    playGame = true
})
 }


 