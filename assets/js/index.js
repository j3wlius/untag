"use strict";

// modal variables
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const modalCloseOverlay = document.querySelector(".modal-close-overlay");

// close modal function
const modalCloseFunction = () => {
  modal.classList.add("closed");
};

modalCloseBtn.addEventListener("click", modalCloseFunction);
modalCloseOverlay.addEventListener("click", modalCloseFunction);

// notification toast variables
const notificationToast = document.querySelector(".notification-toast");
const toastCloseBtn = document.querySelector(".toast-close-btn");

// notification toast eventListener
toastCloseBtn.addEventListener("click", () => {
  notificationToast.classList.add("closed");
});