function calculate(){
    const amt = document.getElementById("amount").value;
    const rate = document.getElementById("tip").value;
    const nop = document.getElementById("nop").value;

    const tip = amt/nop;
    const tippp = (tip*rate)/100;
    const print = document.createElement("div");
    print.classList.add("bg-warning-subtle", "d-flex", "flex-column", "p-3", "m-2");
    print.textContent = "Total tip per person: " + tippp;
    
    const result = document.getElementById("result");
    result.appendChild(print);

}

