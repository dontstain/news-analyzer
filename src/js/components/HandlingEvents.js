import renderBlock from '../utils/render-block.js';
import {RESULT, CARDS, NO_RESULT, LOADING, ERROR} from '../constants/blocks.js';
import {NewsCard} from '../components/NewsCard.js';
import {NewsCardList} from '../components/NewsCardList';
import {DataStorage} from '../modules/DataStorage.js';
import formQueryDate from '../utils/form-query-date.js';

const newsCard = new NewsCard();
const dataStorage = new DataStorage();
let newsCardList;

export class HandlingEvents {
  constructor(api) {
    this.api = api;
    document.addEventListener('click', this);
    document.addEventListener('submit', this);
  }

  handleEvent(event) {
    if (event.type === 'submit') {
      let date = new Date();

      event.preventDefault();

      CARDS.innerHTML = '';
      if (event.target.classList.contains('search__form')) {
        const query = document.querySelector('.search__input').value;
        renderBlock(LOADING);
        this.api.getNews(query, formQueryDate(date.setDate(date.getDate() - 6)), formQueryDate(date.setDate(date.getDate() + 6)))
          .then(res => {
            if (res) {
              if (res.articles.length) {
                newsCardList = new NewsCardList(CARDS, res.articles, newsCard); 

                newsCardList.renderThree();
                renderBlock(RESULT);
                dataStorage.save(query, 'query');
                dataStorage.save(res, 'resObj');
              } else {
                renderBlock(NO_RESULT);
              }
            } else {
              renderBlock(ERROR);
            }
          });
        this.api.getTitleMentions(query, formQueryDate(date.setDate(date.getDate() - 6)), formQueryDate(date.setDate(date.getDate() + 6)))
          .then(res => {
            dataStorage.save(res.totalResults, 'mentions');
          });

        this.api.getNews(query, formQueryDate(date), formQueryDate(date))
          .then(res => {
            dataStorage.save(res.totalResults, 'amountSeven');
          });
        dataStorage.save(date, 'daySeven');

        this.api.getNews(query, formQueryDate(date.setDate(date.getDate() - 1)), formQueryDate(date))
          .then(res => {
            dataStorage.save(res.totalResults, 'amountSix');
          });
        dataStorage.save(date, 'daySix');

        this.api.getNews(query, formQueryDate(date.setDate(date.getDate() - 1)), formQueryDate(date))
          .then(res => {
            dataStorage.save(res.totalResults, 'amountFive');
          });
        dataStorage.save(date, 'dayFive');

        this.api.getNews(query, formQueryDate(date.setDate(date.getDate() - 1)), formQueryDate(date))
          .then(res => {
            dataStorage.save(res.totalResults, 'amountFour');
          });
        dataStorage.save(date, 'dayFour');

        this.api.getNews(query, formQueryDate(date.setDate(date.getDate() - 1)), formQueryDate(date))
          .then(res => {
            dataStorage.save(res.totalResults, 'amountThree');
          });
        dataStorage.save(date, 'dayThree');

        this.api.getNews(query, formQueryDate(date.setDate(date.getDate() - 1)), formQueryDate(date))
          .then(res => {
            dataStorage.save(res.totalResults, 'amountTwo');
          });
        dataStorage.save(date, 'dayTwo');
        
        this.api.getNews(query, formQueryDate(date.setDate(date.getDate() - 1)), formQueryDate(date))
          .then(res => {
            dataStorage.save(res.totalResults, 'amountOne');
          });
        dataStorage.save(date, 'dayOne');
      }
    }
    else if (event.type === 'click') {
      if (event.target.classList.contains('search-result__more-button') && !event.target.classList.contains('search-result__more-button_hidden')) {
        newsCardList.renderThree();
      }
    }

  }
}