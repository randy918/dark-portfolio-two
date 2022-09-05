
const main = function () {
    
new Swiper("#swiper-1", {
    effect: "cards", // delete for sideways motion, use fade
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
