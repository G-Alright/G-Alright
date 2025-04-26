// Get references to HTML elements
const addTimestampBtn = document.getElementById('add-timestamp-btn');
const dataInput = document.getElementById('data-input');
const timestampsList = document.getElementById('timestamps-list');

// Function to add a new timestamp and associated data
function addTimestamp() {
    // Get the current date and time
    const currentDate = new Date();
    const timestampString = currentDate.toLocaleString();

    // Get the data from the input field
    const dataString = dataInput.value;

    // Create a new list item for the timestamp and data
    const listItem = document.createElement('li');
    listItem.textContent = `${timestampString}: ${dataString}`;

    // Add the list item to the timestamps list
    timestampsList.appendChild(listItem);

    // Clear the input field
    dataInput.value = '';
}

// Add an event listener to the button to add a timestamp and data when clicked
addTimestampBtn.addEventListener('click', addTimestamp);