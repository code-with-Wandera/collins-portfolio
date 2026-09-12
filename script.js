const currentYear = document.querySelector("#current-year");
const toggleSideNavBtn = document.querySelector(".toggle-side-nav-btn");
const sideNav = document.querySelector(".side-nav");

// Update copyright year
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// Mobile navigation
if (toggleSideNavBtn && sideNav) {
  toggleSideNavBtn.addEventListener("click", () => {
    toggleSideNavBtn.classList.toggle("close-side-nav-btn");
    sideNav.classList.toggle("show-side-nav");
  });

  // Close menu when navigation link is clicked
  sideNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      toggleSideNavBtn.classList.remove("close-side-nav-btn");
      sideNav.classList.remove("show-side-nav");
    }
  });
}