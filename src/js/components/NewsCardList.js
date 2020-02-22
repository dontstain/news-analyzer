export class NewsCardList {
  constructor(container, articles, cardClass) {
    this.container = container;
    this.articles = articles;
    this.articlesAmount = this.articles.length
    this.card = cardClass;
    this.counter = 0;
    this.renderNumber = 3;
    this.moreButton = document.querySelector('.search-result__more-button');
  }

  _addCard(articleObj) {
    const cardMarkup = this.card.create(articleObj);

    this.container.insertAdjacentHTML('beforeend', cardMarkup);
  }
  
  _determineButton() {
    if (this.counter < this.articlesAmount) {
      this.moreButton.classList.remove('search-result__more-button_hidden')
    } else {
      if (!this.moreButton.classList.contains('search-result__more-button_hidden')) {
        this.moreButton.classList.add ('search-result__more-button_hidden')
      }
    }
  }

  renderFew() {
    for (let i = 0; i < this.renderNumber; i++) {
      if (this.counter < this.articlesAmount) {
        this._addCard(this.articles[this.counter]);
        this.counter++;
      }
    }    
    this._determineButton();
  }
}