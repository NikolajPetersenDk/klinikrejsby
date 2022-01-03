const menuKnap = document.getElementById('burgerMenu');
const navbar = document.getElementById('navbar');
let menuLink = document.getElementsByClassName('menuLink');

menuKnap.addEventListener('click', () => navbar.style.display = 'block');

Array.from(menuLink).forEach(link => {
    link.addEventListener('click', () => {
        console.log(window.innerWidth);
        if (window.innerWidth <= 900) {
            navbar.style.display = 'none';
        }
    });
});

window.onresize = function(){
    if (window.innerWidth >= 901) {
        navbar.style.display = 'initial';    
    } else {
        navbar.style.display = 'none';
    }
}