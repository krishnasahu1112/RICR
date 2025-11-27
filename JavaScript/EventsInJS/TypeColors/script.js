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




