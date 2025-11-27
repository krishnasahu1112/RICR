const backColor = document.getElementById("background");
backColor.addEventListener("change", ()=>changeBackground(backColor.value))
function changeBackground(color){
    document.getElementById("boxColor").style.backgroundColor = color;
}

const headColor = document.getElementById("heading");
headColor.addEventListener("change", ()=>changeHeading(headColor.value))

function changeHeading(color){
    document.getElementById("head").style.color = color;
}

const textColor = document.getElementById("text");
textColor.addEventListener("change", ()=>changeText(textColor.value))

function changeText(color){
    document.getElementById("lorem").style.color = color;
}