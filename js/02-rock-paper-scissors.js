// DECLARE VAIRABLES
let userChoice, computerChoice, choiceConvert

// START OF PLAYGAME FUNCTION
function playGame() {

// PROMPT USER FOR THEIR CHOICE
userChoice = prompt(`Please choose one: Rock, Paper, or Scissors`)
console.log(`User choice is: ${userChoice}`)

// IF USER ENTERS SOMETHING BESIDES ROCK, PAPER, SCISSORS
while (userChoice !== 'Rock' && userChoice !== 'Paper' && userChoice !== 'Scissors') {
    alert(`You have entered ${userChoice}`)
    userChoice = prompt(`Please choose one: Rock, Paper, or Scissors`)
    console.log(`User choice is: ${userChoice}`)
}

// CREATE COMPUTER'S CHOICE
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
computerChoice = getRandomInt(3)
console.log(`Math.random is: ${computerChoice}`)

// RESET COMPUTER CHOICE TO A STRING (ROCK, PAPER, SCISSORS)
if (computerChoice === 0) {
    choiceConvert = 'Rock'
} else if (computerChoice === 1) {
    choiceConvert = 'Paper'
} else {
    choiceConvert = 'Scissors'
}
console.log(`Computer choice converted to: ${choiceConvert}`)

// CONDITIONAL TO COMPARE AND DISPLAY WINNER
if (userChoice === 'Rock' && choiceConvert === 'Scissors') {
        alert(`User chose ${userChoice} and Computer Chose ${choiceConvert}, You Win!`)
    } else if (userChoice === 'Scissors' && choiceConvert === 'Paper') {
        alert(`User chose ${userChoice} and Computer Chose ${choiceConvert}, You Win!`)
    } else if (userChoice === 'Paper' && choiceConvert === 'Rock') {
        alert(`User chose ${userChoice} and Computer Chose ${choiceConvert}, You Win!`)
    } else if (userChoice === 'Rock' && choiceConvert === 'Paper') {
        alert(`User chose ${userChoice} and Computer Chose ${choiceConvert}, You Lose!`)
    } else if (userChoice === 'Scissors' && choiceConvert === 'Rock') {
        alert(`User chose ${userChoice} and Computer Chose ${choiceConvert}, You Lose!`)
    } else if (userChoice === 'Paper' && choiceConvert === 'Scissors') {
        alert(`User chose ${userChoice} and Computer Chose ${choiceConvert}, You Lose!`)
    } else {
        alert(`User chose ${userChoice} and Computer Chose ${choiceConvert}, It's a Tie! Try again!`)
    }
}   //END OF PLAYGAME FUNCTION

// CALL TO PLAYGAME FUNCTION
playGame()

// IF ITS A TIE
while (userChoice === choiceConvert) {
    playGame()
}