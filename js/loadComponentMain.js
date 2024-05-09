function loadComponent(componentPath, targetElement) {
  fetch(componentPath)
    .then((response) => response.text())
    .then((content) => {
      document.querySelector(targetElement).innerHTML = content;
    })
    .catch((error) => console.error("Error loading component:", error));
}

// Load the navigation JavaScript
// const script = document.createElement("script");
// script.src = "js/components/navigation/navigation.js";
// script.type = "application/javascript";
// document.body.appendChild(script);

// components

loadComponent("components/header.html", "header");
loadComponent("components/main.html", "main");
loadComponent("components/footer.html", "footer");
