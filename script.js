const squareDivs = document.querySelectorAll(".square");
const button = document.querySelector("button");
let h2 = document.querySelector("h2");
let turn = true;
let gameOver = false;
let counter = 0;


// GAME

for (let i = 0; i < squareDivs.length; i++) {
    let squareDiv = squareDivs[i];
    squareDiv.addEventListener("click", function (e) {
        if (gameOver) return;
        let checkSquare = e.target.textContent;
        if (turn && checkSquare === "") {
            squareDiv.textContent = "X";
            h2.textContent = "O's tur";
            counter ++;
            checkForWinner();
            turn = false;
        } else if (!turn && checkSquare === "") {
            h2.textContent = "O tur";
            squareDiv.textContent = "O";
            h2.textContent = "X's tur";
            counter ++;
            checkForWinner();
            turn = true;
        }
    });
}

// CHECK FOR WINNER

function checkForWinner() {
    if (squareDivs[0].textContent === "X" && squareDivs[1].textContent === "X" && squareDivs[2].textContent === "X" ||
        squareDivs[3].textContent === "X" && squareDivs[4].textContent === "X" && squareDivs[5].textContent === "X" ||
        squareDivs[6].textContent === "X" && squareDivs[7].textContent === "X" && squareDivs[8].textContent === "X" ||
        squareDivs[0].textContent === "X" && squareDivs[3].textContent === "X" && squareDivs[6].textContent === "X" ||
        squareDivs[1].textContent === "X" && squareDivs[4].textContent === "X" && squareDivs[7].textContent === "X" ||
        squareDivs[2].textContent === "X" && squareDivs[5].textContent === "X" && squareDivs[8].textContent === "X" ||
        squareDivs[0].textContent === "X" && squareDivs[4].textContent === "X" && squareDivs[8].textContent === "X" ||
        squareDivs[2].textContent === "X" && squareDivs[4].textContent === "X" && squareDivs[6].textContent === "X") {
        h2.classList.add("winner");
        h2.textContent = "X vann";

        gameOver = true;

    } else if (squareDivs[0].textContent === "O" && squareDivs[1].textContent === "O" && squareDivs[2].textContent === "O" ||
        squareDivs[3].textContent === "O" && squareDivs[4].textContent === "O" && squareDivs[5].textContent === "O" ||
        squareDivs[0].textContent === "O" && squareDivs[3].textContent === "O" && squareDivs[6].textContent === "O" ||
        squareDivs[1].textContent === "O" && squareDivs[4].textContent === "O" && squareDivs[7].textContent === "O" ||
        squareDivs[2].textContent === "O" && squareDivs[5].textContent === "O" && squareDivs[8].textContent === "O" ||
        squareDivs[6].textContent === "O" && squareDivs[7].textContent === "O" && squareDivs[8].textContent === "O" ||
        squareDivs[0].textContent === "O" && squareDivs[4].textContent === "O" && squareDivs[8].textContent === "O") {
        h2.classList.add("winner");
        h2.textContent = "O vann";

        gameOver = true;

    } else if (counter === squareDivs.length) {
        h2.textContent = "Oavgjort";
        h2.classList.add("winner");

        gameOver = true;

    }
};

// Vill andvända detta istället för ALLA if-satser
/* let possibleWins = [
    [0, 1, 2], //row1
    [3, 4, 5], //row2
    [6, 7, 8], //row3
    [0, 3, 6], //col1
    [1, 4, 7], //col2
    [2, 5, 8], //col3
    [0, 4, 8], //dia1
    [2, 4, 6], //dia2
]; */


//RESET GAME

button.addEventListener("click", function () {
    for (let i = 0; i < squareDivs.length; i++) {
        let squareDiv = squareDivs[i];
        squareDiv.textContent = "";
        turn = true;
        gameOver = false;
        h2.classList.remove("winner");
        h2.textContent = "X börjar";
        counter = 0;
    }
});