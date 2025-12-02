const canvas = document.querySelector("#canvas");

function createCanvas(){
    let userNum = getUserNum()
    addSquaresToCanvas(userNum)
}

function addSquaresToCanvas(userNum){
    let totalSquares = userNum * userNum;
    let squareSize = (800/userNum)
    let squareSizeString = squareSize.toString() + "px";
    
    for(let i = 0; i < totalSquares; i++){
        let pixel = document.createElement("div")
        pixel.classList.add("rendered");
        pixel.style.minWidth = squareSizeString
        pixel.style.minHeight = squareSizeString
        canvas.appendChild(pixel);
    }
}

function getUserNum(){
    let userNum = prompt("How detailed do you want your drawing?\nEnter the number of squares you want on each side of the canvas (max: 100)");
    return userNum
}


document.addEventListener("DOMContentLoaded", createCanvas)
