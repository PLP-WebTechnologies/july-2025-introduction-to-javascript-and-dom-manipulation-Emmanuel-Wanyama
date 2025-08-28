// ===================================
// Part 1: Variables, Conditionals, and Logic
// ===================================

// A simple function to get user input and apply a conditional check.
function checkAge() {
    // Variable declaration to hold user input and result.
    let age = document.getElementById('ageInput').value;
    let resultElement = document.getElementById('ageResult');

    // Make sure the input is not empty.
    if (age === "" || isNaN(age)) {
        resultElement.textContent = "Please enter a valid number.";
        return;
    }
    
    // A simple if/else if/else conditional statement.
    if (age >= 18) {
        resultElement.textContent = "You are an adult.";
    } else if (age >= 0 && age < 18) {
        resultElement.textContent = "You are a minor.";
    } else {
        resultElement.textContent = "Age cannot be negative.";
    }
}


// ===================================
// Part 2: Functions
// ===================================

// Custom function 1: Calculates temperature conversion.
function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

// Custom function 2: A simple function to display a result on the page.
function displayFahrenheit() {
    let tempInput = document.getElementById('tempInput').value;
    let fahrenheitTemp = celsiusToFahrenheit(parseFloat(tempInput));
    
    let resultElement = document.getElementById('tempResult');
    if (!isNaN(fahrenheitTemp)) {
        resultElement.textContent = `${tempInput}°C is ${fahrenheitTemp.toFixed(2)}°F.`;
    } else {
        resultElement.textContent = "Please enter a valid number.";
    }
}


// ===================================
// Part 3: Loops
// ===================================

// An array to loop through.
const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
const listElement = document.getElementById('itemList');

// Example 1: A for...of loop to iterate over an array and create list items.
for (const item of items) {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    listElement.appendChild(listItem);
}

// Example 2: A simple while loop to count down from 5.
let counter = 5;
while (counter > 0) {
    console.log(`Countdown: ${counter}`);
    counter--;
}


// ===================================
// Part 4: DOM Manipulation
// ===================================

// Example 1: Select an element by its ID and change its text content.
const domHeading = document.getElementById('domHeading');
domHeading.textContent = "DOM is now controlling this text!";

// Example 2: Add an event listener to a button.
const domButton = document.getElementById('domButton');
domButton.addEventListener('click', () => {
    // Example 3: Toggle a CSS class on the heading.
    domHeading.classList.toggle('highlight');
    if (domHeading.classList.contains('highlight')) {
        domHeading.textContent = "The text and style are changed!";
    } else {
        domHeading.textContent = "Click again to change it back!";
    }
});