$("document").ready(function(){

  // wow js
  new WOW().init();

  // 스크롤 탑
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

  $('.scroll_top').click(function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.scroll_top').fadeIn(400);
    } else {
      $('.scroll_top').fadeOut(400);
    }
  });

  // 햄버거 모션
  var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
  });

  // 사이드 메뉴
  $(".hamburger").click(function(){
    $(".side").toggleClass("on")
    $(".side").fadeToggle(100)
    $("header, header .logo, nav").toggleClass("on")
    $("body").toggleClass("hidden")
  })

  $(".side .menu").mouseover(function(){
    let menu_idx = $(this).index()
    $(".side .menu").eq(menu_idx).find("a").addClass("on")
  })

  $(".side .menu").mouseout(function(){
    let menu_idx = $(this).index()
    $(".side .menu").eq(menu_idx).find("a").removeClass("on")
  })

  // 인트로 설정
  setTimeout(function(){
    $(".intro-1").fadeOut()
    $(".cursor").fadeIn()
  },1900)

  $(".skip").click(function(){
    $(".intro-2").fadeOut()
  })

  // 메인 슬라이드
  var swiper = new Swiper(".main_slide", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  // 포트폴리오 슬라이드
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      // 화면이 1024보다 클때
      1024: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      375: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      280: {
        slidesPerView: 1,
        spaceBetween: 10
      },
    }
  });

  // 히스토리 슬라이드
  var swiper = new Swiper(".history-slide", {
    slidesPerView: 3,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      280: {
        slidesPerView: 1,
        spaceBetween: 20
      },
    }
  });
})





