const canvas = document.querySelector("#canvas");

function addSquaresToCanvas(userInputNum){
    let totalSquares = userInputNum * userInputNum;
    let squareSize = (800/userInputNum)
    let squareSizeString = squareSize.toString() + "px";
    
    for(let i = 0; i < totalSquares; i++){
        let pixel = document.createElement("div")
        pixel.classList.add("rendered");
        pixel.style.minWidth = squareSizeString
        pixel.style.minHeight = squareSizeString
        canvas.appendChild(pixel);
    }
}

addSquaresToCanvas(6)