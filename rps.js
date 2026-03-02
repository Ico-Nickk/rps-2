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




