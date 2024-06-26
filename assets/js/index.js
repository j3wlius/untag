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

// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll(
	".mobile-menu-open-btn"
);
const mobileMenu = document.querySelectorAll(".mobile-navigation-menu");
const mobileMenuCloseBtn = document.querySelector(".menu-close-btn");
const overlay = document.querySelector(".overlay");

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
	const mobileMenuCloseFunction = function () {
		mobileMenu[i].classList.remove("active");
		overlay.classList.remove("active");
	};

	mobileMenuOpenBtn[i].addEventListener("click", () => {
		mobileMenu[i].classList.add("active");
		overlay.classList.add("active");
	});

	mobileMenuCloseBtn.addEventListener("click", mobileMenuCloseFunction);
	overlay.addEventListener("click", mobileMenuCloseFunction);
}

// accordion menu variables
const accordionBtn = document.querySelectorAll(".accordion-menu");
const accordion = document.querySelectorAll(".submenu-category-list");

for (let i = 0; i < accordionBtn.length; i++) {
	accordionBtn[i].addEventListener("click", function () {
		const clickedBtn =
			this.nextElementSibling.classList.contains("active");

		for (let i = 0; i < accordion.length; i++) {
			if (clickedBtn) break;

			if (accordion[i].classList.contains("active")) {
				accordion[i].classList.remove("active");
				accordionBtn[i].classList.remove("active");
			}
		}

		this.nextElementSibling.classList.toggle("active");
		this.classList.toggle("active");
	});
}
