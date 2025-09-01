// ================== LANDING PAGE – SIMPLE JS BASICS ==================
// In this exercise you’ll add JavaScript to your landing page.
// You will practice: VARIABLES, FUNCTIONS, CONDITIONALS, LOOPS, and EVENTS.

// ---------------------------------------------------------------------
// STEP 1: VARIABLES
// - Create a variable to store your NAME as a string.
//   Example: const myName = "Jocelin";
// - Create another variable to store the number of visits (start at 0).
//   Example: let visits = 0;
// - Use console.log() to print both variables to check they work.
const myName = "Alex";
let visitCount = 0;

console.log(`Name: ${myName}, Visits: ${visitCount}`);

// ---------------------------------------------------------------------
// STEP 2: FUNCTIONS
// - Make a function called showGreeting.
// - Inside the function, select the <p> element with id="greeting" from your HTML.
// - Change its text to say: "Welcome " + your name variable.
// - Call (run) the function so the greeting shows when the page loads.

const greeting = document.getElementById("greeting");

function showGreeting() {
    greeting.innerText = "Welcome " + myName;
}

showGreeting();

// ---------------------------------------------------------------------
// STEP 3: CONDITIONALS (IF / ELSE)
// - Use the Date object: new Date().getHours() to get the current hour.
// - Write an if/else statement to change the greeting depending on the time:
//   * If hour is less than 12 → show "Good morning <name>"
//   * Else if hour is less than 18 → show "Good afternoon <name>"
//   * Else → show "Good evening <name>"

const hour = new Date().getHours();
if (hour < 12) {
    greeting.innterText = "Good morning" + myName;
} else if(hour < 18) {
    greeting.innerText = "Good afternoon " + myName;
} else {
    greeting.innerText = "Good evening " + myName;
}

// ---------------------------------------------------------------------
// STEP 4: LOOPS
// - Create an array called features with 3 strings (ex: ["Fast", "Simple", "Fun"]).
// - Use a for loop to go through the array.
// - For each item, console.log it to test your loop works.
// - (Optional) Instead of only logging, you can also create <li> items and add them
//   into the <ul id="featuresList"> in your HTML to show them on the page.
const features = ["Fast", "Simple", "Fun"];
const featuresList = document.getElementById("featuresList");


for (let i = 0; i < features.length; i++) {
    console.log(features[i]);
    const listItem = document.createElement("li");
    listItem.innerText = features[i]
    featuresList.appendChild(listItem);
}

// ---------------------------------------------------------------------
// STEP 5: EVENTS (BUTTON CLICK)
// - In your HTML, add a <button id="themeBtn">Change Theme</button>.
// - In JS, select the button using document.getElementById("themeBtn").
// - Add an event listener for "click".
// - Inside the event, change the body background color (ex: lightblue).
// - Test by clicking the button and watching the background color change!
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    const body = document.querySelector("body");
    body.style.backgroundColor = "lightblue";
});

// ---------------------------------------------------------------------
// ✅ GOAL: By finishing these steps, your landing page will:
// - Show your name in a dynamic greeting.
// - Change the greeting based on the time of day.
// - Display a list of features using a loop.
// - Change the background color when a button is clicked.
// - And you’ll have practiced all the basics: variables, functions,
//   conditionals, loops, and events!
