function updateDateTime() {
    const dateTimeElement = document.getElementById("dateTime");
    if (!dateTimeElement) return;
  
    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    dateTimeElement.textContent = now.toLocaleDateString("en-US", options);
  }
  
  setInterval(updateDateTime, 1000);
  updateDateTime();