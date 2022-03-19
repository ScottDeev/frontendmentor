const navbarToggle = document.querySelector(".icon");
const nav = document.querySelector("#navbar");
const prev = window.pageYOffset;

navbarToggle.addEventListener("click", function(){
    nav.classList.toggle("hide_menu");
})

window.addEventListener("scroll", function(){
    if(prev < 50){
        nav.classList.add("hide_menu");
    }
})
