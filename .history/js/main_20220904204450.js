const main = function () {
  new Swiper("#swiper-1", {
    effect: "cube", // delete for sideways motion, use fade
    autoplay: {
      delay: 5000,
    },
    pagination: {
        el: "#swiper-1 .swiper-pagination",
        clickable: true,
    },
    la
  });
};

const init = function () {
  c(74);
  main();
};

window.onload = function () {
  init();
};
