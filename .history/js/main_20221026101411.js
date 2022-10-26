const main = function () {
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

 
$(document).ready(function () {
  $("h1").delay("1000").fadeIn();

  // hide #back-top first
  $(".go-to-top").hide();

  // fade in #back-top
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $(".go-to-top").fadeIn();
      } else {
        $(".go-to-top").fadeOut();
      }
    });

    // scroll body to 0px on click
    $(".go-to-top").click(function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        800
      );
      return false;
    });
  });
});
};

const init = function () {
  c(74);
  main();
};

window.onload = function () {
  init();
};
