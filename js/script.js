const canvas = document.querySelector("#canvas");
const newCanvasButt = document.querySelector("#new")
const refreshCanvasButt = document.querySelector("#refresh")
const colorPicker = document.querySelector("#color-picker")

let selectedColor = colorPicker.value;
let isMouseDown = false;

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
        pixel.setAttribute("draggable", "false");
        pixel.addEventListener("click", fill)
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

function draw(event){
    if (isMouseDown){
    event.target.style.backgroundColor = selectedColor;
    } 
}

function fill(event){
    event.target.style.backgroundColor = selectedColor;
}

function refreshCanvas(){
    let pixelArray = document.querySelectorAll(".rendered")
    pixelArray.forEach(pixel => {
        pixel.style.backgroundColor = "#ffffff"
    })
}

document.addEventListener("DOMContentLoaded", createCanvas)
document.addEventListener("mousedown", () => isMouseDown = true)
document.addEventListener("mouseup", () => isMouseDown = false)
newCanvasButt.addEventListener("click", createNewCanvas)
refreshCanvasButt.addEventListener("click", refreshCanvas)

colorPicker.addEventListener("change", () => {
    selectedColor = colorPicker.value
    })

canvas.addEventListener("mouseover", draw)
