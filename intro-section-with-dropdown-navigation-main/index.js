"use strict";
const featureMenu = document.querySelector(".feature");
const companyMenu = document.querySelector(".company");
const feature = document.querySelector(".f-anchor");
const company = document.querySelector(".c-anchor");
const featureDrop = document.querySelector(".feature-drop");
const companyDrop = document.querySelector(".company-drop");
const arrow = document.querySelector(".arrow");
const nav = document.querySelector(".navbar");
const openBtn = document.querySelector(".open-menu img");
const closeBtn = document.querySelector(".close-menu img");
const body = document.querySelector("body");

//Functions
const toggle = function (drop, menu) {
  drop.classList.toggle("hide-drop");
  if (menu.lastChild.alt === "image-icon-down") {
    menu.lastChild.src = "./images/icon-arrow-up.svg";
    menu.lastChild.alt = "image-icon-up";
  } else {
    menu.lastChild.src = "./images/icon-arrow-down.svg";
    menu.lastChild.alt = "image-icon-down";
  }
};
const close = function () {
  nav.classList.remove("show-menu");
  body.classList.remove("overlay");
  nav.style.transition = "ease .5s";
  body.style.transition = "ease .5s";
};
const open = function () {
  nav.classList.add("show-menu");
  body.classList.add("overlay");
  nav.style.transition = "ease .5s";
  body.style.transition = "ease .5s";
};

//EventListeners
featureMenu.addEventListener("click", function (e) {
  e.preventDefault();
  toggle(featureDrop, feature);
  company.lastChild.src = "./images/icon-arrow-down.svg";
  company.lastChild.alt = "image-icon-down";
  companyDrop.classList.add("hide-drop");
});
companyMenu.addEventListener("click", function (e) {
  e.preventDefault();
  toggle(companyDrop, company);
  feature.lastChild.src = "./images/icon-arrow-down.svg";
  feature.lastChild.alt = "image-icon-down";
  featureDrop.classList.add("hide-drop");
});
openBtn.addEventListener("click", open);
closeBtn.addEventListener("click", close);
