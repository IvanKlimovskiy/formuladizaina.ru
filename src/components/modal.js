import {
  buttonsClosePopup,
  formOpenedPopup,
  popupList,
  smallMenuOverlay,
  smallNavMenu,
  popupOpenedImage,
} from "./variables";
import { lockScroll, unlockScroll } from "./utils";
import { checkInputs } from "./validation";

buttonsClosePopup.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest(".popup");
    closePopup(popup);
  });
});

popupList.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (
      evt.target.classList.contains("popup") ||
      evt.target.classList.contains("nav-menu-small__overlay")
    ) {
      closePopup(popup);
    }
  });
});

const openSmallMenu = () => {
  lockScroll();
  smallMenuOverlay.classList.add("nav-menu-small__overlay_active");
  smallNavMenu.classList.add("nav-menu-small_active");
};

const closeSmallMenu = () => {
  unlockScroll();
  smallMenuOverlay.classList.remove("nav-menu-small__overlay_active");
  smallNavMenu.classList.remove("nav-menu-small_active");
};

const closeByEscape = (evt) => {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
};

const openPopup = (popup) => {
  checkInputs();
  popup.classList.add("popup_opened");
  lockScroll();
  window.addEventListener("keydown", closeByEscape);
};

const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
  unlockScroll();
  window.removeEventListener("keydown", closeByEscape);
  formOpenedPopup.reset();
  if (popup.classList.contains("popup_type_image")) {
    popupOpenedImage.src = "";
    popupOpenedImage.alt = "";
  }
};

export { openPopup, closePopup, openSmallMenu, closeSmallMenu };
