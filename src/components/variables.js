const burgerMenuButton = document.querySelector(".nav-menu__burger-menu");
const smallMenuOverlay = document.querySelector(".nav-menu-small__overlay");
const smallNavMenu = document.querySelector(".nav-menu-small");
const buttonCloseSmallNavMenu = document.querySelector(
  ".nav-menu-small__close-button"
);
const popupWithImage = document.querySelector(".popup_type_image");
const popupOpenedImage = document.querySelector(".popup__image");
const popupWithForm = document.querySelector(".popup_type_form");
const buttonsOpenForm = Array.from(
  document.querySelectorAll(".button_type_popup")
);
const buttonsClosePopup = Array.from(
  document.querySelectorAll(".popup__close-button")
);
const popupList = Array.from(document.querySelectorAll(".popup"));
const popupTitle = document.querySelector(".popup__title");
const chatButton = document.querySelector(".messenger__button");
const chatLinks = document.querySelector(".messenger__links");
const overlay = document.querySelector("#overlay");
const messenger = document.querySelector(".messenger");
const messengerLinks = Array.from(
  document.querySelectorAll(".messenger__link")
);
const galleryPhotoElements = Array.from(
  document.querySelectorAll(".gallery__main-item")
);
const nextSlide = document.querySelector(
  ".our-production__slider-button_type_next"
);
const prevSlide = document.querySelector(
  ".our-production__slider-button_type_prev"
);
const sliderWrapper = document.querySelector(".our-production__slider-wrapper");
const slideWidth = document.querySelector(
  ".our-production__slider-wrapper"
).offsetWidth;
const slidesNumber = document.querySelector(
  ".our-production__slider-wrapper"
).childElementCount;
const buttonConfirmation = document.querySelector(
  ".popup__button-confirmation"
);
const popupConfirmSentForm = document.querySelector(
  ".popup_type_send-form-confirmation"
);
const subtitleSendFormConfirmation = document.querySelector(
  ".popup__subtitle_type_send-form-confirmation"
);
const forms = Array.from(document.forms);
const agreementCheckboxes = Array.from(
  document.querySelectorAll("input[name=agreement]")
);
const root = document.querySelector(".root");
const scrollWidth = window.innerWidth - root.offsetWidth + "px";
const smallMenuLinks = Array.from(
  document.querySelectorAll(".nav-menu-small__item-link")
);
const formOpenedPopup = document.querySelector(".form_type_popup");

export {
  burgerMenuButton,
  smallMenuOverlay,
  smallNavMenu,
  buttonCloseSmallNavMenu,
  popupWithImage,
  popupWithForm,
  buttonsOpenForm,
  buttonsClosePopup,
  popupList,
  popupTitle,
  chatButton,
  chatLinks,
  overlay,
  messenger,
  messengerLinks,
  galleryPhotoElements,
  popupOpenedImage,
  nextSlide,
  prevSlide,
  sliderWrapper,
  slideWidth,
  buttonConfirmation,
  popupConfirmSentForm,
  subtitleSendFormConfirmation,
  agreementCheckboxes,
  root,
  scrollWidth,
  forms,
  smallMenuLinks,
  formOpenedPopup,
  slidesNumber,
};
