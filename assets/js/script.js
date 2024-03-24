//wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them.

document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.getElementsByTagName("button"); /* returns all the buttons as an array*/


    // so each element will be stored in the varible button on each iteration and it does this for every button in the array

    for (button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") == "submit") {
                  checkAnswer();          
            } else {
                let gameType = this.getAttribute("data-type");          // else we set this to the gameType which will tell us what game type we are wanting to run
                runGame(gameType);                     // we want to have it run the game
            }
        });
    }
    runGame("addition");

});

/**
 * The main game "loop" called when the script is first loaded
 * and after the users answer has been processed
 */
function runGame(gameType) {  /* we will need this */

    // create two random numbers in our code between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game Type: ${gameType}. Aborting`;        //This will stop the game
    }

}

/**Checks the answer against the first element in the returned calculateCorrectAnswer array
 * as its a box we need to get value as there is no innertext 
 */


function checkAnswer() {  /*we will need this */
 let userAnswer =parseInt(document.getElementById("answer-box").value);
 let calculatedAnswer = calculateCorrectAnswer();
 let isCorrect = userAnswer === calculatedAnswer[0];

 if (isCorrect){
    alert ("Hey you got it right")
 } else {
   alert( `Aw you answered ${userAnswer}.  The correct answer is ${calculatedAnswer[0]}`)
 }
 runGame(calculatedAnswer[1]); //this runs a second game
}


/** Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answer.  By default when we get data from the DOM it returns it as a string but we cant do calc on a string so we need to do parseInt to make it a whole number
 */

function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}`,"Aborting"; }

}

function incrementScore() {  /*could have this to see how many right answers the user had before it was wrong */

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {/*could have this for image*/
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}


function displaySubtractQuestion() {  /*this for our question*/

}

function displayMultiplyQuestion() {

}