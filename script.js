const squareDivs = document.querySelectorAll(".square");
const button = document.querySelector("button");
let h2 = document.querySelector("h2");

let turn = true; // Håller koll på vems tur det är
let gameOver = false; // Håller koll på om spelet ska sluta pga någon vunnit eller oavgjort
let counter = 0; // Håller koll på antalet klick som gjorts


// GAME

for (let i = 0; i < squareDivs.length; i++) {
    let squareDiv = squareDivs[i];
    squareDiv.addEventListener("click", function (e) {
        if (gameOver) return; // OM gameOver är sant så gör squareDiv oklickbara
        let checkSquare = e.target.textContent; // = Den klickade divens innehåll
        if (turn && checkSquare === "") { // OM turn är sant och OM den klickade divens innehåll är tomt
            squareDiv.textContent = "X";
            h2.textContent = "O turn";
            counter ++; // Adderar antalet klick, för att veta när planen är full och det är oavgjort
            checkForWinner();
            turn = false; // Sätter turn till false så det blir 0's tur att spela
        } else if (!turn && checkSquare === "") { // OM turn är falskt och OM den klickade divens innehåll är tomt
            h2.textContent = "O tur";
            squareDiv.textContent = "O";
            h2.textContent = "X turn";
            counter ++; // Adderar antalet klick, för att veta när planen är full och det är oavgjort
            checkForWinner();
            turn = true; // Sätter turn till true så det blir X's tur att spela
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
        h2.textContent = "X wins";
        button.textContent = "Play again";


        gameOver = true; // Sätter gameOver till sant, så spelar inte kan spelas vidare

    } else if (squareDivs[0].textContent === "O" && squareDivs[1].textContent === "O" && squareDivs[2].textContent === "O" ||
        squareDivs[3].textContent === "O" && squareDivs[4].textContent === "O" && squareDivs[5].textContent === "O" ||
        squareDivs[0].textContent === "O" && squareDivs[3].textContent === "O" && squareDivs[6].textContent === "O" ||
        squareDivs[1].textContent === "O" && squareDivs[4].textContent === "O" && squareDivs[7].textContent === "O" ||
        squareDivs[2].textContent === "O" && squareDivs[5].textContent === "O" && squareDivs[8].textContent === "O" ||
        squareDivs[6].textContent === "O" && squareDivs[7].textContent === "O" && squareDivs[8].textContent === "O" ||
        squareDivs[0].textContent === "O" && squareDivs[4].textContent === "O" && squareDivs[8].textContent === "O") {
        h2.classList.add("winner");
        h2.textContent = "O wins";
        button.textContent = "Play again";


        gameOver = true;

    } else if (counter === squareDivs.length) {
        h2.textContent = "It's a tie";
        h2.classList.add("winner");
        button.textContent = "Play again";

        gameOver = true; // Sätter gameOver till sant, så spelar inte kan spelas vidare

    }
};

//RESET GAME

button.addEventListener("click", function () {
    for (let i = 0; i < squareDivs.length; i++) {
        let squareDiv = squareDivs[i];
        squareDiv.textContent = "";
        turn = true;
        gameOver = false;
        h2.classList.remove("winner");
        h2.textContent = "X starts";
        counter = 0;
        button.textContent = "Start over";
    }
});

// Vill använda detta istället för ALLA if-satser, don't know how tho
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