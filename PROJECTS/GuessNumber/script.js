
const random = Math.floor(Math.random()*100+1);

function submit(){

    const val = Number(document.getElementById("val").value);

    const result = document.getElementById("result");

    const print = document.createElement("div");
    result.innerHTML = "";

    if(val<1 || val>100){
        alert("Enter number between 1 and  100");
        return;
    }

    if(random<val){
        print.classList.add("bg-warning-subtle", "d-flex", "flex-column", "p-3", "m-2", "text-bold");
        print.innerText = "Guess a lower value";
    }
    else if(random>val){
        print.classList.add("bg-warning-subtle", "d-flex", "flex-column", "p-3", "m-2", "text-bold");
        print.innerText = "Guess a higher value";
    }
    else{
        print.classList.add("bg-warning-subtle", "d-flex", "flex-column", "p-3", "m-2", "text-bold");
        print.innerText = "Hooray!!..You won the game";
    }
    result.appendChild(print);
}

document.getElementById("val").addEventListener("keydown", function (e) {
    if(e.key === "Enter"){
        submit();
    }
});