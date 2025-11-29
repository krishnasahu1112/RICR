function start() {
    console.log("Game Started");

    document.getElementById("rolldice1").disabled = false;
    document.getElementById("restartbtn").disabled = false;
    document.getElementById("startbtn").disabled = true;

}

function restart() {
    console.log("Game Restarted");
    window.location.reload();
    // document.getElementById("startbtn").disabled = true;
    // document.getElementById("restartbtn").disabled = false;
    // document.getElementById("rolldice1").disabled = false;
    // document.getElementById("p1sc").innerText = 0;
    // document.getElementById("p2sc").innerText = 0;
    // document.getElementById("rolldice2").disabled = true;
}

function p1play() {
    console.log("Player1Playing");
    let Score = Number(document.getElementById("p1sc").innerText);
    const DF = Math.floor(Math.random()*6) + 1;

    switch(DF) {
        case 1:{
            document.getElementById("p1img").src = "./images/1.png";
        }
        case 2:{
            document.getElementById("p1img").src = "./images/2.png";
        }
        case 3:{
            document.getElementById("p1img").src = "./images/3.png";
        }
        case 4:{
            document.getElementById("p1img").src = "./images/4.png";
        }
        case 5:{
            document.getElementById("p1img").src = "./images/5.png";
        }
        case 6:{
            document.getElementById("p1img").src = "./images/6.png";
        }
        default:{
            document.getElementById("p1img").src = "./images/6.png";
        }
    }

    if(DF === 6){
        document.getElementById("rolldice1").disabled = true;
        document.getElementById("rolldice2").disabled = false;
    }
    else{
        Score = Score + DF;
        document.getElementById("p1sc").innerText = Score;
    }
    
    console.log(DF);
    
}

function p2play() {
    console.log("Player2Playing");
    let Score = Number(document.getElementById("p1sc").innerText);
    const DF = Math.floor(Math.random()*6) + 1;

    switch(DF) {
        case 1:{
            document.getElementById("p2img").src = "./images/1.png";
        }
        case 2:{
            document.getElementById("p2img").src = "./images/2.png";
        }
        case 3:{
            document.getElementById("p3img").src = "./images/3.png";
        }
        case 4:{
            document.getElementById("p4img").src = "./images/4.png";
        }
        case 5:{
            document.getElementById("p5img").src = "./images/5.png";
        }
        case 6:{
            document.getElementById("p6img").src = "./images/6.png";
        }
        default:{
            document.getElementById("p1img").src = "./images/6.png";
        }
    }

    if(DF === 6){
        document.getElementById("rolldice1").disabled = false;
        document.getElementById("rolldice2").disabled = true;
    }
    else{
        Score = Score + DF;
        document.getElementById("p2sc").innerText = Score;
    }
    console.log(DF);
}