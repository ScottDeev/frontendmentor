const navbarToggle = document.querySelector(".icon");
const nav = document.querySelector(".nav_details");
const navbar = document.querySelector('.hide_menu');

navbarToggle.addEventListener("click", function(){
    nav.classList.toggle("hide_menu");
    nav.style.transition = "all .8s"

})
window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > screen.height) {
      navbar.classList.add("hide_menu");
    }
})
