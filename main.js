
const submitButton = document.querySelector('button[type="submit"]');
submitButton.addEventListener('click', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault(alert('Thank you for your submission!'));


}

const contactLink = document.getElementById("#contact"); // Or document.querySelector(".contact-link");

contactLink.addEventListener("click", function() {
  // Scroll to the contact section using JavaScript methods
  document.getElementById("#contact").scrollIntoView({ behavior: "smooth" });
});


