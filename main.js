

let btn = document.getElementById("btn");

let box = document.getElementById("box");


function ranNum(min, max){
    let colors = ["orange", "red", "blue", "black", "purple"]
    let num =  Math.floor(Math.random() * (max - min + 1)) + min;
    let ranColor = colors[num]
    box.style.backgroundColor = ranColor
    console.log(ranColor)
   
}

