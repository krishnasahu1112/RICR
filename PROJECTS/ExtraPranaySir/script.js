// A simple mapping of State Name to approximate percentage coordinates (x, y) 
// relative to the SVG map container (0 to 100).
const stateCoordinates = {
    // NOTE: These are approximations for demonstration.
    'GUJARAT': { x: 20, y: 55 },
    'MAHARASHTRA': { x: 35, y: 70 },
    'RAJASTHAN': { x: 20, y: 40 },
    'UTTAR PRADESH': { x: 45, y: 35 },
    'DELHI': { x: 35, y: 32 },
    'KARNATAKA': { x: 40, y: 85 },
    'WEST BENGAL': { x: 65, y: 55 },
    'TAMIL NADU': { x: 55, y: 95 },
    'KERALA': { x: 45, y: 95 },
    // Add all 36 states/UTs here, using the exact name as the SVG 'id'.
    // e.g., 'ANDHRA PRADESH': { x: 60, y: 78 },
};

const input = document.getElementById('state-input');
const button = document.getElementById('search-button');
const flagMarker = document.getElementById('flag-marker');
const datalist = document.getElementById('state-suggestions');

// Populate datalist for suggestions
Object.keys(stateCoordinates).forEach(state => {
    const option = document.createElement('option');
    option.value = state;
    datalist.appendChild(option);
});

// Function to handle the state search
function findStateAndPlaceFlag() {
    const stateName = input.value.toUpperCase().trim();
    // Replace spaces with hyphens if your SVG IDs use them (e.g., UTTAR-PRADESH)
    const stateId = stateName.replace(/ /g, '-'); 
    
    const stateData = stateCoordinates[stateName];

    // 1. Clear any previously highlighted state
    const previouslyHighlighted = document.querySelector('.highlighted-state');
    if (previouslyHighlighted) {
        previouslyHighlighted.classList.remove('highlighted-state');
    }

    if (stateData) {
        // 2. Position the flag marker
        flagMarker.style.left = `${stateData.x}%`;
        flagMarker.style.top = `${stateData.y}%`;
        flagMarker.style.display = 'block';

        // 3. Highlight the corresponding state path in the SVG
        const statePath = document.getElementById(stateId); 
        if (statePath) {
            statePath.classList.add('highlighted-state');
        }

        console.log(`Flag placed on: ${stateName}`);
    } else {
        alert(`State not found: "${stateName}". Please ensure correct spelling.`);
        flagMarker.style.display = 'none';
    }
}

// Attach event listeners
button.addEventListener('click', findStateAndPlaceFlag);

// Allow searching on 'Enter' key press in the input field
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission
        findStateAndPlaceFlag();
    }
});