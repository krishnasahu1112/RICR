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