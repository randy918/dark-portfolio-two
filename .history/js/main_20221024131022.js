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




  
};

/* Go To Top button */
$(document).on('knack-scene-render.any', function(event, scene) {  
  const markup = `
    <button id="go-to-top" class="kn-button">
      <i class="fa fa-arrow-up"></i>
      &nbsp; Go to Top
    </button>
  `
  const button = '#go-to-top'
  const hasButton = $(button).length
  
  if (hasButton) {
    return
  }
  
  $('body').append(markup)

  $(button).on('click', function() {
    $("html, body").animate({ scrollTop: 0 }, "slow")
  })

  $(button).css('visibility', 'hidden')

  $(window).on('scroll',function() {
    const scroll = $(window).scrollTop()
    console.log(scroll)
    if (scroll >= 500) {
      $(button).css('visibility', 'visible')
    } else {
      $(button).css('visibility', 'hidden')
    }
  })
})

const init = function () {
  c(74);
  main();
};

window.onload = function () {
  init();
};
