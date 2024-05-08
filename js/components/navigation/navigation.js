document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM content loaded.");
  // Get the menu toggle button and mobile menu by their IDs
});

// const menuToggle = document.getElementById("menu-toggle");
// const mobileMenu = document.getElementById("mobile-menu");

// console.log(menuToggle);
// // Check if both elements exist before adding an event listener
// menuToggle.addEventListener("click", function () {
//   console.log("Clicked");
//   mobileMenu.classList.toggle("hidden");
//   console.log("🚀 ~ mobileMenu:", mobileMenu.classList);
// });



// header

function toggleNav() {
  var navSections = document.getElementById("nav-sections");
  if (navSections.style.display === "flex") {
      navSections.style.display = "none";
  } else {
      navSections.style.display = "flex";
  }
}
