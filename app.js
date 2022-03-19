const navbarToggle = document.querySelector(".icon");
const nav = document.querySelector(".nav_details");
const navbar = document.querySelector('.show_menu')

navbarToggle.addEventListener("click", function(){
    nav.classList.toggle("show_menu");
    navbar.style.transition = "all .8s"

})
window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > screen.height) {
      navbar.classList.remove("show_menu");
    }
})
