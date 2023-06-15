const hambuger = document.querySelector(".hambuger");
const navMenu = document.querySelector(".nav-menu");

hambuger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hambuger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hambuger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Hero section Script
function img(anything) {
  document.querySelector(".slide").src = anything;
}

function change(change) {
  const line = document.querySelector(".image");
  line.style.background = change;
}

previewBox.forEach((close) => {
  close.querySelector(".fa-times").onclick = () => {
    close.classList.remove("active");
    preveiwContainer.style.display = "none";
  };
});

//OUR Staff
var swiper = new Swiper(".staff-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

// Sacraments accodion Script
var accItem = document.getElementsByClassName("accordionItem");
var accHD = document.getElementsByClassName("accordionIHeading");

for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener("click", toggleItem, false);
}

function toggleItem() {
  var itemClass = this.parentNode.className;
  for (var i = 0; i < accItem.length; i++) {
    accItem[i].className = "accordionItem close";
  }
  if (itemClass == "accordionItem close") {
    this.parentNode.className = "accordionItem open";
  }
}

// Faq Accordion
let accordion = document.querySelectorAll(
  ".faq .accordion-container .accordion"
);

accordion.forEach((acco) => {
  acco.onclick = () => {
    accordion.forEach((dion) => dion.classList.remove("active"));
    acco.classList.toggle("active");
  };
});

document.querySelector(".load-more .btn").onclick = () => {
  document.querySelectorAll(".parish .box-container .hide").forEach((show) => {
    show.style.display = "block";
  });
  document.querySelector(".load-more .btn").style.display = "none";
};
