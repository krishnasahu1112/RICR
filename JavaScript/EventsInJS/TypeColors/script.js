function On(){
    document.getElementById("Bulb").style.backgroundColor = "yellow";
}
function Off(){
    document.getElementById("Bulb").style.backgroundColor = "white";
}
function Red(){
    document.getElementById("Bulb").style.backgroundColor = "red";
}
function Blue(){
    document.getElementById("Bulb").style.backgroundColor = "blue";
}
function Green(){
    document.getElementById("Bulb").style.backgroundColor = "lightgreen";
}
// function typeColor(){
//     document.getElementById("Bulb").style.backgroundColor =document.getElementById("TypeColor").value;
// }

const userColor = document.getElementById("color");

userColor.addEventListener("change", () => changeBulbColor(userColor.value));

function SB_Control(){
    const btn = document.getElementById("SB_btn");
    if(btn.innerText==="On"){
        document.getElementById("SB_btn").innerText = "Off";
        document.getElementById("smartBulb").classList.add("on");
    }
    else{
        document.getElementById("SB_btn").innerText = "On";
        document.getElementById("smartBulb").classList.remove("on");
    }
}

function SB_Control2(){
    document.getElementById("smartBulb").classList.toggle("on");
}


document.getElementById("color1").addEventListener("mouseenter", ()=>{
    fillColor("violet")
})
document.getElementById("color1").addEventListener("mouseleave", ()=>{
    fillColor("white")
})

document.getElementById("color2").addEventListener("mouseenter", ()=>{
    fillColor("indigo")
})
document.getElementById("color2").addEventListener("mouseleave", ()=>{
    fillColor("white")
})

document.getElementById("color3").addEventListener("mouseenter", ()=>{
    fillColor("blue")
})
document.getElementById("color3").addEventListener("mouseleave", ()=>{
    fillColor("white")
})

document.getElementById("color4").addEventListener("mouseenter", ()=>{
    fillColor("green")
})
document.getElementById("color4").addEventListener("mouseleave", ()=>{
    fillColor("white")
})

document.getElementById("color5").addEventListener("mouseenter", ()=>{
    fillColor("yellow")
})
document.getElementById("color5").addEventListener("mouseleave", ()=>{
    fillColor("white")
})

document.getElementById("color6").addEventListener("mouseenter", ()=>{
    fillColor("orange")
})
document.getElementById("color6").addEventListener("mouseleave", ()=>{
    fillColor("white")
})

document.getElementById("color7").addEventListener("mouseenter", ()=>{
    fillColor("red")
})
document.getElementById("color7").addEventListener("mouseleave", ()=>{
    fillColor("white")
})


function fillColor(Color){
    document.getElementById("Bulb1").style.backgroundColor = Color;
}
