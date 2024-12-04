//모바일 메뉴
$(".ham").click(function () {
  $(".mgnb_wrap").animate({
    left: "0"
  });
});

$(".mgnb_close").click(function () {
  $(".mgnb_wrap").animate({
    left: "100%"
  });
});

$(".mgnb > li").click(function () {
  $(this).find(".mdepth2").stop().slideToggle();
  $(this).siblings().find(".mdepth2").slideUp();
});

// 2차메뉴
$(".gnb > li").hover(function () {
  $(this).find(".depth2").stop().slideToggle()
});

//배너슬라이드
const banner_list = new Swiper('.banner_list', {
  autoplay: { //자동재생
    delay: 3000, // 3초 숫자 조절 가능
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});

//prd슬라이드
const prd_list = new Swiper('.prd_list', {
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1000,

  //반응형슬라이드
  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2.5,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});