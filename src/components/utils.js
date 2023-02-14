import {messenger, root, scrollWidth} from "./variables";

export const lockScroll = () => {
  root.classList.add("root_scroll_disabled")
  root.style.paddingRight = scrollWidth
  messenger.style.paddingRight = scrollWidth
}

export const unlockScroll = () => {
  setTimeout(() => {
    root.classList.remove("root_scroll_disabled")
    root.style.paddingRight = "0"
    messenger.style.paddingRight = "0"
  }, 200)
}
