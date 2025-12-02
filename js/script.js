const canvas = document.querySelector("#canvas");
const newCanvasButt = document.querySelector("#new")
const refreshCanvasButt = document.querySelector("#clear")


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
    while (userNum > 100 || userNum < 1 || isNaN(userNum)){
        if(userNum > 100 || userNum === 0){
            userNum = prompt("The number must be between 1 and 100")
        } else if(userNum === false || userNum === NaN){
            userNum = prompt("Please enter a number")
        } else {
            userNum = prompt("Please try again")
        }
    }
    return userNum;
}

function createNewCanvas(){
    //just refresh the page
    window.location.reload();
}


document.addEventListener("DOMContentLoaded", createCanvas)
newCanvasButt.addEventListener("click", createNewCanvas)
// refreshCanvasButt.addEventListener("click", )
