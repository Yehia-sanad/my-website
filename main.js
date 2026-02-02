// Select elements from the DOM
const goalInput = document.getElementById('goalInput');
const updateBtn = document.getElementById('updateBtn');
const currentGoal = document.getElementById('currentGoal');

// Add event listener to the button
updateBtn.addEventListener('click', () => {
    const text = goalInput.value;

    if (text.trim() !== "") {
        currentGoal.textContent = text;
        goalInput.value = ""; // Clear input after update
    } else {
        alert("Please enter a goal!");
    }
});