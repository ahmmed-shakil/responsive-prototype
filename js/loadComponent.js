function loadComponent(componentPath, targetElement) {
    fetch(componentPath)
      .then((response) => response.text())
      .then((content) => {
        document.querySelector(targetElement).innerHTML = content;
      })
      .catch((error) => console.error("Error loading component:", error));
  }
  


  loadComponent("./header.html", "header");
  loadComponent("./footer.html", "footer");