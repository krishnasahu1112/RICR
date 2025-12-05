function inputValue(char){
    if(char === '='){
        try{
            const exp = document.getElementById("Display").value;
            document.getElementById("Display").value = eval(exp);
        }
        catch(error){
            alert("Invalid Expression");
            document.getElementById("Display").value = "";
        }
    }
    else if(char === 'C'){
        document.getElementById("Display").value = "";
    }
    else{
        let exp = document.getElementById("Display").value;
        exp = exp+char;
        document.getElementById("Display").value = exp;
    }

}

document.addEventListener("keydown", (abc)=>{
    console.log("Pressed Key", abc.key);

    if(abc.key === "Enter"){
        inputValue('=');
    }
    else if(
        abc.key === "0" || 
        abc.key === "1" || 
        abc.key === "2" || 
        abc.key === "3" || 
        abc.key === "4" || 
        abc.key === "5" || 
        abc.key === "6" || 
        abc.key === "7" || 
        abc.key === "8" || 
        abc.key === "9" || 
        abc.key === "+" || 
        abc.key === "-" || 
        abc.key === "*" || 
        abc.key === "/" 
    ){
        inputValue(abc.key);
    }
    else if(abc.key === "Backspace"){
        inputValue('C');
    }

});