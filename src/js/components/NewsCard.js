import formCardDate from '../utils/form-card-date.js';

export class NewsCard {
  constructor() {
  }
  
  create(article) {
    this.articleInfo = article;
    
    return `
    <a href="${this.articleInfo.url}" class="news-card link" target="_blank">
      <img src="${this.articleInfo.urlToImage}" alt="Изображение к новости" class="news-card__image">
      <div class="news-card__text-content">
        <p class="news-card__date">
          ${formCardDate(this.articleInfo.publishedAt)}
        </p>
        <h3 class="news-card__heading">
          ${this.articleInfo.title}
        </h3>
        <p class="news-card__text">
          ${this.articleInfo.description}
        </p>
        <p class="news-card__source">
          ${this.articleInfo.source.name}
        </p>
      </div>            
    </a>
    `;
  }
}