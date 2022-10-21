const main = function () {

    [].forEach.call($$("*"), function (a) {
      a.style.outline =
        "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16);
    });
  new Swiper("#swiper-1", {
    effect: "cube", // delete for sideways motion, use fade
    autoplay: {
      delay: 6500,
    },
    pagination: {
        el: "#swiper-1 .swiper-pagination",
        clickable: true,
    },
    lazyloading: true,
    loop: true,
  });




  
};

const init = function () {
  c(74);
  main();
};

window.onload = function () {
  init();
};
