const loginBtn = document.querySelector('.login--here');
const signupForm = document.querySelector('.signup-form');
const loginForm = document.querySelector('.form-section--login');

loginBtn.addEventListener('click', function(){
	signupForm.style.display='none';
	loginForm.style.display='flex';
})