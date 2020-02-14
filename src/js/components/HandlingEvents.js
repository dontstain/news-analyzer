import renderBlock from '../utils/render-block.js';
import {RESULT, CARDS, NO_RESULT, LOADING, ERROR} from '../constants/blocks.js';
import {NewsCard} from '../components/NewsCard.js';
import {NewsCardList} from '../components/NewsCardList';

const newsCard = new NewsCard();
let newsCardList;

export class HandlingEvents {
  constructor(api) {
    this.api = api;
    document.addEventListener('click', this);
    document.addEventListener('submit', this);
  }

  handleEvent(event) {
    if (event.type === 'click') {
      if (event.target.classList.contains('search-result__more-button')) {
        
      }
    }

    else if (event.type === 'submit') {
      event.preventDefault();
      
      CARDS.innerHTML = '';
      if (event.target.classList.contains('search__form')) {
        renderBlock(LOADING);
        this.api.getNews(`${document.querySelector('.search__input').value}`)
          .then(res => {
            if (res) {
              if (res.articles.length) {
                newsCardList = new NewsCardList(CARDS, res.articles, newsCard); 
                
                newsCardList.renderThree();
                renderBlock(RESULT);
              } else {
                renderBlock(NO_RESULT);
              }
            } else {
              renderBlock(ERROR);
            }
          })
      }
    }
  }
}