/*
1. Display connect 4 grid on screen 
    a. click handlers
    b. Beautiful CSS
        -flex boxes
        -colors
        -grid
    c. No invalid moves 
        -display ID row div
        -click counter 
        -once a column is full, cant add more disks 
2. Turn based 
    a. Keep track of disck location
        -Cycles colors based on input counter
    b. Properly cycle between colors 
3. Win condition
    a. 1 player has 4 colors in a row or diagnaly 
    b. Program recognizes win
        -2 variables, "or" command to allow only 1 color to activate win condition   

    */

/*
1. Initalize Game 
a. Display board
b. Display instructions
C. Display whose turn it is 
d. set up click handler for column
2.Take player Input
a.Determine which colum is clicked 
b. Determine which color is dropped 
c. after drop, switch active player 
3.Check of Endgame Conditions
a. See if there is a 4 in a row 
b. See if game is tie 
c. Show endgame messge 
d. allow restart 
*/

let boardModel = [
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
]

const displayBoard = function (board) {

}

const dislayMessage = function (msg) {

}

const displayInstructions = function () {
    displayMessage("here is how to play...")
}

const displayWinningMessage = function () {
    displayMessage(`${winningPlayer} has won!`)
}

const displayTieMessage = function () {
    displayMessage("tie game")
}

const columnClickHandler = function (evt) {

}

const displayActivePlayer = function () {

}

const determineGameWinner = function (board) {
    return ''  // TODO: implement for real
}

const setUpColumnClickHandler = function () {
    const columnThatWasClicked = evt.target
    dropDiskIntoColumn(columnThatWasClicked)
    if (gameIsWon(boardModel)) {
        displayWinningMessage()
    } else if (gameIsATie(boardModel)) {
        displayTieMessage()
    } else {
        switchToNextPlayer()
    }
}

const initalizeGame = function () {
    displayBoard(boardModel)
    displayInstructions()
    displayActivePlayer()
    setUpColumnClickHandler()
}