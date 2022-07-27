let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}
console.log(generateTarget());


const compareGuesses = (humanguess, compguess, secrettarget) => {

    const humanDiff= Math.abs(humanguess-secrettarget);
    const compDiff = Math.abs(compguess-secrettarget);
    if (humanDiff <= compDiff) {
        return true;
    }
    else {
        return false;
    }
}

const updateScore = winner => {
    if (winner ==='human') {
        humanScore++ ;
    }
    else {
        computerScore++;
    }
}

const advanceRound = () => currentRoundNumber++ ;


generateTarget();
console.log(advanceRound());
onsole.log(updateScore());