
const main = function () {
    
new Swiper("#swiper-1", {
    effect: "fade"
    pagination: {
        el: "swiper-1 .swiper-pagination",
        clickable: true,


    }
})



};

const init = function () {
    c(74);
  main();
};

window.onload = function () {
  init();
};
