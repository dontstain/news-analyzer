import '../vendor/swiper/swiper.min.css'
import '../pages/about.css'
import '../vendor/swiper/swiper.min.js'

var mySwiper = new Swiper ('.swiper-container', {
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  grabCursor: true,
  slidesPerView: 'auto',
  spaceBetween: 12,
  centeredSlides: true
})
