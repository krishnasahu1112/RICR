function submit(){
    const val = Number(document.getElementById("val").value);

    const random = Math.floor(Math.random()*100+1);
    
    const result = document.getElementById("result");

    if(random<val){
        const print = document.createElement("div");
        print.classList.add("bg-warning-subtle", "d-flex", "flex-column", "p-3", "m-2", "text-bold");
        print.innerText = "Guess a lower value";

        
        result.appendChild(print);

    }
    else if(random>val){
        const print = document.createElement("div");
        print.classList.add("bg-warning-subtle", "d-flex", "flex-column", "p-3", "m-2", "text-bold");
        print.innerText = "Guess a lower value";

        // const result = document.getElementById("result");
        result.appendChild(print);
        
    }
    else{
        const print = document.createElement("div");
        print.classList.add("bg-warning-subtle", "d-flex", "flex-column", "p-3", "m-2", "text-bold");
        print.innerText = "You won the game";

        // const result = document.getElementById("result");
        result.appendChild(print);

        return;
    }
    

}