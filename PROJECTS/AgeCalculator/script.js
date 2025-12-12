function submit(){
    const cd = document.getElementById("currDate").value;
    const dob = document.getElementById("dob").value;

    const cy = new Date(cd).getFullYear();
    const by = new Date(dob).getFullYear();

    const age = cy-by;
    // console.log(age);

    const print = document.createElement("div");
    print.classList.add("bg-warning-subtle", "d-flex", "flex-column", "p-3", "m-2", "text-bold");
    print.textContent = "Age is: "+age;

    const result = document.getElementById("result");
    result.innerText = "";
    
    result.appendChild(print);
}