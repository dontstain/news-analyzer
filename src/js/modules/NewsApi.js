import {NEWS_API_KEY} from '../constants/news-api-key.js';

export class NewsApi {
  constructor() {    
    this.apiKey = NEWS_API_KEY;    
  }

  getNews(query, fromDate, toDate) {
    const request = new Request('https://newsapi.org/v2/everything?' +
    `q=${query}&` +
    `from=${fromDate}&` +
    `to=${toDate}&` +
    'sortBy=popularity&' +
    'pageSize=100&' +
    `apiKey=${this.apiKey}`);

    return fetch(request)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
      .catch(err => console.log(err));
  }

  getTitleMentions(query, fromDate, toDate) {
    const request = new Request('https://newsapi.org/v2/everything?' +
    `qInTitle=${query}&` +
    `from=${fromDate}&` +
    `to=${toDate}&` +
    'sortBy=popularity&' +
    'pageSize=100&' +
    `apiKey=${this.apiKey}`);

    return fetch(request)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
      .catch(err => console.log(err));
  }
}


