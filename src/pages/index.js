import "./index.css";

const burgerMenuButton = document.querySelector(".nav-menu__burger-menu");
const smallMenuOverlay = document.querySelector(".nav-menu-small__overlay");
const smallNavMenu = document.querySelector(".nav-menu-small");
const buttonCloseSmallNavMenu = document.querySelector(".nav-menu-small__close-button");
burgerMenuButton.addEventListener("click", () => {
  smallMenuOverlay.classList.add("nav-menu-small__overlay_active");
  smallNavMenu.classList.add("nav-menu-small_active");
})
buttonCloseSmallNavMenu.addEventListener("click", () => {
  smallMenuOverlay.classList.remove("nav-menu-small__overlay_active");
  smallNavMenu.classList.remove("nav-menu-small_active");
})
