function player(name) {
    let currentScore = 0;
    let playerSymbol = "";
    const getScore = () => currentScore;
    const addScore = () => { currentScore++;};
    const resetScore = () => currentScore = 0;
    const setSymbol = (Symbol) => {playerSymbol = Symbol;};
    const getSymbol = () => playerSymbol;
    return {name, getScore, addScore, resetScore, setSymbol, getSymbol};
};

const player1 = player("james");
const player2 = player("judy");

const gameBoard = (()=>{
    
    let gridSquares = {
        a1: "",
        a2: "",
        a3: "",
        b1: "",
        b2: "",
        b3: "",
        c1: "",
        c2: "",
        c3: "",
    };

    let gameGrid = {
        get colA(){ 
            return `${gridSquares.a1 + gridSquares.a2 + gridSquares.a3}`;
        },

        get colB(){
            return `${gridSquares.b1 + gridSquares.b2 + gridSquares.b3}`;
        },

        get colC(){
            return `${gridSquares.c1 + gridSquares.c2 + gridSquares.c3}`;
        },

        get row1(){
            return `${gridSquares.a1 + gridSquares.b1 + gridSquares.c1}`;
        },

        get row2(){
            return `${gridSquares.a2 + gridSquares.b2 + gridSquares.c2}`;
        },

        get row3(){
            return `${gridSquares.a3 + gridSquares.b3 + gridSquares.c3}`;
        },

        get diagonal1(){
            return `${gridSquares.a3 + gridSquares.b2 + gridSquares.c1}`;
        },

        get diagonal2(){
            return `${gridSquares.a1 + gridSquares.b2 + gridSquares.c3}`;
        },

    };

    let turnsPlayed = 0;

    const getTurnsPlayed = () => turnsPlayed;

    const getGridSquareVal = (square) => gridSquares[square];

    const getBoardSection = (section) => gameGrid[section];

    const showGridSquare = () => gridSquares;

    const addSymbol = (square, sign) => {
        turnsPlayed++;
        gridSquares[square] = sign;
    };

    return {addSymbol, getGridSquareVal, getBoardSection, showGridSquare, getTurnsPlayed, winCondition};
})();







