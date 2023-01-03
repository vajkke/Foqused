const signupBtn = document.querySelector(".signup__no-account");
const loginPopUp = document.querySelector(".form-section--login");
const signupPopUp = document.querySelector(".form-section--signup");

const buyBtns = document.querySelectorAll(".buy");
const mainPopUp = document.querySelector(".pop-up__center");

const exit = document.querySelector(".exit");

signupBtn.addEventListener("click", function () {
  loginPopUp.style.display = "none";
  signupPopUp.style.display = "flex";
});

buyBtns.forEach((buy) => {
  buy.addEventListener("click", function (e) {
    mainPopUp.style.display = "flex";
    document.querySelector("nav").classList.add("blur");
    document.querySelector("main").classList.add("blur");
    document.querySelector("footer").classList.add("blur");
    mainPopUp.style.top = e.pageY + "px";
  });
});

exit.addEventListener("click", function () {
  mainPopUp.style.display = "none";
  document.querySelector("nav").classList.remove("blur");
  document.querySelector("main").classList.remove("blur");
  document.querySelector("footer").classList.remove("blur");
  loginPopUp.style.display = "flex";
  signupPopUp.style.display = "none";
});
