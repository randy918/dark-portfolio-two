
const main = function () {
    
new Swiper("#swiper-1", {
    effect: "cube", // delete for sideways motion
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
