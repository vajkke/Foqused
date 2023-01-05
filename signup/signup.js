const loginBtnSwitch = document.querySelector(".login--here");
const signupForm = document.querySelector(".signup-form");
const loginForm = document.querySelector(".form-section--login");

const signUpBtn = document.querySelector("#submit_button");
const logInBtn = document.querySelector("#submit-button");

loginBtnSwitch.addEventListener("click", function (e) {
  signupForm.style.display = "none";
  loginForm.style.display = "flex";
});

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

logInBtn.addEventListener("click", (e) => {
  e.preventDefault();
});
