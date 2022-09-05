
const main = function () {
    
new Swiper("#swiper-1", {
    effect: "fade", // delete for si
     autoplay: {
   delay: 5000,
 },
})



};

const init = function () {
    c(74);
  main();
};

window.onload = function () {
  init();
};
