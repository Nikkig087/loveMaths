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
    // listen for the key down event ie when a key is pressed, if the event key is Enter key then run checkAnswer function
    // Every event creates an object that has properties such as key below

    document.getElementById("answer-box").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkAnswer();

        }
    });
    runGame("addition");

});

/**
 * The main game "loop" called when the script is first loaded
 * and after the users answer has been processed
 */
function runGame(gameType) {  /* we will need this */

    document.getElementById("answer-box").value = ""; //each time our runGame function is called the value of the answer box will be clear


    document.getElementById("answer-box").focus();// puts cursor in box


    // create two random numbers in our code between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);

    } else if (gameType === "division") {
        displayDivisionQuestion(num1, num2);

    }
    
    else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game Type: ${gameType}. Aborting`;        //This will stop the game
    }



}

/**Checks the answer against the first element in the returned calculateCorrectAnswer array
 * as its a box we need to get value as there is no innertext 
 */


function checkAnswer() {  /*we will need this */
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey you got it right");
        incrementScore();
    } else {
        alert(`Aw you answered ${userAnswer}.  The correct answer is ${calculatedAnswer[0]}`);
        incrementWrongAnswer();
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
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    }
    else if (operator === "/") {
        return [operand1 / operand2, "division"];
    }
    else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}`, "Aborting";
    }

}

/**Gets the current score from the DOM aand increments it by 1 */

function incrementScore() {  /*could have this to see how many right answers the user had before it was wrong */

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}


/**Gets the current tally of incorrect answers from the DOM and increments it by 1 */

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {/*could have this for image*/
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}


function displaySubtractQuestion(operand1, operand2) {  /*this for our question*/
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    // set it to the largest of the two, so if operand1 is bigger return that else if operand2 is bigger return that instead


    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;

    document.getElementById("operator").textContent = "-";
}


function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "x";
}


function displayDivisionQuestion(operand1, operand2) {
  operand1 = operand1 * operand2; // Ensure the result is a whole number
    
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "/";
}

