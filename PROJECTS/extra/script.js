const stateCoordinates = {
    "rajasthan": {x: 25, y: 36},
    "gujarat": {x: 15, y: 45},
    "maharashtra": {x: 30, y: 55},
    "madhya pradesh": {x: 35, y: 45},
    "uttar pradesh": {x: 45, y: 34},
    "punjab": {x: 30, y: 22},
    "himachal pradesh": {x: 35, y: 20},
    "jammu and kashmir": {x: 29, y: 12},
    "ladakh": {x: 35, y: 10},
    "haryana": {x: 32, y: 26},
    "delhi": {x: 35, y: 28},
    "bihar": {x: 60, y: 37},
    "sikkim": {x: 69, y: 32},
    "west bengal": {x: 68, y: 45},
    "odisha": {x: 55, y: 53},
    "jharkhand": {x: 60, y: 45},
    "chhattisgarh": {x: 48, y: 50},
    "uttarakhand": {x: 36, y: 19},
    "telangana": {x: 38, y: 62},
    "andhra pradesh": {x: 38, y: 70},
    "tamil nadu": {x: 37, y: 80},
    "karnataka": {x: 28, y: 70},
    "kerala": {x: 30, y: 85},
    "assam": {x: 82, y: 35},
    "tripura": {x: 85, y: 55},
    "nagaland": {x: 87, y: 35},
    "mizoram": {x: 83, y: 43},
    "sri lanka": {x: 44, y: 92},
    "meghalaya": {x: 77, y: 37},
    "goa": {x: 23,y: 68},
    "arunachal pradesh": {x: 85, y: 31},
    "manipur": {x: 87, y: 38}
};

const capitals = {
    "rajasthan": "Jaipur",
    "gujarat": "Gandhinagar",
    "maharashtra": "Mumbai",
    "madhya pradesh": "Bhopal",
    "uttar pradesh": "Lucknow",
    "punjab": "Chandigarh",
    "himachal pradesh": "Shimla",
    "jammu and kashmir": "Srinagar",
    "ladakh": "Leh",
    "haryana": "Chandigarh",
    "delhi": "New Delhi",
    "bihar": "Patna",
    "sikkim": "Gangtok",
    "west bengal": "Kolkata",
    "odisha": "Bhubaneshwar",
    "jharkhand": "Ranchi",
    "chhattisgarh": "Raipur",
    "uttarakhand": "Dehradun",
    "telangana": "Hyderabad",
    "andhra pradesh": "Amrawati",
    "tamil nadu": "Chennai",
    "karnataka": "Bengaluru",
    "kerala": "Thiruvananthapuram",
    "assam": "Dispur",
    "tripura": "Agartala",
    "manipur": "Imphal",
    "nagaland": "Kohima",
    "mizoram": "Aizawl",
    "sri lanka": "Colombo",
    "meghalaya": "Shillong",
    "goa": "Panaji",
    "arunachal pradesh": "Itanagar"
};

function placeFlag(stateName) {
    const input = stateName || document.getElementById("stateInput").value.trim().toLowerCase();
    const msg = document.getElementById("msg");

    if (!stateCoordinates[input]) {
        // msg.innerText = "State not found! Please enter a valid Indian state.";
        return;
    }

    msg.innerText = "";

    if (soundOn) document.getElementById("beepSound").play();

    let pos = stateCoordinates[input];
    let container = document.getElementById("map-container");

    let flag = document.createElement("img");
    flag.src = "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg";
    flag.className = "flag";
    flag.title = "State: " + document.getElementById("stateInput").value.toUpperCase() + "\nCapitals: "+ capitals[input].toUpperCase() ;
    
    flag.style.left = pos.x + "%";
    flag.style.top = pos.y + "%";

    container.appendChild(flag);
}

function reset(){
    if (soundOn) document.getElementById("resetSound").play();
    window.location.reload();
}
//            flag.src = "";


function addAll() {
    Object.keys(stateCoordinates).forEach(placeFlag);
}

let soundOn = true;

function toggleSound() {
    soundOn = !soundOn;
    document.getElementById("soundBtn").innerText = soundOn ? "Sound On" : "Sound Off";
}
