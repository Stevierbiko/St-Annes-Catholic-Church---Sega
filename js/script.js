let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.add('active');
}  

document.querySelector('#close-navbar').onclick = () =>{
  navbar.classList.remove('active');
};

// Hero section Script
function img(anything) {
  document.querySelector(".slide").src = anything;
}

function change(change) {
  const line = document.querySelector(".image");
  line.style.background = change;
}

const previewBox = document.querySelectorAll(".preview-box");
const previewContainer = document.querySelector(".preview-container");

previewBox.forEach((close) => {
  close.querySelector(".fa-times").onclick = () => {
    close.classList.remove("active");
    previewContainer.style.display = "none";
  };
});

// OUR Staff
var swiper = new Swiper(".home-staff-slider", {
  loop:true,
  grabCursor:true,
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

// Sacraments accordion Script
var accItem = document.getElementsByClassName("accordionItem");
var accHD = document.getElementsByClassName("accordionHeading");

for (var i = 0; i < accHD.length; i++) {
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

// FAQ Accordion
let faqAccordion = document.querySelectorAll(
  ".faq .accordion-container .accordion"
);

faqAccordion.forEach((accordion) => {
  accordion.onclick = () => {
    faqAccordion.forEach((item) => item.classList.remove("active"));
    accordion.classList.toggle("active");
  };
});

document.querySelector(".load-more .btn").onclick = () => {
  document.querySelectorAll(".parish .box-container .hide").forEach((show) => {
    show.style.display = "block";
  });
  document.querySelector(".load-more .btn").style.display = "none";
};
// Gallery script
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});
