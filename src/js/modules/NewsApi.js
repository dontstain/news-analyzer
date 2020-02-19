export class NewsApi {
  constructor(apiKey) {    
    this.apiKey = apiKey;    
  }

  getNews(query, fromDate, toDate, inTitle) {
    const request = new Request('https://newsapi.org/v2/everything?' +
    `${inTitle ? `qInTitle` : `q`}=${query}&` +
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
      });
  }
}


