const signupForm = document.querySelector("#signup-form");
const signupMessage = document.querySelector(".login-message");

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();
  signupMessage.textContent = "This demo does not save your details. Add a server to create accounts.";
});