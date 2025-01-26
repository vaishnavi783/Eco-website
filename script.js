
function calculateCarbonOffset() {
    // Get the number of firecrackers from the form inputs
    const rockets = document.getElementById('rockets').value;
    const flowerPots = document.getElementById('flowerPots').value;
    const sparklers = document.getElementById('sparklers').value;
    const groundChakkars = document.getElementById('groundChakkars').value;

    // Convert inputs to numbers and check if they are valid
    if (rockets < 0 || flowerPots < 0 || sparklers < 0 || groundChakkars < 0) {
        alert("Please enter valid non-negative numbers.");
        return;
    }

    // Carbon emission estimates for each firecracker type in kg CO2
    const emissionPerRocket = 1.5; // kg CO2 per rocket
    const emissionPerFlowerPot = 0.2; // kg CO2 per flower pot
    const emissionPerSparkler = 0.05; // kg CO2 per sparkler
    const emissionPerGroundChakkar = 0.3; // kg CO2 per ground chakkar

    // Calculate the total carbon emissions based on user input
    const totalEmission = (rockets * emissionPerRocket) + 
                          (flowerPots * emissionPerFlowerPot) + 
                          (sparklers * emissionPerSparkler) + 
                          (groundChakkars * emissionPerGroundChakkar);

    // Display the result to the user
    const resultElement = document.getElementById('offset-result');
    resultElement.textContent = `Your total carbon emission from firecrackers is ${totalEmission.toFixed(2)} kg CO2. Offset it by planting trees.`;
    resultElement.style.display = "block"; // Show the result div
}
// script.js

// Get all flashcards
const flashcards = document.querySelectorAll('.flashcard');

// Add event listener to each flashcard to flip it on click
flashcards.forEach(flashcard => {
    flashcard.addEventListener('click', () => {
        flashcard.classList.toggle('flipped');
    });});
    