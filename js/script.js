const hamburgerMenu = document.querySelector('.nav-open');
const nav = document.querySelector('nav')

const menuOpen = () => {
    nav.classList.toggle('menu-open');
}


hamburgerMenu.addEventListener('click', ()=>{
    menuOpen();
})