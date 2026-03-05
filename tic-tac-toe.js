function player(name) {
    let currentMove = "";
    let currentScore = 0;
    const getScore = () => currentScore;
    const addScore = () => { currentScore++;};
    const addMove = (move) => {currentMove = move;};
    const getCurrentMove = () => currentMove;
    const resetScore = () => currentScore = 0;
    return {name, getCurrentMove, getScore, addScore, addMove, resetScore};
};

const player1 = player("james");
const player2 = player("judy");


const gameOver = (() => {
    let winMessage;
    let champPlayer;
    let champScore;
    let looserScore;
    const getChampPlayer = () => champPlayer;
    const getChampScore = () => champScore;
    const getLooserScore = () => looserScore;
    const getWinMessage = () => winMessage; 
    const winner = () => {
        console.log("runnnig");
        if (player1.getScore() > player2.getScore()) {
            champPlayer = player1.name;
            champScore = player1.getScore();
            looserScore = player2.getScore();
            winMessage = `${champPlayer} wins the game! ${champScore} to ${looserScore} `;
            return 
        } else if (player2.getScore() < player1.getScore()) {
            champPlayer = player2.name;
            champScore = player2.getScore();
            looserScore = player1.getScore();
            console.log(winMessage);
            return winMessage = `${champPlayer} wins score is ${champScore} to ${looserScore} `;
        } else if (player1.getScore() === player2.getScore()) {
            winMessage = `its a tie score is ${player1.getScore()} to ${player2.getScore()} `;
        };
    };

    const resetGame = () => {
        roundLogic.resetRounds();
        player1.resetScore();
        player2.resetScore();
    };

    return {winner, getChampPlayer, getChampScore, getLooserScore, resetGame, getWinMessage};

})();

player1.addMove("rock");
player2.addMove("paper");
roundLogic.playRound();
gameOver.winner();





