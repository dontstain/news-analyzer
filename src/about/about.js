import '../vendor/swiper/swiper.min.css'
import '../pages/about.css'
import '../vendor/swiper/swiper.min.js'
import {GithubApi} from '../js/modules/GithubApi.js';
import {CommitCardList} from '../js/components/CommitCardList.js';
import {CommitCard} from '../js/components/CommitCard.js';

const gitApi = new GithubApi();
const commitCard = new CommitCard();
let commitCardList;

gitApi.getCommits()
  .then(commits => {
    if (commits) {
      commitCardList = new CommitCardList(document.querySelector('.commits__slider-wrapper'), commits, commitCard);
      commitCardList.render(); 
    } else {
      let empty = document.querySelector('.swiper-container');
      
      empty.nextElementSibling.classList.remove('commits__error_hidden');
      empty.setAttribute('style', 'display: none');
    }
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

