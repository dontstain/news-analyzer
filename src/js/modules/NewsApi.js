import {NEWS_API_KEY} from '../constants/news-api-key.js';
import getFromDate from '../utils/get-from-date.js';

export class NewsApi {
  constructor() {    
    this.apiKey = NEWS_API_KEY;
  }

  getNews(keyword) {
    this.query = keyword;
    this.url = 'https://newsapi.org/v2/everything?' +
    `q=${this.query}&` +
    `from=${getFromDate()}&` +
    'sortBy=popularity&' +
    'pageSize=100&' +
    `apiKey=${this.apiKey}`;
    this.req = new Request(this.url);

    return fetch(this.req)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
      .catch(err => console.log(err));
  }
}


