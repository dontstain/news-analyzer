import renderBlock from '../utils/render-block.js';
import {RESULT, CARDS, NO_RESULT, LOADING, ERROR} from '../constants/blocks.js';
import {NewsCardList} from '../components/NewsCardList';
import formQueryDate from '../utils/form-query-date.js';

export class HandlingEvents {
  constructor(api, newsCard, dataStorage) {
    this.api = api;
    this.newsCard = newsCard;
    this.dataStorage = dataStorage;
    this.newsCardList = {};
    document.addEventListener('click', this);
    document.addEventListener('submit', this);
  }

  handleEvent(event) {
    if (event.type === 'submit') {
      const date = new Date();

      event.preventDefault();

      CARDS.innerHTML = '';
      if (event.target.classList.contains('search__form')) {
        const query = document.querySelector('.search__input').value;
        renderBlock(LOADING);
        this.api.getNews(query, formQueryDate(date.setDate(date.getDate() - 6)), formQueryDate(date.setDate(date.getDate() + 6)))
          .then(res => {
            if (res.articles.length) {
              this.newsCardList = new NewsCardList(CARDS, res.articles, this.newsCard); 

              this.newsCardList.renderThree();
              renderBlock(RESULT);
              this.dataStorage.save(query, 'query');
              this.dataStorage.save(res, 'resObj');
            } else {
              renderBlock(NO_RESULT);
            }
          })
          .catch(err => {
            renderBlock(ERROR);
            console.log(err);
          });

        this.api.getNews(query, formQueryDate(date.setDate(date.getDate() - 6)), formQueryDate(date.setDate(date.getDate() + 6)), true)
          .then(res => {
            this.dataStorage.save(res.totalResults, 'mentions');
          })
          .catch(err => console.log(err));

        this.api.getNews(query, formQueryDate(date), formQueryDate(date))
          .then(res => {
            this.dataStorage.save(res.totalResults, 'amountSeven');
          })
          .catch(err => console.log(err));
        this.dataStorage.save(date, 'daySeven');

        this.api.getNews(query, formQueryDate(date.setDate(date.getDate() - 1)), formQueryDate(date))
          .then(res => {
            this.dataStorage.save(res.totalResults, 'amountSix');
          })
          .catch(err => console.log(err));
        this.dataStorage.save(date, 'daySix');

        this.api.getNews(query, formQueryDate(date.setDate(date.getDate() - 1)), formQueryDate(date))
          .then(res => {
            this.dataStorage.save(res.totalResults, 'amountFive');
          })
          .catch(err => console.log(err));
        this.dataStorage.save(date, 'dayFive');

        this.api.getNews(query, formQueryDate(date.setDate(date.getDate() - 1)), formQueryDate(date))
          .then(res => {
            this.dataStorage.save(res.totalResults, 'amountFour');
          })
          .catch(err => console.log(err));
        this.dataStorage.save(date, 'dayFour');

        this.api.getNews(query, formQueryDate(date.setDate(date.getDate() - 1)), formQueryDate(date))
          .then(res => {
            this.dataStorage.save(res.totalResults, 'amountThree');
          })
          .catch(err => console.log(err));
        this.dataStorage.save(date, 'dayThree');

        this.api.getNews(query, formQueryDate(date.setDate(date.getDate() - 1)), formQueryDate(date))
          .then(res => {
            this.dataStorage.save(res.totalResults, 'amountTwo');
          })
          .catch(err => console.log(err));
        this.dataStorage.save(date, 'dayTwo');
        
        this.api.getNews(query, formQueryDate(date.setDate(date.getDate() - 1)), formQueryDate(date))
          .then(res => {
            this.dataStorage.save(res.totalResults, 'amountOne');
          })
          .catch(err => console.log(err));
        this.dataStorage.save(date, 'dayOne');
      }
    }
    else if (event.type === 'click') {
      if (event.target.classList.contains('search-result__more-button') && !event.target.classList.contains('search-result__more-button_hidden')) {
        this.newsCardList.renderThree();
      }
    }

  }
}