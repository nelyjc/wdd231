// Declare the URL to fetch data from
const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

// Select the div with id="cards"
const cards = document.querySelector('#cards');

// Define an async function to fetch and handle the data
async function getProphetData() {
  // Fetch the data from the URL
  const response = await fetch(url);

  // Convert the response to a JSON object
  const data = await response.json();

  // View the JSON data as a table in the browser console
  console.table(data.prophets);
}

// Call the function to execute it
getProphetData();

