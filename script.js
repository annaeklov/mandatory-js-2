const squareDivs = document.querySelectorAll(".square");
const button = document.querySelector("button");
let h2 = document.querySelector("h2");

let turn = true; // Håller koll på vems tur det är
let gameOver = false; // Håller koll på om spelet ska sluta pga någon vunnit eller oavgjort
let counter = 0; // Håller koll på antalet klick som gjorts totalt

// GAME
for (let i = 0; i < squareDivs.length; i++) {
    let squareDiv = squareDivs[i];
    squareDiv.addEventListener("click", function (e) {
        if (gameOver) return; // OM gameOver är sant så gör squareDiv oklickbara
        let checkSquare = e.target.textContent; // = Den klickade divens innehåll
        if (turn && checkSquare === "") { // OM turn är sant och OM den klickade divens innehåll är tomt
            squareDiv.textContent = "X";
            h2.textContent = "O's turn";
            counter ++; // Adderar antalet klick, för att veta när planen är full och det är oavgjort
            checkForWinner();
            turn = false; // Sätter turn till false så det blir 0's tur att spela
        } else if (!turn && checkSquare === "") { // OM turn är falskt och OM den klickade divens innehåll är tomt
            squareDiv.textContent = "O";
            h2.textContent = "X's turn";
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
        h2.textContent = "X WINS";
        button.textContent = "Play again";
        gameOver = true; // Sätter gameOver till sant, så spelet inte kan spelas vidare

    } else if (squareDivs[0].textContent === "O" && squareDivs[1].textContent === "O" && squareDivs[2].textContent === "O" ||
        squareDivs[3].textContent === "O" && squareDivs[4].textContent === "O" && squareDivs[5].textContent === "O" ||
        squareDivs[0].textContent === "O" && squareDivs[3].textContent === "O" && squareDivs[6].textContent === "O" ||
        squareDivs[1].textContent === "O" && squareDivs[4].textContent === "O" && squareDivs[7].textContent === "O" ||
        squareDivs[2].textContent === "O" && squareDivs[5].textContent === "O" && squareDivs[8].textContent === "O" ||
        squareDivs[6].textContent === "O" && squareDivs[7].textContent === "O" && squareDivs[8].textContent === "O" ||
        squareDivs[0].textContent === "O" && squareDivs[4].textContent === "O" && squareDivs[8].textContent === "O" ||
        squareDivs[2].textContent === "O" && squareDivs[4].textContent === "O" && squareDivs[6].textContent === "O") {
        h2.classList.add("winner");
        h2.textContent = "O WINS";
        button.textContent = "Play again";
        gameOver = true;

    } else if (counter === squareDivs.length) {
        h2.textContent = "IT'S A TIE";
        h2.classList.add("winner");
        button.textContent = "Play again";

        gameOver = true; // Sätter gameOver till sant, så spelet inte kan spelas vidare
    }
};

//RESET GAME
button.addEventListener("click", function () {
    for (let i = 0; i < squareDivs.length; i++) {
        let squareDiv = squareDivs[i];
        squareDiv.textContent = ""; // Gör rutorna tomma
        turn = true; // Gör så X alltid börjar
        gameOver = false; // Gör så det inte är gameOver
        h2.classList.remove("winner");
        h2.textContent = "X starts";
        counter = 0; // Återställer antalet klick
        button.textContent = "Start over";
    }
});
