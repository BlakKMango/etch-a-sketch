const canvas = document.querySelector("#canvas");

function addSquaresToCanvas(userInputNum){
    totalSquares = userInputNum * userInputNum;
    for(let i = 0; i <= totalSquares; i++){
        const pixel = document.createElement("div")
        pixel.classList.add = "rendered"
        canvas.appendChild(pixel)
    }
}

addSquaresToCanvas(10)