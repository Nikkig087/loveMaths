//wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them.

document.addEventListener("DOMContentLoaded", function(){

    let buttons = document.getElementsByTagName("button"); /* returns all the buttons as an array*/   


    // so each element will be stored in the varible button on each iteration and it does this for every button in the array

    for (button of buttons ){
     button.addEventListener("click", function(){
        if (this.getAttribute("data-type")== "submit") {            // so we check its data-type and if its submit then we get alert
            alert("You clicked Submit");
        } else {
            let gameType = this.getAttribute("data-type");          // else we set this to the gameType which will tell us what game type we are wanting to run
            alert(`You clicked $(gameType)`);                       // this will tell the user what button was clicked
        }
     })   
    }

})

/**
 * The main game "loop" called when the script is first loaded
 * and after the users answer has been processed
 */
function runGame (){  /* we will need this */

    // create two random numbers in our code between 1 and 25
    let num1 = Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random() * 25) + 1;

}




function checkAnswer (){  /*we will need this */


}

function calculateCorrectAnswer (){

}

function incrementScore(){  /*could have this to see how many right answers the user had before it was wrong */

}

function incrementWrongAnswer (){

}

function displayAdditionQuestion (){/*could have this for image*/

}


function displaySubtractQuestion() {  /*this for our question*/

}

function displayMultiplyQuestion(){

}