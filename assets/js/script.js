$.appear("#behtar-beshnas", {});
$("#behtar-beshnas").on("appear", function () {
  setTimeout(function () {
    document.getElementById("counter-1").innerHTML = 26;
  }, 1200);
  setTimeout(function () {
    document.getElementById("counter-2").innerHTML = 6500;
  }, 1000);
  setTimeout(function () {
    document.getElementById("counter-3").innerHTML = 50;
  }, 1100);
  setTimeout(function () {
    document.getElementById("counter-4").innerHTML = 400;
  }, 1100);
});
const swiper = new Swiper(".swiper", {
  grabCursor: true,
  spaceBetween: 40,
  slidesPerView: 2,
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 60,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 60,
    },
  },
});
