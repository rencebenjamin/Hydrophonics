// script.js
function updateDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    };
    dateTimeElement.textContent = now.toLocaleDateString('en-US', options);
}

// Update the time every second
setInterval(updateDateTime, 1000);

// Initialize on page load
updateDateTime();
