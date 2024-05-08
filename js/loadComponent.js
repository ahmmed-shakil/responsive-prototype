// Load and insert components into the DOM
function loadComponent(componentPath, targetElement) {
  fetch(componentPath)
    .then((response) => response.text())
    .then((template) => {
      document.querySelector(targetElement).innerHTML = template;
      // Dispatch a custom event to notify other scripts that the component is loaded
      const event = new CustomEvent("componentLoaded", {
        detail: {
          targetElement: targetElement,
          componentPath: componentPath,
        },
      });
      document.dispatchEvent(event);
    })
    .catch((error) => console.error("Error loading component:", error));
}

// Load navigation and footer components
window.onload = function () {
  //   loadComponent("components/navigation.html", "header");
  loadComponent("components/footer.html", "footer");
};
