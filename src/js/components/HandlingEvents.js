import renderBlock from '../utils/render-block.js';
import {RESULT, NO_RESULT, LOADING} from '../constants/blocks.js';

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

      if (event.target.classList.contains('search__form')) {
        renderBlock(LOADING);
        this.api.getNews(`${document.querySelector('.search__input').value}`)
          .then(res => {
            console.log(res);
            if (res.articles.length) {
              renderBlock(RESULT);
            } else {
              renderBlock(NO_RESULT);
            }
          })
      }
    }
  }
}