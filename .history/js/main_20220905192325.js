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
    lazyloading: true,
    loop: true,
  });

<a href="#" id="name">
    <img title="Hello" src="/ico/view.png" onmouseover="this.src='/ico/view.hover.png'" onmouseout="this.src='/ico/view.png'" />
</a>


  
};

const init = function () {
  c(74);
  main();
};

window.onload = function () {
  init();
};
