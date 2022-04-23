const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('nav');
const navIcon = document.querySelector('.navIcon');


navToggle.addEventListener('click',() => {
	nav.classList.toggle('open')
});

window.addEventListener("resize", () =>{
	if(document.body.clientWidth > 1200){
		nav.classList.remove('open');
	}
});

