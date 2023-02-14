import "./index.css";
import {
  burgerMenuButton,
  smallMenuOverlay,
  smallNavMenu,
  buttonCloseSmallNavMenu,
  buttonsOpenForm,
  popupWithForm,
  popupTitle,
  messengerLinks,
  chatLinks,
  overlay,
  chatButton,
  galleryPhotoElements,
  popupWithImage,
  popupOpenedImage,
  sliderWrapper,
  nextSlide,
  prevSlide,
  slideWidth,
  buttonConfirmation,
  popupConfirmSentForm,
  subtitleSendFormConfirmation,
  forms,
  agreementCheckboxes, smallMenuLinks,
} from "../components/variables"
import {closePopup, closeSmallMenu, openPopup, openSmallMenu} from "../components/modal";
import {
  activateSubmitButton,
  deactivateSubmitButton,
  enableValidation,
  hasInvalidInputs,
  toggleButtonSendingData
} from "../components/validation"
import maskPhone from "../components/mask";
import {unlockScroll} from "../components/utils";

export const settings = {
  formElement: ".form",
  inputElement: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: ".form__input-error",
};

//Слушатели на бургер меню
burgerMenuButton.addEventListener("click", openSmallMenu);
buttonCloseSmallNavMenu.addEventListener("click", closeSmallMenu);
smallMenuOverlay.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("nav-menu-small__overlay")) {
    closeSmallMenu()
  }
})

buttonsOpenForm.forEach((button) => {
  button.addEventListener("click", () => {
    popupTitle.textContent = button.textContent;
    openPopup(popupWithForm)
  })
})
messengerLinks.forEach((messengerLink) => {
  messengerLink.addEventListener("click", () => {
    chatLinks.classList.remove('messenger__links_active');
    overlay.style.display = "none";
  })
})
document.addEventListener('click', function (evt) {
  if (evt.target.id === 'overlay') {
    chatLinks.classList.remove('messenger__links_active');
    overlay.style.display = "none";
  }
  if (evt.target === chatButton) {
    chatLinks.classList.toggle('messenger__links_active');
    overlay.style.display = "block";
  }
})
galleryPhotoElements.forEach((element) => {
  element.addEventListener("click", (evt) => {
    openPopup(popupWithImage)
    popupOpenedImage.src = evt.target.src;
  })
})

let slideWidthCounter = 0;
nextSlide.addEventListener("click", () => {
  slideWidthCounter += slideWidth;
  sliderWrapper.style.transform = `translateX(-${slideWidthCounter}px)`
  if (slideWidthCounter === (slideWidth * 4)) {
    sliderWrapper.style.transform = `translateX(0)`
    slideWidthCounter = 0
  }
})

prevSlide.addEventListener("click", () => {
  slideWidthCounter -= slideWidth;
  sliderWrapper.style.transform = `translateX(-${slideWidthCounter}px)`
  if (slideWidthCounter === -slideWidth) {
    sliderWrapper.style.transform = `translateX(-${slideWidth * 3}px)`
    slideWidthCounter = slideWidth * 3
  }
})

buttonConfirmation.addEventListener("click", () => {
  closePopup(popupConfirmSentForm)
})

forms.forEach((form) => {
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    toggleButtonSendingData(false, evt)
    const formData = new FormData(form);
    fetch("sendmail.php", {method: "POST", body: formData,}).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(`Ошибка:${response.status}`);
      }
    }).then((response) => {
      openPopup(popupConfirmSentForm)
      subtitleSendFormConfirmation.textContent = response.message
    }).catch((error) => {
      subtitleSendFormConfirmation.textContent = error.message
    }).finally(() => {
      toggleButtonSendingData(true, evt)
      closePopup(popupWithForm)
    })
    form.reset()
    deactivateSubmitButton(form)
  });
})

enableValidation(settings)

agreementCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (evt) => {
    const closestForm = evt.target.closest(".form");
    const agreementCheckbox = closestForm.querySelector("input[name=agreement]")
    if (hasInvalidInputs(Array.from(closestForm.querySelectorAll(".form__input"))) || !agreementCheckbox.checked) {
      deactivateSubmitButton(closestForm)
    } else {
      activateSubmitButton(closestForm)
    }
  })
})
smallMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    unlockScroll()
    smallMenuOverlay.classList.remove("nav-menu-small__overlay_active");
    smallNavMenu.classList.remove("nav-menu-small_active");
  })
})

maskPhone('input[name="number"]')


