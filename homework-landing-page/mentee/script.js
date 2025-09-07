// ================== LANDING PAGE – SIMPLE JS BASICS ==================
// In this exercise you’ll add JavaScript to your landing page.
// You will practice: VARIABLES, FUNCTIONS, CONDITIONALS, LOOPS, and EVENTS.

// As Practice Add: Functions, Arrays, Objects, Data Types and Variables
// New functionality: Toggle theme, Change name, Add wishlisted game

// ---------------------------------------------------------------------
// STEP 1: VARIABLES
// - Create a variable to store your NAME as a string.
//   Example: const myName = "Jocelin";
// - Create another variable to store the number of visits (start at 0).
//   Example: let visits = 0;
// - Use console.log() to print both variables to check they work.
let myName = "Alex";
let visitCount = 0;

console.log(`Name: ${myName}, Visits: ${visitCount}`);

// ---------------------------------------------------------------------
// STEP 2: FUNCTIONS
// - Make a function called showGreeting.
// - Inside the function, select the <p> element with id="greeting" from your HTML.
// - Change its text to say: "Welcome " + your name variable.
// - Call (run) the function so the greeting shows when the page loads.

// ---------------------------------------------------------------------
// STEP 3: CONDITIONALS (IF / ELSE)
// - Use the Date object: new Date().getHours() to get the current hour.
// - Write an if/else statement to change the greeting depending on the time:
//   * If hour is less than 12 → show "Good morning <name>"
//   * Else if hour is less than 18 → show "Good afternoon <name>"
//   * Else → show "Good evening <name>"

const greeting = document.getElementById("greeting");

function showGreeting() {
  const hour = new Date().getHours();
  let greetingPrefix = "";
  if (hour < 12) {
    greetingPrefix = "Good Morning";
  } else if (hour < 18) {
    greetingPrefix = "Good Afternoon";
  } else {
    greetingPrefix = "Good Evening";
  }
  greeting.innerText = greetingPrefix + " " + myName;
}

showGreeting();

// ---------------------------------------------------------------------
// STEP 4: LOOPS
// - Add event listener to add games button
// - Create new game object with name and price
// - Add game to the list
// - Display the list on site
const games = [];
const gamesList = document.getElementById("gamesList");
const addGame = document.getElementById("addGame");

addGame.addEventListener("click", (event) => {
  event.preventDefault();
  const game = document.getElementById("game").value.trim();
  const price = document.getElementById("price").value;
  document.getElementById("game").value = "";
  document.getElementById("price").value = "";

  const gameCard = {
    name: game,
    price: price,
  };
  games.push(gameCard);
  console.log("Added Game: ", gameCard);
  displayGames();
});

function displayGames() {
  // Reset gamesList HTML
  gamesList.innerHTML = "";
  for (let i = 0; i < games.length; i++) {
    console.log("Listing: ", games[i]);
    const listItem = document.createElement("li");
    listItem.innerText = `${games[i].name} - $${games[i].price}`;
    gamesList.appendChild(listItem);
  }
}

// Remove last game button
const removeGame = document.getElementById("removeGame");
removeGame.addEventListener("click", () => {
  if (games.length > 0) {
    const removedGame = games.pop();
    displayGames();
    console.log("Removed", removedGame.name);
    console.log(games);
  } else {
    console.log("Game List Empty");
  }
});

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
  body.classList.toggle("lightBlueBackground");
});

// Add a name change button
const nameBtn = document.getElementById("nameBtn");

// Prompt for a name on click
nameBtn.addEventListener("click", () => {
  const newName = prompt("Enter New Name");
  if (newName) {
    myName = newName.trim();
    showGreeting();
  }
});

// ---------------------------------------------------------------------
// ✅ GOAL: By finishing these steps, your landing page will:
// - Show your name in a dynamic greeting.
// - Change the greeting based on the time of day.
// - Display a list of features using a loop.
// - Change the background color when a button is clicked.
// - And you’ll have practiced all the basics: variables, functions,
//   conditionals, loops, and events!
