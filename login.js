const passwordInput = document.querySelector("#login-password");
const passwordToggle = document.querySelector(".password-toggle");
const loginForm = document.querySelector(".login-form");
const loginMessage = document.querySelector(".login-message");

passwordToggle.addEventListener("click", function () {
  const passwordIsHidden = passwordInput.type === "password";
  passwordInput.type = passwordIsHidden ? "text" : "password";
  passwordToggle.textContent = passwordIsHidden ? "Hide" : "Show";
  passwordToggle.setAttribute("aria-pressed", passwordIsHidden);
});

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  loginMessage.textContent = "This demo login is ready to connect to an account system.";
});