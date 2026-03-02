function player(name) {
    let currentMove = "";
    let currentScore = 0;
    const getScore = () => currentScore;
    const addScore = () => { currentScore++;};
    const addMove = (move) => {currentMove = move;};
    const getCurrentMove = () => currentMove;
    return {name, getCurrentMove, getScore, addScore, addMove};
};

const player1 = player("james");
const player2 = player("judy");

player1.addMove("rock");
player2.addMove("paper");


function roundLogic() {
    if ( player1.getCurrentMove() === player2.getCurrentMove()) {
        console.log("its a tie");

    } else if (player1.getCurrentMove() === "rock" && player2.getCurrentMove() === "scissors") {
        console.log("player 1 wins");
        player1.addScore();
    
    } else if (player1.getCurrentMove() === "scissors" && player2.getCurrentMove() === "rock") {
        console.log("player 2 wins");
        player2.addScore();
    
    } else if (player1.getCurrentMove() === "paper" && player2.getCurrentMove() === "rock") {
        console.log("player 1 wins")
        player1.addScore();
    
    } else if (player1.getCurrentMove() === "rock" && player2.getCurrentMove() === "paper") {
        console.log("player 2 wins");
        player2.addScore();
    
    } else if (player1.getCurrentMove() === "scissors" && player2.getCurrentMove() === "paper") {
        console.log("player 1 wins");
        player1.addScore();
    
    } else if (player1.getCurrentMove() === "paper" && player2.getCurrentMove() === "scissors") {
        console.log("player 2 wins");
        player2.addScore();
    };
};





