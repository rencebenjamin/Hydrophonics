// Get the current URL path
const currentPage = window.location.pathname.split("/").pop();

// Select all nav links
const navLinks = document.querySelectorAll(".nav-link");

// Loop through links and apply active styling if it matches
navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("text-green-400", "font-semibold");
  }

  // Add click event to update the active link dynamically
  link.addEventListener("click", function () {
    navLinks.forEach((lnk) => lnk.classList.remove("text-green-400", "font-semibold"));
    this.classList.add("text-green-400", "font-semibold");
  });
});
