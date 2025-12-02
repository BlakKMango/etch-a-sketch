const canvas = document.querySelector("#canvas");

function addSquaresToCanvas(userInputNum){
    totalSquares = userInputNum * userInputNum;
    for(let i = 0; i <= totalSquares; i++){
        const pixel = canvas.createElement("div")
        pixel.classList.add = "rendered"
    }
}