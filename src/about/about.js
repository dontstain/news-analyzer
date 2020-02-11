import '../vendor/swiper/swiper.min.css'
import '../pages/about.css'
import '../vendor/swiper/swiper.min.js'
import {GithubApi} from '../js/modules/GithubApi.js';
import {CommitCardList} from '../js/components/CommitCardList.js';



let gitApi = new GithubApi();
let commitCards;

gitApi.getCommits()
  .then(commits => {
    commitCards = new CommitCardList(document.querySelector('.commits__slider-wrapper'), commits);
  })
  .then(() => {
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
  });

