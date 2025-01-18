//MOBILE MENU
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

//STICKY NAVBAR
window.addEventListener("scroll",function(){
    var header = document.querySelector("nav");
    header.classList.toggle("sticking",window.scrollY > 0)
})

//SMOOTH SCROLL TO PROJECTS PAGE
function smoothScroll(target)
{
    var targetElement = document.getElementById(target);
    if (targetElement)
    {
        window.scrollTo({
            top:targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
}
