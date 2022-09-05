const main = function () {
  new Swiper("#swiper-1", {
    effect: "cube", // delete for sideways motion, use fade
    autoplay: {
      delay: 5000,
    },
    pagination: {
        el: ""

    },
  });
};

const init = function () {
  c(74);
  main();
};

window.onload = function () {
  init();
};
