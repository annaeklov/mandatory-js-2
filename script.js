const squareDivs = document.querySelectorAll(".square");
const button = document.querySelector("button");
let turn = true;


for (let i = 0; i < squareDivs.length; i++) {
    let squareDiv = squareDivs[i];
    squareDiv.addEventListener("click", function (e) {
        
        let checkSquare = e.target.textContent;
        if (turn && checkSquare === "") {
            squareDiv.classList.add("para");
            squareDiv.textContent = "X";
            //funktion om checkWinner
            turn = false;
        } else if (!turn && checkSquare === "") {
            squareDiv.classList.add("para");
            squareDiv.textContent = "O";
            //funktion om checkWinner
            turn = true;
        }
    });
}

button.addEventListener("click", function (e) {
    for (let i = 0; i < squareDivs.length; i++) {
        let squareDiv = squareDivs[i];
        squareDiv.textContent = "";
    }
});