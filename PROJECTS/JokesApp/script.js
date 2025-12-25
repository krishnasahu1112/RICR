async function getNewJoke(){
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    // console.log(response);
    
    const data = await response.json();
    // console.log(data);
    const print = document.createElement("print");
    print.getElementById("print").

    document.getElementById("setup").innerText = data.setup;
    document.getElementById("punchline").innerText = data.punchline;


}