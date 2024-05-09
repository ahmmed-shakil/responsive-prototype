// Get the form element
const form = document.querySelector(".contact-form");
console.log("Here");

// Add an event listener for form submissions
form.addEventListener("submit", async (event) => {
  console.log("clicked");
  // Prevent the form from being submitted the normal way
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Get the submit button
  const submitButton = form.querySelector(".form-button");

  // Disable the submit button while the request is in progress
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  // Send the data to the server using a POST request
  try {
    const response = await fetch(
      "https://responsive-prototype-server.onrender.com/api/v1/message/add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
        mode: "cors",
      }
    );

    // Check the response status
    if (response.ok) {
      // The request was successful
      const result = await response.json();
      alert("Message sent successfully!");

      // Reset the form after successful submission
      form.reset();
    } else {
      // Handle any errors that occur
      const errorData = await response.json();
      alert(`Error: ${errorData.error || "Failed to send message."}`);
    }
  } catch (error) {
    // Handle any unexpected errors
    console.log("Error:", error);
    alert("An unexpected error occurred. Please try again later.");
  } finally {
    // Re-enable the submit button and reset the button text
    submitButton.disabled = false;
    submitButton.textContent = "Send Message";
  }
});
