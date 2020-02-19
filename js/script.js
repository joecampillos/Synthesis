var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 40,
    setWrapperSize: true,
    slidesOffsetBefore: 5,
    watchOverflow: true,
    centeredSlides: true,
    loop: true,
    // init: false,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 25,
      },
    }
  });